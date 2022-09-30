const mongoose = require('mongoose');
const {Schema} = mongoose;


const announceWardSchema = new Schema ({
    ward_name:{
        type:String
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

module.exports = mongoose.model('AnnounceWard',announceWardSchema);