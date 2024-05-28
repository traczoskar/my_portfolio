const colorNames = {
  // ---common---
  codGray: "#111111",
  darkGray: "#333333",
  gray: "#444444",
  emperorGray: "#555555",
  boulderGray: "#777777",
  dustyGray: "#999999",
  silverGray: "#BBBBBB",
  lightGray: "#DDDDDD",
  white: "#ffffff",
  // ---darkTheme---
  platinum: "#eaeaeaff",
  bonJour: "#E8E3E8",
  eminence: "#552a82",
  darkPurple: "#2e1c2bff",
  mirage: "#121a26",
  dullLavender: "#b7a9e4",
  blueWood: "#797193",
  violet: "#a770ff",
  deluge: "#7f5b9d",
  trendyPink: "#8f75a3",
  perfume: "#DBA7F6",
  lavender: "#B07CE4",
  amethyst: "#9966CC",
  purpleBlackGradient: "linear-gradient(to top,  #121A26FF, #552A82FF);",
  blackPurpleGradient:
    "linear-gradient(0deg, rgba(85, 42, 130, 1) 0%, rgba(18, 26, 38, 1) 100%)",
  blackPurpleBlackGradient:
    "linear-gradient(0deg, rgba(18,26,38,1) 0%, rgba(53,28,78,1) 50%, rgba(18,26,38,1) 100%)",
  buttonDarkGradient: "linear-gradient(to right, #9d50bb, #6e48aa)",
  violetGradient: "linear-gradient(to right, #a770ff, #834d9b)",
  // ---lightTheme---
  sunshade: "#FF9E29",
  yellowOrange: "#FAB23D",
  onyx: "#2e3532ff",
  leather: "#A17B5E",
  gallery: "#EEEEEE",
  orange: "#FF8F1F",
  rajah: "#f9ad66",
  alabaster: "#E3E3E3",
  christine: "#DD560E",
  buttonLightGradient: "linear-gradient(to right, #f12711, #f5af19)",
  orangeGradient: "linear-gradient(to right, #c02425, #f0cb35)",
  lightOrangeGradient: "linear-gradient(to right, #ff512f, #f09819)",
} as const;

const common = {
  other: {
    inherit: "inherit",
  },
  breakpoints: {
    mobileMax: "767px",
    tabletVerticalMax: "991px",
    tabletHorMax: "1199px",
    laptopMax: "1400px",
  },
  boxShadow:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
  border: "1px solid #dddddd",
} as const;

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
    footer: {
      background: colorNames.white,
      wavesSVG: colorNames.sunshade,
      button: {
        background: colorNames.sunshade,
        text: colorNames.onyx,
      },
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
    moreAboutMe: {
      background: colorNames.white,
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
    aboutMePage: {
      background: colorNames.white,
      footer: colorNames.white,
      animations: colorNames.christine,
      title1: colorNames.yellowOrange,
      title2: colorNames.orange,
      title3: colorNames.christine,
      education: {
        additionalText: colorNames.emperorGray,
        listItemBG: common.other.inherit,
      },
    },
    contactPage: {
      background: colorNames.white,
      footer: colorNames.white,
      special: colorNames.yellowOrange,
      linkBorder: colorNames.emperorGray,
      modal: {
        background: colorNames.rajah,
        text: colorNames.onyx,
      },
    },
  },
} as const;

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
    footer: {
      background: colorNames.eminence,
      wavesSVG: colorNames.mirage,
      button: {
        background: colorNames.deluge,
        text: colorNames.platinum,
      },
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
      sectionBackground: colorNames.purpleBlackGradient,
      background: colorNames.buttonDarkGradient,
    },
    moreAboutMe: {
      background: colorNames.blackPurpleGradient,
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
      modalBackground: colorNames.purpleBlackGradient,
      keyboardInstruct: colorNames.lightGray,
      screenshotOutline: colorNames.violet,
      featureName: colorNames.white,
      techBackground: common.other.inherit,
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
    aboutMePage: {
      background: colorNames.blackPurpleBlackGradient,
      footer: colorNames.blackPurpleGradient,
      animations: colorNames.trendyPink,
      title1: colorNames.perfume,
      title2: colorNames.lavender,
      title3: colorNames.amethyst,
      education: {
        additionalText: colorNames.silverGray,
        listItemBG: colorNames.mirage,
      },
    },
    contactPage: {
      background: colorNames.mirage,
      footer: colorNames.blackPurpleGradient,
      special: colorNames.violet,
      linkBorder: colorNames.platinum,
      modal: {
        background: colorNames.deluge,
        text: colorNames.platinum,
      },
    },
  },
} as const;
