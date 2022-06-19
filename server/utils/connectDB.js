const mongoose = require('mongoose');

exports.connectDB = () =>
  mongoose
    .connect(process.env.DB)
    .then(conn => console.log('Successfully connected to DB'))
    .catch(err => console.log('Error in connecting with DB.', err));
