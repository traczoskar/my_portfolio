import avatar from "../../assets/avatar.jpg";
import youCodeCertificate from "../../assets/certificates/youcode.jpg";
import aiDevsCertificate from "../../assets/certificates/ai_devs.jpg";
import typeScriptLogo from "../../assets/technologies/type_script.png";
import nodeJSCertificate from "../../assets/certificates/nodejs.jpeg";
import mongoDBCertificate from "../../assets/certificates/mongoDB.png";

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
    certificate?: {
      url: string | undefined;
      alt: {
        en: string;
        pl: string;
      };
    };
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
        "Despite the success and stability of my businesses, I recently came back to my old passion: web application development. Over the past 1.5 years, I've been diving deep into frontend development, driven by a desire to keep growing and exploring new technologies. I've completed a comprehensive Frontend Developer course, where I learned about React, JavaScript, HTML, CSS, Responsive Web Design (RWD), Redux, TypeScript, Git, GitHub, Redux-Saga, and RESTful APIs. Additionally, I've specialized in building applications integrated with Large Language Models (LLMs) like Chat GPT-4, and have explored Generative AI, vector databases, function calling, and API queries.",
      paragraph3:
        "While I started my journey with formal courses, I now continue to expand my programming knowledge independently. My background as an entrepreneur has given me a strong sense of responsibility, the ability to meet deadlines, and excellent client communication skills. I'm a team player, ready to share knowledge and collaborate with others.",
      paragraph4:
        "I'm now looking for opportunities in the IT industry to further develop my skills and contribute to exciting projects. My goal is to expand my expertise to become a Full Stack Developer and bring my commercial application ideas, including SaaS models, to life. I'm excited about this new chapter and am committed to making a meaningful impact in the tech world.",
    },
    PL: {
      paragraph1:
        "Od prawie 8 lat prowadzę swoje własne firmy: studio nagrań i firmę graficzną. Ta przygoda nauczyła mnie wiele o pracy z klientami, trzymaniu dyscypliny i dostarczaniu projektów na najwyższym poziomie. Zdobyłem też cenne doświadczenie w zatrudnianiu i zarządzaniu pracownikami, co poszerzyło moje spojrzenie na pracę zespołową i przywództwo.",
      paragraph2:
        "Pomimo sukcesu i stabilności moich firm, niedawno wróciłem do swojej dawnej pasji: tworzenia aplikacji internetowych. Przez ostatnie 1,5 roku intensywnie zgłębiałem dziedzinę frontendu, napędzany chęcią ciągłego rozwoju i poznawania nowych technologii. Ukończyłem kompleksowy kurs Frontend Developer, gdzie nauczyłem się Reacta, JavaScriptu, HTML, CSS, Responsive Web Design (RWD), Redux, TypeScript, Git, GitHub, Redux-Saga i RESTful APIs. Dodatkowo, specjalizuję się w budowaniu aplikacji zintegrowanych z dużymi modelami językowymi (LLM) jak Chat GPT-4, eksploruję również Generative AI, wektorowe bazy danych, function calling i zapytania API.",
      paragraph3:
        "Początkowo swoją przygodę z programowaniem zacząłem od formalnych kursów, teraz jednak kontynuuję poszerzanie wiedzy programistycznej samodzielnie. Moje doświadczenie jako przedsiębiorca dało mi silne poczucie odpowiedzialności, umiejętność dotrzymywania terminów i doskonałe umiejętności komunikacji z klientami. Jestem graczem zespołowym, gotowym do dzielenia się wiedzą i współpracy z innymi.",
      paragraph4:
        "Obecnie szukam możliwości w branży IT, aby dalej rozwijać swoje umiejętności i współpracować przy nowoczesnych projektach. Moim celem jest poszerzenie swojej wiedzy, aby stać się Full Stack Developerem i wprowadzić w życie moje komercyjne pomysły na aplikacje, w tym modele SaaS. Jestem podekscytowany tym nowym rozdziałem i zobowiązany do zrobienia wielkich rzeczy w świecie technologii.",
    },
  },
  avatar: avatar,
  techStack: [
    "OpenAI",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript ES6+",
    "Node.js",
    "Hono.js",
    "Express.js",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Styled Components",
    "Redux",
    "Redux Saga",
    "Cypress",
    "Jest",
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
        PL: "Kurs obejmował tematy od podstaw do zaawansowanych koncepcji HTML, CSS, JavaScript, React i Redux. Nauczyłem się, jak tworzyć responsywne strony internetowe i aplikacje internetowe. Dodatkowo opanowałem korzystanie z Gita i GitHuba do zarządzania moimi projektami. Ukończyłem kurs  5-tygodniowym projektem grupowym, który nie tylko pokazał moje umiejętności, ale także doskonalił moje zdolności zespołowe. Przez cały kurs zdobyłem również wiedzę na temat najlepszych praktyk programistycznych i narzędzi do testowania i debugowania kodu. Dzięki temu kursowi czuję się pewnie w tworzeniu nowoczesnych i funkcjonalnych aplikacji internetowych.",
      },
      certificate: {
        url: youCodeCertificate,
        alt: {
          en: "Certificate of completion: Frontend Developer Course",
          pl: "Certyfikat ukończenia: Frontend Developer Course",
        },
      },
    },
    {
      name: "TypeScript",
      organization: "YouCode.pl",
      date: "25.04.2024",
      content: {
        EN: "The course covered the knowledge of TypeScript and how to use it with React. I learned how to create type-safe applications and how to use TypeScript to improve my code quality. It contained topics like types, interfaces, generics, and advanced TypeScript features.",
        PL: "Kurs obejmował wiedzę na temat TypeScript i jak go używać z Reactem. Nauczyłem się, jak tworzyć aplikacje statycznie typowane i jak używać TypeScriptu do poprawy jakości mojego kodu. Zawierał tematy takie jak rodzaje typów, interfejsy, typy i funkcje generyczne i zaawansowane funkcje TypeScriptu.",
      },
      techLogo: typeScriptLogo,
    },
    {
      name: "Connect GPT-4 with application and automation logic",
      organization: "AI_devs",
      date: "22.04.2024",
      content: {
        EN: "The course covered the basics of AI and how to connect it with web applications. I learned how to connect Generative AI with application logic and automatization tools. I completed the course by solving many tasks and creating a personal AI assistant that can help me in multiple ways. I also learned how to use OpenAI API and how to decide when to use AI in my projects. We trained prompt engineering and how to use AI in a responsible way. We also skilled techniques like function calling, building dynamic context and prompts, using vector bases like Qdrant/Pinecone for multiple ways and fine-tuning of models.",
        PL: "Kurs obejmował podstawy sztucznej inteligencji i sposób jej łączenia z aplikacjami internetowymi. Nauczyłem się, jak połączyć Generative AI z logiką aplikacji i narzędziami do automatyzacji. Ukończyłem kurs, rozwiązując wiele zadań i tworząc osobistego asystenta AI, który pomaga mi na codzień na wiele sposobów. Nauczyłem się również, jak korzystać z OpenAI API oraz decydować jakiego modelu LLM do jakiego zastosowania warto użyć. Ćwiczyliśmy inżynierię promptów oraz odpowiedzialne korzystanie z AI. Opanowaliśmy także techniki takie jak function calling, budowanie dynamicznego kontekstu i promptów, używanie baz wektorowych jak Qdrant/Pinecone na różne sposoby oraz fine-tuning modeli.",
      },
      certificate: {
        url: aiDevsCertificate,
        alt: {
          en: "Certificate of completion: Connect GPT-4 with application and automation logic",
          pl: "Certyfikat ukończenia: Connect GPT-4 with application and automation logic",
        },
      },
    },
    {
      name: "Modern Node.js",
      organization: "eduweb.pl",
      date: "08.2024",
      content: {
        EN: "The course covered modern Node.js development techniques and best practices. I learned how to create efficient and scalable server-side applications using Node.js. Additionally, the course included instruction on implementing the Hono.js framework, which enhanced my ability to build fast and lightweight web applications. This comprehensive training has equipped me with valuable skills in backend development using cutting-edge technologies.",
        PL: "Kurs obejmował nowoczesne techniki i najlepsze praktyki rozwoju Node.js. Nauczyłem się, jak tworzyć wydajne i skalowalne aplikacje serwerowe przy użyciu Node.js. Dodatkowo, kurs zawierał instruktaż implementacji frameworka Hono.js, co zwiększyło moje umiejętności w budowaniu szybkich i lekkich aplikacji internetowych. To kompleksowe szkolenie wyposażyło mnie w cenne umiejętności w zakresie rozwoju backendu przy użyciu najnowocześniejszych technologii.",
      },
      certificate: {
        url: nodeJSCertificate,
        alt: {
          en: "Certificate of completion: Modern Node.js",
          pl: "Certyfikat ukończenia: Nowoczesny Node.js",
        },
      },
    },
    {
      name: "MongoDB Node.js Developer Path",
      organization: "MongoDB University",
      date: "08.2024",
      content: {
        EN: "I completed the MongoDB Node.js Developer Path, an official course from MongoDB University. This comprehensive program covered essential skills for developing applications with MongoDB and Node.js. The curriculum included database design, CRUD operations, aggregation framework, indexing, and performance optimization. I also learned about data modeling best practices, security considerations, and how to build scalable applications using MongoDB Atlas. This course has significantly enhanced my proficiency in working with NoSQL databases and server-side JavaScript.",
        PL: "Ukończyłem ścieżkę MongoDB Node.js Developer, oficjalny kurs od MongoDB University. Ten kompleksowy program obejmował kluczowe umiejętności potrzebne do tworzenia aplikacji z wykorzystaniem MongoDB i Node.js. Program nauczania obejmował projektowanie baz danych, operacje CRUD, framework agregacji, indeksowanie i optymalizację wydajności. Nauczyłem się również najlepszych praktyk modelowania danych, aspektów bezpieczeństwa oraz jak budować skalowalne aplikacje przy użyciu MongoDB Atlas. Ten kurs znacząco zwiększył moje umiejętności w pracy z bazami danych NoSQL i serwerowym JavaScriptem.",
      },
      certificate: {
        url: mongoDBCertificate,
        alt: {
          en: "Certificate of completion: MongoDB Node.js Developer Path",
          pl: "Certyfikat ukończenia: MongoDB Node.js Developer Path",
        },
      },
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
