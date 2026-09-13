import { ReactNode } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export interface FocusPillar {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  details: ReactNode;
  technologies: string[];
}

export const currentRole = {
  role: "Staff Software Engineer",
  company: "PlayOn Sports",
  duration: "September 2025 - Present",
  mission:
    "I work on the national platform for high school sports streaming, ticketing, and media that powers NFHS Network and MaxPreps. My focus is connecting consumer subscription growth across both products, hardening the subscribe and purchase paths, and modernizing the platform so the team can ship with confidence.",
};

export const focusPillars: FocusPillar[] = [
  {
    id: "subscription-growth",
    title: "Subscription Growth",
    icon: <TrendingUpIcon fontSize="inherit" />,
    summary:
      "Connecting PlayOn's high school sports ecosystem with consumer subscription growth across NFHS Network and MaxPreps.",
    details: (
      <>
        <p>
          Helped design and lead the MaxPreps subscription integration, connecting PlayOn&apos;s
          high school sports ecosystem with consumer subscription growth across NFHS Network and
          MaxPreps — two consumer products with different audiences, brands, and purchase flows.
        </p>
        <p>
          The work centers on hardening the subscribe and purchase paths so growth initiatives
          launch on solid ground, rather than bolting growth features onto a fragile checkout.
        </p>
      </>
    ),
    technologies: ["TypeScript", "Nuxt", "Vue"],
  },
  {
    id: "platform-modernization",
    title: "Platform Modernization",
    icon: <BuildCircleIcon fontSize="inherit" />,
    summary:
      "Led platform modernization across TypeScript/Axios upgrades, EKS ramp-up, Nuxt upgrade validation, and CI credential rotation.",
    details: (
      <>
        <p>Led platform modernization across several parallel workstreams:</p>
        <ul>
          <li>TypeScript and Axios version upgrades across services</li>
          <li>Ramping up on and operating within the team&apos;s EKS environment</li>
          <li>Validating a Nuxt framework upgrade ahead of rollout</li>
          <li>Rotating CI credentials as part of hardening the deployment pipeline</li>
        </ul>
        <p>
          None of this is customer-visible — it&apos;s the groundwork that keeps the team shipping
          without dependency or infrastructure debt slowing them down.
        </p>
      </>
    ),
    technologies: ["TypeScript", "Axios", "AWS EKS", "Nuxt", "CI/CD"],
  },
  {
    id: "release-confidence",
    title: "Release Confidence",
    icon: <VerifiedIcon fontSize="inherit" />,
    summary:
      "Diagnosed and resolved flaky Playwright end-to-end tests on subscribe and purchase paths to improve release confidence.",
    details: (
      <>
        <p>
          Improved release confidence by diagnosing and resolving flaky Playwright end-to-end
          tests on the subscribe and purchase paths — the parts of the platform where a false
          failure (or a missed real one) has the most direct revenue impact.
        </p>
        <p>
          Stabilizing this suite means the team can trust a green build and ship subscription and
          purchase changes without manually re-verifying critical paths every time.
        </p>
      </>
    ),
    technologies: ["Playwright", "TypeScript", "CI/CD"],
  },
  {
    id: "lifecycle-revenue-ops",
    title: "Lifecycle & Revenue Ops",
    icon: <ReceiptLongIcon fontSize="inherit" />,
    summary:
      "Delivered subscription lifecycle improvements across transactional emails, membership and purchase receipts, and brand-aware dunning and cancellation flows.",
    details: (
      <>
        <p>
          Delivered subscription lifecycle improvements across transactional emails, membership
          and purchase receipts, and dunning and cancellation flows.
        </p>
        <p>
          Because the platform serves two distinct consumer brands — NFHS Network and MaxPreps —
          these flows had to stay brand-aware throughout, rather than treating subscribers as one
          undifferentiated audience.
        </p>
      </>
    ),
    technologies: ["Node.js", "TypeScript"],
  },
];
