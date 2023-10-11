const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    ObjectId: {
      type: Data,
      default: NewObbject,
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
       type: Date,
       default: Date.now,
       get: (date) => timeSince(date),
    },
});
module.exports = reactionSchema;