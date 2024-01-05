import { Router, Request, Response } from "express";
import {

    createBookController,
    findAllBooksController,
    findUserBooksController,
    updateBookController,
    removeBookController,

} from '../modules/books';

const routes = Router();

routes.post("/books", (req: Request, res: Response) => {
  
    createBookController.handle(req, res);

});

routes.get("/books", (req: Request, res: Response) => {
  
    findAllBooksController.handle(req, res);

});

routes.get("/books/users/:id_user", (req: Request, res: Response) => {
  
    findUserBooksController.handle(req, res);

});

routes.put("/books/:id", (req: Request, res: Response) => {
  
    updateBookController.handle(req, res);

});

routes.delete("/books/:id", (req: Request, res: Response) => {
  
    removeBookController.handle(req, res);

});

export default routes;