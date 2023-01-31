import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(userRoute)
const CONNECTION_URL = 'mongodb+srv://endri:7a2ssWvrhh0XBvx7@cluster0.xbnr7h0.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery',false);
mongoose.connect(CONNECTION_URL , {useNewUrlParser: true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message));
