const mongoose = require('mongoose');
const {Schema} = mongoose;


const partySchema = new Schema ({
    id:{
        type:Number,
    },
    partyid:{
        type:String,
    },
    partyname:{
        type:String
    },

})

module.exports = mongoose.model('Party',partySchema);