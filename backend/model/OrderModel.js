import mongoose from "mongoose";


const orderSchema = new mongoose.Schema(
{
    userId:{
        type:String,
        required:true
    },

    items:{
        type:Array,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    address:{
        firstName:String,
        lastName:String,
        email:String,
        phone:String,
        street:String,
        city:String,
        state:String,
        country:String,
        zipCode:String
    },

    paymentMethod:{
        type:String,
        default:"COD"
    },

    payment:{
        type:Boolean,
        default:false
    },

    status:{
        type:String,
        default:"Order Placed"
    },

    date:{
        type:Number,
        required:true
    }

},
{timestamps:true}
)

const Order = mongoose.model("Order",orderSchema)

export default Order;