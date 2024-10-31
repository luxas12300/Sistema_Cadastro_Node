import { string } from "zod";
import { Contact, ContactCreate, ContactRepository } from "../interfaces/contacts.interface";
import { ContactsRepositoryPrisma } from "../repositories/contacts.repositorys";
import { UserRepositoryPrisma } from "../repositories/user.repositorys";


class ContactUseCases{
    private contactRepository: ContactRepository;
    private userRepository: UserRepositoryPrisma;
    constructor(){
        this.contactRepository = new ContactsRepositoryPrisma()
        this.userRepository = new UserRepositoryPrisma()
    }
    async create({name,email,phone,userEmail}: ContactCreate){

    const user = await this.userRepository.findByEmail(userEmail)
    if(!user){
        throw new Error('User not found');
    }

    const verifyIfExistsContact = await this.contactRepository.findByEmailOrPhone(email,phone)
    if(verifyIfExistsContact){
        throw new Error('Contact already aexists')
    }
    const contact = await this.contactRepository.create({
        email,
        name,
        phone,
        userId: user.id,
    })
    return contact

    }
    async listAllContacts(userEmail: string){
        const user = await this.userRepository.findByEmail(userEmail)
        if(!user){
            throw new Error('User not found')
        }
        const contacts = await this.contactRepository.findAllContacts(user.id)
        return contacts
    }
    async updateContact({name, id, phone, email} :Contact){
        const data = await this.contactRepository.updatedContact({id, name, phone, email})
    }
    async delete(id: string){
        const data = await this.contactRepository.delete(id)
        return data
    }
}

export {ContactUseCases}