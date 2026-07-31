---
title: "Why Things Break: Birmingham's £225 Million Oracle"
menu: "Why Things Break: Birmingham's £225 Million Oracle"
date: 2026-07-31
author: "Max Weber"
description: "Europe's largest council lost £225 million on software."
tags: [politics, incentives, government-failure, it, series]
image: /images/why-things-break-birmingham-oracle.jpg
image_caption: "Europe's largest council. Its accounts still do not add up."
draft: false
---

Birmingham City Council is the largest local authority in Europe. It collects roughly £3 billion a year in tax revenue and spends billions more on services for over a million people. In 2018 it decided to replace its aging SAP accounting system with modern software from Oracle. The project was estimated to cost £19 million.

Eight years later, the forecast cost is £144.4 million. Investigators put the total money lost at £216.5 million and rising. The system still does not work. The council has been unable to produce auditable accounts since 2022. The failure is one of the reasons Europe's largest council declared itself effectively bankrupt in 2023.

This is the second IT case study in [Why Things Break](/politics/why-things-break-introduction/), and it is the same disease as the NHS's ten billion pound programme, at council scale. The first episode documented [the National Programme for IT](/politics/why-things-break-nhs-it/), where an impossible project was announced, paid for, and quietly dismantled. Birmingham shows the identical incentives operating at the level of your local council - and the same absence of anyone in the room who understood the technology they were approving.

## The story

The project began in 2018 with a plan to move from the council's legacy SAP R/3 system to Oracle Fusion. The initial estimate: £19 million, plus a £1 million contingency. The plan was to go live in December 2020 for finance and procurement, and February 2021 for HR and payroll. A 2021 business case revised this to April 2022 for both.

That go-live is the point where the story stops being about delay and becomes about decisions. The council went live in April 2022 with a system that was not fit for purpose. The plan had been to implement Oracle "out of the box" - the configuration that thousands of organizations use successfully. Instead, the council created extensive customizations, including a banking reconciliation system that failed to function properly.

The consequences were not subtle. The council struggled to understand its own cash position. It allocated £2 billion in transactions to the wrong financial year. It turned off the audits used for fraud detection for more than 18 months. It could not produce auditable accounts, and still cannot, years later. The council spent more than £5 million on manual workarounds - people doing by hand what the system was supposed to do automatically.

The money kept climbing. In 2024 the approved budget across financial years 2018/19 to 2025/26 was £131 million. The January 2026 forecast for the programme through 2027/28 is £144.4 million - more than seven times the original estimate. The 2024 investigators' estimate of total money lost, including the £69 million of anticipated savings that were written off when the system failed to deliver them, is £216.5 million, and the January 2026 projection could push it toward £225 million. That is roughly £200 for every person within the council's boundaries.

The council has now bought a third-party solution to cover the banking reconciliation function, and is reimplementing Oracle from scratch - a project due to go live in April 2026, delayed again to at least the summer. Schools have been removed from the scope entirely.

## The test

Who benefited? Oracle got paid for the licenses and the failed implementation, and now gets paid again for the reimplementation. The consulting firms got paid for the customizations, and get paid again for the rebuild. The council leadership got the announcement: a modern digital council, a flagship project, a ribbon to cut. When the project failed, the leadership changed, and the new leadership blamed the old - which is exactly what the old leadership would have done in their place.

Who paid? The council's residents, who lost £200 each before counting the cost of services degraded while the council could not manage its own finances. The staff, who spent years doing manual workarounds and are now being asked to support yet another implementation. And the fraud victims: a council that cannot reliably audit its own transactions for 18 months is a council that cannot protect public money, and a council exposed to fraud is a council whose residents pay for the losses.

And here is the part I know personally. In the 1990s I worked for a company that went under during an Oracle Financials implementation. Same product family, same pattern: an organization bought enterprise software, decided it knew better than the vendor's recommended configuration, customized heavily, and the customizations consumed the budget and the schedule until the company collapsed. For at least a year it couldn't create any invoices! I watched it happen to a good, growing company, my employer. I am watching it happen again to a city council, thirty years later, with the same logo on the software and the same logic in the decisions.

The customizations are the tell. Oracle Fusion works - thousands of organizations run it. The council's plan to implement it out of the box was correct. Then someone decided the standard configuration was not good enough, and the customizations - the banking reconciliation system, in particular - are what broke it. Every competent ERP professional could have predicted this, because every competent ERP professional has seen it: organizations customize enterprise software into failure because customization feels like control, and the people making the decision do not understand what they are approving.

## The pattern

The NHS programme was £10 billion and delivered nothing. Birmingham is £225 million and delivers the same. The two are not separate failures. They are the same failure at different scales, separated by two decades and connected by the same incentives.

The pattern: a politician or official announces a grand modernization. The budget is optimistic. The scope is ambitious. The people who will actually use the system are not consulted. The implementation is customized instead of configured. The deadline arrives and the system goes live anyway, because cancelling would be an admission. The system fails. The contractors are paid, and sometimes paid again to fix their own failure. The officials move on. Nobody faces consequences.

This pattern has been documented in Britain since the 1970s. *Computing* and *Computer Weekly* have covered it for fifty years. The NHS programme, Birmingham, the Post Office Horizon scandal - different decades, different departments, identical structure. The details change with the technology. The incentives do not.

## The lesson

The lesson is not "don't buy Oracle" or "don't do digital transformation." The lesson is that the people who decide cannot lose and the people who pay cannot decide.

In a private company, a £225 million software failure that left the company unable to file accounts would end careers, trigger lawsuits, and probably end the company. In government, it ends with a reimplementation contract, a new vendor, and a new announcement. The people who approved the £19 million estimate that became £144 million are not in jail. They are not bankrupt. They are, in all likelihood, still employed, possibly by the very organizations now being paid to fix the problem.

What would break the pattern? For the decision-makers to carry personal liability for the projects they approve. For "out of the box" to be a contract term, not a suggestion. For the people who have actually built and run enterprise software to be required to be in the room, and to be listened to. For the go-live decision to be made by the technologists, not the politicians.

None of this is radical. It is how every successful organization runs technology projects. The reason government does not do it is not that the techniques are unknown. It is that the people who would have to impose them are the same people who benefit from their absence.

The NHS spent £10 billion and got nothing. Birmingham spent £225 million and got a reimplementation project. The next one is already being planned, somewhere, with a confident announcement and an optimistic budget and nobody in the room who has ever built the thing they are approving. That is not a technology problem. That is an incentive problem. It will not be fixed by a better system. It will be fixed, if it is ever fixed, by making the people who decide pay for their decisions.
