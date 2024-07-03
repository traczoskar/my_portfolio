import aiWeatherApp_1 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_1.png";
import aiWeatherApp_2 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_2.png";
import aiWeatherApp_3 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_3.png";
import aiWeatherApp_4 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_4.png";
import aiWeatherApp_5 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_5.png";
import aiWeatherApp_6 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_6.png";
import aiWeatherApp_7 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_7.png";
import aiWeatherApp_8 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_8.png";
import aiWeatherApp_9 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_9.png";
import aiWeatherApp_10 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_10.png";
import aiWeatherApp_11 from "../../../assets/portfolio/aiWeatherApp/aiWeatherApp_11.png";
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

export const aiWeatherAppScreenshots: Screenshot[] = [
  {
    alt: "Main page of the app. User can see the main input form where the city name should be entered.",
    imageUrl: aiWeatherApp_1,
  },
  {
    alt: "A view of select options after the user starts typing the city name. User can choose the city from the list of suggestions or click the geo-location button to get the weather of the current location.",
    imageUrl: aiWeatherApp_2,
  },
  {
    alt: "Weather details of the current location. User can see temperature, weather description, wind speed, humidity, pressure, sunrise/sunset time, air quality etc.",
    imageUrl: aiWeatherApp_3,
  },
  {
    alt: "Forecast data fetched for currently selected location for incoming 5 days.",
    imageUrl: aiWeatherApp_4,
  },
  {
    alt: "Loading container with spinner after clicking the Ask AI button. User can see that the data is being fetched.",
    imageUrl: aiWeatherApp_5,
  },
  {
    alt: "AI suggestions for the user. User can see the suggestions for the current location. Suggestions are based on the current weather and example activities.",
    imageUrl: aiWeatherApp_6,
  },
  {
    alt: "AI suggestions the places to visit, attire and food to eat. AI suggests also music to liste and movies to watch, all based on the current weather for the location.",
    imageUrl: aiWeatherApp_7,
  },
  {
    alt: "Modal window with app details and a few phrases from developer to the user.",
    imageUrl: aiWeatherApp_8,
  },
  {
    alt: "Main app window with fetched weather data in light colors theme.",
    imageUrl: aiWeatherApp_9,
  },
  {
    alt: "Air quality and forecast data in light theme.",
    imageUrl: aiWeatherApp_10,
  },
  {
    alt: "Error handling screen. User can see error message when there is a problem with fetching data from API.",
    imageUrl: aiWeatherApp_11,
  },
];
export const personalHomepageScreenshots: Screenshot[] = [
  {
    alt: "First section on the site with author photo, name, short description and contact button. In the upper right corner user can switch between light and dark theme.",
    imageUrl: personalHomepage_1,
  },
  {
    alt: "Second section with listed skill set and technologies that author is familiar with. Below also third section with author future plans what to learn next.",
    imageUrl: personalHomepage_2,
  },
  {
    alt: "Fourth section with list of GitHub repositories fetched directly from GitHub API. User can see repository name, description, link to deployed demo and GitHub repository.",
    imageUrl: personalHomepage_3,
  },
  {
    alt: "Fifth section (footer) with authors social links, e-mail address and short invitation to cooperation or hire.",
    imageUrl: personalHomepage_4,
  },
  {
    alt: "First section with light theme on.",
    imageUrl: personalHomepage_5,
  },
  {
    alt: "Last section with light theme on.",
    imageUrl: personalHomepage_6,
  },
  {
    alt: "Section of GitHub repositories while fetching data from API. User can see loading spinner and message that data is being loaded.",
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
