const mongoose = require("mongoose");

const Slider = mongoose.Schema({
    title:String,
    subTitle:String,
    url:String,
    class:String
});

module.exports = mongoose.model("sliders",Slider);