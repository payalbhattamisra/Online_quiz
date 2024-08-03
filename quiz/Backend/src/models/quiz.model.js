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
          type: Schema.Types.ObjectId,
          ref: 'quizquestion'
    }]
},{timestamps:true})
export const Quiz=mongoose.model("Quiz",quizSchema)