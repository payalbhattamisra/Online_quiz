import mongoose,{Schema} from 'mongoose'
const typequestionSchema=new Schema({
    type1:{
        type:String,
        required:true,
        trim:true
      },
      type2:{
          type:Boolean,
          required:true,
          default:false
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
export const Typequestion=mongoose.model("Typequestion",typequestionSchema)