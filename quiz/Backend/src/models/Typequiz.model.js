import mongoose,{Schema} from 'mongoose'
const  typequizSchema=new Schema({
    type1:{
      type:String,
      required:true
    },
    type2:{
        type:Boolean,
        required:true
    },
    type3:{
        type:Number,
        required:true
    },
    type4:{
       type:Schema.Types.Mixed, // Use Mixed type for flexibility
       required: true
    }
},{timestamps:true})
export const  Typequiz=mongoose.model("Typequiz", typequizSchema)