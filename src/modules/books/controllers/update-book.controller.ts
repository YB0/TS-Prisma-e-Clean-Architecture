import { BookDTO } from '../dtos/book.dto';
import { UpdateBook } from '../services/update-book.service';
import { Request, Response } from 'express';

export class UpdateBookController {
    
    constructor(private readonly updateBook: UpdateBook) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {

            const { id } = request.params;
            const bookData = <BookDTO>request.body;
            await this.updateBook.execute(Number(id), bookData);
            return response.json({ message: 'Livro atualizado com sucesso' });

        } catch (error: any) {

            return response.json(error.message);

        }
    
    }

}