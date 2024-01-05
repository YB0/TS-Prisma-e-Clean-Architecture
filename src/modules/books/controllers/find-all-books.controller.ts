import { FindAllBooks } from '../services/find-all-books.service';
import { Request, Response } from 'express';

export class FindAllBooksController {
    
    constructor(private readonly findAllBooks: FindAllBooks) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {

            const books = await this.findAllBooks.execute();
            return response.json(books);

        } catch (error: any) {

            return response.json(error.message);

        }
    
    }

}