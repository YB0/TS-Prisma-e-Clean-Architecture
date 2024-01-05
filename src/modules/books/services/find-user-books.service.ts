import { BookEntity } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository';

export class FindUserBooks {
    
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(id_user: number): Promise<BookEntity[]> {
        
        const books = await this.bookRepository.findUserBooks(id_user);
        return books;
    
    }

}