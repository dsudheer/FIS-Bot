var builder = require('botbuilder');
const conf = require('../lib/configurator');

var amount, destination;

module.exports = [
 // payee details
 function(session) {
  if (conf.get(session.message.user.id)) {
   builder.Prompts.text(session, 'Please enter payee name');
  } else {
   session.send('Sorry!, ' + session.message.user.name + '. Your facebook account is not linked with us. Type \'support\' in the messenger to contact support team.');
   session.endDialog();
  }
 },
 function(session, results, next) {
  session.dialogData.destination = results.response;
  session.send('Do you want to trasfer the money to \'%s\'', results.response);
  next();
 },

 // Amount
 function(session) {
  builder.Prompts.number(session, 'How much money do you want to transfer?');
 },
 function(session, results, next) {
  session.dialogData.amount = results.response;
  amount = session.dialogData.amount;
  if (amount > 9999) {
   session.send("Sorry, insufficient funds!");
   session.endDialog();
  } else {
   next();
  }
 },

 // OTP
 function(session) {
  session.send('An OTP has generated and sent to your registered mobile number');
  builder.Prompts.number(session, 'Enter 4-digit OTP');
 },
 function(session, results, next) {
  session.dialogData.otp = results.response;
  next();
 },


 // Trasfer
 function(session) {
  destination = session.dialogData.destination;


  session.send('Do you want trasfer \'%s\' to \'%s\'', amount, destination);
  builder.Prompts.confirm(session, 'Do you want to continue?');

 },
 function(session, results) {
  if (results.response) {
   session.send('Amount \'%s\' transfered to \'%s\' successfully', amount, destination);
  } else {
   // Always say goodbye
   session.send("Transaction cancelled!");
  }
  var msg = new builder.Message(session)
   .attachments([{
    contentType: "image/png",
    contentUrl: "https://s3.postimg.org/7euf4422r/thank-you.png"
   }]);
  session.endDialog(msg);
 }



];