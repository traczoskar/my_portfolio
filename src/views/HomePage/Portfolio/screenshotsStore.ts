import personalHomepage_1 from "../../../assets/portfolio/personalHomepage/personalHomepage_1.png";
import personalHomepage_2 from "../../../assets/portfolio/personalHomepage/personalHomepage_2.png";
import personalHomepage_3 from "../../../assets/portfolio/personalHomepage/personalHomepage_3.png";
import personalHomepage_4 from "../../../assets/portfolio/personalHomepage/personalHomepage_4.png";
import personalHomepage_5 from "../../../assets/portfolio/personalHomepage/personalHomepage_5.png";
import personalHomepage_6 from "../../../assets/portfolio/personalHomepage/personalHomepage_6.png";
import personalHomepage_7 from "../../../assets/portfolio/personalHomepage/personalHomepage_7.png";
import moviesBrowser_1 from "../../../assets/portfolio/moviesBrowser/moviesBrowser_1.png";
import moviesBrowser_2 from "../../../assets/portfolio/moviesBrowser/moviesBrowser_2.png";
import moviesBrowser_3 from "../../../assets/portfolio/moviesBrowser/moviesBrowser_3.png";
import moviesBrowser_4 from "../../../assets/portfolio/moviesBrowser/moviesBrowser_4.png";
import moviesBrowser_5 from "../../../assets/portfolio/moviesBrowser/moviesBrowser_5.png";
import moviesBrowser_6 from "../../../assets/portfolio/moviesBrowser/moviesBrowser_6.png";
import moviesBrowser_7 from "../../../assets/portfolio/moviesBrowser/moviesBrowser_7.png";
import taskList_1 from "../../../assets/portfolio/taskList/taskList_1.png";
import taskList_2 from "../../../assets/portfolio/taskList/taskList_2.png";
import taskList_3 from "../../../assets/portfolio/taskList/taskList_3.png";
import taskList_4 from "../../../assets/portfolio/taskList/taskList_4.png";
import taskList_5 from "../../../assets/portfolio/taskList/taskList_5.png";
import taskList_6 from "../../../assets/portfolio/taskList/taskList_6.png";
import currencyCalculator_1 from "../../../assets/portfolio/currencyCalculator/currencyCalculator_1.png";
import currencyCalculator_2 from "../../../assets/portfolio/currencyCalculator/currencyCalculator_2.png";
import currencyCalculator_3 from "../../../assets/portfolio/currencyCalculator/currencyCalculator_3.png";
import currencyCalculator_4 from "../../../assets/portfolio/currencyCalculator/currencyCalculator_4.png";
import currencyCalculator_5 from "../../../assets/portfolio/currencyCalculator/currencyCalculator_5.png";

import { Screenshot } from "../../../types/types";

export const personalHomepageScreenshots: Screenshot[] = [
  {
    alt: "Personal Homepage",
    imageUrl: personalHomepage_1,
  },
  {
    alt: "Personal Homepage",
    imageUrl: personalHomepage_2,
  },
  {
    alt: "Personal Homepage",
    imageUrl: personalHomepage_3,
  },
  {
    alt: "Personal Homepage",
    imageUrl: personalHomepage_4,
  },
  {
    alt: "Personal Homepage",
    imageUrl: personalHomepage_5,
  },
  {
    alt: "Personal Homepage",
    imageUrl: personalHomepage_6,
  },
  {
    alt: "Personal Homepage",
    imageUrl: personalHomepage_7,
  },
];
export const moviesBrowserScreenshots: Screenshot[] = [
  {
    alt: "Popular movies page. User can search for movies and see their details.",
    imageUrl: moviesBrowser_1,
  },
  {
    alt: "Movie details: backdrop image, movie title, rating and count of votes.",
    imageUrl: moviesBrowser_2,
  },
  {
    alt: "Movie details: poster image, title, release year, genres, rating and overview. Below are the cast and crew of the movie.",
    imageUrl: moviesBrowser_3,
  },
  {
    alt: "No results page, when user search for non-existing movie or people.",
    imageUrl: moviesBrowser_4,
  },
  {
    alt: "Popular people page. User can search for popular people and see their details.",
    imageUrl: moviesBrowser_5,
  },
  {
    alt: "People details page: name and surname, date and place of birth, short biography, and where he/she played.",
    imageUrl: moviesBrowser_6,
  },
  {
    alt: "Error page. Error handling while fetching data from API or internet connection is lost.",
    imageUrl: moviesBrowser_7,
  },
];

export const currencyCalculatorScreenshots: Screenshot[] = [
  {
    alt: "Currency Calculator after loading the rates from API, ready to work and convert.",
    imageUrl: currencyCalculator_1,
  },
  {
    alt: "Loading screen with spinner while fetching data from API.",
    imageUrl: currencyCalculator_2,
  },
  {
    alt: "Amount form input with filled amount ready to convert. User can now choose currency to convert.",
    imageUrl: currencyCalculator_3,
  },
  {
    alt: "Calculation result rendered below the form. User can see the result of conversion.",
    imageUrl: currencyCalculator_4,
  },
  {
    alt: "Error handling screen. User can see error message when there is a problem with fetching data from API.",
    imageUrl: currencyCalculator_5,
  },
];

export const taskListScreenshots: Screenshot[] = [
  {
    alt: "Main task list page. User can add, remove and mark tasks as done or delete it from the list.",
    imageUrl: taskList_1,
  },
  {
    alt: "Form input with filled new task content ready to add.",
    imageUrl: taskList_2,
  },
  {
    alt: "Empty task list page. User can add new tasks or download example tasks by clicking button in the top right corner.",
    imageUrl: taskList_3,
  },
  {
    alt: "Search bar with filled query. User can search for tasks by typing query in the search bar.",
    imageUrl: taskList_4,
  },
  {
    alt: "Task details and status of done which is passed with props. Every task id is saved in URL address.",
    imageUrl: taskList_5,
  },
  {
    alt: "About author page. User can read about author of the app.",
    imageUrl: taskList_6,
  },
];
