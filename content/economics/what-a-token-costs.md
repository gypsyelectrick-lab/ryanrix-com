---
topic: "Capitalism & Culture"
title: "What a Token Costs, and the Number Nobody Published"
seo_title: "What a DeepSeek Token Actually Costs"
menu: "What a Token Costs"
date: 2026-10-30
image: /images/what-a-token-costs-hero.png
author: "Anna Karina"
description: "DeepSeek published its revenue per GPU-hour. The margin claim built on it rests on a number it did not."
draft: false
weight: 77
tags: ["economics", "ai", "pricing", "margins", "deepseek"]
levels: "advanced"
---

**On 20 October DeepSeek did something almost no AI company does: it published a revenue figure. In the deployment notes released with its inference framework, one sentence reads: "A single cluster currently serves 155 trillion tokens per day, with overall revenue of US$38 per GPU-hour (at valley pricing)."**

Within hours, that sentence had been turned into a gross margin. Take the $38, subtract a rented GPU at $7 an hour, and you get about 82 percent. Commentators described it as the moment the price of intelligence was exposed, and the implication was that every AI subscription is priced against a cost the customer was never meant to see.

The $38 is real, and it is DeepSeek's own figure. The margin is not DeepSeek's figure, and it rests on a number DeepSeek did not publish: how many GPUs the cluster has. That number decides almost everything, and the thread that went round the internet skipped it.

Let us show the arithmetic, because it is the whole argument.

## What is actually published

Three documents matter, and all three are primary.

**The revenue claim.** In <a href="https://github.com/deepseek-ai/DeepInfer/blob/main/doc/inference_deployment_qa.md" target="_blank" rel="noopener noreferrer">the inference deployment Q&A</a> shipped with DeepInfer, DeepSeek states the 155 trillion tokens per day and the $38 per GPU-hour, explicitly "at valley pricing" - that is, at its off-peak, cheapest rates rather than the peak ones.

**The price list.** DeepSeek's <a href="https://api-docs.deepseek.com/quick_start/pricing/" target="_blank" rel="noopener noreferrer">published API prices</a> run two models and two tariffs. For `deepseek-flash` the prices per million tokens are: input that hits the cache, $0.003 off-peak and $0.006 at peak; input that misses the cache, $0.15 and $0.30; output, $0.60 and $1.20. The larger model, `deepseek-v4-pro`, is roughly four to five times as expensive on every line.

**The claims made about them.** The viral thread put the API at "$0.30 per million input and $1.20 per million output at peak", which is exactly right for the flash model's cache-miss input and its output. It then took the $38, assumed a rented B300 at $7 an hour, and arrived at 82 percent gross margin, noting that other estimates go higher.

So the inputs are sound. The step from them to a margin is where it goes wrong.

## Why the fleet size is the missing number

DeepSeek published **revenue per GPU-hour**. It did not publish a GPU count. Without it, the $38 tells you the productivity of a single unit and nothing about the size or the profitability of the whole.

The fleet size is also what determines the blended price being charged, and that is the part nobody can check, because it requires knowing that a token is not a single product at a single price.

DeepSeek's own price list has a **hundred-fold spread inside it**. Cached input costs $0.006 per million at peak. Output costs $1.20. If the revenue per GPU-hour is to be believed, and the traffic is mostly prompt processing that hits the cache - which is what happens when the same long context is sent again and again, as coding tools and chat assistants both do - then a great many tokens are being served at a hundredth of the headline rate.

Work it through. If the fleet were 10,000 GPUs, the daily revenue at $38 each is about $9.1m, which against 155 trillion tokens implies a blended price of **$0.059 per million**. If it were 50,000 GPUs, daily revenue is $45.6m and the blended price is **$0.29 per million**. Both are arithmetic from DeepSeek's two numbers; the fleet size chooses between them.

A plausible mix - seventy percent cached input, twenty percent uncached input, ten percent output, at peak prices - blends to about $0.18 per million. At $38 per GPU-hour, serving 155 trillion tokens a day at $0.18 per million implies roughly **30,000 GPUs** and about **$10bn of annualised revenue**.

