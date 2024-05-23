const colorNames = {
  white: "#ffffff",
  coal: "#000000",
  darkGray: "#333333",
  emperorGray: "#555555",
  dustyGray: "#999999",
  boulderGray: "#777777",
  codGray: "#111111",
  lightGray: "#DDDDDD",

  // ---darkTheme---
  platinum: "#eaeaeaff", //text color
  bonJour: "#E8E3E8",
  byzantium: "#893168ff",
  violetJtc: "#4a1942ff",
  eminence: "#552a82",
  darkPurple: "#2e1c2bff",
  mirage: "#121a26",
  dullLavender: "#b7a9e4",
  blueWood: "#797193",
  violet: "#a770ff",
  veniceBlue: "#a17100",
  deluge: "#7f5b9d",
  trendyPink: "#8f75a3",
  advantagesGradient: "linear-gradient(to top,  #121A26FF, #552A82FF);",
  buttonDarkGradient: "linear-gradient(to right, #9d50bb, #6e48aa)",
  violetGradient: "linear-gradient(to right, #a770ff, #834d9b)", // header text {Developer}
  darkGradient:
    "linear-gradient(90deg, rgba(18,26,38,1) 0%, rgba(47,36,55,1) 100%)", // advantages background

  // ---gradients---

  // ---lightTheme---
  sunshade: "#FF9E29",
  onyx: "#2e3532ff", //text color
  gray: "#444444", //additional text color (advantages)
  leather: "#A17B5E",
  gallery: "#EEEEEE",
  orange: "#d66802",
  rajah: "#f9ad66",
  alabaster: "#E3E3E3",
  timberWolf: "#d2d4c8ff",
  teaGreen: "#d3efbdff",
  buttonLightGradient: "linear-gradient(to right, #f12711, #f5af19)",
  orangeGradient: "linear-gradient(to right, #c02425, #f0cb35)", // // header text {Developer}
  lightOrangeGradient: "linear-gradient(to right, #ff512f, #f09819)", // advantages background
} as const;

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorMax: 1199,
  },
  boxShadow:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
  border: "1px solid #dddddd",
};

export const themeLight = {
  ...common,
  colors: {
    basic: colorNames.sunshade,
    textBasic: colorNames.onyx,
    textAdditional: colorNames.leather,
    textReversed: colorNames.platinum,
    app: {
      background: colorNames.alabaster,
    },
    header: {
      text: colorNames.orangeGradient,
    },
    button: {
      background: colorNames.buttonLightGradient,
      text: colorNames.platinum,
    },
    section: {
      primary: colorNames.white,
      background: colorNames.white,
    },
    advantages: {
      text: colorNames.platinum,
      textSecondary: colorNames.gray,
      sectionBackground: colorNames.white,
      background: colorNames.lightOrangeGradient,
    },
    projects: {
      primary: colorNames.lightGray,
      secondary: colorNames.orange,
      background: colorNames.white,
      border: colorNames.gallery,
      tabBackground: colorNames.rajah,
      tabBorder: colorNames.dustyGray,
      textSecondary: colorNames.gray,
      selectedText: colorNames.darkGray,
      selectedBackground: colorNames.lightGray,
      clickHere: {
        background: colorNames.rajah,
        text: colorNames.onyx,
        border: colorNames.gallery,
      },
    },
    projectDetails: {
      text: colorNames.emperorGray,
      background: colorNames.white,
      modalBackground: "rgba(0, 0, 0, 0.1)",
      keyboardInstruct: colorNames.boulderGray,
      screenshotOutline: colorNames.sunshade,
      featureName: colorNames.codGray,
      techBackground: colorNames.lightGray,
      techBackgroundHover: colorNames.lightGray,
      techText: colorNames.darkGray,
      linkBackground: colorNames.lightGray,
      navButtonBG: colorNames.rajah,
      navButtonAccent: colorNames.darkGray,
      navButtonText: colorNames.darkGray,
    },
    themeSwitch: {
      fill: colorNames.violet,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    basic: colorNames.violet,
    textBasic: colorNames.platinum,
    textAdditional: colorNames.lightGray,
    textReversed: colorNames.onyx,
    app: {
      background: colorNames.mirage,
    },
    header: {
      text: colorNames.violetGradient,
    },
    button: {
      background: colorNames.buttonDarkGradient,
      text: colorNames.platinum,
    },
    section: {
      primary: colorNames.darkPurple,
      background: colorNames.eminence,
    },
    advantages: {
      text: colorNames.platinum,
      textSecondary: colorNames.bonJour,
      sectionBackground: colorNames.advantagesGradient,
      background: colorNames.buttonDarkGradient,
    },
    projects: {
      primary: colorNames.deluge,
      secondary: colorNames.platinum,
      border: colorNames.trendyPink,
      background: colorNames.mirage,
      tabBackground: colorNames.emperorGray,
      tabBorder: colorNames.blueWood,
      textSecondary: colorNames.bonJour,
      selectedText: colorNames.darkGray,
      selectedBackground: colorNames.dullLavender,
      clickHere: {
        background: colorNames.deluge,
        text: colorNames.platinum,
        border: colorNames.trendyPink,
      },
    },
    projectDetails: {
      text: colorNames.platinum,
      background: colorNames.mirage,
      modalBackground: colorNames.advantagesGradient,
      keyboardInstruct: colorNames.lightGray,
      screenshotOutline: colorNames.violet,
      featureName: colorNames.white,
      techBackground: "inherit",
      techBackgroundHover: colorNames.trendyPink,
      techText: colorNames.platinum,
      linkBackground: colorNames.violetGradient,
      navButtonBG: colorNames.deluge,
      navButtonAccent: colorNames.violet,
      navButtonText: colorNames.platinum,
    },
    themeSwitch: {
      fill: colorNames.sunshade,
    },
  },
};
