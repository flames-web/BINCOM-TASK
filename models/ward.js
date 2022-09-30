const mongoose = require('mongoose');
const {Schema} = mongoose;

const wardSchema = new Schema ({
    ward_id:{
        type:Number
    },
    ward_name:{
        type:String
    },
    lga_id:{
        type:Schema.Types.ObjectId,
    },
    ward_description:{
        type:String
    },
    entered_by_user:{
        type:String,
    },
    date_entered:{
        type:Date,
        default:Date.now()
    },
    user_ip_address:{
        type:Number
    }
})

module.exports = mongoose.model('Ward',wardSchema);