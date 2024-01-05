import { Router } from 'express';
import usersRouter from './users.routes';
import booksRouter from './books.routes';

const routes = Router();

routes.use(usersRouter);
routes.use(booksRouter);

export default routes;