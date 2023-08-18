const express = require("express");
const { route } = require('express/lib/application');
const routes = express.Router();
const Details = require("../models/Details");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contacts");
const { default: mongoose } = require("mongoose");


routes.get("/",async (req,res)=>{
    const details = await Details.findOne({"_id":"64dc37c6a9f0694165d8714e"});
    const sliders = await Slider.find({});
    const services = await Service.find();
    res.render("index",{
        details:details,sliders:sliders,services : services
    });
})
routes.get('/gallery',async(req,res)=>{
    const details = await Details.findOne({"_id":"64dc37c6a9f0694165d8714e"});
    res.render("gallary",{
        details:details
    });
})
routes.post("/process-contact-form", async (req,res)=>{
    console.log(req.body);
    try{
          const data = await Contact.create(req.body);
          res.redirect("/");
    }
    catch(e){
            console.log(e);
            res.redirect("/");
    }
})
module.exports = routes;