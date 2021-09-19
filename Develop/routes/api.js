const db = require("../models");
const router = require("express").Router();

//getworkout
router.get("/api/workouts", (req, res) => {
  db.workout
    .find({})
    .then((dbworkout) => {
      dbworkout.forEach((workout) => {
        var total = 0;
        workout.exercise.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//add exercise
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});