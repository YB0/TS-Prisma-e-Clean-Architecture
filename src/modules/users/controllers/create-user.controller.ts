import { UserDTO } from '../dtos/user.dto'
import { CreateUser } from '../services/create-user.service';
import { Request, Response } from 'express';

export class CreateUserController {
    
    constructor(private readonly createUser: CreateUser) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {

            const userData = <UserDTO>request.body;
            await this.createUser.execute(userData);
            return response.json({ message: 'Usuário criado com sucesso' });
        
        } catch (error: any) {

            return response.json(error.message);

        }
        
    }

}