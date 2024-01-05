import { BookEntity } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository';

export class FindAllBooks {
    
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(): Promise<BookEntity[]> {
        
        const books = await this.bookRepository.getBooks();
        return books;
    
    }
    
}