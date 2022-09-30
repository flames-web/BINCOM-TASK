const mongoose = require('mongoose');
const {Schema} = mongoose;

const agentSchema = new Schema({
    name_id:{
        type:Number
    },
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        number
    },
    pollingunit_uniqueid:{
        type:Number
    }
})

module.exports = mongoose.model('Agent',agentSchema);