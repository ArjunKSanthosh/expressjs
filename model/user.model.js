import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userName:{type:String,require:[true,"user name required"],unique:[true,"user already exists"]},
    pwd:{type:String,require:[true,"username is required"]}
})

export default mongooose.model.users||mongoose.model("user",userSchema)