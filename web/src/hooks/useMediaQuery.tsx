'use client';

import React from 'react';

/**
 * This hook will return a boolean based on the query match
 * @param {string[]} query eg. '(max-width: 800px)'
 * @param {boolean} defaultState eg: true/false
 */

const useMediaQuery = (
  query: string,
  defaultState: boolean = false
): boolean => {
  const [matches, setMatches] = React.useState<boolean>(defaultState);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    // Sync immediately in case the query already matches on mount.
    listener();

    // Listen on the MediaQueryList itself, and remove the *same* reference on
    // cleanup (the old code passed a new arrow fn, so it never detached).
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
