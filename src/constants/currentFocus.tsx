import { ReactNode } from "react";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import SavingsIcon from "@mui/icons-material/Savings";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export interface FocusPillar {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  details: ReactNode;
  technologies: string[];
}

export interface FocusStat {
  label: string;
  detail: string;
}

export const currentRole = {
  role: "Staff Software Engineer",
  company: "PlayOn Sports",
  duration: "September 2025 - Present",
  mission:
    "I lead the EKS migration of NFHS Network's subscription platform for PlayOn Sports — the company behind NFHS Network and MaxPreps. In under a year I've taken two Rails services to production on Kubernetes with zero rollbacks, avoided six figures in annual AWS costs, eliminated a service's single largest source of outbound traffic, and shipped MaxPreps' subscription email platform — while building the load-testing, traffic-control, and alerting tooling that didn't exist before.",
};

export const currentStats: FocusStat[] = [
  { label: "$133K/yr", detail: "AWS cost avoidance" },
  { label: "16M+/day", detail: "outbound calls eliminated" },
  { label: "Zero rollbacks", detail: "across 2 production EKS cutovers" },
  { label: "65+", detail: "AWS infrastructure tickets closed" },
];

export const focusPillars: FocusPillar[] = [
  {
    id: "eks-migration",
    title: "EKS Migration & Reliability",
    icon: <CloudDoneIcon fontSize="inherit" />,
    summary:
      "Cut two Rails subscription services from ECS to Kubernetes in production with zero rollbacks, building the load-testing and traffic-control tooling that didn't exist before.",
    details: (
      <>
        <p>
          Migrated a core subscription service from ECS to EKS in production, individually
          swapping all six CloudFront paths and verifying every route from the public internet.
          Post-cutover the service held 51 requests/sec at p95 41ms on 8 pods, later scaling to
          73.5 rps at p95 45ms.
        </p>
        <p>
          Converted a second Rails service the same way three weeks later, rolling it out behind
          a weighted CloudFront traffic split I built myself — a reusable tool to ramp, pause, and
          re-weight traffic between the old and new infrastructure with live traffic-pattern
          analysis.
        </p>
        <p>
          Validated the migration by load-testing at 65% above production&apos;s peak concurrency
          and roughly 28x its normal purchase rate, with zero service failures and better latency
          than the infrastructure it replaced.
        </p>
        <p>
          Also stabilized a high-traffic core API service during a production crisis — fixing a
          memory-driven crash loop, raising its autoscaling ceiling, and cutting duplicated
          per-request database work by two-thirds on its busiest endpoints.
        </p>
      </>
    ),
    technologies: ["AWS EKS", "Kubernetes", "CloudFront", "Terraform", "Rails"],
  },
  {
    id: "cost-efficiency",
    title: "Cost & Efficiency Engineering",
    icon: <SavingsIcon fontSize="inherit" />,
    summary:
      "Avoided $133K/year in AWS costs and eliminated a service's single largest source of outbound traffic.",
    details: (
      <>
        <p>
          Led a MySQL major-version upgrade across 45 RDS instances spanning 5 AWS accounts to
          stop a daily AWS Extended Support surcharge, saving an estimated $133,000 per year.
          Upgraded all non-production instances with roughly 2.5 minutes of downtime each,
          authoring the infrastructure-as-code for the rollout.
        </p>
        <p>
          Identified that one of the platform&apos;s busiest services was making over 16 million
          outbound calls a day to a downstream API — nearly three-quarters of all its outbound
          traffic — and eliminated the hot path with a lightweight cache, removing it as the
          service&apos;s largest dependency.
        </p>
        <p>
          Diagnosed a live production incident where a single uncached endpoint was pinning
          autoscaling at its ceiling and spiking latency; a targeted caching fix cut origin
          requests from over 2,000 to 1 every five minutes.
        </p>
        <p>
          Also right-sized lower environments, retiring unused CI workflows and cutting standing
          infrastructure by 90% on two services.
        </p>
      </>
    ),
    technologies: ["AWS RDS", "MySQL", "Terraform", "CloudFront", "New Relic"],
  },
  {
    id: "maxpreps-launch",
    title: "MaxPreps Subscription Launch",
    icon: <TrendingUpIcon fontSize="inherit" />,
    summary:
      "Shipped MaxPreps' subscription email and lifecycle platform, connecting PlayOn's high school sports ecosystem to consumer subscription growth.",
    details: (
      <>
        <p>
          Delivered the MaxPreps transactional email and lifecycle-suppression platform to
          production — brand-routed purchase receipts, managed-subscription receipts, and
          brand-aware dunning and cancellation emails across two core services, built to serve
          NFHS Network and MaxPreps as distinct consumer brands rather than one undifferentiated
          audience.
        </p>
        <p>
          Fixed a production blocker that had locked users in a dunning state out of their
          accounts, and built the authentication proof-of-concept and end-to-end purchase demo
          that unblocked the integration.
        </p>
        <p>
          Authored the performance-testing plan required as a release prerequisite, covering API
          load, email-delivery latency, and SLA definitions.
        </p>
      </>
    ),
    technologies: ["TypeScript", "Node.js", "OAuth", "SFMC"],
  },
  {
    id: "ai-tooling",
    title: "Engineering Practice & AI Tooling",
    icon: <SmartToyIcon fontSize="inherit" />,
    summary:
      "Built the organization's first AI engineering agents and hardened the release process teams rely on daily.",
    details: (
      <>
        <p>
          Built the organization&apos;s first Claude Code agents in production use: an
          accessibility auditor that runs a full WCAG review of the main consumer site in about a
          minute, and a PR-review agent that posts inline accessibility and type-safety feedback
          on every pull request — a pattern teammates have since adopted for their own workflows.
        </p>
        <p>
          Introduced production deploy freezes (Fridays and after 3pm ET) with a Slack-notified
          emergency override, and led a flaky end-to-end test remediation effort after engineers
          had started bypassing CI entirely.
        </p>
        <p>
          Rotated CI secrets and replaced manual deploy keys with managed ones, and kept the
          frontend&apos;s core dependencies current (TypeScript, HTTP client, video libraries)
          alongside authoring the plan for an upcoming framework upgrade.
        </p>
      </>
    ),
    technologies: ["Claude Code", "CircleCI", "TypeScript", "Playwright"],
  },
];
