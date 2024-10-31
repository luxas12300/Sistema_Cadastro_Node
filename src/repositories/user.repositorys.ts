import { Prisma } from "@prisma/client";
import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { prismaClient } from "../database/prismaClient";

class UserRepositoryPrisma implements UserRepository{
    async create(data: UserCreate): Promise<User> {
        const result = await prismaClient.user.create({
            data: {
                name: data.name,
                email: data.email,
            }

        })
        return result
    }
    async findByEmail(email: string): Promise<User | null> {
        const result = await prismaClient.user.findFirst({
            where:{
                email
            }
        })
        return result || null
    }
}

export {UserRepositoryPrisma}