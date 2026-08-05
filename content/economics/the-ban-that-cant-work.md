---
title: "The Ban That Can't Work - The Last Grievance Without a Deep-Dive"
menu: "The Ban That Can't Work"
date: 2026-08-05
author: "Anna Karina"
description: "Australia's under-16 ban removed accounts, not users. The teens never left."
draft: false
weight: 38
tags: ["economics", "regulation", "social media", "advanced"]
level: "advanced"
image: /images/the-ban-that-cant-work.png
---

When we built the <a href="/economics/the-grievance-machine/" target="_blank" rel="noopener noreferrer">Grievance Machine</a> in July, we listed six grievances, and every one of them demanded the same solution: more government power. Five already had verdicts. Inequality, relative poverty, greedflation, free university, and climate taxes had all been tried somewhere, and the results were recorded.

The sixth row was different. The internet ban was too new to evaluate. We wrote that in the table and moved on.

Eight months later, it is no longer too new. The verdict is in, and it is the same verdict as every other row. The ban removed accounts, not users. The users are still there.

## The Theory, Fairly Stated

Let us state the case for the ban properly, because it is not a stupid case, and the people who made it are not fools.

Australia's ban on social media for under-16s, in force since December, is the first national experiment of its kind. The theory is simple. Platforms are engineered to capture attention, and children are more vulnerable to that engineering than adults. Parents are outmatched by recommendation systems built by the best attention engineers on earth. The state, therefore, should remove the choice entirely. A child under 16 should not have an account, full stop.

If the premise holds - that platforms cannot be made safe and parents cannot win - the ban is the logical conclusion. The concern behind it is real. The parents who wanted this law were not being hysterical. They were being outgunned, and they asked the state for help. The <a href="/economics/the-cracked-screen/" target="_blank" rel="noopener noreferrer">evidence base is weaker than the confidence behind it</a>, as we covered in The Cracked Screen, but the intention is sincere.

Even so, the facilities - change the DNS provider for a start - are already available for anyone who wants to find them. Mostly they are free and easily implemented. To get started, look at <a href="https://www.opendns.com/home-internet-security" target="_blank" rel="noopener noreferrer">OpenDNS</a>.

The problem is not the intention. The problem is the mechanism. The ban requires the state to know something it has no way of knowing: who is a child?

## What Happened

Here is what eight months produced.

In the first weeks, the platforms deleted roughly five million accounts, and the government presented this as proof the law was working. The <a href="https://www.nytimes.com/2026/01/15/world/australia/social-media-ban-australia.html" target="_blank" rel="noopener noreferrer">New York Times reported that nearly five million accounts had been deactivated or removed within a month</a> of the law taking effect.

Then the regulator measured what actually happened. The <a href="https://www.abc.net.au/news/2026-07-31/most-australian-teens-still-on-social-media-after-ban/106983414" target="_blank" rel="noopener noreferrer">eSafety evaluation found that more than eight in ten Australian teens were still using the banned platforms</a> three months after the ban began. Usage fell from about 86 percent before the ban to about 81 percent after. Account ownership fell from about half of teens to 42 percent. <a href="https://techxplore.com/news/2026-07-kids-social-media-esafety.html" target="_blank" rel="noopener noreferrer">Offline activity barely changed, and parental awareness of their children's use actually declined</a>.

Five million accounts deleted. Usage barely moved. The ban removed accounts, not users.

The enforcement gap is not subtle. <a href="https://tech.slashdot.org/story/26/07/31/2024233/most-australian-teens-still-on-social-media-three-months-after-ban" target="_blank" rel="noopener noreferrer">Just over half of the teens surveyed said no platform had ever asked them to confirm their age</a>. Of those who were asked, many simply stated they were 16 or older and were let through. Even by late March, <a href="https://www.theguardian.com/australia-news/2026/mar/31/meta-tiktok-snapchat-google-under-investigation-australia-social-media-ban" target="_blank" rel="noopener noreferrer">two-thirds of under-16s with accounts on Instagram, Snapchat, or TikTok still had access</a>.

## The Information Problem

Why did this happen? Because enforcing the ban requires identity verification at population scale, and the data shows the platforms do not even attempt it.

This is the information problem wearing a new costume. We covered the original in <a href="/economics/the-information-problem/" target="_blank" rel="noopener noreferrer">The Information Problem</a>: a central planner cannot know what millions of individuals know, because that knowledge is dispersed and cannot be collected. A child's age is the purest example. The state can order the platform to verify age. The order does not create the knowledge.

