var builder = require('botbuilder');
const conf = require('../lib/configurator');

module.exports = function(session) {

 if (conf.get(session.message.user.id)) {
  session.send('Your balance is INR \'%s\'', conf.get(session.message.user.id).balance);
 } else {
  session.send('Sorry!, ' + session.message.user.name + '. Your facebook account is not linked with us. Type \'support\' in the messenger to contact support team.');
 }
 var endMsg = new builder.Message(session)
  .attachments([{
   contentType: "image/png",
   contentUrl: "https://s3.postimg.org/7euf4422r/thank-you.png"
  }]);
 session.endDialog(endMsg);
};