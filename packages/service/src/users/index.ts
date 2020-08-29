import path from "path";
import { IModule } from "../shared/types/Module";
import { createUserRoutes } from "./usersRoutes";

export const createUsersModule = (dbFilePath: string): IModule => ({
  routes: createUserRoutes(dbFilePath),
});

export default createUsersModule(path.resolve("data/usersData.json"));
