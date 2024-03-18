import moviesBrowser from "../../../../assets/portfolio_moviesBrowser.png";
import taskList from "../../../../assets/portfolio_taskList.png";
import currencyConverter from "../../../../assets/portfolio_currencyConverter.png";
import personalHomepage from "../../../../assets/portfolio_personalHomepage.png";

export interface Projects {
  label: string;
  image: string;
  route: string;
}

export const projects: Projects[] = [
  {
    label: "Personal Homepage",
    image: personalHomepage,
    route: "/projects/personal-homepage",
  },
  {
    label: "Movies Browser",
    image: moviesBrowser,
    route: "/projects/movies-browser",
  },
  { label: "To Do List", image: taskList, route: "/projects/to-do-list" },
  {
    label: "Currency Calculator",
    image: currencyConverter,
    route: "/projects/currency-calculator",
  },
];
