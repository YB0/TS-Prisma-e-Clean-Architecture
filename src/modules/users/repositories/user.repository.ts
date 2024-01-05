import { UserEntity } from '../entities/user.entity';

export interface UserRepository {
    
    create(data: UserEntity): Promise<void>;
    findByEmail(email: string): Promise<UserEntity>;
    update(user_id: number, data: UserEntity): Promise<void>;
    remove(user_id: number): Promise<void>;

}