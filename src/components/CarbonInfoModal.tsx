import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CarbonInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CarbonInfoModal: React.FC<CarbonInfoModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl gap-2">
            <span className="text-green-500">🌍</span> Is JasonDavey.io
            Eco-Friendly?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            I care about the planet too
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <p className="mb-4">
            I care about more than just design and speed — I care about the
            planet too. That's why I've checked how environmentally friendly
            this website is using WebsiteCarbon.com, a tool that estimates the
            carbon footprint of websites.
          </p>

          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-green-500">🔎</span> What Does WebsiteCarbon
            Do?
          </h3>
          <p>
            WebsiteCarbon calculates how much energy it takes to load a webpage
            and turns that into an estimate of CO₂ (carbon dioxide) emissions.
            Here's how it works, in plain English:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              It measures how big the page is (like how many images, scripts,
              and files are loaded).
            </li>
            <li>
              It estimates how much electricity is needed to load that data on
              your device.
            </li>
            <li>
              It checks if my web hosting runs on green energy (like solar or
              wind).
            </li>
            <li>
              Then it tells me how much carbon is released every time someone
              visits the site — and even gives a yearly estimate based on
              traffic.
            </li>
          </ul>

          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-green-500">💚</span> Why It Matters
          </h3>
          <p>
            Every website uses electricity, and that means carbon emissions —
            unless it's powered by renewable energy. By keeping my site
            lightweight and using a green host, I can lower my digital carbon
            footprint.
          </p>

          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-green-500">✅</span> What I'm Doing
          </h3>
          <p>This website is:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Designed with performance in mind, meaning fewer emissions.</li>
            <li>
              Hosted on green infrastructure, which uses renewable energy.
            </li>
          </ul>
          <p className="mt-2">
            I'm always looking for ways to make it even more efficient — because
            sustainability matters, even online.
          </p>

          <div className="mt-6 text-sm text-center border-t border-border pt-4">
            <a
              href="https://websitecarbon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center justify-center gap-1"
            >
              Learn more at WebsiteCarbon.com
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarbonInfoModal;
