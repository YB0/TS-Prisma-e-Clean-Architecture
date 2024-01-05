import { UserEntity } from '../entities/user.entity';
import { User } from '@prisma/client';

export class UserPrismaMapping {

    static to(user: User): UserEntity {

        return {

            user_id: user.user_id,
            email: user.email,
            password: user.password,
            
        }

    }
    
    static from(user: UserEntity): User {

        return {

            user_id: user.user_id,
            email: user.email,
            password: user.password,
            
        }
    
    }

}