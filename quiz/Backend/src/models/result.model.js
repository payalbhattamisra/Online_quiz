import mongoose,{Schema} from 'mongoose'
const resultSchema=new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
         ref: 'User',
        required: true 
    },
    quiz_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Quiz', 
        required: true 
    },
    score: { 
        type: Number, 
        required: true 
    },
    completed_at: { 
        type: Date, 
        default: Date.now 
    }
},{timestamps:true})
export const Result=mongoose.model("Result",resultSchema)