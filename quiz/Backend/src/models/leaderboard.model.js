import mongoose,{Schema} from 'mongoose'
const leaderboardSchema=new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})
export const Leaderboard=mongoose.model("Leaderboard",leaderboardSchema)