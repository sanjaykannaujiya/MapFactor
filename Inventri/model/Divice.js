const mongoose =require('mongoose')
const Schema =mongoose.Schema
const deviceSchema =new Schema({
    imei:{
        type:String,
        required:true,
    },
      serial:{
        type:String,
        require:true,

      },
      model:{
        type:String,
        require:true,

      } ,
      manufacturer:{
        type:String,
        require:true,

      },
      
     
})
module.exports=mongoose.model('Device',deviceSchema)