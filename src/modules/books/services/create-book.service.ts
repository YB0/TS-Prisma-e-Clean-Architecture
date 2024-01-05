import { BookDTO } from '../dtos/book.dto';
import { BookMapping } from '../mappings/book.mapping';
import { BookRepository } from '../repositories/book.repository';

export class CreateBook {
    
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(data: BookDTO): Promise<void> {
        
        const bookData = BookMapping.from(data);
        const res = await this.bookRepository.create(bookData);
    
    }

}