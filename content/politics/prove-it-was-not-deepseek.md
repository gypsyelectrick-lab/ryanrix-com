---
topic: "Regulation"
title: "Prove It Was Not DeepSeek"
seo_title: "DeepSeek Ban: The Impossible Paperwork"
menu: "Prove It Was Not DeepSeek"
date: 2026-10-20
author: "Max Weber"
description: "The order bans a model. Compliance requires proving what your software was built from."
draft: false
weight: 65
tags: ["politics", "regulation", "ai", "procurement", "deepseek"]
image: /images/prove-it-was-not-deepseek-hero.png
levels: "advanced"
---

**On 20 October the Department of Homeland Security published an order requiring every federal civilian agency to remove DeepSeek from its systems, and to remove any third-party product or service "developed using DeepSeek implementations". Both requirements took effect immediately.**

There is something odd about that second clause. It does not ban a company. It does not ban a file. It asks an agency to know what the software it already owns was built from.

The order gives agencies sixty days to apply for an exemption. The application requires a compelling justification and proposed mitigations. There is no stated requirement to prove anything, which is fortunate, because the proof likely does not exist.

---

## What the order actually does

The document is Federal Register 2026-21447, docket DHS-2026-0628, issued under the Federal Acquisition Supply Chain Security Act of 2018 following a recommendation from the Federal Acquisition Security Council. It is a notice of an order by the Secretary of Homeland Security, and it does two things.

**First, exclusion.** DeepSeek, its affiliates, and their products are excluded from civilian agency procurements, effective immediately, including approved-product lists, service provider equipment lists and government e-commerce markets. The affiliate definition is the control-based one from the Federal Acquisition Regulation: one controls the other, or a third party controls both.

**Second, removal.** Products provided by DeepSeek and its affiliates are to be removed from civilian agency IT systems immediately. So are "third-party products and services developed using DeepSeek implementations".

The scope is civilian agencies. Defense and the intelligence community sit under the separate authority of the Secretary of Defense and the Director of National Intelligence, which the order notes and leaves alone.

The stated reasons are specific and mostly not about capability. Chinese law gives government security services extensive access to private company infrastructure. DeepSeek's account process collects personally identifiable information and may fingerprint users. Its applications work by prompt and response, so any sensitive material typed into them travels. The models may contain malware or vulnerabilities, and open-source research published in February 2025 found multiple critical flaws in the iOS application.

None of that is unreasonable. If you run a government department, you do not want staff pasting case files into a service whose operator answers to a foreign intelligence service. But the question is not whether the risk is real. It is whether the remedy can be executed by the people told to execute it.

## The part that cannot be done

Age verification and the DeepSeek order are the same demand wearing different clothes. Both ask a regulated party to establish a fact that the regulator cannot check and the technology cannot measure. The site has made this argument before, about deadlines and decryption and the estimation of age from a face, in <a href="/economics/the-cost-of-pretending/" target="_blank" rel="noopener noreferrer">The Cost of Pretending</a>. The same file also records what happened when Australia tried to remove under-sixteen accounts, in <a href="/economics/the-ban-that-cant-work/" target="_blank" rel="noopener noreferrer">The Ban That Can't Work</a>: the accounts went, the users did not.

This case is worse than either, because the fact being demanded is about history, not appearance.

**A model has no birth certificate.** DeepSeek's weights are downloadable. Once they are on a disk, they can be copied, quantized, merged, fine-tuned, embedded in a larger system and shipped inside somebody's product. Nothing in the resulting artefact records what it came from. There is no watermark that survives training, no serial number in a matrix of numbers, no header field that says "derived from DeepSeek-V4".

**Fine-tuning destroys the distinction the order relies on.** A model trained further on a company's own data is not the base model, and it is not a different model either. It is a continuation. Ask a vendor whether their product was "developed using DeepSeek implementations" and the answer, in a large number of cases, is that they do not know: their model came from a base checkpoint, which came from a merge, which came from a Hugging Face repository whose provenance was a file name. The phrase assumes a chain of custody the industry does not keep.

