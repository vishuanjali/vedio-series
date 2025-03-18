import mongoose, { Schema }  from "mongoose";
import mongooseAggregatePaginate from "mongoose-paginate-v2";
const videoschema= new mongoose.Schema({
videofile:{
    type:String,
    require:true
},
thumbnail:{
    type:String,
    require:true
},
title:{
    type:String,
    require:true
},
description:{
    type:String,
    require:true
},
duretion:{
    type:Number,
    require:true
},
views:{
    type:Number,
    default:0
},
ispublic:{
    type:Boolean,
    default:true
},
owner:{
    type: Schema.Type.ObjectId,
    ref:"user"
}
}
,{
    timestamps:true
}
)


export const video = mongoose.model("video", videoschema)