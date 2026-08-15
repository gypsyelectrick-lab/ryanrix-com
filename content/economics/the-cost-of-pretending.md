---
topic: "Regulation"
title: "The Cost of Pretending We Know What We're Doing"
menu: "Cost of Pretending"
date: 2026-08-04
author: "Anna Karina"
description: "Regulators who cannot meet their own deadlines are setting everyone else's."
draft: false
weight: 34
tags: ["economics", "regulation", "ai-act", "information-problem", "hayek", "advanced"]
level: "advanced"
---

## The Promise We Made

Three weeks ago, <a href="/economics/dont-call-them-technocrats/" target="_blank" rel="noopener noreferrer">"Don't Call Them Technocrats"</a> ended with a promise. The final line pointed to this article. The link behind it was empty, a placeholder that said a sequel was coming.

It took three weeks for that sequel to arrive. The delay was not a conspiracy. It was scheduling, priorities, and the ordinary friction of a small operation getting things done. In that sense, the gap itself was a miniature version of the argument this article makes. When the people setting a deadline do not control the work that deadline depends on, the deadline slips.

Regulators miss deadlines too. The difference is who pays the cost. When a blog post is late, nobody notices. When a regulator's timeline slips, the industry it regulates is already building to that timeline. The cost does not disappear. It lands on someone else.

Let us begin with the generous reading of what regulators are trying to do, because it is true and it matters. The people who wrote the <a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener noreferrer">EU AI Act</a> want artificial intelligence to be safe. The people who wrote the <a href="https://www.legislation.gov.uk/ukpga/2023/50" target="_blank" rel="noopener noreferrer">UK Online Safety Act</a> want children protected from online harm. The people pushing age verification want the same thing. These are good intentions. They are not the problem.

The problem is that good intentions do not confer knowledge. And the knowledge required to regulate a complex technical system is not available to the people writing the rules. That is not an insult. It is a fact about how knowledge is distributed in the world.

## The Information Problem

Friedrich Hayek gave us the language for this in 1945, in his essay <a href="https://www.econlib.org/library/Essays/hykKnw1.html" target="_blank" rel="noopener noreferrer">"The Use of Knowledge in Society"</a>. His subject was central planning, but the insight generalizes far beyond it. We covered this on the site in <a href="/economics/the-information-problem/" target="_blank" rel="noopener noreferrer">The Information Problem</a>, and it is worth restating here because it is the spine of everything that follows.

Hayek's point: the knowledge needed to run a complex system never exists in one place. It is dispersed across the people who build, operate, and use the system. The plumber who has spent twenty years in one district knows which pipes fail in winter. The engineer who maintains a system knows which failure modes are theoretical and which are commonplace. The teenager who has grown up with a platform knows how it is actually used. None of this knowledge is written down in a form a committee can read. It cannot be aggregated. It cannot be centralized.

A regulator does not have access to this knowledge. A regulator has access to the knowledge that can be gathered into documents: the testimony, the studies, the lobbying, the briefings. All of that is real, and some of it is useful. But it is not the dispersed knowledge of the system. It is a summary of a summary, filtered through people with their own incentives to emphasize and omit.

This is not a failure of individual regulators. It is a structural fact. A committee cannot know what no single person knows, and no amount of consultation will put the dispersed knowledge of a technical system into a committee room. The committee can only do what committees do: write rules based on the knowledge it has, and treat the missing knowledge as if it did not exist.

The cost of pretending otherwise is the subject of this article. Three cases from the last month show the pattern clearly.

## The EU AI Act: Deadlines That Regulate Everyone Else

On August 2, 2026, the first enforcement wave of the EU AI Act went live. Chatbots in Europe must now disclose that they are chatbots. AI-generated content must be labeled. And the EU AI Office gained real enforcement powers over general-purpose AI models, with <a href="https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august" target="_blank" rel="noopener noreferrer">fines up to 3 percent of global turnover</a>.

These are significant obligations, and they are now binding on companies that had to build to a schedule set in Brussels. The schedule was set years ago, and the companies did what companies do: they hired lawyers, they built compliance teams, they shipped systems designed around the deadline. The deadline was the one fixed point in their planning.

Here is the part worth sitting with. The European Commission missed its own implementation deadline. The Commission is the institution that chose the date, set the milestones, and controlled the calendar. Its own work was not ready in time. And the toughest obligations under the Act - the high-risk AI requirements that will shape how systems are actually built - were <a href="https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force" target="_blank" rel="noopener noreferrer">pushed to December 2027</a>.

Read that again. The regulator could not meet its own deadline, so it moved the deadline. Industry did not get the same option. The obligations that were ready on August 2 applied to industry on August 2. The obligations that were not ready were simply rescheduled.

Regulators who cannot schedule themselves are scheduling everyone else. That is the thesis of this article, and the AI Act demonstrates it in a single move. The knowledge problem does not produce malice here. It produces a committee that could not know what the schedule required, so it changed the schedule. The industry, which had to know, absorbed the cost.

## The Online Safety Act: The Backdoor That Does Not Exist

The UK Online Safety Act has been through multiple consultations, and the current drafts require platforms to scan encrypted communications for illegal content. Not to decrypt them in the abstract. To detect illegal material inside encrypted messages, as a compliance requirement.

Cryptographers have been saying for years what this means in practice: a capability to read the content of encrypted messages that only the "good guys" can use. The problem is that this capability does not exist. It cannot exist. A backdoor that only the good guys can use is a contradiction in terms. Once a method exists to read encrypted traffic, that method is a vulnerability. Vulnerabilities are found and exploited by everyone, not only by the parties who were supposed to benefit.

