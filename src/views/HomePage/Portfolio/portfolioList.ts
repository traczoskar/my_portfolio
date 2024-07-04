import moviesBrowser from "../../../assets/portfolio/portfolio_moviesBrowser.jpg";
import taskList from "../../../assets/portfolio/portfolio_taskList.jpg";
import currencyConverter from "../../../assets/portfolio/portfolio_currencyConverter.jpg";
import personalHomepage from "../../../assets/portfolio/portfolio_personalHomepage.jpg";
import aiWeatherApp from "../../../assets/portfolio/portfolio_aiWeatherApp.jpg";
import myPortfolio from "../../../assets/portfolio/portfolio_myPortfolio.jpg";
import { Project } from "../../../types/types";
import {
  aiWeatherAppScreenshots,
  currencyCalculatorScreenshots,
  moviesBrowserScreenshots,
  myPortfolioScreenshots,
  personalHomepageScreenshots,
  taskListScreenshots,
} from "./screenshotsStore";

export const projects: Project[] = [
  // ---AI Weather App---
  {
    route: "ai-weather-app",
    label: "AI - Weather App",
    image: aiWeatherApp,
    icon: "🌦️",
    description:
      "🌦️ AI - Weather App is a cutting-edge application that uses OpenWeatherMap API to fetch weather data for a entered city name or your geolocation. It integrates with ChatGPT to offer personalized activity suggestions and attire recommendations, ensuring you're always prepared for the weather 🤖. With a user-friendly interface and dynamic updates, the app ensures a seamless experience across all devices 📱. Additionally, WeatherWise.ai includes features like air quality monitoring and a detailed 5-day forecast, making it an essential tool for planning your day 🌫️.",
    screenshots: aiWeatherAppScreenshots,
    features: [
      {
        name: "📍 Weather Data",
        content:
          "Get real-time weather data based on your geolocation, ensuring you're always aware of what's outside",
      },
      {
        name: "🤖 ChatGPT Integration",
        content:
          "Receive tailored activity suggestions and dressing advice etc. from ChatGPT, customized to the current weather conditions",
      },
      {
        name: "🌍 Global Reach",
        content:
          "Whether you're in your hometown or traveling abroad, WeatherWise.ai delivers accurate weather forecasts wherever you are",
      },
      {
        name: "🌐 Responsive Design",
        content:
          "Enjoy a seamless experience on any device, thanks to a responsive interface powered by Tailwindcss and Vite",
      },
      {
        name: "🔄 Dynamic Updates",
        content:
          "Weather data is constantly refreshed to provide the most current information, powered by TanStack Query (React Query) for efficient data management",
      },
      {
        name: "📱 User-Friendly Interface",
        content:
          "Navigate easily through a clean, modern UI that makes weather checking intuitive and quick",
      },
      {
        name: "🌫️ Air Quality Index",
        content:
          "Monitor air quality and the presence of harmful pollutants in the air",
      },
      {
        name: "📅 5-Day Forecast",
        content: "Plan ahead with a detailed 5-day weather forecast",
      },
      {
        name: "🌗 Theme Switch",
        content:
          "Choose between dark or light mode of UI. By default the app will switch to the preferences set up by your system or your browsers settings",
      },
    ],
    tech: [
      "React",
      "OpenAI",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "TanStack Query",
      "Make.com",
      "Framer Motion",
      "Vite",
      "NPM",
    ],
    whatDidILearn: [
      "🪝 During this project, I learned how to effectively use Make.com to create and manage webhooks, ensuring seamless integration with external services.",
      "🔧 Explored a variety of technologies, including React, TailwindCSS, and Vite, while integrating ChatGPT and OpenWeather API to create a comprehensive weather application.",
      "📊 Enhanced my skills in configuring responses from ChatGPT, ensuring that the AI provides relevant and personalized suggestions based on real-time weather data.",
      "🌐 Utilized advanced tools like TanStack Query for dynamic data fetching and management, ensuring the app provides real-time, accurate weather information and a smooth user experience.",
    ],
    repo: "https://github.com/traczoskar/ai_weather_app",
    live: "https://traczoskar.github.io/ai_weather_app",
  },
  //---Portfolio Page---
  {
    route: "my-portfolio",
    label: "My Portfolio",
    image: myPortfolio,
    icon: "🎑",
    description:
      "📁 My Portfolio is a showcase of my projects. It's a single-page application that allows you to view detailed information about each project, including a description, features, and technologies used.",
    screenshots: myPortfolioScreenshots,
    tech: [
      "React",
      "TypeScript",
      "JavaScript ES6+",
      "React Router",
      "Redux",
      "Styled Components",
      "Create React App",
      "HTML5",
      "CSS3",
      "NPM",
      "Framer Motion",
    ],
    repo: "https://github.com/traczoskar/my_portfolio",
    live: "https://traczoskar.dev",
  },
  //---Movies Browser---
  {
    route: "movies-browser",
    label: "Movies Browser",
    image: moviesBrowser,
    icon: "🎬",
    description:
      "Our movie app is here to make your viewing experience awesome with some cool features. Use the search bar to find movies or people based on specific queries, making your search quick and easy 🔍. Check out a selection of popular movies right on our homepage for easy access. Dive into detailed info about any movie by selecting it from the list 🎬. Explore profiles of actors and crew to learn more about their work 👥. Move smoothly between sections for movies and people, making browsing a breeze. Enjoy enhanced navigation with pagination, using intuitive buttons like First, Previous, Next, and Last. Our interface gets interactive as you hover over elements, making it fun to use 🖱️. The app is responsive across all devices, from mobiles to tablets 📱. It handles loading sequences smoothly, ensuring an uninterrupted experience. Plus, it efficiently manages error notifications, keeping your interaction seamless even when issues arise 🆘. If your search yields no results, you'll see a clear page guiding you on what to do next 🚫.",
    screenshots: moviesBrowserScreenshots,
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
      "React Router",
      "Create React App",
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
  //---To Do List---
  {
    route: "to-do-list",
    label: "To Do List",
    image: taskList,
    icon: "📝",
    description:
      "To do list is a simple task assistant application developed using the React.js framework and TypeScript language. Whether you're going shopping or need to get things done, this app is your daily task assistant 🛒. It's designed to be simple, transparent, and minimalistic, making it easy and intuitive to use. The app responds quickly to user actions 🚀 and is versatile and universal in its application. It is also responsive on any device due to media queries 📱, ensuring a seamless experience across all platforms. The app features interactive buttons whose appearance depends on their current state, and it allows you to mark tasks as done, hide/show completed tasks, and mark all tasks as done with a single button ✅. Your task list is saved in local storage and fetched whenever you refresh the app or close the window 💽. You can download example tasks using a fetch shot from Redux-Saga, filter tasks by content using a search input, and check individual subpages for each task. The app includes two main pages built with ReactRouter: TaskList and Author 🪢.",
    screenshots: taskListScreenshots,
    features: [
      {
        name: "Simple Design",
        content: "👨🏻‍🎨 Simple, transparent, and minimalistic design",
      },
      {
        name: "Ease of Use",
        content: "👶 Easy and intuitive to use",
      },
      {
        name: "Quick Response",
        content:
          "🚀 Quick response to every action that user takes with the buttons",
      },
      {
        name: "Versatile Application",
        content: "👔 Versatile and universal application",
      },
      {
        name: "Responsive Design",
        content: "📱 Responsive on any device due to media queries",
      },
      {
        name: "Interactive Buttons",
        content:
          "⏯ Buttons are interactive and their appearance depends on the actual state",
      },
      {
        name: "Task Management",
        content:
          "✅ You can mark any task as done, hide/show done tasks, and mark all done with one button",
      },
      {
        name: "Local Storage",
        content:
          "💽 Your actual task list is saved in your local storage and fetched whenever you refresh the app or close the window",
      },
      {
        name: "Example Tasks",
        content:
          "⬇️ You can download example tasks using fetch shot from Redux-Saga",
      },
      {
        name: "Task Filtering",
        content: "🔎 You can filter the tasks by content using a search input",
      },
      {
        name: "Individual Task Pages",
        content: "📄 You can check individual subpages for every task",
      },
      {
        name: "React Router Pages",
        content: "🪢 Two main pages built with ReactRouter: TaskList/Author",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "JavaScript ES6+",
      "Redux",
      "Redux Saga",
      "React Router",
      "Styled Components",
      "Create React App",
      "HTML5",
      "CSS3",
      "NPM",
    ],
    whatDidILearn: [
      "🔥 Developing a task assistant application using React.js and TypeScript from scratch.",
      "💡 Implementing state management with Redux and handling side effects with Redux-Saga.",
      "⚒️ Utilizing React Hooks such as useState, useEffect, and useRef for managing component state and lifecycle.",
      "📱 Designing a responsive user interface that works seamlessly on any device using media queries.",
      "✅ Implementing local storage to persist tasks and ensuring data is fetched correctly upon app refresh or closure.",
    ],
    repo: "https://github.com/traczoskar/to_do_list_react",
    live: "https://traczoskar.github.io/to_do_list_react/",
  },
  //---Currency Calculator---
  {
    route: "currency-calculator",
    label: "Currency Calculator",
    image: currencyConverter,
    icon: "💵",
    description:
      'Currency Calculator is a demo project developed using the React.js library, designed to function as a currency converter 💱. Upon launching the app, it fetches current exchange rates from an external API 🌐. Users can input an amount in PLN (Polish złoty), select from a variety of global currencies, and click the "Calculate" button to receive the converted amount. The application also features a real-time clock in the upper right corner 🕒 and displays the date of the current exchange rates above the calculate button 📅. The app is optimized for mobile devices 📱, includes animated elements such as the logo and buttons, and handles errors gracefully by displaying a special window if any issues occur 🚫.',
    screenshots: currencyCalculatorScreenshots,
    features: [
      {
        name: "High Conversion Limit",
        content: "🔄 Easily converts PLN up to an amount of 10,000,000,000",
      },
      {
        name: "Global Currency Selection",
        content:
          "🌍 Choose from many different currencies from all over the world (downloaded from an external API)",
      },
      {
        name: "Real-Time Clock",
        content:
          "🕒 The actual time and date are displayed in the upper right corner of the app",
      },
      {
        name: "Current Exchange Rate Date",
        content:
          "📅 The current date of downloaded exchange rates is shown above the calculate button",
      },
      {
        name: "Animated App Logo",
        content:
          "🎉 The app features an animated logo for a dynamic user experience",
      },
      {
        name: "Interactive Button",
        content: "🎨 The calculate button is animated and interactive",
      },
      {
        name: "Animated Result Display",
        content: "🎇 The conversion result is displayed with animations",
      },
      {
        name: "Mobile Responsiveness",
        content: "📱 The app is adapted to be responsive on mobile devices",
      },
      {
        name: "Error Handling",
        content: "❌ A special window is rendered if any error occurs",
      },
      {
        name: "Loading Animation",
        content:
          "⏳ An animated window is displayed while data is being fetched",
      },
    ],
    tech: [
      "React",
      "JavaScript ES6+",
      "Styled Components",
      "Create React App",
      "HTML5",
      "CSS3",
      "NPM",
      "Axios",
    ],
    whatDidILearn: [
      "💸 Building a powerful currency converter using React.js from scratch, including setting up the development environment and deploying the app.",
      "🪝 Fetching real-time exchange rates from an external API and dynamically updating the available currency options.",
      "⚒️ Utilizing React's useState and useEffect hooks for managing component state and performing side effects.",
      "🤳 Designing a responsive user interface that works seamlessly on mobile devices.",
      "❌ Implementing error handling to display a special window if any issues occur during data fetching or conversion.",
    ],
    repo: "https://github.com/traczoskar/currency_calculator_react",
    live: "https://traczoskar.github.io/currency_calculator_react/",
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
      "👨🏻‍💻 Crafted my own dynamic Personal Homepage and CV, flexing my skills in modern web development and showcasing my projects straight from GitHub.",
      "🌗 Learned how to make my site pop with interactive features like dark/light mode switch, real-time GitHub repository tiles, and a contact section for easy reach-out.",
      "🙌 Got hands-on with a stack of cool tools like React.js, Redux, Styled-components, and Figma, while also mastering error handling for smooth API integration.",
    ],
    repo: "https://github.com/traczoskar/personal_homepage",
    live: "https://traczoskar.github.io/personal_homepage/",
  },
];
