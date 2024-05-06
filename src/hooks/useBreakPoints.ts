import { useMediaQuery } from './useMediaQuery';

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 */
export function useBreakpoints() {
  const xxs = useMediaQuery('(max-width: 480px)');
  const xs = useMediaQuery('(min-width: 481px) and (max-width: 576px)');
  const sm = useMediaQuery('(min-width: 577px) and (max-width: 768px)');
  const md = useMediaQuery('(min-width: 769px) and (max-width: 991px)');
  const lg = useMediaQuery('(min-width: 992px) and (max-width:1440px)');
  const xl = useMediaQuery('(min-width: 1440px)');

  const breakpoints = {
    isMobile: xxs || xs || sm,
    isTablet: md,
    isWeb: lg || xl,
  };
  return breakpoints;
}
