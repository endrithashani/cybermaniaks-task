import mongoose from 'mongoose'


const User = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    }
})

export default mongoose.model('Users', User)