import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export class FindUser {
    
    constructor(private readonly userRepository: UserRepository) {}

    async execute(email: string): Promise<UserEntity> {
        
        const user = await this.userRepository.findByEmail(email);
        return user;
    
    }

}