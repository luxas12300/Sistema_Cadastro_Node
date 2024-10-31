import { FastifyInstance } from "fastify";

import { ContactUseCases } from "../usecases/contact.usecases";
import { Contact, ContactCreate } from "../interfaces/contacts.interface";
import { authMiddleware } from "../middlewares/auth.middlewares";
import { request } from "http";
import { randomUUID } from "crypto";

export async function contactRoutes(fastify: FastifyInstance){
    const contactUseCase = new ContactUseCases
    fastify.addHook('preHandler',authMiddleware)
    fastify.post<{Body: ContactCreate}>('/', async (req, reply) => {
        const {name, email, phone} = req.body
        const emailUser = req.body['email']
        let sessionId = req.cookies.sessionId

        if(!sessionId){
            sessionId = randomUUID()

            reply.cookie('sessionId', sessionId, {
                path: '/',
                maxAge: 60 * 60 * 24 // 1 day
            })
        }
        try{
            const data = await contactUseCase.create({email,name,phone,userEmail:emailUser})
            return reply.send(data)
        }catch(error){
            reply.send(error)
        }
    });
    fastify.get('/', async (req, reply) => {
        const emailUser = req.headers['email'];
        try {
            const emailUser = String(req.headers['email']);

        } catch (error) {
            reply.send(error)
        }
    })
    fastify.put<{Body: Contact, Params: {id:string}}>('/:id', async(req, reply) =>{
        const {id} = req.params;
        const {name,email,phone} = req.body
        try {
            const data = await contactUseCase.updateContact({
                id, name, phone,email
            })
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })
    fastify.delete<{Params: {id:string}}>('/:id',async (req, reply)=>{
        const {id} = req.params;
        try {
            const data = await contactUseCase.delete(id)
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })
}