import {afterAll, beforeAll, expect, test} from 'vitest'
import { createServer } from 'node:http'
import request from 'supertest'
import { app } from '../src/routes/app'
import { after } from 'node:test'
import { userRoutes } from '../src/routes/user.routes'

beforeAll(async () =>{
    await app.ready()
})

afterAll(async () =>{
    await app.close()
})

test('Criação de novo usuário', async ()=>{
    await request(app.server)
    .post('/')
    .send({
        name: "Lucas",
        email: "luxas1230",
    })
    .expect(201)
})