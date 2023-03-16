const mongoose = require('mongoose');

const connectDB = async () => {
   await mongoose.connect(`mongodb+srv://leonsuarez:${process.env.DBCONNECTIONPSW}@ucitocluster.lkly5jo.mongodb.net/UcitoDB?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB Atlas connected');
};

module.exports = connectDB;
