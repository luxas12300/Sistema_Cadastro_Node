import { string } from "zod";
import { Contact, ContactCreate, ContactCreateData, ContactRepository } from "../interfaces/contacts.interface";
import { User } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";



class ContactsRepositoryPrisma implements ContactRepository{
    async create(data: ContactCreateData): Promise<Contact> {
        const result = await prismaClient.contacts.create({
            data: {
                email: data.email,
                phone: data.phone,
                name: data.name,
                userId: data.userId,
            }
        })
        return result
    }
    async findByEmailOrPhone(email:string, phone: string): Promise<Contact | null>{
        const result = await prismaClient.contacts.findFirst({
            where:{
                OR:[
                    {
                        email
                    },
                    {
                        phone
                    },
                ]
            }
        })
        return result || null
    } 

    async findAllContacts(userId: string): Promise<Contact[]> {
        const result = await prismaClient.contacts.findMany({
            where:{
                userId,
            }
        })
        return result
    }
    async updatedContact({ id, name, phone, email }: Contact): Promise<Contact> {
        const result = await prismaClient.contacts.update({
            where: {
                id
            },
            data:{
                email, name ,phone
            }
        })
        return result
    }
    async delete(id: string): Promise<boolean> {
        const result = await prismaClient.contacts.delete({
            where:{
                id
            }
        })
        return result ? true : false
    }
}

export{ContactsRepositoryPrisma}