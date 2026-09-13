// Section-navigation click handler shared between the desktop nav, the mobile
// drawer, and the Hero CTAs. Jumps immediately (no animated scroll) so it can't
// undershoot on pages where below-the-fold content still expands via
// scroll-triggered animations (e.g. Experience's timeline connectors).
export const handleSmoothScroll = (
  e: React.MouseEvent<Element>,
  targetId: string,
  closeMenu?: () => void
): void => {
  e.preventDefault();

  // Only proceed if it's a hash link (internal page navigation)
  if (!targetId.startsWith("#")) {
    return;
  }

  const targetElement = document.querySelector(targetId);
  if (!targetElement) {
    return;
  }

  // Close mobile menu if open
  if (closeMenu) {
    closeMenu();
  }

  targetElement.scrollIntoView({ behavior: "auto", block: "start" });
  window.history.pushState(null, "", targetId);
};
