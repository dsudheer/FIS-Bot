var builder = require('botbuilder');

module.exports = function(session) {
 session.send("As per your location below is the nearest Branch for you!");
 var msg = new builder.Message(session)
  .attachments([{
   contentType: "image/png",
   contentUrl: "https://maps.googleapis.com/maps/api/staticmap?center=FIS+Global,+Bangalore&zoom=15&scale=1&size=800x400&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0000ff%7Clabel:1%7CFIS+Global,+Bangalore"
  }]);
 session.endDialog(msg);

};