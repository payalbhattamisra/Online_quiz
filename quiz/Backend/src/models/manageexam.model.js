import mongoose,{Schema} from 'mongoose'
const manageexamSchema=new Schema({
    title: String,
    category: String,
    examDate: Date,
    status: String,
},{timestamps:true})
export const manageExam=mongoose.model("manageExam",manageexamSchema)