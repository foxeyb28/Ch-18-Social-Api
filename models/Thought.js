const { Schema, model } = require('mongoose');

const userSchema = new mongoose.Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
        date: date,
        default: Date.now,
        get: (createdAt) => new Date(createdAt).toLocaleString(),

    },
        userName: { 

         type: String,
         required: true,
        },
        reactionBody: {
          type: String,
          required: true,
          maxLength: 280,
        }, 
        reactions: [reactionSchema,]


    }

);
    module.exports = thoughtSchema;