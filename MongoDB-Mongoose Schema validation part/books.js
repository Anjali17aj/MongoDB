const mongoose = require('mongoose');

//Establishing connection
main()
.then(() => {    //if successfully executed then print result
    console.log(" connection successful");
})
.catch(err => console.log(err)); //execution : with main function if error occur then catch error and print error

async function main() { //asynchronous function it works separately
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); //awaiting connection with mongoose
}

//creating schema
const bookSchema = new mongoose.Schema({  //schema/blueprint of user collection this collection stores name , email and age
    title: {
        type: String,
        required: true, //title must be there
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price:{
        type: Number,
        min: [1, "Price is tooo low for amazon selling"], //handling errors custom messgae for eeror
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction",],
    },
    genre: [String]
});

//creating a model
const Book = mongoose.model("Book", bookSchema); //collection formed inside database

Book.findByIdAndUpdate("65218c30ef683d063c58e4dd", {price: -100}, {runValidators: true})
.then((res) => {    //if successfully executed then print result
    console.log(res);
})
.catch(err => {
    console.log(err.errors.price.properties.message);  //handling errors custom messgae for eeror
});

//data inside book
// let book1 = new Book({ 
//     title: "Maths",
//     author: "RD Sharma",
//     price: 1200
// });

// let book1 = new Book({ 
//     title: "Srimad Bhagavad Gita",
//     author: "Maharishi Veda Vyasa",
//     price: 500,
// category: "non-fiction",
//  genre: ["hindu","hindu-mythology"],
// });

// //to save book1
// book1.save().then(res => {    // save successfully then print result if not then print err
//     console.log(res);
// })
// .catch(err =>{
//     console.log(err);
// });

