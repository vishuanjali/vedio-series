//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import mongoose from "mongoose";

import connectdb from "./db/index.js";
dotenv.config({
    path:'./env'
})
connectdb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is runnung at port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("mongo db connection failed!!!" , err);
    
})





























//import express from "express"
// const app=express()
// ;(async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR:",error);
//             throw error
            
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`APP IS LISTENING ON ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.log("ERROR", error);
//         throw err
        
//     }
// })()