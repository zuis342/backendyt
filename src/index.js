import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()
























/*
import  express  from "express";
const app = express()

( async ()=>{
    try {
        await mongoose.Connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("app is unable to talk with DB", error);
            throw error
        })

        app.listen(process.env.port, ()=>{
            console.log(`app is listening on port ${process.env.port}`);
        })


    } catch (error) {
        console.error("ERROR:", error )
        throw error
    }

} )()


*/