That last figure is the one worth noting, because it is much larger than the numbers that circulate about DeepSeek's revenue, and it is produced entirely by the company's own published inputs. It may be right, and it may mean the circulating revenue figures describe something else - a subsidiary, an earlier period, or a different business line. **What cannot be done is take the $38 confidently for a margin and decline to compute what it implies about the fleet.**

## Revenue is not margin, and rent is not cost

The 82 percent calculation has two problems, and they are different in kind.

**The first is definitional.** Gross margin is revenue minus the cost of the thing sold. The thread subtracts a rental price. But the people running a 30,000-GPU cluster have not rented it; they bought it. For an owner, the cost per GPU-hour is depreciation plus power plus networking plus the cost of the capacity that sits idle. Depreciation on a datacenter GPU is the dominant term, and it is not $7 an hour for any recent accelerator - $7 an hour is roughly what a rented current-generation card costs on the open market, which is a price that already contains a rental company's margin and its own depreciation.

Substituting a rental price for an owned asset's cost is not conservative. It is a different business model.

**The second is that nobody outside the company knows what the cluster actually is.** Which chips, bought when, at what price, with what utilization, on what power contract. DeepSeek's own notes say the framework runs on Nvidia's SM100 and Huawei's Ascend 950, which if true of the production fleet is an unusual and interesting fact in itself, and one that makes a $7-per-hour rental comparison even less meaningful.

So the defensible statement is narrower than the thread's. **DeepSeek has published a revenue-per-unit figure that is unusually high for this industry, and it has not published the cost side at all.** On the published evidence, the correct conclusion is that serving a flash-class model at scale appears to be a high-revenue business per GPU-hour. On the published evidence, the margin is unknown.

## What the number does settle

None of which makes the thread useless. One part of it is right, and it is the part that matters for policy.

**Cheap prices are not evidence of dumping.** Anti-dumping cases turn on price against cost, and cost is the thing the complainant normally cannot show. If a provider is selling tokens at $0.30 per million while earning $38 of revenue per GPU-hour, the low price is a cost structure, not a subsidy, and anyone alleging predatory pricing has to demonstrate the cost it undercuts. DeepSeek has now put one side of that ledger in public, which is more than its accusers have done.

That is a real contribution, and it cuts against the assumptions in the DHS procurement order discussed <a href="/politics/prove-it-was-not-deepseek/" target="_blank" rel="noopener noreferrer">elsewhere on this site</a>, which treats DeepSeek as a security risk without any claim about its economics.

## The comparison the thread cannot make

The second half of the argument - that American labs charge $200 a month because you do not know what a token costs - does not survive DeepSeek's own price list.

**DeepSeek charges four to five times more for its larger model than for its flash model.** At peak, `deepseek-v4-pro` is $1.32 per million on cache-miss input and $3.96 on output, against $0.30 and $1.20 for flash. The company that supposedly exposed the true cost of a token charges its own customers different prices for different models, because a bigger model at longer context costs more to serve. That is exactly what the American labs say.

So the defensible version of the argument is this: a small, fast, cache-friendly model can be served very profitably at prices that feel impossibly cheap. A large model answering long questions with long answers is a different product with a different cost, and the $200-a-month subscription is not selling the same token.

That distinction does not excuse every pricing decision in the industry, and it does not answer the question of whether the subscriptions are good value. It does mean that "$0.30 per million" and "$200 per month" are not two prices for the same thing, and the comparison is being made by people who know that.

## What $200 a month actually buys

The most useful comparison is not price per token against price per month. It is a token budget against what people use.

At a blended $0.18 per million, which is what a cache-heavy mix implies, $200 a month buys about **1.1 billion tokens**. That is roughly 37 million tokens a day, every day, for a month. It is an enormous amount of text. A person writing with an assistant all day, every day, is unlikely to reach a tenth of it, and most subscribers are nowhere near that.

Which means the argument from the thread proves less than it thinks. If a heavy user's $200 buys $20 of tokens at a provider's blended rate, the gap is not proof of extortion. It is what a subscription is: a fixed price for variable use, sold to a customer who wants the ceiling to be predictable. Most subscribers are paying for the option to use a lot, and most of them will not.

