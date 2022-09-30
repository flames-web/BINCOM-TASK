const mongoose = require('mongoose');
const {Schema} = mongoose;

const pollingSchema = new Schema ({
    uniqueid:{
        type:Number
    },
    polling_unit_id:{
        type:Number,
    },
    ward_id:{
        type:Number
    },
    lga_id:{
        type:Number,
    },
    uniquewardid:{
       type:Number
    },
    polling_unit_number:{
        type:String
    },
    polling_unit_name:{
        type:String
    },
    polling_unit_description:{
        type:String
    },
    lat:{
        type:Number
    },
    long:{
        type:Number
    },
    entered_by_user:{
        type:String
    },
    user_ip_address:{
        type:String
    },
})

module.exports = mongoose.model('PollingUnit',pollingSchema);