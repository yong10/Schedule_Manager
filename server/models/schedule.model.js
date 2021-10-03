console.log("schedule.model.js");

const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  
    activity: {
        type: String,
        required: [true, "Activcity is required"],
        minlength: [3, "Activity must be 3 character or longer"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be 10 character or longer"]
    },
    start: {
        type: Date,
        required: [true, "Start is required"]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
        min: [1, "Duration cannot be less than 1"]
    },
    units: {
        type: String,
    }
}, {timestamps:true});

module.exports = mongoose.model("Schedule", ScheduleSchema);