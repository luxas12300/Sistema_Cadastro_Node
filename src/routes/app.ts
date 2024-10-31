import fastify, { FastifyInstance } from 'fastify';
import { prismaClient } from '../database/prismaClient';
import { userRoutes } from './user.routes';
import { contactRoutes } from "./contact.routes"
import cookie from '@fastify/cookie'

export const app: FastifyInstance = fastify()

app.register(cookie)
app.register(userRoutes, {
    prefix: '/users'
})
app.register(contactRoutes, {
    prefix: '/contacts'
})