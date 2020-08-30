import path from "path";
import { IModule } from "../shared/types/Module";
import { createUserRoutes } from "./usersRoutes";

export const createUsersModule = (dbFilePath: string): IModule => ({
  routes: createUserRoutes(path.resolve(dbFilePath)),
});

export default createUsersModule("data/usersData.json");
