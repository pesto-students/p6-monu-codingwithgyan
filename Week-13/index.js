const { default: axios } = require('axios');
const express = require('express');
const app = express();
const apiKey = "randomkey";
app.use(express.json());
app.use(express.urlencoded());
// Weather details for multiple cities
app.get("/api/geo/multiple",async(req,res)=>{
    let city=req.query.city;
    if(!city || city?.length === 0)
       return res.status(404).send({error:"Invalid City"});
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&limit=5&units=metric&cnt=7`;
    try
    {
        let result = await axios.get(url);
        let data = await result?.data;
        return res.status(200).send({data:JSON.stringify(data)});
    }
    catch(error)
    {
        console.log("error",error);
        return res.status(error?.status || 500).send({error:error});
    }
   
})
// weather forecast for 10 days or more
app.get("/api/forecast",async(req,res)=>{
    let daysCount=req.query.days;
    if(!daysCount || daysCount?.length === 0)
       return res.status(404).send({error:"Invalid City"});
    const url = `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=${daysCount}&appid=${apiKey}`;
    try
    {
        let result = await axios.get(url);
        let data = await result?.data;
        return res.status(200).send({data:JSON.stringify(data)});
    }
    catch(error)
    {
        console.log("error",error);
        return res.status(error?.status || 500).send({error:error});
    }
   
})

// current weather of any city
app.get("/api/current",async(req,res)=>{
    let city=req.query.city;
    if(!city || city?.length === 0)
       return res.status(404).send({error:"Invalid City"});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try
    {
        let result = await axios.get(url);
        let data = await result?.data;
        return res.status(200).send({data:JSON.stringify(data)});
    }
    catch(error)
    {
        console.log("error",error);
        return res.status(error?.status || 500).send({error:error});
    }
   
})

app.listen(1234,()=>{
    console.log("server has started");
})