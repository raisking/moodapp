//Must install Mongoose and add connection to MongoDB Atlas
const express = require('express');
const bodyParser = require('body-parser');
const moodapp = express();
const mongoose = require('mongoose');
const Food = require('./models/Food')

//MONGO DRIVER - CONNECT TO MONGODB ATLAS
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://it6203:kennesawstate1!@cluster0-divzh.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    
  const collection = client.db("IT6203").collection("Food");
  // perform actions on the collection object
  client.close();
});

//CONNECT TO MONGODB ATLAS
/*mongoose.connect('mongodb+srv://it6203:kennesawstate1!@cluster0-divzh.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
  .then(() => { console.log("Database is Connected"); })
  .catch(() => { console.log("Error Connecting to Database"); });
*/

//FOOD SECTION
moodapp.use((req, res, next) => {
    console.log('Line is Always Called');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,OPTIONS,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Origin,Content-Type, Accept');
    next();
});
moodapp.use(bodyParser.urlencoded({extended:false}))
moodapp.use(bodyParser.json())

moodapp.get('/Food', (req, res, next) => {
  Food.find() 
  .then(data => res.status(200).json(data))
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);});
});

moodapp.post('/Food', (req, res, next) => {
    const food = new Food({Food : req.body.Food});
      //send the document to the database 
      food.save()
    
        //in case of success
        .then(() => { console.log('New Food Added Successfully');})
        //if error
        .catch(err => {console.log('Error:' + err);});
});

moodapp.delete("/Food/:id", (req, res, next) => {
    Food.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Your Food is Deleted!");
    });
  });

  
  moodapp.put('/Food/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      Food.findOneAndUpdate({_id: req.params.id},
        {$set:{Food : req.body.Food}},{new:true}) 
       .then((food) => {
          if (food) { //what was updated
            console.log(food);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err);
       });
   } else {
     console.log("please provide correct id");
   }
    
  });
  //USERMOOD SECTION

  //VENDOR SECTION

  //EXERCISE SECTION
module.exports= moodapp;