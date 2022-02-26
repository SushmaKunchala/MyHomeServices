const express = require('express');
const router = require('express').Router();
const app = express();
const port = 5000;

require('dotenv').config();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true, 
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json());

let mc = require("mongodb").MongoClient;
const dburl=process.env.DBURL_PRIVATE;
let dbObj;
let collectionObj;
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client=>{
    dbObj = client.db("mydb");
    collectionObj = dbObj.collection("mycollection");
    usersObj=dbObj.collection("users");
    bookedObj=dbObj.collection("booked");
    housecleaningobj=dbObj.collection("housecleaning");
    app.set("collectionObj",collectionObj);
    console.log("Connected to cloud")
})
.catch(error=>{
    console.log("not connected to cloud",error)
})

app.get("/",function(req,res){
    collectionObj.find().toArray()
    .then(obj=>{
        res.send(obj)
    })
    .catch(error=>{
        console.log("error while getusers query",error);
    })
})

app.get("/getservices",function(req,res){

    collectionObj.find().toArray()
    .then(obj=>{
        res.send(obj)
    })
    .catch(error=>{
        console.log("error while getusers query",error);
    })
})

/*app.get("/users/email/:email/password/:password",function(req,res){

    usersObj.findOne({$and:[{email:{$eq:req.params.email}},{password:{$eq:req.params.password}}]})
    .then(obj=>{
        if(obj===null)
        {
            res.send(false);
        }
        else{
            res.send(true);
        }
    }

    )
    .catch(error=>{
        console.log("error while getusers query",error);
    })
})
*/
app.get("/getService/:cname",function(req,res)
{
    obj=dbObj.collection(req.params.cname);
    obj.find().toArray()
    .then(obj=>{
        res.send(obj)
    })
    .catch(error=>{
        console.log("error while getusers query",error);
    })
})
/*app.post("/signup/",function(req,res){

    usersObj.insertOne(req.body);
    res.send("inserted");
})*/

app.post("/success/",function(req,res){
    console.log(req.body);
    bookedObj.insertOne(req.body);
    res.send("inserted");
})

/*
app.get("/moredetails/:houseid",function(req,res){

    let hid = req.params.houseid
    // console.log(hid);
    collectionObj.findOne({num:{$eq:hid}})
    .then(obj=>{
        // console.log(obj);
        res.send(obj);
    })
    .catch(error=>{
        console.log("error",error);
    })
})*/


app.listen(port,function(){
    console.log("Server is running on port 5000")
})
