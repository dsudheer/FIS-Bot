var builder = require('botbuilder');
const conf = require('../lib/configurator');
const myoffersConf = conf.get('myoffers');

module.exports = function(session) {

 for (var item of myoffersConf) {

  var card = createHeroCard(session, item.titile, item.subtitle, item.text, item.imageUrl, item.ButtonText, item.redirectUrl);

  // attach the card to the reply message
  var msg = new builder.Message(session).addAttachment(card);
  session.send(msg);
 }

 var endMsg = new builder.Message(session)
  .attachments([{
   contentType: "image/png",
   contentUrl: "https://s3.postimg.org/7euf4422r/thank-you.png"
  }]);
 session.endDialog(endMsg);
};

function createHeroCard(session, title, subtitle, text, imageUrl, buttonName, directUrl) {
 return new builder.HeroCard(session)
  .title(title)
  .subtitle(subtitle)
  .text(text)
  .images([
   builder.CardImage.create(session, imageUrl)
  ])
  .buttons([
   builder.CardAction.openUrl(session, directUrl, buttonName)
  ]);
}