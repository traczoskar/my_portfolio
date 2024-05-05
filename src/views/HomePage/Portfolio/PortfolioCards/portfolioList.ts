import moviesBrowser from "../../../../assets/portfolio_moviesBrowser.png";
import taskList from "../../../../assets/portfolio_taskList.png";
import currencyConverter from "../../../../assets/portfolio_currencyConverter.png";
import personalHomepage from "../../../../assets/portfolio_personalHomepage.png";
import aiWeatherApp from "../../../../assets/portfolio_aiWeatherApp.png";
import portfolioPage from "../../../../assets/portfolio_portfolioPage.png";
import { Project } from "../../../../types/types";

export const projects: Project[] = [
  {
    route: "personal-homepage",
    label: "Personal Homepage",
    image: personalHomepage,
    icon: "🏠",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/personal_homepage",
    live: "https://traczoskar.github.io/personal_homepage/",
    description:
      "🗒 As a title suggest it's my personal homepage, a virtual CV👨🏻‍💻 You can find here information about me, showcase of my programming skills, what I want to learn, GitHub repositories and contact section.",
    features: [
      "About Me 🙋‍♂️: Interactive section featuring a profile photo and a brief introduction.",
      "Theme Switch 🌗: You can choose between using dark or light mode up to your preferences.",
      "Skillset 💪: Detailed list of my current tech skills.",
      " Learning Goals 🚀: A forward-looking section about skills I'm actively learning.",
      "GitHub Repositories 📁: Dynamic tiles populated with real-time data from my GitHub repositories using the GitHub API.",
      " Contact Section 📩: Footer section contains my social media links and my e-mail address.",
    ],
  },
  {
    route: "ai-weather-app",
    label: "AI - Weather App",
    image: aiWeatherApp,
    icon: "🌦️",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/weatherwise_ai",
    live: "https://traczoskar.github.io/weatherwise_ai/",
    description:
      "🌦️ AI - Weather App is a simple weather application that uses OpenWeatherMap API to fetch weather data for a given city. The app uses a pre-trained model from TensorFlow.js to predict the weather based on the current temperature.",
  },
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
  {
    route: "movies-browser",
    label: "Movies Browser",
    image: moviesBrowser,
    icon: "🎬",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/movies-browser",
    live: "https://olgacybulska.github.io/movies-browser/",
    description:
      "🎬 Movies Browser is a simple application that allows you to search for movies and view detailed information about them. The app uses The Movie Database API to fetch movie data.",
  },
  {
    route: "to-do-list",
    label: "To Do List",
    image: taskList,
    icon: "📝",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/to_do_list_react",
    live: "https://olgacybulska.github.io/to_do_list_react/",
    description:
      "📝 To Do List is a simple task management application that allows you to add, remove, and mark tasks as completed.",
  },
  {
    route: "currency-calculator",
    label: "Currency Calculator",
    image: currencyConverter,
    icon: "💵",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/currency_calculator_react",
    live: "https://olgacybulska.github.io/currency_calculator_react/",
    description:
      "💵 Currency Calculator is a simple application that allows you to convert currencies using the latest exchange rates fetched from the NBP API.",
  },
];
