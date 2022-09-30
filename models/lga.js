const mongoose = require('mongoose');
const {Schema} = mongoose;

const lgaSchema = new Schema ({
    uniqueid:{
        type:Number
    },
    lga_id:{
        type:Number,
    },
    lga_name:{
        type:String,
    },
    state_id:{
        type:Number,
    },
    lga_description:{
        type:String,
    },
    entered_by_user:{
        type:String
    },
    date_entered:{
        type:Date,
    },
    user_ip_address:{
        type:String,
    }
})

module.exports = mongoose.model('Lga',lgaSchema);