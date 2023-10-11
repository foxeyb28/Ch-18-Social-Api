const { connect, connection } = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myfirstmongooseapp');
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/usersDB';

connect(connectionString);

module.exports = mongoose.connection;