import { UserDTO } from '../dtos/user.dto';
import { UserMapping } from '../mappings/user.mapping';
import { UserRepository } from '../repositories/user.repository';

export class CreateUser {
    
    constructor(private readonly userRepository: UserRepository) {}

    async execute(data: UserDTO): Promise<void> {
        
        const userData = UserMapping.from(data);
        const res = await this.userRepository.create(userData);
    
    }
    
}