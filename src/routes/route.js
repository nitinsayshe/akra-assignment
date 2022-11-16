const express = require("express")
const router = express.Router()
const { MongoClient } = require('mongodb');

//connect to the database
const url = 'mongodb://nitinsayshe:Mantesh007@ac-3s9rokv-shard-00-00.ti1iqt8.mongodb.net:27017,ac-3s9rokv-shard-00-01.ti1iqt8.mongodb.net:27017,ac-3s9rokv-shard-00-02.ti1iqt8.mongodb.net:27017/?ssl=true&replicaSet=atlas-olcurh-shard-0&authSource=admin&retryWrites=true&w=majority';
var database;
MongoClient.connect(url, { useNewurlParser: true }, (error, result) => {
    if (error) throw error
    database = result.db('test')
    console.log("db connection succesfull")
})

//get the all user api
router.get("/", async (req, res) => {
    database.collection('users').find({}).toArray((err, result) => {
        res.send(result)
    })
})

//get the data based on filter
router.get("/search", async (req, res) => {
    let { name, phone } = req.body;
    database.collection('users').find({ name: { $regex: name, $options: 'i' }, phone: { $regex: phone, $options: 'i' } }).toArray((err, result) => {
        res.send(result)
    })
})

//get the single data
router.get("/findone", async (req, res) => {
    let {...rest}=req.body
    let result= await database.collection('users').findOne(rest)
    res.send(result)
})

//get the by page
router.get("/:page", async (req, res) => {
    var perPage = 10, page = Math.max(0, req.params.page)
    database.collection('users').find({}, { limit: (perPage), skip: (perPage * page) }).toArray((err, result) => {
        res.send(result)
    })
})




module.exports = router