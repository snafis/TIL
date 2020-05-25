require('../css/style.css');

var timeline = require('./timeline.js');
var user = {
  name : "Shifath Nafis",
  messages : [
    "hello",
    "bye",
    "good night"
  ]
};

var timelineModule = new timeline(user);
timelineModule.setHeader(user);
timelineModule.setTimeline(user);
