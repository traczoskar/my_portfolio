import avatar from "../../assets/avatar.jpg";
import youCodeCertificate from "../../assets/certificates/youcode.jpg";
import aiDevsCertificate from "../../assets/certificates/ai_devs.jpg";

interface AboutData {
  name: string;
  surname: string;
  title: string;
  description: string;
  avatar: string;
  techStack: string[];
  education: {
    name: string;
    organization: string;
    date: string;
    content: string;
    certificate?: string | undefined;
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
  description:
    "I am a Frontend Developer with a passion for creating web applications. I am a self-taught developer who is always eager to learn new technologies and improve my skills. I am a team player who is always ready to help and share knowledge with others. I am looking for new opportunities to grow and develop my skills.",
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
  ],
  education: [
    {
      name: "Frontend Developer Course",
      organization: "YouCode.pl",
      date: "25.04.2024",
      content:
        "The course covered topics from the basics to advanced concepts of HTML, CSS, JavaScript, React, and Redux. I learned how to create responsive websites and web applications. Additionally, I mastered using Git and GitHub to manage my projects. I completed the course with a final 5-week group project that not only showcased my skills but also honed my teamwork abilities. Throughout the course, I also gained knowledge of best practices in programming and tools for testing and debugging code. Thanks to this course, I feel confident in creating modern and functional web applications.",
      certificate: youCodeCertificate,
    },
    {
      name: "TypeScript",
      organization: "YouCode.pl",
      date: "25.04.2024",
      content:
        "The course covered the knowledge of TypeScript and how to use it with React. I learned how to create type-safe applications and how to use TypeScript to improve my code quality. It contained topics like types, interfaces, generics, and advanced TypeScript features.",
    },
    {
      name: "Connect GPT-4 with application and automation logic",
      organization: "AI_devs",
      date: "22.04.2024",
      content:
        "The course covered the basics of AI and how to connect it with web applications. I learned how to connect Generative AI with application logic and automatization tools. I completed the course by solving many tasks and creating a personal AI assistant that can help me in multiple ways. I also learned how to use OpenAI API and how to decide when to use AI in my projects. We trained prompt engineering and how to use AI in a responsible way. We also skilled techniques like function calling, building dynamic context and prompts, using vector bases like Qdrant/Pinecone for multiple ways and fine-tuning of models.",
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
