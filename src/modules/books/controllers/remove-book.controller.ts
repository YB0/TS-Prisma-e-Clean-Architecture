import { RemoveBook } from '../services/remove-book.service';
import { Request, Response } from 'express';

export class RemoveBookController {
    
    constructor(private readonly removeBook: RemoveBook) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {

            const { id } = request.params;
            await this.removeBook.execute(Number(id));
            return response.json({ message: 'Livro deletado com sucesso' });
        
        } catch (error: any) {

            return response.json(error.message);

        }
        
    }

}