const mongoose = require('mongoose')


const coursescheema = mongoose.Schema({
     name: {
      type: String,
      require: true,
      unique: true,
     },
     duritionInMonths: {
     type: Number,
     require: true,
     dafault: 6,
     },
}, {timeStamp: true})
const model = mongoose.model("courses", coursescheema)

module.exports = model