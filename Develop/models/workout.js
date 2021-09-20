const mongoose = require("mongoose");

//setting up schema with mongoose
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
