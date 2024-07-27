import mongoose,{Schema} from 'mongoose'
const quizquestionSchema=new Schema({
   quizQuestionChoiceId:{
    type:Schema.Types.ObjectId,
    ref:"quizquestionChoice"
   },
   typeQuestion:{
     type:Schema.Types.ObjectId,
     ref:"Typequestion"
   },
   active:{
     type:Boolean,
     default:true
   },
   image:{
     type:String,
     required:false
   },
   video:{
    type:String,
    required:false
   }
},{timestamps:true})
export const quizquestion=mongoose.model("quizquestion",quizquestionSchema)