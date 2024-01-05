import { UserDTO } from "../dtos/user.dto";
import { UpdateUser } from "../services/update-user.service";
import { Request, Response } from "express";

export class UpdateUserController {
    
    constructor(private readonly updateUser: UpdateUser) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        try {
            
            const { user_id } = request.params;
            const data = <UserDTO>request.body;
            await this.updateUser.execute(Number(user_id), data);
            return response.json({ message: "Usuário atualizado com sucesso" });
        
        } catch (error: any) {

            return response.json(error.message);

        }
        
    }

}