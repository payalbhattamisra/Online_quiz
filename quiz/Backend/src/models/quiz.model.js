import mongoose,{Schema} from 'mongoose'
const quizSchema=new Schema({
    titleText: { type: String, required: true },
    titleBold: { type: Boolean, default: false },
    titleItalic: { type: Boolean, default: false },
    titleUpperCase: { type: Boolean, default: false },
    descText: { type: String, default: '' },
    descBold: { type: Boolean, default: false },
    descItalic: { type: Boolean, default: false },
    descUpperCase: { type: Boolean, default: false },
    examDate: Date,
    teacherInfo: String,
    questions: [{
      text: { type: String, required: true },
      bold: { type: Boolean, default: false },
      italic: { type: Boolean, default: false },
      upperCase: { type: Boolean, default: false },
      type: { type: String, required: true },
      options: [{ text: String, correct: Boolean }],
      answer: String
    }]
},{timestamps:true})
export const Quiz=mongoose.model("Quiz",quizSchema)