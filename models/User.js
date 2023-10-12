const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },

  email: [{
    type: String,
    unique: true,
    required: 'Email address is required',
    validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
    },
    required: [true, "Email required"],

    }],
   
      
  thoughts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought',
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const User = model('user', userSchema);

module.exports = User;
