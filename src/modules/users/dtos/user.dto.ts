import { BookDTO } from '../../books/dtos/book.dto'

export interface UserDTO {
    
    user_id: number; 
    email: string;
    password: string;
    books?: BookDTO[];
    
}