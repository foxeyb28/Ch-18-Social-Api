const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        
            email: {
                type: String,
                unique: true,
                required: 'Email address is required',
                validate: [valdidateEmail, 'Please fill a valid email address'],
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
          
                        },
                                 },
                                );

    const User = model('user', userSchema);

module.exports = User;