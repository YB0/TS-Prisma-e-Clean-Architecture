import { BookDTO } from '../dtos/book.dto';
import { BookMapping } from "../mappings/book.mapping";
import { BookRepository } from '../repositories/book.repository';

export class UpdateBook {
    
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(id: number, data: BookDTO): Promise<void> {
        
        const book = BookMapping.from(data);
        await this.bookRepository.update(id, book);
    
    }

}