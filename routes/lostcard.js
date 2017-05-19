var builder = require('botbuilder');

module.exports = [
 function(session) {
  builder.Prompts.number(session, 'Enter last four digits of your card');
 },
 function(session, results, next) {
  session.dialogData.card = results.response;
  next();
 },
 function(session) {
  builder.Prompts.confirm(session, 'Do you want to block the card **** **** **** ' + session.dialogData.card + '?');
 },

 function(session, results) {
  if (results.response) {
   session.send('Your card blocked successfully!');
  } else {

   session.send("Transaction cancelled!");
  }
  var endMsg = new builder.Message(session)
   .attachments([{
    contentType: "image/png",
    contentUrl: "https://s3.postimg.org/7euf4422r/thank-you.png"
   }]);
  session.endDialog(endMsg);
 }

];