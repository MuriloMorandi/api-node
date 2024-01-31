import { IController } from "../../../interfaces/IController";
import { HomeController } from "../controllers/homeController";

export const makeHomeController = (): IController => {
  const homeController = new HomeController();

  return homeController;
};