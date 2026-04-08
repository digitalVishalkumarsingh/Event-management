const mongoose = require('mongoose');

const createcontact = async () => {
  const url = process.env.MONGODB_URI;
  if (!url) throw new Error('MONGODB_URI is not defined in environment variables');

  await mongoose.connect(url);
  console.log('Database connected successfully');
};

module.exports = createcontact;