**The clause also has no test attached.** "Developed using" is a phrase with no measurement behind it. Whose burden is it to demonstrate the negative? What evidence would satisfy a regulator? A vendor's written assurance is the only artefact that can be produced, which means the compliance question collapses into whether you believe the vendor. That is not a security control. It is a signed promise.

**And the thing being declared got wider on the day the order was published.** DeepSeek put its production inference framework on GitHub on 20 October, under the Apache License: the software that serves DeepSeek-V4.1-Flash at scale, built on vLLM and DeepSeek's own kernel libraries, for Nvidia's SM100 and Huawei's Ascend 950. Apache-licensed software exists to be forked and shipped inside other people's products. So an agency asking a vendor what a product was built from now has one more answer to weigh, because a product running that framework is running a DeepSeek implementation whether or not the model inside it is one. The order's hardest clause was widened by its subject, on the same day, for free, and nothing in the document anticipates it.

**And it applies to what is already installed.** Procurement exclusions are easy: you stop buying. Removal is retrospective, which turns an IT department into an investigator. To comply, an agency has to inventory every system, ask every supplier what their model was built from, and accept the answer. Most large organizations cannot produce an accurate list of their own software, let alone its ancestry. Governments spent the last decade discovering this about their own estates: the <a href="/politics/why-things-break-birmingham-oracle/" target="_blank" rel="noopener noreferrer">Birmingham and Oracle failures</a> on this site were both, at bottom, failures to know what was being run.

While agencies remove things, the order asks them to watch. It encourages monitoring the flow of traffic in and out of the agency, enhanced logging, controls on data exfiltration for the relevant systems, and the detection and flagging of anomalous activity. That is sensible advice. It is also the only part of the order that describes something an agency can do immediately and measure afterwards, which tells you where the actual capability sits.

## What compliance will actually look like

Nothing in the order says how to demonstrate removal, which is the gap everything else flows through. The exception process is more specific, and reading it shows what the government thinks compliance looks like. A request must be in writing within sixty days and must contain five things: which order applies; what exception is sought and which provisions it covers; a description sufficient to identify the product or service; a compelling justification, such as the effect on mission-critical functions; and any alternative mitigations proposed.

Notice what is absent from that list. There is no requirement to demonstrate what a product was actually built from, no requirement of a technical audit, and no standard against which a claim would be tested. The evidence being requested is a description and a justification. An agency that cannot tell DeepSeek from a fine-tune of DeepSeek is not disadvantaged by that process at all, because the process does not ask.

So agencies and vendors will invent a procedure, and the procedure will look like this: a questionnaire to suppliers, a signed attestation back, a field in the contract file, a line in the risk register.

It will produce three effects, none of them the stated one.

**The first is consolidation.** A large vendor can answer the questionnaire. It has a legal team, a compliance function and a supplier management system. A small vendor cannot, and its product gets dropped from consideration because it could not fill in a form. The order is aimed at a Chinese model; the commercial cost lands on small Western software firms who cannot afford the paperwork. That is not a prediction about intent. It is what happens when compliance is measured in documents.

**The second is that the excluded model does not disappear.** Open weights cannot be recalled. If an engineer in an agency wants to run a DeepSeek model on a laptop, an order from the Secretary of Homeland Security is not the constraint. The constraint is whether the model is on an approved system. So the order governs the procurement record, and the record is what gets audited.

**The third is that nobody can tell compliance from a promise.** Two agencies submit their sixty-day exception requests, or report themselves compliant. One has genuinely removed everything and one has a stack of supplier letters saying the right words. From outside, they look identical. The regulator has no instrument that distinguishes them, because the fact in question, what a model was trained from, lives with the vendor and nowhere else.

## The age verification parallel

It is worth being exact about why these cases rhyme, because the difference matters.

With age verification, the impossible thing was certainty about a person's age from appearance. The regulator demanded an outcome, platforms responded with a probability, and the probability is wrong in both directions: a tall fourteen-year-old is treated as an adult, a young-looking twenty-one-year-old is locked out. The burden of that error falls on the user, who is scanned and classified. And the people who most want to avoid the check have a route around it, which is why the traffic moves rather than stops.

