const express = require("express");
const app = express();
const routes = require('./routes/main');
const hbs = require("hbs");
const mongoose  = require("mongoose");
const Details = require("./models/Details");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const bodyParser = require("body-parser");
// db connection
mongoose.connect("mongodb://127.0.0.1:27017/node_project",{
   useNewUrlParser:true, useUnifiedTopology:true
},).then(()=>{
    console.log("DB connected")
    // Service.create([
    //     {icon:"fa-bars",
    //     title:"Granite",
    //     description:"we provide world class granite slbs",
    //     linkText:"Service",
    //     link:"#"
    //   }
    // ])
    // Slider.create(
    //     [
    //         {
    //            title:"Granite",
    //            subTitle:"One of the most used stone",
    //            url:"/static/images/s1.jpeg"
    //         },
    //         {
    //             title:"Granite",
    //             subTitle:"One of the most used stone",
    //             url:"/static/images/s2.jpeg"
    //         },
    //         {
    //             title:"Granite",
    //             subTitle:"One of the most used stone",
    //             url:"/static/images/s3.jpeg"   
    //         }
    //     ])
    // Details.create({
    //     brandName:"Rajasthan Granite",
    //     brandUrlLogo:"/static/images/logo.png",
    //     links:[
    //         {
    //             lable:"Home",
    //             url:"/"
    //         },
    //         {
    //             lable:"Services",
    //             url:"/services"
    //         },
    //         {
    //             lable:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             lable:"About",
    //             url:"/about"
    //         },
    //         {
    //             lable:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
})
.catch((error)=>{console.error(error)});

//  we are using urlencoded becouse we are sending data in urlencoded is we send in json when we have to use json
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/static",express.static("public"));
app.use('',routes);
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");




app.listen(process.env.PORT | 5556,()=>{
    console.log("Project Started");
});
