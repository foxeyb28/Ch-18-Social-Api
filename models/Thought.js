const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        _id:{

          _id: 'Id',
        },
        friends: '',

    }

);
    module.exports = thoughtSchema;