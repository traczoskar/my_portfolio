import avatar from "../../assets/avatar.jpg";
import youCodeCertificate from "../../assets/certificates/youcode.jpg";
import aiDevsCertificate from "../../assets/certificates/ai_devs.jpg";
import typeScriptLogo from "../../assets/technologies/type_script.png";

interface AboutData {
  name: string;
  surname: string;
  title: string;
  description: {
    EN: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
    PL: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
  };
  avatar: string;
  techStack: string[];
  education: {
    name: string;
    organization: string;
    date: string;
    content: {
      EN: string;
      PL: string;
    };
    certificate?: string | undefined;
    techLogo?: string;
  }[];
  email: string;
  socials: {
    name: string;
    url: string;
  }[];
}

export const ABOUT: AboutData = {
  name: "Oskar",
  surname: "Tracz",
  title: "Frontend Developer",
  description: {
    EN: {
      paragraph1:
        "For nearly 8 years, I've been running my own businesses: a recording studio and a graphic design company. This journey has taught me a lot about working with clients, staying disciplined, and delivering high-quality projects. I've also gained valuable experience in hiring and managing employees, which has broadened my perspective on teamwork and leadership.",
      paragraph2:
        "Despite the success and stability of my businesses, I recently discovered a new passion: web application development. Over the past 1.5 years, I've been diving deep into frontend development, driven by a desire to keep growing and exploring new technologies. I've completed a comprehensive Frontend Developer course, where I learned about React, JavaScript, HTML, CSS, Responsive Web Design (RWD), Redux, TypeScript, Git, GitHub, Redux-Saga, and RESTful APIs. Additionally, I've specialized in building applications integrated with Large Language Models (LLMs) like Chat GPT-4, and have explored Generative AI, vector databases, function calling, and API queries.",
      paragraph3:
        "While I started my journey with formal courses, I now continue to expand my programming knowledge independently. My background as an entrepreneur has given me a strong sense of responsibility, the ability to meet deadlines, and excellent client communication skills. I'm a team player, ready to share knowledge and collaborate with others.",
      paragraph4:
        "I'm now looking for opportunities in the IT industry to further develop my skills and contribute to exciting projects. My goal is to expand my expertise to become a FullStack Developer and bring my commercial application ideas, including SaaS models, to life. I'm excited about this new chapter and am committed to making a meaningful impact in the tech world.",
    },
    PL: {
      paragraph1:
        "Od prawie 8 lat prowadzę własne firmy: studio nagrań i firmę zajmującą się grafiką. Ta podróż nauczyła mnie wiele o pracy z klientami, zachowaniu dyscypliny i dostarczaniu wysokiej jakości projektów. Zdobyłem również cenne doświadczenie w zatrudnianiu i zarządzaniu pracownikami, co poszerzyło mój punkt widzenia na temat pracy zespołowej i przywództwa.",
      paragraph2:
        "Mimo sukcesu i stabilności moich firm, niedawno odkryłem nową pasję: rozwijanie aplikacji internetowych. W ciągu ostatnich 1,5 roku zagłębiłem się w rozwój frontendu, napędzany chęcią ciągłego rozwoju i eksploracji nowych technologii. Ukończyłem kompleksowy kurs Frontend Developer, w którym nauczyłem się React, JavaScript, HTML, CSS, Responsive Web Design (RWD), Redux, TypeScript, Git, GitHub, Redux-Saga i RESTful APIs. Dodatkowo specjalizuję się w budowaniu aplikacji zintegrowanych z dużymi modelami językowymi (LLM) takimi jak Chat GPT-4, oraz eksplorowałem Generative AI, bazy wektorowe, wywoływanie funkcji i zapytania API.",
      paragraph3:
        "Początkowo swoją przygodę z programowaniem zacząłem od formalnych kursów, obecnie jednak kontynuuję samodzielną rozbudowę wiedzy programistycznej. Moje doświadczenie jako przedsiębiorcy dało mi silne poczucie odpowiedzialności, umiejętność dotrzymywania terminów i doskonałe umiejętności komunikacji z klientami. Jestem graczem zespołowym, gotowym do dzielenia się wiedzą i współpracy z innymi.",
      paragraph4:
        "Obecnie szukam możliwości w branży IT, aby dalej rozwijać swoje umiejętności i przyczyniać się do ekscytujących projektów. Moim celem jest poszerzenie swojej wiedzy, aby stać się FullStack Developerem i wprowadzić w życie moje komercyjne pomysły na aplikacje, w tym modele SaaS. Jestem podekscytowany tym nowym rozdziałem i zobowiązany do wywierania znaczącego wpływu w świecie technologii.",
    },
  },
  avatar: avatar,
  techStack: [
    "OpenAI",
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
    "GitHub",
    "NPM",
    "Tailwind CSS",
    "Vite",
    "React Router",
    "Make.com",
    "Framer Motion",
    "TanStack Query",
    "Create React App",
  ],
  education: [
    {
      name: "Frontend Developer Course",
      organization: "YouCode.pl",
      date: "25.04.2024",
      content: {
        EN: "The course covered topics from the basics to advanced concepts of HTML, CSS, JavaScript, React, and Redux. I learned how to create responsive websites and web applications. Additionally, I mastered using Git and GitHub to manage my projects. I completed the course with a final 5-week group project that not only showcased my skills but also honed my teamwork abilities. Throughout the course, I also gained knowledge of best practices in programming and tools for testing and debugging code. Thanks to this course, I feel confident in creating modern and functional web applications.",
        PL: "Kurs obejmował tematy od podstaw do zaawansowanych koncepcji HTML, CSS, JavaScript, React i Redux. Nauczyłem się, jak tworzyć responsywne strony internetowe i aplikacje internetowe. Dodatkowo opanowałem korzystanie z Gita i GitHuba do zarządzania moimi projektami. Ukończyłem kurs z 5-tygodniowym projektem grupowym, który nie tylko pokazał moje umiejętności, ale także doskonalił moje zdolności zespołowe. Przez cały kurs zdobyłem również wiedzę na temat najlepszych praktyk programistycznych i narzędzi do testowania i debugowania kodu. Dzięki temu kursowi czuję się pewnie w tworzeniu nowoczesnych i funkcjonalnych aplikacji internetowych.",
      },
      certificate: youCodeCertificate,
    },
    {
      name: "TypeScript",
      organization: "YouCode.pl",
      date: "25.04.2024",
      content: {
        EN: "The course covered the knowledge of TypeScript and how to use it with React. I learned how to create type-safe applications and how to use TypeScript to improve my code quality. It contained topics like types, interfaces, generics, and advanced TypeScript features.",
        PL: "Kurs obejmował wiedzę na temat TypeScript i jak go używać z Reactem. Nauczyłem się, jak tworzyć aplikacje bezpieczne typów i jak używać TypeScriptu do poprawy jakości mojego kodu. Zawierał tematy takie jak typy, interfejsy, generyki i zaawansowane funkcje TypeScriptu.",
      },
      techLogo: typeScriptLogo,
    },
    {
      name: "Connect GPT-4 with application and automation logic",
      organization: "AI_devs",
      date: "22.04.2024",
      content: {
        EN: "The course covered the basics of AI and how to connect it with web applications. I learned how to connect Generative AI with application logic and automatization tools. I completed the course by solving many tasks and creating a personal AI assistant that can help me in multiple ways. I also learned how to use OpenAI API and how to decide when to use AI in my projects. We trained prompt engineering and how to use AI in a responsible way. We also skilled techniques like function calling, building dynamic context and prompts, using vector bases like Qdrant/Pinecone for multiple ways and fine-tuning of models.",
        PL: "Kurs obejmował podstawy AI i jak połączyć ją z aplikacjami internetowymi. Nauczyłem się, jak połączyć Generative AI z logiką aplikacji i narzędziami automatyzacji. Ukończyłem kurs, rozwiązując wiele zadań i tworząc osobistego asystenta AI, który może pomóc mi w wielu dziedzinach. Nauczyłem się również, jak korzystać z OpenAI API i jak decydować, kiedy używać AI w moich projektach. Trenowaliśmy inżynierię promptów i jak używać AI w odpowiedzialny sposób. Poznaliśmy techniki takie jak wywoływanie funkcji, budowanie dynamicznego kontekstu i promptów, korzystanie z baz wektorowych, takich jak Qdrant/Pinecone w wielu dziedzinach i dostrojenie modeli.",
      },
      certificate: aiDevsCertificate,
    },
  ],
  email: "contact@traczoskar.dev",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/traczoskar",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/traczoskar/",
    },
  ],
};
