import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    DATABAS_URL: z.string()
})

const env = envSchema.parse(process.env)

