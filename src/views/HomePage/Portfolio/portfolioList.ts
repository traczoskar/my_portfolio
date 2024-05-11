import moviesBrowser from "../../../assets/portfolio/portfolio_moviesBrowser.png";
import taskList from "../../../assets/portfolio/portfolio_taskList.png";
import currencyConverter from "../../../assets/portfolio/portfolio_currencyConverter.png";
import personalHomepage from "../../../assets/portfolio/portfolio_personalHomepage.png";
import aiWeatherApp from "../../../assets/portfolio/portfolio_aiWeatherApp.png";
import portfolioPage from "../../../assets/portfolio/portfolio_portfolioPage.png";
import { Project } from "../../../types/types";
import { personalHomepageScreenshots } from "./screenshotsStore";

export const projects: Project[] = [
  //---Movies Browser---
  {
    route: "movies-browser",
    label: "Movies Browser",
    image: moviesBrowser,
    icon: "🎬",
    description:
      "🎥 This app will let you discover most popular movies, search actual info about them, the ratings and their cast. To use it just type in the name of movie or person and find out the details. This app is built with React.js ⚛️ and uses data provided by connection with outer API.",
    features: [
      {
        name: "Search Functionality 🔍",
        content:
          "Use the search bar to find movies or people based on specific query parameters, making your exploration targeted and efficient.",
      },
      {
        name: "Popular Movie List 🌟",
        content:
          "Delve into a handpicked selection of hit movies featured prominently on our main homepage for easy access.",
      },
      {
        name: "Movie Details 🎬",
        content:
          "Get an in-depth look at movies by selecting any title from the popular lists to view its comprehensive details.",
      },
      {
        name: "People List 👥",
        content:
          "Uncover a roster of actors or crew and dive into individual profiles to learn more about their filmography and details.",
      },
      {
        name: "People Details 🎭",
        content:
          "Delve into dedicated pages for actors and crew where you can explore extensive details about their careers and film contributions.",
      },
      {
        name: "Navigation 🚶",
        content:
          "Effortlessly move between distinct sections dedicated to movies and people, enabling a structured and comprehensive browsing experience.",
      },
      {
        name: "Pagination 📄",
        content:
          "Experience enhanced navigation with pagination. Our app incorporates page-specific URL parameters and offers intuitive navigation buttons—First, Previous, Next, and Last—to streamline your journey through Movie and People Lists.",
      },
      {
        name: "Enhanced UI - Hover Styling 🖱️",
        content:
          "Our interface comes alive as you hover over elements like movies, actors, or buttons, providing a dynamic and engaging user interaction.",
      },
      {
        name: "Responsiveness 📱",
        content:
          "Enjoy a consistent and fluid experience across a variety of devices, ensuring the app adapts gracefully from mobiles to tablets.",
      },
      {
        name: "Loading Page ⏳",
        content:
          "Our app adeptly manages loading sequences, ensuring a smooth and uninterrupted browsing experience.",
      },
      {
        name: "Error Page 🆘",
        content:
          "It also handles error notifications efficiently, maintaining a seamless user interaction even when unexpected issues arise.",
      },
      {
        name: "No Results Page 🚫",
        content:
          "Encounter a clear and instructive page when searches yield no results, designed to guide users effectively during their quest for movies or people.",
      },
    ],
    tech: [
      "React",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Styled Components",
      "Redux",
      "Redux Saga",
      "Figma",
      "NPM",
    ],
    whatDidILearn: [
      "💼 During this 5 week group project I learned the value of teamwork while collaborating on the Movies Browser, where coordination and communication between my colleagues were key to success.",
      "🛠 Explored a diverse tech stack alongside talented teammates, diving into React, Redux, and other cutting-edge technologies to create a feature-rich movie browsing experience.",
      "🌟 Gained insights into effective project management and division of tasks, ensuring smooth development cycles and delivering a polished product for cinephiles and tech enthusiasts alike.",
      "🚀 Leveraged various technologies like React, Redux, and Styled Components, coupled with integration of external APIs, to craft a seamless browsing experience and robust feature set.",
    ],
    repo: "https://github.com/traczoskar/movies-browser",
    live: "https://olgacybulska.github.io/movies-browser/",
  },
  //---AI Weather App---
  // {
  //   route: "ai-weather-app",
  //   label: "AI - Weather App",
  //   image: aiWeatherApp,
  //   icon: "🌦️",
  //   description:
  //     "🌦️ AI - Weather App is a simple weather application that uses OpenWeatherMap API to fetch weather data for a given city. The app uses a pre-trained model from TensorFlow.js to predict the weather based on the current temperature.",
  //   tech: [
  //     "React",
  //     "OpenAI",
  //     "TypeScript",
  //     "JavaScript ES6+",
  //     "HTML5",
  //     "CSS3",
  //     "Tailwind CSS",
  //     "Redux",
  //     "Redux Saga",
  //     "Vite",
  //     "NPM",
  //   ],

  //   repo: "https://github.com/traczoskar/weatherwise_ai",
  //   live: "https://traczoskar.github.io/weatherwise_ai/",
  // },
  //---Portfolio Page---
  {
    route: "portfolio-page",
    label: "Portfolio Page",
    image: portfolioPage,
    icon: "📁",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/portfolio_traczoskar",
    live: "https://traczoskar.dev",
    description:
      "📁 Portfolio Page is a showcase of my projects. It's a single-page application that allows you to view detailed information about each project, including a description, features, and technologies used.",
  },
  //---To Do List---
  {
    route: "to-do-list",
    label: "To Do List",
    image: taskList,
    icon: "📝",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/to_do_list_react",
    live: "https://traczoskar.github.io/to_do_list_react/",
    description:
      "📝 To Do List is a simple task management application that allows you to add, remove, and mark tasks as completed.",
  },
  //---Currency Calculator---
  {
    route: "currency-calculator",
    label: "Currency Calculator",
    image: currencyConverter,
    icon: "💵",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/currency_calculator_react",
    live: "https://traczoskar.github.io/currency_calculator_react/",
    description:
      "💵 Currency Calculator is a simple application that allows you to convert currencies using the latest exchange rates fetched from the NBP API.",
  },
  //---Personal Homepage---
  {
    route: "personal-homepage",
    label: "Personal Homepage",
    image: personalHomepage,
    icon: "🏠",
    description:
      "I created a dynamic personal homepage and virtual CV that showcases my skills and projects fetched directly from GitHub. 💻 It's built with cutting-edge web technologies like React.js, Redux Toolkit, and Styled Components for a seamless user experience. ⚛️ The project features an interactive about me section, theme switcher, skillset display, learning goals, and live GitHub repositories to present my professional profile comprehensively. 🌟 I included social media links and a contact section. 🔗 This cutting-edge portfolio website allows me to showcase my technical expertise, project achievements, and professional journey in an immersive and interactive manner. It's a cool way to put myself out there and let people explore my work and background.",
    screenshots: personalHomepageScreenshots,
    features: [
      {
        name: "About Me 🙋‍♂️",
        content:
          "Interactive section featuring a profile photo and a brief introduction.",
      },
      {
        name: "Theme Switch 🌗",
        content:
          "You can choose between using dark or light mode up to your preferences.",
      },
      {
        name: "Skillset 💪",
        content: "Detailed list of my current tech skills.",
      },
      {
        name: "Learning Goals 🚀",
        content:
          "A forward-looking section about skills I'm actively learning.",
      },
      {
        name: "GitHub Repositories 📁",
        content:
          "Dynamic tiles populated with real-time data from my GitHub repositories using the GitHub API.",
      },
      {
        name: "Contact Section 📩",
        content:
          "Footer section contains my social media links and my e-mail address.",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Styled Components",
      "Redux",
      "Redux Saga",
      "Axios",
      "Figma",
      "GitHub API",
      "NPM",
    ],
    whatDidILearn: [
      "🚀 Crafted my own dynamic Personal Homepage and CV, flexing my skills in modern web development and showcasing my projects straight from GitHub.",
      "💡 Learned how to make my site pop with interactive features like dark/light mode switch, real-time GitHub repository tiles, and a contact section for easy reach-out.",
      "⚒️ Got hands-on with a stack of cool tools like React.js, Redux, Styled-components, and Figma, while also mastering error handling for smooth API integration.",
    ],
    repo: "https://github.com/traczoskar/personal_homepage",
    live: "https://traczoskar.github.io/personal_homepage/",
  },
];
