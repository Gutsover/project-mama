import NewsService from "./NewsService";
import UsersService from "./UsersService";
import DataService from "./DataService";
import ThemeService from "./ThemeService";

const Services = {
  news: new NewsService(),
  users: new UsersService(),
  data: new DataService(),
  theme: new ThemeService()
};

export default Services;
