import { Router, Request, Response } from "express";
import {

    findUserController,
    createUserController,
    updateUserController,
    removeUserController

} from '../modules/users';

const routes = Router();

routes.post("/users", (req: Request, res: Response) => {
  
    createUserController.handle(req, res);

});

routes.get("/users/:email", (req: Request, res: Response) => {
  
    findUserController.handle(req, res);

});

routes.put("/users/:user_id", (req: Request, res: Response) => {
  
    updateUserController.handle(req, res);

});

routes.delete("/users/:user_id", (req: Request, res: Response) => {
  
    removeUserController.handle(req, res);

});

export default routes;