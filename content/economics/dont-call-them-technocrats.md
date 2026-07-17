---
title: "Don't Call Them Technocrats"
menu: "Don't Call Them Technocrats"
date: 2026-07-15
author: "Anna Karina"
description: "The people writing tech policy don't understand tech. They are not experts. They are bureaucrats with a printing press."
weight: 10
tags: ["tech", "policy", "regulation", "censorship"]
level: "intermediate"
---

## The Word We Should Stop Using

**"Technocrat" sounds impressive. It suggests someone who combines technical expertise with political power — a scientist-king who actually understands what they are regulating. The people writing tech policy today are not technocrats. They are bureaucrats who have their assistants print out their emails.**

The distinction matters, because the word gives them a veneer of competence they have not earned. If we keep calling them technocrats, we keep pretending they know what they are doing. They do not.

---

## The EU's Censorship Machine

In February 2026, the US House Judiciary Committee published a report titled <a href="https://judiciary.house.gov/sites/evo-subsites/republicans-judiciary.house.gov/files/2026-02/THE-FOREIGN-CENSORSHIP-THREAT-PART-II-2-3-26.pdf" target="_blank" rel="noopener noreferrer">"The Foreign Censorship Threat, Part II: Europe's Decade-Long Campaign to Control American Speech"</a>. It is worth reading. The report documents how European Commission officials have spent years pressuring American social media platforms to censor content that violates European sensibilities.

Not illegal content. Content that European officials *disagree* with.

The report shows emails between European Commission staff and signatories of the EU's Code of Practice on Disinformation, urging platforms to censor American claims about COVID-19 vaccines. It documents demands that platforms remove posts that even question European policy. It shows a pattern of regulatory bodies in Brussels acting as a global speech police — without a democratic mandate, without judicial oversight, and without any demonstrated expertise in the platforms they are regulating.

This is what passes for "technocratic governance" in Europe. Bureaucrats who have never built a platform, never managed a content moderation system at scale, never dealt with the engineering tradeoffs involved in automated content detection, telling engineers how to do their jobs.

{{< quote author="House Judiciary Committee Report, February 2026" >}}
"European Commission regulators urged TikTok to censor U.S. claims about COVID-19 vaccines."
{{< /quote >}}

---

## The Impossible Standard

The same pattern is playing out in AI regulation. In June 2026, <a href="https://www.wired.com/story/the-white-house-wants-anthropic-to-block-all-jailbreaks-that-may-not-be-possible/" target="_blank" rel="noopener noreferrer">WIRED reported</a> that White House officials told Anthropic they would only allow the release of their AI models if Anthropic could guarantee that its "guardrails could not be circumvented across all its frontier models."

Read that sentence again. They demanded a guarantee that a software system could not be circumvented. By anyone. Ever. Under any circumstances.

This is not regulation. It is a fantasy. Every software system that has ever existed has been circumvented. The entire field of information security exists because it is impossible to build uncircumventable systems. The question is never whether a system can be broken. It is whether the cost of breaking it exceeds the benefit.

Demanding an impossible standard is not expertise. It is a bureaucratic tactic. You set a bar that cannot be met, then claim the industry has failed to meet it. Then you impose whatever restrictions you wanted in the first place.

A genuine technocrat would understand the technical reality and craft policy around it. A bureaucrat who has their secretary print out their emails demands the impossible and calls it accountability.

---

## The Pattern

This is not an isolated incident. The pattern repeats across every domain where tech policy is being written:

**On encryption.** Regulators demand "backdoors" that only the good guys can use. Every cryptographer knows this is impossible — a backdoor is a vulnerability, and vulnerabilities are exploited by everyone, not just the good guys. But the regulators do not understand this, so they keep proposing it.

**On algorithmic transparency.** Regulators demand that platforms disclose exactly how their recommendation algorithms work. But algorithms are the product. Demanding full disclosure is like demanding that Coca-Cola publish its recipe. It would destroy the competitive advantage that made the platform valuable in the first place. A genuine technocrat would understand this tradeoff. A bureaucrat sees a black box and demands to look inside, without understanding what they are asking.

**On data localization.** Regulators demand that companies store data within national borders, ostensibly for privacy reasons. In practice, data localization laws make it harder for small companies to compete, easier for surveillance states to monitor citizens, and nearly impossible for global services to function efficiently. The regulators who propose these laws do not understand distributed systems, latency, or the economics of data transit.

