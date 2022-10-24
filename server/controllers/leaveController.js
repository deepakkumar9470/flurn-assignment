const Leave = require('../models/Leave');


module.exports.addLeave = async (req, res) => {
    const leave = req.body;

    try{
        const newLeave = new Leave(leave);
        await newLeave.save();
        res.status(201).json(newLeave)
    } catch (error){
        res.status(404).json({ message: error.message});     
    }
}

module.exports.getLeaves = async (req, res) => {
    try{
       
        const leaves = await Leave.find().sort({_id : -1});
        res.status(200).json(leaves);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.getLeaveById = async (req, res) => {
    try{
        const leave = await Leave.findById(req.params.id);
        res.status(200).json(leave);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.editLeave = async (req, res) => {
    try{
        const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json(leave);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}



module.exports.deleteLeave = async (req, res) => {
    try{
        await Leave.findByIdAndRemove(req.params.id);
        res.status(200).json("Leave has been deleted");
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}