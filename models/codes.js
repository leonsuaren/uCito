const mongoose = require('mongoose');

const CodesSchema = new mongoose.Schema({
  state: {
    type: String,
    require: true
  },
  codes: {
    type: Array,
    require: true
  }
});

const Codes = mongoose.model('Codes', CodesSchema);

module.exports = Codes;