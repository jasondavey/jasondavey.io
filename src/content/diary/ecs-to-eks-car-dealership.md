---
title: "ECS to EKS: the dealership lot vs. the parts counter"
date: 2026-09-13
excerpt: Moving from ECS to EKS isn't a car swap — it's trading a car someone else built and services for a set of parts you assemble, tune, and are on the hook for.
tags: [aws, kubernetes, ecs, eks, infrastructure]
---

A few months ago, I was asked to deliver an ECS to EKS migration of our Tier 1 services (meaning the services our business depends on for customer value and revenue). As a long time ECS configurator, I was curious about EKS. Here's some take-aways from what I learned.

ECS is a managed service underlying infrastructure complexities abstracted away allowing teams to focus on business value through feature development  At a high level, four differences do most of the work. ECS is AWS's own orchestrator — proprietary, free at the control plane, and integrated with the rest of AWS by default — while EKS rents you a conformant Kubernetes control plane by the hour. ECS is opinionated where EKS is extensible: ECS settles most scheduling, networking, and rollout questions for you, and EKS hands every one of them back. ECS task definitions run on AWS and nowhere else, while Kubernetes manifests run anywhere Kubernetes does. And ECS asks very little of your team's skill set, where EKS assumes — or quickly creates — real Kubernetes depth. Everything below is that summary with the receipts attached.

## ECS: drive it off the lot

ECS is the car that's already built. AWS picked the engine, wired the electronics, and the whole thing is under warranty. You get:

- A control plane you never think about, because it isn't yours to think about.
- Deep, native integration with IAM, ALB/NLB, Cloud Map, Secrets Manager, and CloudWatch — no connectors, no bridges, it's all just *there*.
- A scheduler and task definition model that's opinionated enough that most teams never need to make a scheduling decision at all.
- A support model where "who do I call when this breaks" has one answer: AWS Support.

The tradeoff is the same one you make with any car off the lot: you get exactly the trim levels AWS offers. If you want a part that isn't in the AWS catalog — a specific service mesh, a niche admission controller, a CRD-based operator someone open-sourced for exactly your problem — you're not bolting it on. It doesn't fit the frame.

## EKS: the parts counter

EKS hands you the Kubernetes API and says "now assemble your car." That's the whole value proposition, and it's real: the entire CNCF ecosystem — Helm charts, operators, service meshes, GitOps tooling, every vendor's Kubernetes-native product — bolts on because Kubernetes is the frame everyone builds parts for. If portability across clouds matters, or your team already has deep Kubernetes muscle memory, or you need something specific that only exists as a k8s-native controller, EKS is the only lot with that part in stock.

But notice what "assemble it yourself" actually means once you're past the pitch:

- **Networking is now your decision**, not AWS's — which CNI, how pod-to-pod traffic is routed, how you expose services outside the cluster.
- **Ingress, autoscaling, and observability are separate purchases.** ALB Ingress Controller, Cluster Autoscaler or Karpenter, Prometheus/Grafana or a vendor stack — none of it ships in the box.
- **Upgrades are a maintenance schedule you own.** A Kubernetes minor version deprecates APIs; something in your stack was almost certainly written against one of them.
- **RBAC, network policy, and pod security are your policies to write**, not a managed default.

None of this is a knock on EKS — it's the honest cost of the thing that makes it powerful. A car off the lot can't be modified past what the manufacturer allows. A car built from parts can become anything, including something that doesn't run, and the check-engine light is now addressed to you personally.

## The actual decision framework

I've stopped asking "which is better" and started asking a narrower question: **who is going to own the parts you'd have to add to EKS to get back to parity with what ECS gives you for free?**

If the answer is "a platform team that already exists and already knows Kubernetes," the migration is a genuine unlock — you get the ecosystem without absorbing new operational risk, because someone's already carrying that weight. If the answer is "whoever's on call this week, in addition to their actual job," the migration isn't buying capability, it's quietly converting product engineering time into car-maintenance time.

Neither lot is wrong. The mistake is comparing sticker prices instead of asking who's doing the oil changes.
