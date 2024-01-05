import { PrismaClient, Book as PrismaBook } from '@prisma/client';
import { BookRepository } from '../book.repository'
import { BookEntity } from '../../entities/book.entity';
import { BookPrismaMapping } from '../../mappings/book.prisma.mapping';

export class PrismaBookRepository implements BookRepository {
    
    private prisma;

    constructor() {
        
        this.prisma = new PrismaClient();
    
    }

    async create(data: BookEntity): Promise<void> {
        
        try {
            
            const prismaBook = BookPrismaMapping.from(data);
            await this.prisma.book.create({ data: prismaBook });
        
        } catch (error: any) {
            
            throw new Error(`Erro ao criar livro: ${(error as Error).message}`);
        
        }
    
    }

    async getBooks(): Promise<BookEntity[]> {
        
        try {
            
            const prismaBooks: PrismaBook[] = await this.prisma.book.findMany();
            return prismaBooks.map(prismaBook => BookPrismaMapping.to(prismaBook));
        
        } catch (error: any) {
            
            throw new Error(`Erro ao regastar livros: ${(error as Error).message}`);
        
        }
    
    }

    async findUserBooks(id_user: number): Promise<BookEntity[]> {
        
        try {
            
            const prismaBooks = await this.prisma.book.findMany({ where: { id_user } });
            return prismaBooks.map(book => BookPrismaMapping.to(book));
        
        } catch (error: any) {
            
            throw new Error(`Erro ao buscar livros do usuário: ${(error as Error).message}`);
        
        }
    
    }

    async update(id: number, data: BookEntity): Promise<void> {
        
        try {
            
            const prismaBook = BookPrismaMapping.from(data);
            await this.prisma.book.update({ where: { id }, data: prismaBook });
        
        } catch (error: any) {
            
            throw new Error(`Erro ao atualizar livro: ${(error as Error).message}`);
        
        }
    
    }

    async remove(id: number): Promise<void> {
        
        try {
            
            await this.prisma.book.delete({ where: { id } });
        
        } catch (error: any) {
            
            throw new Error(`Erro ao remover livro: ${(error as Error).message}`);
        
        }
    
    }

}