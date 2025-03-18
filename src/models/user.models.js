import mongoose, { Schema }  from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userschema= new mongoose.Schema({
    username: {
        type:stirng,
        require:true,
        unique:true,
        lowercase:true,
        trim: true,
        index:true
    },
    password:{
        type:String,
        require:true
    },
    fullname:{
        type:stirng,
        require:true,
        trim:true,
        index:true
    },
    email:{
        type:stirng,
        require:true,
        unique:true,
        lowercase:true,
        trim: true,
       },
       avatar:{
        type:String,
        require:true
       },
       coverimage:{
        type:stirng
       },
       watchhistory:[{
        type: Schema.Types.ObjectId,
        ref:"video"
       }],
       refreshtoken:{
        type:String
       }
},{timestamps:true})
//middleware----password encrypt
userschema.pre("save", async function(next){
    if(!this.ismModified("password")) return next ()
 this.password=bcrypt.hash(this.password,10)
 next()
})

//custom method

userschema.methods.isPasswordCorrect= async function (password){
await bcrypt.compare(password , this.password)
}

userschema.methods.generateAccessToken= function(){
    jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
} 

userschema.methods.generateRefreshToken= function(){
    jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)
} 


export const user = mongoose.model("user", userschema)