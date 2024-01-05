import { BookDTO } from '../dtos/book.dto';
import { BookEntity } from '../entities/book.entity';

export class BookMapping {

    static from(book: BookDTO): BookEntity {

        return {

            id: book.id,
            title: book.title,
            author: book.author,
            reading_status: book.reading_status,
            rating: book.rating,
            comentary: book.comentary,
            user_id: book.user_id,
            
        }
    
    }

}