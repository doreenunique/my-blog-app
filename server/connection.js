// getting-started.js
const mongoose = require('mongoose');
require("dotenv").config();
const uri = process.env.mongodb_uri

main()
.then(() => console.log("Connected to database"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}