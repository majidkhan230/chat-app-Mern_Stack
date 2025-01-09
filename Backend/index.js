import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import userRoutes from './controllers/userController.js'
import chatRoute from './controllers/chatController.js'


const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send({
        messsage:'welcome to Backend'
    })
})


app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoute)




export default app