import { BookEntity } from '../../books/entities/book.entity'

export interface UserEntity {
    
    user_id: number; 
    email: string;
    password: string;
    books?: BookEntity[];

}