import moviesBrowser from "../../../../assets/portfolio_moviesBrowser.png";
import taskList from "../../../../assets/portfolio_taskList.png";
import currencyConverter from "../../../../assets/portfolio_currencyConverter.png";
import personalHomepage from "../../../../assets/portfolio_personalHomepage.png";
import { Project } from "../../../../types/types";

export const projects: Project[] = [
  {
    label: "Personal Homepage",
    image: personalHomepage,
    route: "personal-homepage",
  },
  {
    label: "Movies Browser",
    image: moviesBrowser,
    route: "movies-browser",
  },
  { label: "To Do List", image: taskList, route: "to-do-list" },
  {
    label: "Currency Calculator",
    image: currencyConverter,
    route: "currency-calculator",
  },
];