That changes what the fair question is. Not "why does the subscription cost $200 when tokens cost $20", but "what is inside the $200 besides tokens". In the American labs' case the answer includes the frontier model itself, longer context, tools, and a margin that funds the next training run. Whether that is worth $200 is a judgement. It is not arithmetic.

**The mechanism behind cheap tokens is worth understanding too.** A large share of traffic to a coding assistant or a chat tool is a long, mostly unchanged prompt - a repository, a document, a conversation - sent again with a small addition. Caching that prefix means the provider processes it once and reuses the computation. DeepSeek charges a hundredth of the uncached price for it, which tells you how much cheaper it is to serve.

## Depreciation, roughly, because it decides the argument

The thread's $7 an hour is a rental price. A rough sense of what ownership costs shows why that substitution matters.

A datacenter accelerator costing $30,000, written off over three years, is about **$1.14 per hour** if it runs flat out and **$2.28** at fifty percent utilization - before power, cooling, networking or the people. A newer card at $40,000 over three years is $1.52 and $3.04 on the same basis. Those are illustrative figures on stated assumptions, not quotes for any particular chip, but the shape is the point: **depreciation per hour scales with the price of the card and falls with utilization**, and both of those are things DeepSeek has not published.

At $38 of revenue per GPU-hour against an owned cost somewhere in the low single digits, the business looks excellent. At $38 against a fleet running at a third utilization, or against cards bought at the top of the market, it looks merely good. The margin moves by tens of points on inputs nobody outside the company can see.

## Three ways this could still be wrong

It would be unfair to end without saying how the argument above could fail, because DeepSeek's sentence is one sentence and it is doing a lot of work.

**The token count may flatter the revenue.** "155 trillion tokens per day" is a throughput claim, and every token processed counts, including cached prefixes that are re-read cheaply. If the count includes work that is nearly free to serve, the productivity of each GPU-hour is higher than the revenue implies, and the business is less profitable per token than the arithmetic suggests.

**The revenue may include more than the API.** The sentence says "overall revenue", which could take in enterprise contracts, the app, and anything else the cluster supports. If so, the $38 is an average across several businesses, and using it as an API margin compares two different things.

**The hardware may not all be owned.** Nothing in the note says the fleet is owned or wholly used by DeepSeek. Companies rent capacity at the margin, and rented capacity at a market rate is exactly the cost the thread assumed. If part of the fleet is rented, the $7 an hour comparison stops being wrong in principle and becomes a question of what share.

Each of those is checkable, by the company, in a sentence. None has been published. That is the state of the evidence: one very good number, and a conclusion that needs three more.

## What would settle the dumping question

Four numbers, none of which is published by anybody, and any one of which would move the argument:

1. **The fleet size.** DeepSeek knows it. One figure converts revenue per GPU-hour into a business.
2. **The purchase price and age of the chips.** Depreciation is the dominant cost, and a fleet bought before prices rose has a completely different cost base from one bought last year.
3. **Utilization.** Revenue per GPU-hour is an average across the fleet, including the idle ones. A fleet at 90 percent utilization and one at 40 percent can report the same $38.
4. **The share of traffic that is cache hits.** It is the single biggest determinant of the blended price, and it is why a company can advertise $1.20 output while earning a fraction of that per token overall.

None of this is a secret in any meaningful sense. It is ordinary management accounting, and every provider does it. The reason it is not published is not conspiracy: publishing it invites exactly the comparison the thread tried to make, and the comparison is hard on everyone.

## The lesson, which is not about DeepSeek

There is a habit in technology commentary of taking a single impressive figure and treating it as a proof. Here the figure was genuine, from the company itself, and it still could not carry the conclusion because the denominator was missing.

**A revenue figure is not a margin. A rental price is not a cost. And a token is not one product at one price** - it is a hundredfold spread between a cached prompt and a generated answer, and the mix decides everything.

The interesting question is not whether DeepSeek is profitable, which we still cannot answer. It is why the industry keeps its unit economics private at all. If cheap AI really is a cost structure rather than a subsidy, publishing the cost side is the strongest possible argument in its favor, and it is the argument nobody is making with numbers.

DeepSeek published half the ledger. The half it published is the half that flatters it. The other half is the half that would settle it, and the same is true of every lab on both sides of the Pacific.
