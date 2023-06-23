import { buildLegacyTheme } from "sanity";
const props = {
  "--my-white": "#ffffff",
  "--my-black": "#060C18",
  "--oaks-brand": "#80B24F",
  "--my-red": "#db4437",
  "--my-yellow": "#ebb327",
  "--my-green": "#6FBF21",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],
  "--gray": "#666",
  "--gray-base": "#666",
  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],
  /* Brand */
  "--brand-primary": props["--oaks-brand"],
  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--oaks-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],
  /* State */
  "--state-info-color": props["--oaks-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],
  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],
  "--focus-color": props["--oaks-brand"],
});
