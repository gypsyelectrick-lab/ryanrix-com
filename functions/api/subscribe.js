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
    const { email, name } = await request.json();

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
        fields: name ? { name } : {},
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
