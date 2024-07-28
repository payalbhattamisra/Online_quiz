import mongoose,{Schema} from 'mongoose'
const quizSchema=new Schema({
    CreatedBy:{
       type:Schema.Types.ObjectId,
       ref:"User",
       required: true
    },
    category:{
     type:String,
     required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    created_at: { 
        type: Date,
        default: Date.now 
    }
},{timestamps:true})
export const Quiz=mongoose.model("Quiz",quizSchema)