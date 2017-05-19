var builder = require('botbuilder');

module.exports = function(session) {

 var msg = new builder.Message(session)
  .attachments([{
   contentType: "image/png",
   contentUrl: "https://assets.capcomfcu.org/images/troubleshooting/help_view_my_spending.png"
  }]);
 session.endDialog(msg);

};