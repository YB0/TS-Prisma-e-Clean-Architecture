import { BookDTO } from '../dtos/book.dto'
import { CreateBook } from '../services/create-book.service';
import { Request, Response } from 'express';

export class CreateBookController {
    
    constructor(private readonly createBook: CreateBook) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {

            const bookData = <BookDTO>request.body;
            await this.createBook.execute(bookData);
            return response.json({ message: 'Livro adicionado com sucesso' });

        } catch (error: any) {

            return response.json(error.message);

        }
        
    }

}