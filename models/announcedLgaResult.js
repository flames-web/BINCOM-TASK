const mongoose = require('mongoose');
const {Schema} = mongoose;


const announceSchema = new Schema ({
    result_id:{
        type:Number
    },
    lga_name:{
        type:String
    },
    party_abbreviation:{
        type:String
    },
    party_score:{
        type:Number
    },
    entered_by_user:{
        type:String
    },
    date_entered:{
        type:Date,
        Default:Date.now()
    },
    user_ip_address:{
        type:Number
    }
})

module.exports = mongoose.model('AnnouncedLgaResult',announceSchema);