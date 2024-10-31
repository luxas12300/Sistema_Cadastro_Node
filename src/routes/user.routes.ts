import { FastifyInstance } from "fastify";
import { UserUseCases } from "../usecases/user.usecases";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance){
    const userUseCase = new UserUseCases()
    fastify.post<{Body: UserCreate}>('/', async (req, reply) => {
        const {name, email} = req.body
        try{
            const data = await userUseCase.create({
                name,
                email,
            })
            return reply.send(data)
        }catch(error){
            reply.send(error)
        }
    });
    fastify.get('/',(req, reply) =>{
        reply.send({ hello: 'hello'});
    })
}