const PollingUnit = require('../models/pollingUnit');
const Lga = require('../models/lga');
const AnnouncedPu = require('../models/announcedPuResult')
const mongoose = require('mongoose');
const {datas,lgas,pollingUnitResult} = require('./data');

const dbUrl = process.env.DB_URL
mongoose.connect('mongodb+srv://olalekan:JVRaNVWelOc8R6BL@atlascluster.wihos6y.mongodb.net/election');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', () => {
  console.log('Database Opened');
})

const seedDB = async () => {
    await PollingUnit.deleteMany({});
    await Lga.deleteMany({});
    await AnnouncedPu.deleteMany({});
    for(data of datas){
        const polling_unit = new PollingUnit ({
            uniqueid:data.uniqueid,
            polling_unit_id:data.polling_unit_id,
            ward_id:data.ward_id,
            lga_id:data.lga_id,
            uniquewardid:data.uniquewardid,
            polling_unit_number:data.polling_unit_number,
            polling_unit_name:data.polling_unit_name,
            polling_unit_description:data.polling_unit_description,
            lat:data.lat,
            long:data.long,
            entered_by_user:data.entered_by_user,
            date_entered:data.date_entered,
            user_ip_address:data.user_ip_address
        })
        await polling_unit.save()
    }
    for(lga of lgas){
        const newLga = new Lga ({
            uniqueid:lga.uniqueid,
            lga_id:lga.lga_id,
            lga_name:lga.lga_name,
            state_id:lga.state_id,
            lga_description:lga.lga_description,
            entered_by_user:lga.entered_by_user,
            user_ip_address:lga.user_ip_address
        })
        await newLga.save();
    }
    for(pool of pollingUnitResult){
        const newPu = new AnnouncedPu({
            result_id:pool.result_id,
            polling_unit_uniqueid:pool.polling_unit_uniqueid,
            party_abbreviation:pool.party_abbreviation,
            party_score:pool.party_score,
            entered_by_user:pool.entered_by_user,
            date_entered:pool.date_entered,
            user_ip_address:pool.user_ip_address,
        })
        await newPu.save()
    }
    for(lga of lgaResults){
        const newLga = new (lga);
    }
}

seedDB().then( () => {
    mongoose.connection.close()
});