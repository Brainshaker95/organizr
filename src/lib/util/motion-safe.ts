let initialized: boolean;
let matches: boolean;

const initializeMotionMediaQuery = (): void => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  initialized = true;
  matches = mediaQuery.matches;

  mediaQuery.addEventListener('change', () => {
    matches = mediaQuery.matches;
  });
};

export default (withMotion: Function, withoutMotion: Function): void => {
  if (!initialized) {
    initializeMotionMediaQuery();
  }

  if (matches) {
    withoutMotion();
  } else {
    withMotion();
  }
};
