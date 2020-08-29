import { Request, Response, Router } from "express";
import { OK } from "http-status-codes";
import jsonfile from "jsonfile";

export const createUserRoutes = (dbFilePath: string) => {
  const usersRoutes = Router();

  usersRoutes.get("/", async (req: Request, res: Response) => {
    const users = await jsonfile.readFile(dbFilePath);
    return res.status(OK).json(users);
  });

  return usersRoutes;
};