This is not a matter of effort or budget. It is a matter of mathematics. You cannot build a lock that opens for the police but not for the burglar, because the burglar will simply use the police's key. The demand for a "safe backdoor" is the demand for a machine that violates its own specifications.

A regulator with technical knowledge would know this. A regulator with the dispersed knowledge of the system would have cryptographers and engineers in the room who could say, plainly, what is possible and what is not. Instead, the requirement is written as if the impossible were merely expensive. The industry then faces a choice: refuse to comply and be branded reckless, or attempt the impossible and fail. The regulatory framework is set up so that failure is the predicted outcome.

The irony is that the stated good-faith goal - protecting children - is real. But a requirement that cannot be met does not protect children. It generates compliance theater, legal fees, and a public record of the industry "failing" to do something that was never possible. The child protection goal is not served by demanding the impossible. It is served by knowing what the technology can and cannot do, and regulating what actually happens.

## Meta's Bone Scanner: The Impossible as Compliance

The third case is the most visible because it involves a consumer product. Regulators have spent years pressuring platforms to verify the ages of their users. The stated goal is again good: keep children off services designed for adults, and keep adults out of children's spaces. Al Gore liked to call the internet a "superhighway". Good parents don't let their children play, unsupervised, on a "highway"

Meta responded this month by <a href="https://wccftech.com/lying-about-your-birth-year-might-not-cut-it-anymore-as-meta-is-using-ai-powered-age-detection-to-catch-underage-users-and-move-them-into-teen-accounts/" target="_blank" rel="noopener noreferrer">deploying AI-based age detection that estimates a user's age from facial analysis and, reportedly, from indicators that reach toward bone structure</a>. A scan of the face - and, in the reported versions, analysis of skeletal development - to determine whether someone is old enough to use the service.

Put aside, for a moment, the enormous privacy question of a private company analyzing your bone structure to decide your rights. The technical question is sufficient on its own. Age estimation from appearance is not age verification. It is a probability with a wide error band. A 14-year-old who looks 19 will be treated as an adult. A 21-year-old who looks 15 will be locked out. The system will be wrong in both directions, and the people who pay for those errors are the users.

The regulators demanding this did not demand a specific technology. They demanded an outcome: certainty about age. Certainty is the impossible part. There is no measurement of a human that yields certainty about age from appearance, because appearance is not determined by age alone. The demand for certainty transfers the impossible requirement onto the platform, which transfers it onto the user, who is scanned and classified and told the result is their identity.

This is the same structure as the backdoor. A regulator doesn't know what the technology can do, so the requirement is written as if certainty were available. The company builds the best approximation it can. The approximation is wrong for real people. And the regulatory framework is satisfied, because the requirement was met in form even where it failed in substance.

## Why They Do Not Do the Simple Thing

All three cases have a simple alternative. For the AI Act: set deadlines the Commission can meet, and admit the original schedule was aspirational. For the Online Safety Act: regulate what platforms demonstrably can do, and stop demanding what cryptography forbids. For age verification: require honest age estimation with clear error disclosure, not certainty that does not exist.

Why do regulators not do the simple thing? The answer is not stupidity. It is the incentive structure, and we have written about this in <a href="/economics/public-choice-theory/" target="_blank" rel="noopener noreferrer">Public Choice Theory</a>. Regulators face a set of pressures that have nothing to do with the technical problem they are regulating.

First, regulators must be seen to act. The political demand is for action, not for accuracy. A regulator who says "we do not know enough to regulate this yet" has done the honest thing and will be punished for it in their career and the news cycle. A regulator who writes a rule - any rule - has demonstrated seriousness. The rule's technical quality is judged later, by people who are not watching now.

Second, deadlines are political, not technical. A date is chosen because it sounds decisive, or because it fits an electoral calendar, or because the negotiation needed an endpoint. The technical question - can this be built by then? - is not asked, because the people setting the date are not the people who would have to build it. This is why the Commission's own deadline slipped while industry's did not. The Commission was setting its own homework schedule and still could not meet it.

Third, admitting you cannot know is not an option in a committee. A committee is a group of people who each have reputations, careers, and positions. The person who says "the requirement we are writing is technically impossible" is the person who delays the bill, inconveniences the process, and gets labeled as obstructionist. The person who stays quiet is the person who advances. So the impossible requirement gets written, and everyone privately hopes the problem will be someone else's, later.

The result is what we call <a href="/economics/the-regulation-tax/" target="_blank" rel="noopener noreferrer">the regulation tax</a>. Every impossible requirement becomes a cost that someone must pay. Compliance teams grow. Legal fees grow. Products are delayed. Small companies, which cannot spread the cost, are hit hardest. The regulation that was supposed to protect people becomes a tax on the people who are trying to build things.

And the original problem - the <a href="/economics/externalities-when-price-is-wrong/" target="_blank" rel="noopener noreferrer">externality that regulation was meant to correct</a> - is not solved. The child is no safer because a platform scanned a bone structure. The encrypted message is no more detectable because a law says it must be. The AI is no more transparent because a chatbot says it is a chatbot. The form was satisfied. The substance was not.

## The Lens

None of this requires believing that regulators are villains. It requires noticing something more unsettling: they are doing their best with knowledge they do not have, and the system they work in punishes them for saying so.

The cost of pretending we know what we are doing is not paid by the people doing the pretending. It is paid by the industry that must build to impossible requirements, by the small companies that cannot afford the tax, by the teenagers misclassified by systems that cannot know their age, and by the public, which is told that regulation is protecting them when the regulation cannot do what it claims.

Next time you hear about a new tech regulation, ask: who wrote the technical assumptions? If the answer is congressional staffers - or the Commission's own timeline - the regulation is wrong, not from bad intentions but from impossible knowledge requirements.
