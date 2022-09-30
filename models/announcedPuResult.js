const mongoose = require('mongoose');
const {Schema} = mongoose;

const announcePuSchema = new Schema({
    result_id:{
        type:Number,
    },
    polling_unit_uniqueid:{
        type:Number,
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
    },
    user_ip_address:{
        type:String,
    }
})

module.exports = mongoose.model('AnnouncedPu',announcePuSchema);

