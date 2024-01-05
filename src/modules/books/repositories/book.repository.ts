import { BookEntity } from '../entities/book.entity';
import { BookDTO } from '../dtos/book.dto';

export interface BookRepository {
    
    create(data: BookDTO): Promise<void>;
    getBooks(): Promise<BookEntity[]>;
    findUserBooks(id_user: number): Promise<BookEntity[]>;
    update(id: number, data: BookDTO): Promise<void>;
    remove(id: number): Promise<void>;

}