Consider what verification would require. The platform has exactly three ways to learn a user's age, and all three fail.

Ask the user. The user is a teenager with a strong incentive to lie, and the teenager knows the answer cannot be checked. Half of the platforms do not even ask. The ones that do accept the answer.

Require documents. This turns every platform into a checkpoint for government-issued identity, and it turns the entire population - including every adult - into a subject of age verification. It is not a verification system. It is a surveillance system, and it will be gamed with fake documents the day after it launches.

Infer it from behavior. Age-estimation technology is improving, but it is probabilistic, invasive, and wrong in both directions. It will block some 17-year-olds and wave through some 13-year-olds, and it will do so without any user consent.

Any verifiable proof of age is either fakeable or a surveillance system. There is no third option. That is not a design flaw. It is an information constraint, and no fine changes it.

## The Incentive Structure

The ban also faces an incentive structure that points in exactly the wrong direction for everyone involved.

The teens face zero cost for circumvention. A birth year is a dropdown. A parent's account is a password away. The ban made the apps forbidden fruit, and forbidden fruit does not need advertising. When the cost of evading a law is zero and the reward is access to the same social life as everyone else, the law is not enforced. It is selected against.

The platforms face a fine-avoidance calculus. Real enforcement means verifying the identity of every user in the country: expensive, invasive, and bad for business. The fine, by contrast, is a known number. If the fine is cheaper than the compliance, the rational platform pays the fine. So they delete the accounts they can identify and ask no questions of the rest.

The government faces the one response that every row of the grievance machine predicts. When the ban failed, Canberra did not ask whether the mechanism could work. It <a href="https://etude.lu/article/australia-under-16-social-media-ban-fines-2026" target="_blank" rel="noopener noreferrer">doubled the maximum fines in June, from 49.5 million to 99 million Australian dollars</a>. The fine went up because the ban failed. The signature move is unchanged: we did not go far enough.

And the failure is being imported. A <a href="https://www.theguardian.com/media/2026/may/28/uk-social-media-crackdown-british-minister-visits-australia" target="_blank" rel="noopener noreferrer">British minister spent a week in Australia collecting "lessons"</a> ahead of an expected UK crackdown, and <a href="https://www.theguardian.com/news/ng-interactive/2026/jun/27/social-media-bans-go-global-big-tech-reckoning-australia-crackdown" target="_blank" rel="noopener noreferrer">social media bans are going global</a>. The usual sequence: one country tries a policy, the policy fails, and the next countries announce they will copy it, because the pressure to be seen doing something outweighs the evidence about what works.

The <a href="https://www.aljazeera.com/news/2026/8/3/australias-under-16-social-media-ban-failing-study-shows-what-it-means" target="_blank" rel="noopener noreferrer">Al Jazeera headline from August 3 says it plainly: the under-16 ban is failing</a>. The <a href="https://malaysia.news.yahoo.com/australia-defends-teen-social-media-020524716.html" target="_blank" rel="noopener noreferrer">government's defense, reported by Reuters</a>, is that the ban changed the conversation and that nobody expected full compliance. Both claims may be true. Neither changes the number that matters: eight in ten.

## The Last Grievance, Verdict In

Eight months ago, this row of the table said "too new to evaluate." It no longer says that.

The catalog is now complete. Inequality: wealth taxes tried and abandoned. Relative poverty: a metric that cannot improve by definition. Greedflation: price controls tried, shortages followed. Free university: credential inflation, which we documented in <a href="/economics/the-credential-con/" target="_blank" rel="noopener noreferrer">The Credential Con</a>. Climate taxes: tried in France, abandoned after the Gilets Jaunes. And now the ban: five million accounts deleted, usage barely moved, eight in ten teens still on the apps.

The pattern is the same in every row, and the response is the same in every row. The failure is never evidence against the policy. It is evidence that the policy was not big enough.

Next time someone promises to protect the children with a ban, ask one question first: how will the state know who is a child?

The parent knows. The child knows. The state does not, and it cannot - not without accepting the teenager's word or building the machinery to verify everyone. The parent already has the most powerful tool available: they can take the phone away. Markets let millions of families make that choice differently, which is why <a href="/economics/the-free-market-is-more-democratic/" target="_blank" rel="noopener noreferrer">the free market is more democratic</a> than any one-size-fits-all decree.

The ban removed accounts, not users, because it could not see the users. Before you accept the next ban, ask whether the last one worked. The answer is eight in ten.
