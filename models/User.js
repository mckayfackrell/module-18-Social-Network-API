const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, // the username must be unique in the database
      required: true, // the username is a required field
      trim: true, // removes any leading or trailing whitespace
    },
    email: {
      type: String,
      required: [true, "Please enter Email Address"], // the email must be provided and an error message is displayed if not
      unique: true, //the email must be unique in the database
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, // regex to match a valid email address
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, // this is a MongoDB object ID type
        ref: "thought", // this refers to the Thought model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, // this is a MongoDB object ID type
        ref: "user", // this refers to the User model
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // this makes virtual properties (like friendCount) included in the JSON response
    }
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length; // this virtual property returns the number of friends a user has
});

const User = model('user', userSchema);

module.exports = User;
