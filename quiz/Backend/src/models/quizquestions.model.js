import mongoose,{Schema} from 'mongoose'
const quizquestionSchema=new Schema({
  text: { type: String, required: true },
  type: { type: String, required: true },
  options: [{ text: String, correct: Boolean }],
  answer: String,
  bold: { type: Boolean, default: false },
  italic: { type: Boolean, default: false },
  upperCase: { type: Boolean, default: false }

},{timestamps:true})
export const quizquestion=mongoose.model("quizquestion",quizquestionSchema)