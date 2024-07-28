import mongoose,{Schema} from 'mongoose'
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    password:{
        type:String,//encrypted
        required:[true,'password is required']
    },
    profilepic:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['learner','admin'],
        default:'learner'
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },
    created_at: { 
        type: Date,
        default: Date.now 
    },
    refreshToken:{
        type:String
    }

},{timestamps:true})
export const User=mongoose.model("User",userSchema)