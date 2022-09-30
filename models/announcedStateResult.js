const mongoose = require('mongoose');
const {Schema} = mongoose;


const announceStateSchema = new Schema ({
    result_id:{
        type:Number,
    },
    state_name:{
        type:string,
    },
    party_abbreviation:{
        type:String
    },
    party_score:{
        type:Number,
    },
    entered_by_user:{
        type:String
    },
    date_entered:{
        type:Date,
        default:Date.now()
    },
    user_ip_address:{
        type:Number,
    }
})