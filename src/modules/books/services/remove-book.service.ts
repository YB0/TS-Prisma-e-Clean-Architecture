import { BookRepository } from '../repositories/book.repository';

export class RemoveBook {
    
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(id: number): Promise<void> {
        
        await this.bookRepository.remove(id);
    
    }

}