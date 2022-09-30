const PollingUnit = require('../models/pollingUnit');
const Lga = require('../models/lga');
const AnnouncedPu = require('../models/announcedPuResult');

module.exports.getPollingUnit = async (req,res) => {
    const polling_unit = await PollingUnit.find({});
    res.render('categories/pollingUnit',{polling_unit})
}

module.exports.getLga = async (req,res) =>{
    const lgas = await Lga.find({});
    res.render('categories/lga',{lgas});
}

module.exports.getPollingUnitLga  = async (req,res) => {
    const {id} = req.params;
    const polling_unit = await  PollingUnit.findOne({uniqueid:id});
    const puResult = await AnnouncedPu.find({polling_unit_uniqueid:id});
    res.render('categories/result',{polling_unit,puResult});
    // res.send(puResult);
}