/*
    This is a script used to achieve the "perfect dark mode" effect, where we ensure
    that the user's preferred color theme is set before we actually display the page content.
    Since we are using SSR in this app, we will need to inject this script into the document
    and block the rest of the code from executing until the theme is set.

    See original article on perfect dark mode: https://www.joshwcomeau.com/react/dark-mode/
*/

function setColorTheme() {
  const DEFAULT_LIGHT_THEME = 'light';
  const DEFAULT_DARK_THEME = 'dark';

  function getInitialColorTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    // If user hasn't visited site and set preference, check
    // attempt to match their system theme
    const mediaQuery = '(prefers-color-scheme: dark)';
    const prefersDarkMode = window.matchMedia(mediaQuery).matches;
    if (prefersDarkMode) return DEFAULT_DARK_THEME;

    return DEFAULT_LIGHT_THEME;
  }

  const theme = getInitialColorTheme();
  const root = document.documentElement;

  root.dataset.theme = theme;
}

const script = `(${setColorTheme.toString()})()`;

export default script;
