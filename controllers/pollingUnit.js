const PollingUnit = require('../models/pollingUnit');
const Lga = require('../models/lga');
const AnnouncedPu = require('../models/announcedPuResult');

module.exports.index = (req,res) => {
    res.render('index')
}

module.exports.getPollingUnit = async (req,res) => {
    const polling_unit = await PollingUnit.find({});
    res.render('categories/pollingUnit',{polling_unit,unit:'All'})
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
}

module.exports.getPuLga = async (req,res) => {
    const {id} = req.params;
    const lga = await Lga.findOne({uniqueid:id});
    const pu = await PollingUnit.find({lga_id:id})
    console.log(lga);
    res.render('categories/pollingUnit',{polling_unit:pu,unit:lga.lga_name});
}