**On AI safety.** Regulators demand "explainability" for AI decisions. This sounds reasonable until you understand that the most powerful AI systems are neural networks — which are inherently uninterpretable. You can demand explanations, but you cannot get them. Not because companies are hiding something, but because the technology does not work that way. A genuine technocrat would regulate based on outcomes (does the system produce harmful results?) rather than demanding impossible forms of transparency.

{{< quote author="Thomas Sowell" >}}
"It is hard to imagine a more stupid or more dangerous way of making decisions than by putting those decisions in the hands of people who pay no price for being wrong."
{{< /quote >}}

---

## The EU AI Act and the Innovation Gap

The European Union's <a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener noreferrer">AI Act</a> is a case study in this kind of regulation. It is hundreds of pages long, filled with categories and requirements and compliance obligations. It was written by people who consulted with academics and activists and large technology companies. It was not written by people who build things.

The predictable result is that the AI Act imposes massive compliance costs on any company that wants to operate in Europe. Large companies — Google, Meta, Microsoft — have the legal teams to handle this. Small companies and open source projects do not.

If you are a startup building an AI product, you have two choices: comply with the AI Act and spend most of your early funding on legal fees, or stay out of the European market entirely. Either way, European consumers lose access to innovation.

The EU calls this "protecting citizens." What it actually does is entrench incumbents, suppress competition, and ensure that the next generation of AI companies starts in America or Asia rather than Europe.

A genuine technocrat would understand that regulation is a barrier to entry and design it accordingly. A bureaucrat who has never built anything treats compliance as a checkbox exercise, indifferent to who it harms.

---

## The Speed Problem

There is another dimension to this that rarely gets discussed. Technology moves fast. Regulation moves slowly.

The EU's <a href="https://digital-strategy.ec.europa.eu/en/policies/digital-services-act" target="_blank" rel="noopener noreferrer">Digital Services Act</a> took years to draft, years to pass, and years to implement. By the time it took full effect, the platform landscape had completely changed. TikTok had surpassed Facebook in engagement. AI-generated content had become indistinguishable from human-created content. Decentralized platforms like Mastodon and Bluesky had emerged as alternatives to the centralized systems the DSA was designed to regulate.

The DSA was written for a world that no longer exists. And that is the best-case scenario for tech regulation. The worst case is that regulation written for one generation of technology is enforced on a completely different generation, with unintended consequences nobody anticipated.

The people writing these laws do not understand this problem. They do not move fast. They do not build things. They do not ship software. They write memos. They convene committees. They hold consultations. And by the time they are done, the world has moved on.

---

## How to Spot a Fake Technocrat

There is a simple test. Ask yourself this question about any regulator or policymaker who claims to understand technology:

**Have they ever built anything that had to work for real users?**

Not a PowerPoint presentation. Not a white paper. Not a committee recommendation. An actual product or service that real people used, that had to be debugged and maintained and iterated on in response to market feedback.

The answer, for almost all of them, is no. They have spent their entire careers in government, academia, or journalism. They have never faced a production outage at 3 AM. They have never had to choose between shipping a feature and fixing a bug. They have never had to explain to users why something they relied on stopped working.

This does not mean they are stupid. It means they lack the specific kind of knowledge that comes only from building things. And that lack of knowledge is dangerous because they do not recognize it themselves.

{{< quote author="F. A. Hayek" >}}
"The knowledge of the circumstances of which we must make use never exists in concentrated or integrated form, but solely as the dispersed bits of incomplete and frequently contradictory knowledge which all the separate individuals possess."
{{< /quote >}}

---

## What Real Tech Policy Would Look Like

A serious approach to tech regulation would follow three principles:

1. **Outcome-based, not process-based.** Regulate what happens, not how it happens. If a platform produces harmful outcomes, address those outcomes. Do not demand specific technical implementations that engineers will have to work around.

2. **Grandfather existing operations.** Regulation should apply to new entrants and new products, not retroactively break things people already rely on. This gives regulated entities time to adapt and prevents the kind of chaos that happens when a platform suddenly has to change how it works.

3. **Sunset clauses.** Every tech regulation should have an automatic expiration date. If the law needs to continue, the burden should be on regulators to prove it is still necessary and still working. Technology changes too fast for permanent rules.

These principles would not produce perfect regulation. But they would produce regulation that does less harm — and that is the best we can hope for when the people writing the rules have no idea what they are regulating.

---

*Next: [Coming soon — The Cost of Pretending We Know What We're Doing →]()*
