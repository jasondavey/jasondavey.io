// Smooth scrolling handler shared between the desktop nav and the mobile drawer.
// Extracted from Navbar.tsx during the navbar decomposition — behavior is identical
// to the original inline implementation.
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
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

  // Get the target position
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  // Get the current scroll position
  const startPosition = window.scrollY;
  // Calculate distance
  const distance = targetPosition - startPosition;

  // Speed in pixels per millisecond
  const speed = 0.5;
  // Calculate duration based on distance and speed
  const duration = Math.abs(distance / speed);
  // Cap duration to provide minimum and maximum scroll times
  const cappedDuration = Math.max(500, Math.min(duration, 2000));

  // Start time
  let startTime: number | null = null;

  // Animation function
  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / cappedDuration, 1);

    // Easing function for smoother start/stop
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    window.scrollTo(0, startPosition + distance * ease(progress));

    if (timeElapsed < cappedDuration) {
      requestAnimationFrame(animation);
    } else {
      // Update URL hash without causing a jump
      window.history.pushState(null, "", targetId);
    }
  }

  requestAnimationFrame(animation);
};
