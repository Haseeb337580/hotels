const express = require("express");
const router = express.Router();
const menuCard = require("./../modules/menu");

router.post("/", async (req, res) => {
    try {
      const Data = req.body;
      const menu = new menuCard(Data);
      const result = await menu.save();
      console.log("data saved");
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const result = await menuCard.find();
      console.log("Data Received:", result);
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  router.put("/:id",async(req,res)=>{
    try{

    
    const personid = req.params.id;
    const data = req.body;
    const response = await menuCard.findByIdAndUpdate(personid,data,{
        new : true,
        runValidators:true,

    });
    if(!response){
        return res.status(404).json({message:"person not found"})
    }
    console.log("data updated");
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: err.message });

    }

  })
  router.delete("/:deleteid",async(req,res)=>{
    try{
      const deleteid = req.params.deleteid;
      const response = await(menuCard.findByIdAndDelete(deleteid));
      console.log("Data deleted:", response);
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  })
  module.exports = router;