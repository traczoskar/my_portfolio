import moviesBrowser from "../../../../assets/portfolio_moviesBrowser.png";
import taskList from "../../../../assets/portfolio_taskList.png";
import currencyConverter from "../../../../assets/portfolio_currencyConverter.png";
import personalHomepage from "../../../../assets/portfolio_personalHomepage.png";

export interface Projects {
  label: string;
  image: string;
}

export const projects: Projects[] = [
  { label: "Personal Homepage", image: personalHomepage },
  { label: "Movies Browser", image: moviesBrowser },
  { label: "To Do List", image: taskList },
  {
    label: "Currency Converter",
    image: currencyConverter,
  },
];
