const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    image: String
  });

const Celebrity = mongoose.model('Celebrity', celebSchema);


module.exports = Celebrity;