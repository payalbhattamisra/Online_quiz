import mongoose,{Schema} from 'mongoose'
const quizquestionChoiceSchema=new Schema({
   correct:{
     type:Number,
     required:true
   },
   choice1:{
    type: String,
    required: true
   },
   choice2:{
    type: String,
    required: true
   },
   choice3:{
    type: String,
    required: true
   },
},{timestamps:true})
export const quizquestionChoice=mongoose.model("quizquestionChoice",quizquestionChoiceSchema)