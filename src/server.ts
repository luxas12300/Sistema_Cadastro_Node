import { app} from "./routes/app"
app.listen(
    {
    port: 3100,
}, () => console.log('Server is running on port 3100')
)






// app.get('/hello', async() =>{
    
// })

// app.listen({
//     port: 3333,
// }).then(() =>{
//     console.log('HTTP Server Running!')
// })