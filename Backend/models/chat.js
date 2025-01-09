import mongoose from 'mongoose';

const chatSchema= new mongoose.Schema({
    members:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'users'
            }
        ]
    },
    lastMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'messages'
    },
    unreadMessageCount:{
        type:Number,
        default:0
    },    
},{timestamps:true})






const chatModel = mongoose.model('chat', chatSchema)


export default chatModel









