const colorNames = {
  white: "#ffffff",
  darkGray: "#222222",
  gray: "#444444",
  lightGray: "#d2d2d2",

  // ---darkTheme---
  platinum: "#eaeaeaff",
  byzantium: "#893168ff",
  violetJtc: "#4a1942ff",
  darkPurple: "#2e1c2bff",
  black: "#050404ff",
  darkGradient: "#121a26",
  violet: "#a770ff",
  veniceBlue: "#a17100",
  corn: "#f2a365",
  buttonDarkGradient: "linear-gradient(to right, #9d50bb, #6e48aa)",
  buttonDarkGradientReversed: "linear-gradient(to left, #9d50bb, #6e48aa)",
  violetGradient: "linear-gradient(to right, #a770ff, #834d9b)",
  // ---gradients---
  gradientRedDark: "linear-gradient(to right, #ff512f, #f09819)",
  // ---lightTheme---
  onyx: "#2e3532ff",
  claret: "#8b2635ff",
  orange: "#d66802",
  alabaster: "#E3E3E3",
  timberWolf: "#d2d4c8ff",
  teaGreen: "#d3efbdff",
  buttonLightGradient: "linear-gradient(to right, #f12711, #f5af19)",
  buttonLightGradientReversed: "linear-gradient(to left, #f12711, #f5af19)",
  orangeGradient: "linear-gradient(to right, #c02425, #f0cb35)",
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
    basic: colorNames.orange,
    textBasic: colorNames.onyx,
    textAdditional: colorNames.claret,
    app: {
      background: colorNames.alabaster,
    },
    header: {
      text: colorNames.orangeGradient,
    },
    button: {
      background: colorNames.buttonLightGradient,
      backgroundReversed: colorNames.buttonLightGradientReversed,
      text: colorNames.platinum,
    },
    section: {
      primary: colorNames.white,
    },
    advantages: {
      text: colorNames.platinum,
      background: colorNames.gradientRedDark,
    },
    projects: {
      primary: colorNames.lightGray,
      secondary: colorNames.orange,
      text: colorNames.alabaster,
      selected: colorNames.darkGray,
    },
    themeSwitch: {
      background: colorNames.alabaster,
      button: colorNames.onyx,
      border: colorNames.orange,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    basic: colorNames.violet,
    textBasic: colorNames.platinum,
    textAdditional: colorNames.lightGray,
    app: {
      background: colorNames.darkGradient,
    },
    header: {
      text: colorNames.violetGradient,
    },
    button: {
      background: colorNames.buttonDarkGradient,
      backgroundReversed: colorNames.buttonDarkGradientReversed,
      text: colorNames.platinum,
    },
    section: {
      primary: colorNames.darkPurple,
    },
    advantages: {
      text: colorNames.platinum,
      background: colorNames.gradientRedDark,
    },
    projects: {
      primary: colorNames.platinum,
      secondary: colorNames.platinum,
      text: colorNames.black,
      selected: colorNames.lightGray,
    },
    themeSwitch: {
      background: colorNames.darkGray,
      button: colorNames.platinum,
      border: colorNames.violet,
    },
  },
};
