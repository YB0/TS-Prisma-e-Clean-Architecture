import { UserRepository } from "../repositories/user.repository";

export class RemoveUser {
  
    constructor(private readonly userRepository: UserRepository) {}
  
    async execute(user_id: number): Promise<void> {
    
        await this.userRepository.remove(user_id);
  
    }

}