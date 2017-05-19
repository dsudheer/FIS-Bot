# FIS Bank Bot - The Future of Banking

 - This solution is for banks that will serve their customers 24/7.  Users can transfer funds, view account statements, view credit card dues, make bill payments, report a card stolen and even categorize spend. 
 - This solution also provides recommendation engine that will help users choose the right product.  The solution is not only allows users to view requested information but also take actions based on this information. 
 - Lastly, Improve customer service and engagement, and reduce costs for banks today!
## Meet FIS Bank Bot
 - It is the new digital bank teller, personal assistant, and a financial advisor. When you sign in to your Bank account Bank Bot will greet you and ask for orders.
 - You type your command or question, and Bank Bot will answer. Bank Bot understands natural language, but it pays special attention for keywords, that will trigger actions, like a new transfer or searching in history, or credit card cancellation.
 - Select money transfer and tell whom you want to send and enter how much money you want transfer. Then Bank Bot will sent confirmation code to your cell phone and ask you to type it in, and it's done. You don't need to click and move your hands from the keyboard.

### Technologies Used
- Microsoft Bot Framework
- Facebook Messenger bot
- Node JS v.6.9.4
- Node modules
    - Restify - REST web services
    - Winston - Logger
    - nconf - configuration

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://e5228227@services.sungard.com/git/scm/inno17r/software-wizards.git software-wizards

# Change directory
cd software-wizards

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```
## Developer References
#### Register a bot with the Bot Framework
https://docs.microsoft.com/en-us/bot-framework/portal-register-bot

#### Connect a bot to Facebook Messenger
https://docs.microsoft.com/en-us/bot-framework/thirdparty-channels/channel-facebook

#### Get an online url for your future server:
Whenever the bot receives a message on Messenger, it will be sent to the server running on the endpoint url specified on Microsoft Bot Platform.
Problem: the server will be running locally (no url) (Development Envirnoment)
That's why you will use ngrok which make a local server run online.
Download ngrok and run it https://ngrok.com/download
### Architecture Diagram
![Architecture Diagram](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/architecture.png?raw=true "Architecture Diagram")

### Demo Screens
#### Welcome Screen
![Welcome Screen](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/welcome.png?raw=true "Welcome Screen")

#### Account Balance
![Account Balance](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/balance.png?raw=true "Account Balance")

#### Transaction History
![Transaction History](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/trhistory.png?raw=true "Transaction History")

#### Funds Trasfer
![Funds Transfer](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/transferfunds-1?raw=true "Funds Transfer")

![Funds Transfer](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/transferfunds-2.png?raw=true "Funds Transfer")

#### Pay Bills
![Pay Bills](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/paybills-1.png?raw=true "Pay Bills")

![Pay Bills](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/paybills-2.png?raw=true "Pay Bills")

#### Lost Card
![Lost Card](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/lostcard.png?raw=true "Lost Card")

#### My Spending
![My Spending](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/myspending.png?raw=true "My Spending")

#### My Alerts
![My Alerts](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/myalerts.png?raw=true "My Alerts")

#### My Offers
![My Offers](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/myoffers.png?raw=true "My Offers")

#### Find Branch
![Find Branch](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/findbranch.png?raw=true "Find Branch")

#### Service Request
![Service Request](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/service-request.png?raw=true "Service Request")

![Service Request](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/help-problem.png?raw=true "Service Request")

#### Unregistered User
![Unregistered User](https://services.sungard.com/git/projects/INNO17R/repos/software-wizards/raw/demo/unregistered-user.png?raw=true "Unregistered User")
