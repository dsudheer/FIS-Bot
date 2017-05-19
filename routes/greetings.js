const random = array => {
 return array[Math.floor(Math.random() * array.length)]
}

exports.getGreetings = function() {

 const answers = [
  'Hello! ',
  'Yo ;)',
  'Hey, nice to see you.',
  'Hi, I haven\'t seen you for a while.',
  'Welcome back!',
 ]
 return random(answers)
};