With the DeepSeek order, the impossible thing is certainty about a model's ancestry. The difference is that the person who bears the cost is not the user in the street. It is the procurement officer, the small software vendor and the IT department that has to sign something it cannot verify.

In both cases the regulator has substituted a document for a fact. And in both cases the document becomes the thing that is actually regulated, because it is the only thing that can be inspected.

## What the order does not require

For contrast, look at what the router ban actually specified. The Covered List names products and companies. A buyer can check a model name against a list and get an answer, and the answer is the same for everyone. It is crude, it is slow, and it has real limits, but it is **falsifiable**: you can be shown to be wrong.

The DeepSeek order specifies no equivalent. It names no technical standard, no audit regime, no reporting format, no hash, no version, no test that a third party could run and sign. It names a vendor and a relationship ("developed using") and leaves the method to the regulated party.

That is the design flaw, and it is not a drafting slip. A test for model lineage would require the government to define, in regulation, what counts as derivation: how much fine-tuning, on how much data, with what architectural change. Those thresholds do not exist in any technical standard today, and any threshold chosen would be arguable, gameable and immediately obsolete. Rather than attempt that, the order leaves the question open and passes it down. The open question becomes the supplier's problem, then the procurement officer's, then a line in a file.

## What a workable version would look like

The order is not stupid. The risk is real, and something should be done about it. The failure is in the instrument, and there are three instruments that would work where this one does not.

**Name products, not lineages.** A contract can specify a vendor, a version, a binary and a hash. It cannot specify a training corpus. If the concern is that agency staff will paste sensitive material into a Chinese-hosted service, the rule that works is a rule about which services are reachable from agency networks, enforced at the network boundary. That is measurable, testable, and it does not require anybody to reconstruct the pedigree of a checkpoint.

**Apply prospectively, not retrospectively.** An exclusion on new procurements is enforceable, because the buyer controls the choice at the point of purchase. A removal order on installed systems is a demand for an inventory that does not exist, and it will be satisfied on paper instead of being satisfied in fact.

**Publish the exception decisions.** Sixty days from 20 October is the middle of December. CISA will receive requests, and will approve or disapprove them in writing. Whether those decisions are published determines whether this becomes a rule with a record or a set of private arrangements. That is the difference between a policy and a favor.

## What to watch

1. **The exception requests, due around 19 December.** How many agencies ask, and for what. A rush of requests is an admission that the order could not be complied with as written.
2. **Whether CISA publishes its decisions.** Silence here means the order is being administered, not enforced.
3. **The first vendor caught by the derived-work clause.** Somewhere there is a product with a DeepSeek-derived base model in it, sold to a civilian agency, whose supplier genuinely did not know. What happens to them is the test of whether "developed using" means anything.
4. **Whether the annual review changes the clause.** The Secretary must review the order within a year. That is the natural place to replace a lineage test with a product test.

## The test of a mandate

The DeepSeek order will be described as a security measure, and in intent it is one. But a rule is judged by what it can distinguish, not by what it wishes were true. This one cannot distinguish a clean vendor from a careful liar, a removed model from a supplier letter, or a compliant agency from one that has learned the form.

That is the same failure as the age check that estimates rather than knows, and the same failure as a deadline set by people who do not control the work. The pattern is not that governments are malicious. It is that the instrument is chosen for how it looks in an announcement rather than for whether it can be executed.

The router list, whatever else it did, was drawn so that a buyer could obey it. Its own order <a href="/politics/it-worked-for-routers/" target="_blank" rel="noopener noreferrer">did not touch equipment people had already bought</a>, and it did not stop retailers selling or importing what was already in the channel. The line was drawn at the point of purchase, which is the one point where a regulator can actually see a decision.

The DeepSeek order moves that line backwards, onto systems already built. That is the difference between telling a buyer what not to buy next and telling an institution to prove a negative about what it has been running for years.
