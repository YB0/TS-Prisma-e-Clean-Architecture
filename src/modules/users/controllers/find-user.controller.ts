import { FindUser } from '../services/find-user.service';
import { Request, Response } from 'express';

export class FindUserController {
    
    constructor(private readonly findUser: FindUser) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {

            const { email } = request.params;
            const user = await this.findUser.execute(email);
            return response.json(user);
            
        } catch (error: any) {

            return response.json(error.message);

        }
        
    }

}