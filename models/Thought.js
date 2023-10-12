const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
        date: Date,
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
        reactions: [reactionSchema]


    }
    );
    thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = mongoose.model('thought', thoughtSchema);


    module.exports = thoughtSchema;