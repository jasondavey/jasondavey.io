import type { NavigateFunction } from "react-router-dom";

// Section-navigation click handler shared between the desktop nav, the mobile
// drawer, and the Hero CTAs. Jumps immediately (no animated scroll) so it can't
// undershoot on pages where below-the-fold content still expands via
// scroll-triggered animations (e.g. Experience's timeline connectors).
//
// The section anchors (#about, #experience, etc.) only exist in the DOM on
// the home page. From any other route (e.g. /diary), navigate home with the
// hash instead of silently doing nothing — Index picks up the hash on mount
// and scrolls to it (see its useLocation effect).
export const handleSmoothScroll = (
  e: React.MouseEvent<Element>,
  targetId: string,
  navigate: NavigateFunction,
  closeMenu?: () => void
): void => {
  e.preventDefault();

  // Only proceed if it's a hash link (internal page navigation)
  if (!targetId.startsWith("#")) {
    return;
  }

  if (closeMenu) {
    closeMenu();
  }

  if (window.location.pathname !== "/") {
    navigate(`/${targetId}`);
    return;
  }

  const targetElement = document.querySelector(targetId);
  if (!targetElement) {
    return;
  }

  targetElement.scrollIntoView({ behavior: "auto", block: "start" });
  window.history.pushState(null, "", targetId);
};
