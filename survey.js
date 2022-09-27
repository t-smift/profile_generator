const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What is your favorite summertime activity?', (activity) => {
    rl.question('What would you do on your ideal day off', (dayOff) => {
      rl.question('Which meal is your favorite?', (favMeal) => {
        rl.question('What is your favorite thing to eat for that meal?', (favFood) => {
          rl.question('What is your favorite sport or activity?', (sport) => {
            rl.question('What do you like about it?', (whySport) => {
              console.log(`${name}\'s favorite summertime activity is ${activity}. On an ideal day off, ${name} would ${dayOff}. His favorite meal of the day is ${favMeal}, and his favorite food to have for ${favMeal} is ${favFood}. For activites, ${name} enjoys ${sport} because ${whySport}.`);

  rl.close();
})})})})})})});


// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

// Devani loves listening to Ludovico Einaudi while 
// coding, devouring Yak Momos for brunch, prefers 
// Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.