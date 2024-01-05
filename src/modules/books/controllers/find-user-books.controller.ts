import { FindUserBooks } from '../services/find-user-books.service';
import { Request, Response } from 'express';

export class FindUserBooksController {
    
    constructor(private readonly findBook: FindUserBooks) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {

            const { id_user } = request.params;
            const books = await this.findBook.execute(Number(id_user));
            return response.json(books);

        } catch (error: any) {

            return response.json(error.message);

        }
    
    }

}