import { RemoveUser } from "../services/remove-user.service";
import { Request, Response } from "express";

export class RemoveUserController {
  
    constructor(private readonly removeUser: RemoveUser) {}
  
    async handle(request: Request, response: Response): Promise<Response> {
    
        try {
        
            const { user_id } = request.params;
            await this.removeUser.execute(Number(user_id));
            return response.json({ message: "Usuário excluído com sucesso" });
            
        } catch (error: any) {

            return response.json(error.message);

        }
        
    }

}