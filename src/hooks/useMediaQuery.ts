import { useEffect, useState } from 'react';

/**
 * Custom hook that tells you whether a given media query is active.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>();
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (event: {
      matches: boolean | ((prevState?: boolean) => boolean);
    }) => setMatches(event.matches);

    /**
     * Code to support addEventListener on Safari 11, 12 & 13
     */
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }
    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, [query]);
  return matches;
}
