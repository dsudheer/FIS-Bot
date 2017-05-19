var builder = require('botbuilder');
module.exports = function(session) {
 // Generate ticket
 var tickerNumber = Math.ceil(Math.random() * 20000);

 // Reply and return to parent dialog
 session.send('Your message \'%s\' was registered. One of our executive will get in touch with you shortly to resove your problem.', session.message.text);

 session.send('Thanks for contacting our support team. Your ticket number is %s.', tickerNumber);

 var endMsg = new builder.Message(session)
  .attachments([{
   contentType: "image/png",
   contentUrl: "https://s3.postimg.org/7euf4422r/thank-you.png"
  }]);
 session.endDialog(endMsg);
};