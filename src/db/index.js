import mongoose from "mongoose";
import { DB_NAME } from "../constents.js";

const connectdb= async ()=>{
    try {
      const connectioninstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n DATABASE CONNECT SUCCESFULLY ON PORT ${process.env.PORT} ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connecction failed" , error);
        process.exit(1)
        
    }
}
export default connectdb

// (async()=>{
// try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`DATABASE CONNECT SUCCESFULLY ON PORT ${process.env.PORT}`);
    
// } catch (error) {
//     console.log("database connection failed:" , error);
    
// }
// })()