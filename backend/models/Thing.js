const mongoose=require('mongoose')

const thingShema=mongoose.Schema({
    Name:{type:String, required:true},
    phoneNbr:{type:Number, required:true},
    Date:{type:String, required:true},
    Livreur:{type:String, required:false},
    location:{type:String, required:false},
    Commande:{type:Array, required:true},
    Price:{type:Number, required:true}
})

module.exports=mongoose.model('Thing',thingShema);