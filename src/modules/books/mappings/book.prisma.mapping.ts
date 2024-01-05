import { BookEntity } from '../entities/book.entity';
import { Book } from '@prisma/client';

export class BookPrismaMapping {

    static to(book: Book): BookEntity {

        return {

            id: book.id,
            title: book.title,
            author: book.author,
            reading_status: book.reading_status,
            rating: book.rating,
            comentary: book.comentary,
            user_id: book.id_user,

        }

    }
    
    static from(book: BookEntity): Book {

        return {

            id: book.id,
            title: book.title,
            author: book.author,
            reading_status: book.reading_status,
            rating: book.rating,
            comentary: book.comentary,
            id_user: book.user_id,
            
        }
    
    }

}