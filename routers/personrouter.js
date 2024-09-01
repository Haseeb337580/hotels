const express = require("express");
const router = express.Router();
const Person = require("./../modules/person");



router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log("data saved");
      res.status(201).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });
  router.put("/:id",async(req,res)=>{
    try{

    
    const personid = req.params.id;
    const data = req.body;
    const response = await Person.findByIdAndUpdate(personid,data,{
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
  
  router.get("/", async (req, res) => {
    try {
      const findPerson = await Person.find();
      console.log("Data retrieved:", findPerson);
      res.status(200).json(findPerson); // Send the retrieved data
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message }); // Handle error response
    }
  });

  router.get("/:workingid", async (req, res) => {
    try {
      const workingid = req.params.workingid;
      if (
        workingid == "chef" ||
        workingid == "waiter" ||
        workingid == "manager"
      ) {
        const findPerson = await Person.find({ work: workingid });
        console.log("Data retrieved:", findPerson);
        res.status(200).json(findPerson);
      } else {
        res.status(404).json({ error: "Invalid workingid" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message }); // Handle error response
    }
  });
  router.delete("/:deleteid",async(req,res)=>{
    try{
      const deleteid = req.params.deleteid;
      const response = await(Person.findByIdAndDelete(deleteid));
      console.log("Data deleted:", response);
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  })
  module.exports = router;