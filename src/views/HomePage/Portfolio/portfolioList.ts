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
    label: {
      en: "AI - Weather App",
      pl: "AI - Aplikacja pogodowa",
    },
    image: aiWeatherApp,
    icon: "🌦️",
    description: {
      en: "🌦️ AI - Weather App is a cutting-edge application that uses OpenWeatherMap API to fetch weather data for a entered city name or your geolocation. It integrates with ChatGPT to offer personalized activity suggestions and attire recommendations, ensuring you're always prepared for the weather 🤖. With a user-friendly interface and dynamic updates, the app ensures a seamless experience across all devices 📱. Additionally, WeatherWise.ai includes features like air quality monitoring and a 5-day forecast, making it an essential tool for planning your day 🌫️.",
      pl: "🌦️ AI - Weather App to nowoczesna aplikacja, która wykorzystuje API OpenWeatherMap do pobierania danych pogodowych dla wprowadzonej nazwy miasta lub Twojej geolokalizacji. Integruje się z ChatGPT, aby oferować spersonalizowane sugestie dotyczące aktywności i rekomendacje dotyczące ubioru, zapewniając, że zawsze będziesz przygotowany na pogodę 🤖. Dzięki przyjaznemu interfejsowi użytkownika i dynamicznym aktualizacjom, aplikacja zapewnia przyjemne doświadczenia na wszystkich urządzeniach 📱. Dodatkowo, WeatherWise.ai zawiera funkcje takie jak monitorowanie jakości powietrza i prognozę na kolejne 5 dni, co czyni ją niezbędnym narzędziem do planowania dnia 🌫️.",
    },
    screenshots: aiWeatherAppScreenshots,
    features: {
      en: [
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
          content: "Plan ahead with a 5-day weather forecast",
        },
        {
          name: "🌗 Theme Switch",
          content:
            "Choose between dark or light mode of UI. By default the app will switch to the preferences set up by your system or your browsers settings",
        },
      ],
      pl: [
        {
          name: "📍 Dane pogodowe",
          content:
            "Uzyskaj aktualne dane pogodowe na podstawie swojej geolokalizacji i bądź pewny że zawsze wiesz, co dzieje się na zewnątrz",
        },
        {
          name: "🤖 Integracja z ChatGPT",
          content:
            "Otrzymuj dostosowane sugestie dotyczące aktywności i porady dotyczące ubioru od ChatGPT, dostosowane do aktualnych warunków pogodowych",
        },
        {
          name: "🌍 Zasięg globalny",
          content:
            "Niezależnie od tego, czy jesteś w swoim rodzinnym mieście, czy podróżujesz za granicę, WeatherWise.ai dostarcza dokładne prognozy pogody, gdziekolwiek jesteś",
        },
        {
          name: "🌐 Responsywny design",
          content:
            "Ciesz się bezproblemowym doświadczeniem na dowolnym urządzeniu dzięki responsywnemu interfejsowi napędzanemu przez Tailwindcss.",
        },
        {
          name: "🔄 Dynamiczne aktualizacje",
          content:
            "Dane pogodowe są stale odświeżane, aby zapewnić najaktualniejsze informacje, dzięki TanStack Query (React Query) do efektywnego zarządzania danymi",
        },
        {
          name: "📱 Przyjazny interfejs użytkownika",
          content:
            "Łatwo nawiguj po czystym, nowoczesnym interfejsie, który sprawia, że sprawdzanie pogody jest intuicyjne i szybkie",
        },
        {
          name: "🌫️ Indeks jakości powietrza",
          content:
            "Monitoruj jakość powietrza i obecność szkodliwych zanieczyszczeń w powietrzu",
        },
        {
          name: "📅 Prognoza na 5 dni",
          content: "Planuj z wyprzedzeniem dzięki prognozie pogody na 5 dni",
        },
        {
          name: "🌗 Zmiana motywu",
          content:
            "Wybierz między trybem ciemnym a jasnym interfejsu. Domyślnie aplikacja dostosuje się do preferencji ustawionych przez system lub przeglądarkę internetową lub ustawi tryb ciemny.",
        },
      ],
    },
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
    whatDidILearn: {
      en: [
        "🪝 During this project, I learned how to effectively use Make.com to create and manage webhooks, ensuring seamless integration with external services such as OpenAI API.",
        "🔧 Explored a variety of technologies, including React, TailwindCSS, and Vite, while integrating ChatGPT and OpenWeather API to create a comprehensive weather application.",
        "📊 Enhanced my skills in configuring responses from ChatGPT, ensuring that the AI provides relevant and personalized suggestions based on real-time weather data using properly prepared prompt.",
        "🌐 Utilized advanced tools like TanStack Query for dynamic data fetching and management, ensuring the app provides real-time, accurate weather information and a smooth user experience.",
      ],
      pl: [
        "🪝 Podczas tego projektu nauczyłem się efektywnie korzystać z Make.com do tworzenia i zarządzania webhookami, zapewniając bezproblemową integrację z zewnętrznymi usługami takimi jak OpenAI API.",
        "🔧 Zgłębiłem różnorodne technologie, w tym React, TailwindCSS i Vite, integrując ChatGPT oraz OpenWeather API, aby stworzyć kompleksową aplikację pogodową.",
        "📊 Udoskonaliłem swoje umiejętności w konfigurowaniu odpowiedzi od ChatGPT, zapewniając, że AI dostarcza odpowiednie i spersonalizowane sugestie na podstawie aktualnych danych pogodowych i odpowiednio przygotowanego prompta.",
        "🌐 Wykorzystałem zaawansowane narzędzia, takie jak TanStack Query, do dynamicznego pobierania i zarządzania danymi, zapewniając, że aplikacja dostarcza aktualne, dokładne informacje pogodowe i płynne doświadczenie użytkownika.",
      ],
    },
    repo: "https://github.com/traczoskar/ai_weather_app",
    live: "https://traczoskar.github.io/ai_weather_app",
  },
  //---Portfolio Page---
  {
    route: "my-portfolio",
    label: {
      en: "My Portfolio",
      pl: "Moje Portfolio",
    },
    image: myPortfolio,
    icon: "🎑",
    description: {
      en: "Welcome to MyPortfolio, the most advanced project I have worked on to date. This project has been a significant learning experience 🚀, particularly in building animations and routing using React Router. Additionally, I have implemented features such as theme switching 🌓 and language selection between Polish and English 🇵🇱🇬🇧. A considerable amount of effort went into creating a responsive design 📱. Users can explore a range of my projects, view their details and screenshots , find my contact information, links to LinkedIn and GitHub 🔗, read my short biography, see my IT skills, and view the certificates I have obtained, including those related to integrating applications with Generative AI and LLM models 🤖.",
      pl: "Witaj w Moim Portfolio, najbardziej zaawansowanym projekcie, nad którym do tej pory pracowałem. Ten projekt był znaczącym doświadczeniem edukacyjnym 🚀, zwłaszcza w zakresie tworzenia animacji i routingu za pomocą React Router. Ponadto zaimplementowałem funkcje takie jak zmiana motywu 🌓 i wybór języka między polskim i angielskim 🇵🇱🇬🇧. Dużo wysiłku włożyłem w stworzenie responsywnego designu 📱. Użytkownicy mogą zapoznać się z moimi projektami, zobaczyć ich szczegóły i zrzuty ekranu, znaleźć moje dane kontaktowe, linki do LinkedIn i GitHub 🔗, przeczytać moją krótką biografię, zobaczyć moje umiejętności IT oraz przejrzeć certyfikaty, które uzyskałem, w tym te związane z integracją aplikacji z Generative AI i modelami LLM 🤖.",
    },
    screenshots: myPortfolioScreenshots,
    features: {
      en: [
        {
          name: "Project Showcase 📂",
          content:
            "Explore a range of my most comprehensive projects, view their details, and screenshots",
        },
        {
          name: "Responsive Design 📱",
          content:
            "Enjoy a seamless experience on any device, thanks to a responsive interface",
        },
        {
          name: "Theme Switching 🌗",
          content:
            "Choose between dark and light themes to suit your preference",
        },
        {
          name: "Biography and Tech Stack 👤",
          content:
            "Learn about my background, IT skills, and the technologies I use",
        },
        {
          name: "Certificates 🏆",
          content:
            "Check out my certificates, including those related to Generative AI and LLM models",
        },
        {
          name: "Contact Page with Social Links 📞",
          content:
            "Find my contact information and links to my LinkedIn and GitHub profiles",
        },
        {
          name: "Language Selection 🌍",
          content:
            "Switch between Polish and English versions of the portfolio. Language selection is saved in local storage and will be remembered on your next visit.",
        },
      ],
      pl: [
        {
          name: "Prezentacja projektów 📂",
          content:
            "Zapoznaj się z moimi najbardziej kompleksowymi projektami, zobacz ich szczegóły i zrzuty ekranu",
        },
        {
          name: "Responsywny design 📱",
          content:
            "Ciesz się bezproblemowym doświadczeniem na dowolnym urządzeniu dzięki responsywnemu interfejsowi",
        },
        {
          name: "Zmiana motywu 🌗",
          content:
            "Wybierz między ciemnymi i jasnymi motywami, aby dostosować aplikację do swoich preferencji",
        },
        {
          name: "Biografia i umiejętności IT 👤",
          content:
            "Dowiedz się o mojej historii, umiejętnościach IT i technologiach, których używam",
        },
        {
          name: "Certyfikaty 🏆",
          content:
            "Sprawdź moje certyfikaty, w tym te związane z Generative AI i modelami LLM",
        },
        {
          name: "Strona kontaktowa z linkami społecznościowymi 📞",
          content:
            "Znajdź moje dane kontaktowe i linki do profili LinkedIn i GitHub",
        },
        {
          name: "Wybór języka 🌍",
          content:
            "Przełącz się między polską i angielską wersją portfolio. Wybór języka jest zapisywany w pamięci przeglądarki i będzie zapamiętany do Twojej kolejnej wizyty.",
        },
      ],
    },
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
    whatDidILearn: {
      en: [
        "🚀 Developing a comprehensive portfolio website using React.js and TypeScript, showcasing advanced project management and coding skills.",
        "🎨 Implementing advanced animations and transitions using Framer Motion, enhancing user experience and visual appeal.",
        "🌐 Mastering React Router for seamless navigation and routing within a single-page application.",
        "🌓 Creating a theme switching functionality, allowing users to toggle between light and dark modes.",
        "🇵🇱🇬🇧 Implementing multi-language support, enabling users to switch between Polish and English versions of the portfolio.",
        "📱 Designing and implementing a fully responsive layout that adapts to various screen sizes and devices.",
        "🖼️ Showcasing projects effectively by creating detailed project pages with screenshots and descriptions.",
      ],
      pl: [
        "🚀 Opracowanie kompleksowej strony portfolio przy użyciu React.js i TypeScript, prezentującej zaawansowane umiejętności zarządzania projektem i kodowania.",
        "🎨 Implementacja zaawansowanych animacji i przejść za pomocą Framer Motion, zwiększających atrakcyjność wizualną i doświadczenie użytkownika.",
        "🌐 Opanowanie React Router do bezproblemowej nawigacji i routingu w ramach aplikacji jednostronicowej.",
        "🌓 Stworzenie funkcjonalności zmiany motywu, pozwalającej użytkownikom przełączać się między trybami jasnym i ciemnym.",
        "🇵🇱🇬🇧 Implementacja obsługi wielu języków, umożliwiająca użytkownikom przełączanie się między polską i angielską wersją portfolio.",
        "📱 Projektowanie i implementacja w pełni responsywnego układu, który dostosowuje się do różnych rozmiarów ekranu i urządzeń.",
        "🖼️ Efektywne prezentowanie projektów poprzez tworzenie szczegółowych stron projektów z zrzutami ekranu i opisami.",
      ],
    },

    repo: "https://github.com/traczoskar/my_portfolio",
    live: "https://traczoskar.dev",
  },
  //---Movies Browser---
  {
    route: "movies-browser",
    label: {
      en: "Movies Browser",
      pl: "Przeglądarka filmów",
    },
    image: moviesBrowser,
    icon: "🎬",
    description: {
      en: "Our movie app is here to make your viewing experience awesome with some cool features. Use the search bar to find movies or people based on specific queries, making your search quick and easy 🔍. Check out a selection of popular movies right on our homepage for easy access. Dive into detailed info about any movie by selecting it from the list 🎬. Explore profiles of actors and crew to learn more about their work 👥. Move smoothly between sections for movies and people, making browsing a breeze. Enjoy enhanced navigation with pagination, using intuitive buttons like First, Previous, Next, and Last. Our interface gets interactive as you hover over elements, making it fun to use 🖱️. The app is responsive across all devices, from mobiles to tablets 📱. It handles loading sequences smoothly, ensuring an uninterrupted experience. Plus, it efficiently manages error notifications, keeping your interaction seamless even when issues arise 🆘. If your search yields no results, you'll see a clear information page 🚫.",
      pl: "Nasza aplikacja filmowa została stworzona, aby uczynić Twoje doświadczenie oglądania jeszcze lepszym dzięki wielu przydatnym funkcjom. Skorzystaj z paska wyszukiwania, aby szybko i łatwo znaleźć filmy lub osoby na podstawie konkretnych zapytań 🔍. Na stronie głównej znajdziesz wybór popularnych filmów, do których masz łatwy dostęp. Wybierając film z listy, możesz zagłębić się w szczegółowe informacje na jego temat 🎬. Poznaj profile aktorów i ekipy, aby dowiedzieć się więcej o ich pracy 👥. Płynnie przechodź między sekcjami filmów i osób, co sprawia, że przeglądanie jest przyjemne. Ciesz się ulepszoną nawigacją dzięki paginacji, korzystając z intuicyjnych przycisków takich jak Pierwsza, Poprzednia, Następna i Ostatnia. Nasz interfejs staje się interaktywny, gdy najeżdżasz na elementy, co sprawia, że korzystanie z aplikacji jest ciekawe 🖱️. Aplikacja jest responsywna na wszystkich urządzeniach, od telefonów komórkowych po tablety 📱. Płynnie obsługuje sekwencje ładowania, zapewniając nieprzerwane doświadczenie. Dodatkowo, efektywnie zarządza powiadomieniami o błędach, utrzymując płynność interakcji nawet w przypadku problemów 🆘. Jeśli Twoje wyszukiwanie nie przyniesie wyników, zobaczysz przejrzystą stronę z odpowiednią informacją 🚫.",
    },
    screenshots: moviesBrowserScreenshots,
    features: {
      en: [
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
      pl: [
        {
          name: "Lista popularnych filmów 🌟",
          content:
            "Zanurz się w starannie wybranym zestawie hitów filmowych, które są wyeksponowane na naszej głównej stronie, aby ułatwić dostęp.",
        },
        {
          name: "Szczegóły filmu 🎬",
          content:
            "Uzyskaj dogłębne informacje o filmach, wybierając dowolny tytuł z listy popularnych filmów, aby zobaczyć jego szczegółowe dane.",
        },
        {
          name: "Lista osób 👥",
          content:
            "Odkryj listę aktorów i członków ekipy filmowej oraz zagłęb się w ich profile, aby dowiedzieć się więcej o ich filmografii i szczegółach kariery.",
        },
        {
          name: "Szczegóły osób 🎭",
          content:
            "Przejdź do dedykowanych stron aktorów i członków ekipy, gdzie możesz odkryć szczegółowe informacje o ich karierach i wkładzie w filmy.",
        },
        {
          name: "Nawigacja 🚶",
          content:
            "Płynnie przechodź między różnymi sekcjami poświęconymi filmom i osobom, co umożliwia uporządkowane i kompleksowe przeglądanie.",
        },
        {
          name: "Paginacja 📄",
          content:
            "Ciesz się ulepszoną nawigacją dzięki paginacji. Nasza aplikacja wykorzystuje specyficzne dla stron parametry URL i oferuje intuicyjne przyciski nawigacyjne — Pierwsza, Poprzednia, Następna i Ostatnia — aby ułatwić poruszanie się po listach filmów i osób.",
        },
        {
          name: "Ulepszony interfejs użytkownika - stylizacja najechania 🖱️",
          content:
            "Nasz interfejs ożywa, gdy najeżdżasz na elementy takie jak filmy, aktorzy czy przyciski, zapewniając dynamiczną i angażującą interakcję użytkownika.",
        },
        {
          name: "Responsywność 📱",
          content:
            "Ciesz się spójnym i płynnym doświadczeniem na różnych urządzeniach, zapewniając, że aplikacja dostosowuje się elegancko od telefonów komórkowych po tablety.",
        },
        {
          name: "Strona ładowania ⏳",
          content:
            "Nasza aplikacja sprawnie zarządza sekwencjami ładowania, zapewniając płynne i nieprzerwane przeglądanie.",
        },
        {
          name: "Strona błędu 🆘",
          content:
            "Aplikacja efektywnie obsługuje powiadomienia o błędach, utrzymując płynność interakcji użytkownika nawet w przypadku nieoczekiwanych problemów.",
        },
        {
          name: "Strona braku wyników 🚫",
          content:
            "Gdy wyszukiwanie nie przyniesie wyników, zobaczysz przejrzystą i instruktażową stronę, która skutecznie poprowadzi Cię podczas poszukiwań filmów lub osób.",
        },
      ],
    },
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
    whatDidILearn: {
      en: [
        "💼 During this 5 week group project I learned the value of teamwork while collaborating on the Movies Browser, where coordination and communication between my colleagues were key to success.",
        "🛠 Explored a diverse tech stack alongside talented teammates, diving into React, Redux, and other cutting-edge technologies to create a feature-rich movie browsing experience.",
        "🌟 Gained insights into effective project management and division of tasks, ensuring smooth development cycles and delivering a polished product for cinephiles and tech enthusiasts alike.",
        "🚀 Leveraged various technologies like React, Redux, and Styled Components, coupled with integration of external APIs, to craft a seamless browsing experience and robust feature set.",
      ],
      pl: [
        "💼 Podczas tego 5-tygodniowego projektu grupowego nauczyłem się wartości pracy zespołowej, współpracując nad przeglądarką filmów, gdzie koordynacja i komunikacja między moimi kolegami były kluczem do sukcesu.",
        "🛠 Zgłębiłem różnorodny stos technologiczny obok utalentowanych kolegów, zagłębiając się w React, Redux i inne nowoczesne technologie, aby stworzyć bogate w funkcje doświadczenie przeglądania filmów.",
        "🌟 Poznałem skuteczne zarządzanie projektem i podział zadań, zapewniając płynne cykle rozwoju i dostarczając dopracowany produkt zarówno dla kinomanów, jak i entuzjastów technologii.",
        "🚀 Wykorzystałem różne technologie, takie jak React, Redux i Styled Components, w połączeniu z integracją zewnętrznych API, aby stworzyć płynne doświadczenie przeglądania i solidny zestaw funkcji.",
      ],
    },
    repo: "https://github.com/traczoskar/movies-browser",
    live: "https://olgacybulska.github.io/movies-browser/",
  },
  //---To Do List---
  {
    route: "to-do-list",
    label: {
      en: "To Do List",
      pl: "Lista zadań",
    },
    image: taskList,
    icon: "📝",
    description: {
      en: "To do list is a simple task assistant application developed using the React.js framework and TypeScript language. Whether you're going shopping or need to get things done, this app is your daily task assistant 🛒. It's designed to be simple, transparent, and minimalistic, making it easy and intuitive to use. The app responds quickly to user actions 🚀 and is versatile and universal in its application. It is also responsive on any device due to media queries 📱, ensuring a seamless experience across all platforms. The app features interactive buttons whose appearance depends on their current state, and it allows you to mark tasks as done, hide/show completed tasks, and mark all tasks as done with a single button ✅. Your task list is saved in local storage and fetched whenever you refresh the app or close the window 💽. You can download example tasks using a fetch shot from Redux-Saga, filter tasks by content using a search input, and check individual subpages for each task. The app includes two main pages built with ReactRouter: TaskList and Author 🪢.",
      pl: "Lista zadań to prosta aplikacja do zadań opracowana przy użyciu biblioteki React.js i języka TypeScript. Niezależnie od tego, czy idziesz na zakupy, czy musisz coś zrobić, ta aplikacja jest Twoim codziennym asystentem do zadań 🛒. Zaprojektowana jest tak, aby była prosta, przejrzysta i minimalistyczna, co sprawia, że jest łatwa i intuicyjna w użyciu. Aplikacja szybko reaguje na działania użytkownika 🚀 i jest wszechstronna i uniwersalna w zastosowaniu. Jest również responsywna na każdym urządzeniu dzięki media queries 📱, zapewniając płynne doświadczenie na wszystkich platformach. Aplikacja zawiera interaktywne przyciski, których wygląd zależy od ich aktualnego stanu, i pozwala oznaczać zadania jako wykonane, ukrywać/pokazywać zakończone zadania oraz oznaczać wszystkie zadania jako wykonane jednym przyciskiem ✅. Twoja lista zadań jest zapisywana w pamięci przeglądarki i pobierana za każdym razem, gdy odświeżasz aplikację lub zamykasz okno 💽. Możesz pobrać przykładowe zadania, korzystając z fetch shot z Redux-Saga, filtrować zadania według treści za pomocą pola wyszukiwania oraz sprawdzać poszczególne podstrony dla każdego zadania. Aplikacja zawiera dwie główne strony zbudowane za pomocą ReactRouter: TaskList i Author 🪢.",
    },
    screenshots: taskListScreenshots,
    features: {
      en: [
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
          content:
            "🔎 You can filter the tasks by content using a search input",
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
      pl: [
        {
          name: "Prosty design",
          content: "👨🏻‍🎨 Prosty, przejrzysty i minimalistyczny design",
        },
        {
          name: "Łatwość użycia",
          content: "👶 Łatwe i intuicyjne w użyciu",
        },
        {
          name: "Szybka reakcja",
          content:
            "🚀 Szybka reakcja na każdą akcję, którą użytkownik wykonuje za pomocą przycisków",
        },
        {
          name: "Uniwersalne zastosowanie",
          content: "👔 Uniwersalne i wszechstronne zastosowanie",
        },
        {
          name: "Responsywny design",
          content:
            "📱 Responsywna aplikacja na każdym urządzeniu dzięki media queries",
        },
        {
          name: "Interaktywne przyciski",
          content:
            "⏯ Przyciski są interaktywne, a ich wygląd zależy od aktualnego stanu",
        },
        {
          name: "Zarządzanie zadaniami",
          content:
            "✅ Możesz oznaczyć dowolne zadanie jako wykonane, ukryć/pokazać zakończone zadania oraz oznaczyć wszystkie wykonane jednym przyciskiem",
        },
        {
          name: "Lokalny magazyn",
          content:
            "💽 Twoja aktualna lista zadań jest zapisywana w lokalnym magazynie i pobierana za każdym razem, gdy odświeżasz aplikację lub zamykasz okno",
        },
        {
          name: "Przykładowe zadania",
          content:
            "⬇️ Możesz pobrać przykładowe zadania za pomocą fetch shot z Redux-Saga",
        },
        {
          name: "Filtrowanie zadań",
          content:
            "🔎 Możesz filtrować zadania według treści za pomocą pola wyszukiwania",
        },
        {
          name: "Indywidualne strony zadań",
          content:
            "📄 Możesz sprawdzić indywidualne podstrony dla każdego zadania",
        },
        {
          name: "Strony React Router",
          content:
            "🪢 Dwie główne strony zbudowane za pomocą ReactRouter: TaskList/Author",
        },
      ],
    },
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
    whatDidILearn: {
      en: [
        "🔥 Developing a task assistant application using React.js and TypeScript from scratch.",
        "💡 Implementing state management with Redux and handling side effects with Redux-Saga.",
        "⚒️ Utilizing React Hooks such as useState, useEffect, and useRef for managing component state and lifecycle.",
        "📱 Designing a responsive user interface that works seamlessly on any device using media queries.",
        "✅ Implementing local storage to persist tasks and ensuring data is fetched correctly upon app refresh or closure.",
      ],
      pl: [
        "🔥 Opracowanie aplikacji asystenta do zadań przy użyciu React.js i TypeScript od podstaw.",
        "💡 Implementacja zarządzania stanem za pomocą Redux i obsługi efektów ubocznych za pomocą Redux-Saga.",
        "⚒️ Wykorzystanie hooków React, takich jak useState, useEffect i useRef do zarządzania stanem i cyklem życia komponentu.",
        "📱 Projektowanie responsywnego interfejsu użytkownika, który działa bezproblemowo na każdym urządzeniu za pomocą media queries.",
        "✅ Implementacja lokalnego magazynu (pamięci przeglądarki) w celu zapisania listy zadań i zapewnienia poprawnego pobierania danych po odświeżeniu lub zamknięciu aplikacji.",
      ],
    },
    repo: "https://github.com/traczoskar/to_do_list_react",
    live: "https://traczoskar.github.io/to_do_list_react/",
  },
  //---Currency Calculator---
  {
    route: "currency-calculator",
    label: {
      en: "Currency Calculator",
      pl: "Kalkulator walut",
    },
    image: currencyConverter,
    icon: "💵",
    description: {
      en: 'Currency Calculator is a project developed using the React.js library, designed to function as a currency converter 💱. Upon launching the app, it fetches current exchange rates from an external API 🌐. Users can input an amount in PLN (Polish złoty), select from a variety of global currencies, and click the "Calculate" button to receive the converted amount. The application also features a real-time clock in the upper right corner 🕒 and displays the date of the current exchange rates above the calculate button 📅. The app is optimized for mobile devices 📱, includes animated elements such as the logo and buttons, and handles errors gracefully by displaying a special window if any issues occur 🚫.',
      pl: 'Kalkulator walut to projekt opracowany przy użyciu biblioteki React.js, zaprojektowany do funkcjonowania jako konwerter walut 💱. Po uruchomieniu aplikacja pobiera aktualne kursy wymiany z zewnętrznego API 🌐. Użytkownicy mogą wprowadzić kwotę w PLN (polski złoty), wybrać z różnych walut na całym świecie i kliknąć przycisk "Oblicz", aby otrzymać przeliczoną kwotę. Aplikacja wyświetla również zegar w czasie rzeczywistym w prawym górnym rogu 🕒 i datę aktualnych kursów wymiany powyżej przycisku obliczania 📅. Aplikacja jest zoptymalizowana dla urządzeń mobilnych 📱, zawiera animowane elementy, takie jak logo i przyciski, oraz elegancko obsługuje błędy, wyświetlając specjalne okno, jeśli wystąpią jakiekolwiek problemy 🚫.',
    },
    screenshots: currencyCalculatorScreenshots,
    features: {
      en: [
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
      pl: [
        {
          name: "Wysoki limit konwersji",
          content: "🔄 Łatwo przelicza PLN na kwotę do 10 000 000 000",
        },
        {
          name: "Wybór walut z całego świata",
          content:
            "🌍 Wybierz spośród wielu różnych walut z całego świata (pobranych z zewnętrznego API)",
        },
        {
          name: "Zegar w czasie rzeczywistym",
          content:
            "🕒 Aktualny czas i data są wyświetlane w prawym górnym rogu aplikacji",
        },
        {
          name: "Data aktualnego kursu wymiany",
          content:
            "📅 Aktualna data pobranych kursów wymiany jest wyświetlana powyżej przycisku obliczania",
        },
        {
          name: "Animowane logo aplikacji",
          content:
            "🎉 Aplikacja zawiera animowane logo dla dynamicznego doświadczenia użytkownika",
        },
        {
          name: "Interaktywny przycisk",
          content: "🎨 Przycisk obliczania jest animowany i interaktywny",
        },
        {
          name: "Animowane wyświetlanie wyników",
          content: "🎇 Wynik konwersji jest wyświetlany z animacjami",
        },
        {
          name: "Responsywność mobilna",
          content: "📱 Aplikacja jest dostosowana do urządzeń mobilnych",
        },
        {
          name: "Obsługa błędów",
          content: "❌ Jeśli wystąpi błąd, wyświetlone zostanie specjalne okno",
        },
        {
          name: "Animacja ładowania",
          content:
            "⏳ Wyświetlane jest animowane okno podczas pobierania danych",
        },
      ],
    },
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
    whatDidILearn: {
      en: [
        "💸 Building a currency converter using React.js from scratch, including setting up the development environment and deploying the app.",
        "🪝 Fetching real-time exchange rates from an external API and dynamically updating the available currency options.",
        "⚒️ Utilizing React's useState and useEffect hooks for managing component state and performing side effects.",
        "🤳 Designing a responsive user interface that works seamlessly on mobile devices.",
        "❌ Implementing error handling to display a special window if any issues occur during data fetching or conversion.",
      ],
      pl: [
        "💸 Budowanie kalkulatora walut przy użyciu React.js od podstaw, w tym konfiguracja środowiska deweloperskiego i wdrożenie aplikacji.",
        "🪝 Pobieranie kursów wymiany w czasie rzeczywistym z zewnętrznego API i dynamiczna aktualizacja dostępnych opcji walutowych.",
        "⚒️ Wykorzystanie hooków useState i useEffect w React do zarządzania stanem komponentu i obsługi efektów ubocznych.",
        "🤳 Projektowanie responsywnego interfejsu użytkownika, który działa bezproblemowo na urządzeniach mobilnych.",
        "❌ Implementacja obsługi błędów w celu wyświetlenia specjalnego okna w przypadku wystąpienia problemów podczas pobierania danych lub konwersji.",
      ],
    },
    repo: "https://github.com/traczoskar/currency_calculator_react",
    live: "https://traczoskar.github.io/currency_calculator_react/",
  },
  //---Personal Homepage---
  {
    route: "personal-homepage",
    label: {
      en: "Personal Homepage",
      pl: "Strona domowa",
    },
    image: personalHomepage,
    icon: "🏠",
    description: {
      en: "I created a dynamic personal homepage and virtual resume that showcases my skills and projects fetched directly from GitHub. 💻 It's built with cutting-edge web technologies like React.js, Redux Toolkit, and Styled Components for a seamless user experience. ⚛️ The project features an interactive about me section, theme switcher, skillset display, learning goals, and live GitHub repositories to present my professional profile comprehensively. 🌟 I included social media links and a contact section. 🔗 This cutting-edge portfolio website allows me to showcase my technical expertise, project achievements, and professional journey in an immersive and interactive manner.",
      pl: "Stworzyłem dynamiczną stronę domową i wirtualne CV, które prezentuje moje umiejętności i projekty pobrane bezpośrednio z GitHuba. 💻 Została zbudowana z wykorzystaniem najnowocześniejszych technologii internetowych, takich jak React.js, Redux Toolkit i Styled Components, zapewniając płynne doświadczenie użytkownika. ⚛️ Projekt zawiera interaktywną sekcję o mnie, przełącznik motywów, wyświetlanie zestawu umiejętności, cele rozwojowe oraz linki do demo i repozytoria GitHuba, aby kompleksowo przedstawić mój profil. 🌟 Dołączyłem linki do mediów społecznościowych i sekcję kontaktową. 🔗 Ta nowoczesna strona portfolio pozwala mi zaprezentować moje umiejętności techniczne, osiągnięcia projektowe i profesjonalną podróż w sposób wciągający i interaktywny.",
    },
    screenshots: personalHomepageScreenshots,
    features: {
      en: [
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
      pl: [
        {
          name: "O mnie 🙋‍♂️",
          content: "Interaktywna sekcja z profilem i krótkim wstępem.",
        },
        {
          name: "Przełącznik motywów 🌗",
          content:
            "Możesz wybrać między trybem ciemnym a jasnym zgodnie z preferencjami.",
        },
        {
          name: "Zestaw umiejętności 💪",
          content:
            "Szczegółowa lista moich obecnych umiejętności technicznych.",
        },
        {
          name: "Cele rozwojowe 🚀",
          content:
            "Przyszłościowa sekcja dotycząca umiejętności, których aktywnie się uczę.",
        },
        {
          name: "Repozytoria GitHuba 📁",
          content:
            "Dynamiczne kafelki z danymi w czasie rzeczywistym z moich repozytoriów GitHuba, korzystające z GitHub API.",
        },
        {
          name: "Sekcja kontaktowa 📩",
          content:
            "Sekcja stopki zawiera linki do moich mediów społecznościowych i mój adres e-mail.",
        },
      ],
    },
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
    whatDidILearn: {
      en: [
        "👨🏻‍💻 Crafted my own dynamic Personal Homepage and virtual version of my resume, flexing my skills in modern web development and showcasing my projects straight from GitHub.",
        "🌗 Learned how to make my site pop with interactive features like dark/light mode switch, real-time GitHub repository tiles, and a contact section for easy reach-out.",
        "🙌 Got hands-on with a stack of cool tools like React.js, Redux, Styled-components, and Figma, while also mastering error handling for smooth API integration.",
      ],
      pl: [
        "👨🏻‍💻 Stworzyłem własną dynamiczną stronę domową i wirtualne CV, prezentując swoje umiejętności w nowoczesnym tworzeniu stron internetowych i moje projekty prosto z GitHuba.",
        "🌗 Nauczyłem się, jak sprawić, aby moja strona wyróżniała się interaktywnymi funkcjami, takimi jak przełącznik trybu ciemnego/jasnego, dynamiczne kafelki repozytoriów GitHuba w czasie rzeczywistym oraz sekcja kontaktowa dla łatwego kontaktu.",
        "🙌 Pracowałem z zestawem nowoczesnych narzędzi, takich jak React.js, Redux, Styled-components i Figma, a także opanowałem obsługę błędów dla płynnej integracji z API.",
      ],
    },
    repo: "https://github.com/traczoskar/personal_homepage",
    live: "https://traczoskar.github.io/personal_homepage/",
  },
];
