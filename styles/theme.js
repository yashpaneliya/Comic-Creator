import mixins from "./mixins";

export const lightTheme = {
  color: `var(--color)`,
  background: `var(--back-light)`,
  shade: `var(--shade-light)`,
  text: `var(--font-light)`,
  nav: `var(--back-light)`,
  border: `var(--border-light)`,
  card: `var(--card-light)`,
  cardLink: `var(--card-light-link)`,
  selection: `var(--selection)`,
  contrast: "#ffffff",
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
  mixins,
};

export const darkTheme = {
  color: `var(--dark-color)`,
  background: `var(--back-dark)`,
  shade: `var(--shade-dark)`,
  text: `var(--font-dark)`,
  nav: `var(--back-dark)`,
  border: `var(--border-dark)`,
  card: `var(--card-dark)`,
  cardLink: `var(--card-dark-link)`,
  selection: `var(--selection)`,
  contrast: "#000000",

  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
  mixins,
};
