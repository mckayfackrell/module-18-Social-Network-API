const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/helpers"); //import the dateFormate function from utils

// Define the Reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (Date) => dateFormat(Date),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    // a custom getter is a function that can transform a value before it gets returned when calling toJSON method on a Mongoose document. By setting toJSON.getters to true, Mongoose will apply the getter functions before returning the JSON representation
  }
);

// Define the Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (Date) => dateFormat(Date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// Virtual property to return the number of reactions for each thought
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create a Mongoose model for the Thought schema
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
