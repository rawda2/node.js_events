const mongoose=require('mongoose');
 const   EventSchema=new mongoose.Schema({
  
   
   title:{
        type:String,
        required: true
     },
     price:{
        type:Number,
        default:500
     },
     description :{
        type : String,
        required: true
     }

},{
    timestamps:true
})     


//create event model



module.exports=mongoose.model('event',EventSchema);