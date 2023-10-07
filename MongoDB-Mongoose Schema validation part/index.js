const mongoose = require('mongoose');
//let URL = "https://localhost:8080/users"
//mongoose.connect('mongodb://127.0.0.1:27017/test'); //127.0.0.1 is a local host

//Establishing connection
main()
.then(() => {    //if successfully executed then print result
    console.log(" connection successful");
})
.catch(err => console.log(err)); //execution : with main function if error occur then catch error and print error

async function main() { //asynchronous function it works separately
  await mongoose.connect('mongodb://127.0.0.1:27017/test'); //awaiting connection with mongoose
}

//creating schema
const userSchema = new mongoose.Schema({  //schema/blueprint of user collection this collection stores name , email and age
    name: String,
    email: String,
    age: Number,
});

//schema converted to actual mongoDB database collection so collection created named User
const User = mongoose.model("User", userSchema); //user is name of model - mongoose.model is a method - "User" is a name of collection - userSchema is a schema 

User.findByIdAndDelete("65201722184d4c89cf13e10f").then(res => {
    console.log(res);
});
// User.deleteMany({ age: 55,}).then(res => {
//     console.log(res);
// });
// User.deleteOne({ email: 'Julie.k7@gmail.com',}).then(res => {
//     console.log(res);
// });

//-----update====
// User.findOneAndUpdate({email: "AnitaRam305@gmail.com"}, {age: 37}, {new : true}) //name: "Anita" , new will return modified and updated doc. //model.findByIdAndUpdate
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// });
// User.updateOne({email: 'AjayRam05@gmail.com'}, {name:"Ajay"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// });
// User.updateMany({age: {$gt: 48}}, {age: 55})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// });


// User.find({age: {$gt:30}}) //findById, findOne()
//   .then((res) => {
//     // console.log(res); 
//      console.log(res[0].name);
//   })
//   .catch((err) =>{
//     console.log(err);
//   });
// User.insertMany([
//     {name: "Anita", email:"AnitaRam305@gmail.com", age:40},
//     {name: "Ajay", email:"AjayRam05@gmail.com", age:50},
//     {name: "Julie", email:"Julie.k7@gmail.com", age:30},
// ]).then((res) => {
//     console.log(res);
// });

 // creating user's object model i.e a document created
// const user2 = new User({    
//     name: "Ashwini",  //properties of user
//     email: "ashwinichiky18@gmail.com",
//     age: 20,
// });

// //doc created is to be saved inside mongodb 
// user2
// .save() //its a asynchronous function which returns a promise.
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// }); 