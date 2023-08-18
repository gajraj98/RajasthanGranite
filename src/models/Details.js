const mongoose = require("mongoose");
const Details = mongoose.Schema({
     brandName:String,
     brandUrlLogo:String,
     links:[
        {
            lable:String,
            url:String
        },
     ],
});
module.exports = mongoose.model("details",Details);