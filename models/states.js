const mongoose = require('mongoose');

const StatesSchema = new mongoose.Schema({
  state: {
    type: String,
    require: true
  },
  cities: {
    type: Array,
    require: true
  },
  code: {
    type: String,
    require: true
  }
});

const States = mongoose.model('State', StatesSchema);

module.exports = States;