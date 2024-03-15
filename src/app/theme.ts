const colorNames = {
  white: "#ffffff",
  darkGray: "#222222",
  ligthGray: "#d2d2d2",
  // ---darkTheme---
  platinum: "#eaeaeaff",
  byzantium: "#893168ff",
  violetJtc: "#4a1942ff",
  darkPurple: "#2e1c2bff",
  black: "#050404ff",
  darkGradient: "linear-gradient(to right, #141e30, #011225)",
  violet: "#a770ff",
  // ---lightTheme---
  onyx: "#2e3532ff",
  claret: "#8b2635ff",
  alabaster: "#e0e2dbff",
  timberWolf: "#d2d4c8ff",
  teaGreen: "#d3efbdff",
} as const;

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorMax: 1199,
  },
  boxShadow:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
};

export const themeLight = {
  ...common,
  colors: {
    basic: colorNames.violetJtc,
    textBasic: colorNames.onyx,
    app: {
      background: colorNames.alabaster,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    basic: colorNames.violet,
    textBasic: colorNames.platinum,
    app: {
      background: colorNames.darkGradient,
    },
    projects: {
      primary: colorNames.platinum,
      secondary: colorNames.platinum,
      text: colorNames.black,
      selected: colorNames.ligthGray,
    },
  },
};
