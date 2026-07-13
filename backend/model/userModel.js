import moongoose from "mongoose";

const userSchema = new moongoose.Schema({
    name:{
        type:String,
        required:true
    
    },
    email:{
        type:String, 
         required:true,
    unique:true    
},
password:{
    type:String
},
cartData:{
    type:Object,
    default:{}
}
}, {timestamps:true , minmize:false})
const User =  moongoose.model("user", userSchema)

export default User;