import { ReactComponent as RWDIcon } from "../../../assets/advantages/responsive.svg";
import { ReactComponent as UXIcon } from "../../../assets/advantages/friends.svg";
import { ReactComponent as SemanticIcon } from "../../../assets/advantages/accessibility.svg";
import { ReactComponent as WebsiteIcon } from "../../../assets/advantages/web-design.svg";
import { ReactComponent as WorkEthicsIcon } from "../../../assets/advantages/ethic.svg";
import { ReactComponent as TeamWorkIcon } from "../../../assets/advantages/support.svg";

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const advantagesList: Advantage[] = [
  {
    icon: RWDIcon,
    title: "RWD",
    description: "Responsive web designs that work on any device.",
  },
  {
    icon: UXIcon,
    title: "UX/UI",
    description:
      "User friendly interfaces that provide a great user experience.",
  },
  {
    icon: SemanticIcon,
    title: "Semantics",
    description: "Semantic HTML to improve SEO and maintain accessibility.",
  },
  {
    icon: WebsiteIcon,
    title: "Websites",
    description: "Easy to use and pleasant to look at.",
  },
  {
    icon: WorkEthicsIcon,
    title: "Ethics",
    description: "Consistent on-time project completion.",
  },
  {
    icon: TeamWorkIcon,
    title: "Team Work",
    description: "I love to see as the products evolve during work of many.",
  },
];

export const advantagesListPL: Advantage[] = [
  {
    icon: RWDIcon,
    title: "RWD",
    description: "Responsywne projekty, które działają na każdym urządzeniu.",
  },
  {
    icon: UXIcon,
    title: "UX/UI",
    description:
      "Interfejsy przyjazne dla użytkownika, które zapewniają doskonałe doświadczenia użytkownika.",
  },
  {
    icon: SemanticIcon,
    title: "Semantyka",
    description:
      "Semantyczny HTML w celu poprawy SEO i utrzymania dostępności.",
  },
  {
    icon: WebsiteIcon,
    title: "Strony internetowe",
    description: "Łatwe w użyciu i przyjemne dla oka.",
  },
  {
    icon: WorkEthicsIcon,
    title: "Etyka pracy",
    description: "Konsekwentne zakończenie projektu na czas.",
  },
  {
    icon: TeamWorkIcon,
    title: "Praca zespołowa",
    description:
      "Uwielbiam patrzeć, jak produkty ewoluują podczas pracy wielu osób.",
  },
];
