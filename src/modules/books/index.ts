import { PrismaBookRepository } from "./repositories/implementations/prisma-book.repository";
import { CreateBookController } from "./controllers/create-book.controller";
import { CreateBook } from "./services/create-book.service";
import { FindAllBooksController } from "./controllers/find-all-books.controller";
import { FindAllBooks } from "./services/find-all-books.service";
import { FindUserBooksController } from "./controllers/find-user-books.controller";
import { FindUserBooks } from "./services/find-user-books.service";
import { UpdateBookController } from "./controllers/update-book.controller";
import { UpdateBook } from "./services/update-book.service";
import { RemoveBookController } from "./controllers/remove-book.controller";
import { RemoveBook } from "./services/remove-book.service";

const repository = new PrismaBookRepository();

const createBook = new CreateBook(repository);
const createBookController = new CreateBookController(createBook);

const findAllBooks = new FindAllBooks(repository);
const findAllBooksController = new FindAllBooksController(findAllBooks);

const findUserBooks = new FindUserBooks(repository);
const findUserBooksController = new FindUserBooksController(findUserBooks);

const updateBook = new UpdateBook(repository);
const updateBookController = new UpdateBookController(updateBook);

const removeBook = new RemoveBook(repository);
const removeBookController = new RemoveBookController(removeBook);

export {

    createBookController,
    findAllBooksController,
    findUserBooksController,
    updateBookController,
    removeBookController,

};