// Cloudflare Pages Function — handles Ryan Rix newsletter signups
// Posts email to MailerLite (economics list). Mirrors the TBH subscribe
// function; the group differs via the MAILERLITE_GROUP_ID env var set in
// the Cloudflare Pages dashboard for this project.

export async function onRequest(context) {
  const { request, env } = context;

  // CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { email, name, src } = await request.json();

    // Attribute the signup to the channel that produced it. MailerLite RESERVES the
    // field name "source", so the custom field is "Msource" (Mike, 2026-09-22).
    // Overridable by env in case the dashboard field name is ever changed.
    // The API contract is "keys must correspond to custom field name" - the NAME, not a slug.
    const sourceField = env.MAILERLITE_SOURCE_FIELD || 'Msource';
    const cleanSrc = typeof src === 'string'
      ? src.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 32)
      : '';
    const fields = {};
    if (name) fields.name = name;
    if (cleanSrc) fields[sourceField] = cleanSrc;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Subscribe to MailerLite
    const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.MAILERLITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields,
        groups: env.MAILERLITE_GROUP_ID ? [env.MAILERLITE_GROUP_ID] : [],
      }),
    });

    const mlData = await mlResponse.json();

    if (!mlResponse.ok) {
      return new Response(JSON.stringify({ error: mlData.message || 'Subscription failed' }), {
        status: mlResponse.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'You are in! Check your inbox for your first economic idea.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
