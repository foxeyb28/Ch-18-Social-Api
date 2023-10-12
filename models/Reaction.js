const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
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