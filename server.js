const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();

const { Course, Enrollment } = require('./Schema/onlineLearningPlatform');
const { JobListing, Company, Application } = require('./Schema/jobPortalSystem');

app.use(express.json());

mongoose.connect('mongodb+srv://indhuja1012006:databaseca1@cluster0.q8zv7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected to db');
})
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.send("welcome to the platform");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})