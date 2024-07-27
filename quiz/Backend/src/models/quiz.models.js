import mongoose,{Schema} from 'mongoose'
const quizSchema=new Schema({
    quizquestion_id:{
        type:Schema.Types.ObjectId,
        ref:"quizquestion"
    },
    TypeQuizid:{
       type:Schema.Types.ObjectId,
       ref:"Typequiz"
    },
    active:{
      type:Boolean,
      default:true
    },
    manyTimesDone:{
     type:Number,
     required:true
    },
    title:{
        type:String,
        required:true
    }
},{timestamps:true})
export const Quiz=mongoose.model("Quiz",quizSchema)