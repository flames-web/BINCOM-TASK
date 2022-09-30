const mongoose = require('mongoose');
const {Schema} = mongoose;

const stateSchema = new Schema ({
    state_id:{
        type:Number
    },
    state_name:{
        type:String
    }
})

module.exports = mongoose.model('State',stateSchema);