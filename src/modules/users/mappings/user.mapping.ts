import { UserDTO } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';
import { BookMapping } from '../../books/mappings/book.mapping'

export class UserMapping {

    static from(user: UserDTO): UserEntity {

        return {

            user_id: user.user_id,
            email: user.email,
            password: user.password,
            books: user.books ? user.books.map(book => BookMapping.from(book)) : [],
            
        }
    
    }

}