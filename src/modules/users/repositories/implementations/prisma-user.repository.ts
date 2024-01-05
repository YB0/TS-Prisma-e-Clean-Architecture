import { PrismaClient } from '@prisma/client';
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';
import { UserPrismaMapping } from '../../mappings/user.prisma.mapping';

export class PrismaUserRepository implements UserRepository {
    
    private prisma;

    constructor() {
        
        this.prisma = new PrismaClient();
    
    }

    async create(data: UserEntity): Promise<void> {
        
        try {
            
            const prismaUser = UserPrismaMapping.from(data);
            await this.prisma.user.create({ data: prismaUser });
        
        } catch (error: any) {
            
            throw new Error(`Erro ao criar usuário: ${(error as Error).message}`);
        
        }
    
    }

    async findByEmail(email: string): Promise<UserEntity> {
        
        try {
            
            const prismaUser = await this.prisma.user.findUniqueOrThrow({ where: { email } });
            return UserPrismaMapping.to(prismaUser);
        
        } catch (error: any) {
            
            throw new Error(`Erro ao buscar usuário: ${(error as Error).message}`);
        
        }
    
    }

    async update(user_id: number, data: UserEntity): Promise<void> {
        
        try {
          
            const prismaUser = UserPrismaMapping.from(data);
            await this.prisma.user.update({ where: { user_id }, data: prismaUser });
        
        } catch (error: any) {
          
            throw new Error(`Erro ao atualizar usuário: ${(error as Error).message}`);
        
        }
      
    }
      
    async remove(user_id: number): Promise<void> {
        
        try {
          
            await this.prisma.user.delete({ where: { user_id } });
        
        } catch (error: any) {
          
            throw new Error(`Erro ao remover usuário: ${(error as Error).message}`);
        
        }
      
    }
    
}