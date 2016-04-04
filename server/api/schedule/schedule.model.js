'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var VolunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  username: String,
  password: String,
  childTeam: String,
  constraints: Array,
  comments: String,
  shirt: String,
  positions: Array,
  preferences: Array
});

var SlotSchema = new mongoose.Schema({
  assigned: [VolunteerSchema],
  positions: Number,
  start: Date,
  end: Date
});

var JobSchema = new mongoose.Schema({
  name: String,
  training: Number,
  slots: [SlotSchema]
});

var ScheduleSchema = new mongoose.Schema({
  name: String,
  date: Date,
  info: String,
  jobs: [JobSchema],
  unassigned: [VolunteerSchema]
});

export default mongoose.model('Schedule', ScheduleSchema);
