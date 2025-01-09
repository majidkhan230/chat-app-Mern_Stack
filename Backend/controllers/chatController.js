
import express from 'express'
import authMiddleware from '../middlewares/authMiddlewares.js'
import chatModel from '../models/chat.js'


const chatRoute = express.Router()


chatRoute.post("/create-chat",authMiddleware,async(req,res)=>{
try {
    const chat = await chatModel.create(req.body)
    res.status(201).send({
        message: "Chat created successfully",
        chat: chat,
    })
} catch (error) {
    res.status(400).send({
        message: "something went wrong with server",
        error: error.message,
    });
}
    
})


export default chatRoute;