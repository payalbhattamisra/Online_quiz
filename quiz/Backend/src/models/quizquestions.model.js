import mongoose,{Schema} from 'mongoose'
const quizquestionSchema=new Schema({
   quiz_Id:{
    type:Schema.Types.ObjectId,
    ref:"Quiz",
    required: true
   },
   correct_ans:{
     type:Number,
     required:true
   },
   text:{
     type:String,
     required:true
   }, 
   options: [{ 
    option_id: { type: Number, required: true },
    text: { type: String, required: true }
  }],
  created_at: { 
    type: Date, 
    default: Date.now
  }
},{timestamps:true})
export const quizquestion=mongoose.model("quizquestion",quizquestionSchema)