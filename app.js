const builder = require('botbuilder');
const restify = require('restify');
const fs = require('fs');

const conf = require('./lib/configurator');
const greetings = require('./routes/greetings');
const logger = require('./lib/logger');

var https_options = {
 key: fs.readFileSync('./key.pem'),
 certificate: fs.readFileSync('./cert.pem')
};
// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
 appId: conf.get('msbotconfig').appId,
 appPassword: conf.get('msbotconfig').appPassword,
})

var DialogLabels = {
 Balance: 'Balance',
 PrTransactions: 'Previous Transactions',
 Transfer: 'Transfer',
 PayBills: 'Pay Bills',
 LostCard: 'Lost Card',
 MySpending: 'My Spending',
 FindBranch: 'Find Branch',
 MyOffers: 'My Offers',
 MyAlerts: 'My Alerts',
 ServiceRequest: 'Service Request'
};

var bot = new builder.UniversalBot(connector, [
 // start
 function(session) {
  var msg = new builder.Message(session)
   .attachments([{
    contentType: "image/png",
    contentUrl: "http://s-media-cache-ak0.pinimg.com/originals/f9/13/46/f9134655b53cbeaeb00664b04371b9b0.png"
   }]);

  logger.info('========================================');
  logger.info(session.message);

  session.send("Welcome to FIS Bank");
  session.send(msg);
  session.send(greetings.getGreetings() + " " + session.message.user.name);

  // prompt for options
  builder.Prompts.choice(
   session,
   'How I can help you?', [DialogLabels.Balance, 
							   DialogLabels.PrTransactions, 
							   DialogLabels.Transfer, 
							   DialogLabels.PayBills, 
							   DialogLabels.LostCard, 
							   DialogLabels.MySpending,
							   DialogLabels.MyAlerts,
							   DialogLabels.MyOffers,							   
							   DialogLabels.FindBranch, 
							   DialogLabels.ServiceRequest], {
    maxRetries: 3,
    retryPrompt: 'Not a valid option'
   });
 },
 function(session, result) {
  if (!result.response) {
   // exhausted attemps and no selection, start over
   session.send('Ooops! Too many attemps. Try again!');
   return session.endDialog();
  }

  // on error, start over
  session.on('error', function(err) {
   logger.error('Oops! Something went wrong. %s', err.message);
   session.send('Oops! Something went wrong. %s', err.message);
   session.endDialog();
  });

  // continue on proper dialog
  var selection = result.response.entity;
  switch (selection) {
   case DialogLabels.Balance:
    return session.beginDialog('balance');
   case DialogLabels.PrTransactions:
    return session.beginDialog('PrTransactions');
   case DialogLabels.Transfer:
    return session.beginDialog('transfer');
   case DialogLabels.PayBills:
    return session.beginDialog('payBills');
   case DialogLabels.LostCard:
    return session.beginDialog('lostcard');
   case DialogLabels.MySpending:
    return session.beginDialog('mySpending');
   case DialogLabels.FindBranch:
    return session.beginDialog('findbranch');
   case DialogLabels.MyOffers:
    return session.beginDialog('myoffers');
   case DialogLabels.MyAlerts:
    return session.beginDialog('myalerts');	
   case DialogLabels.ServiceRequest:
    return session.beginDialog('support');
  }
 }
]);

bot.dialog('balance', require('./routes/balance'));
bot.dialog('PrTransactions', require('./routes/PrTransactions'));
bot.dialog('transfer', require('./routes/transfer'));
bot.dialog('payBills', require('./routes/payBills'))
bot.dialog('lostcard', require('./routes/lostcard'));
bot.dialog('mySpending', require('./routes/mySpending'));
bot.dialog('findbranch', require('./routes/findbranch'));
bot.dialog('myoffers', require('./routes/myoffers'));
bot.dialog('myalerts', require('./routes/myalerts'));
bot.dialog('support', require('./routes/support'))
 .triggerAction({
  matches: [/help/i, /support/i, /problem/i]
 });

var http_server = restify.createServer();
http_server.listen(9090, function() {
 logger.info('%s listening at %s', http_server.name, http_server.url);
});

var https_server = restify.createServer(https_options);
https_server.listen(9443, function() {
 logger.info('%s listening at %s', https_server.name, https_server.url);
});

http_server.post('/', connector.listen())

https_server.post('/', connector.listen())

// log any bot errors 
bot.on('error', function(e) {
 logger.error('And error ocurred', e);
});