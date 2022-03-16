const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("What meal is your favourite? (dinner, brunch etc) ", (meal) => {
        rl.question("What's your your favourite thing to eat for that meal? ", (thingToEat) => {
          rl.question("What sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you're amazing at!", (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${thingToEat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
  
  
            });
  
  
          });
  
  
        });
  
  
      });
  
  
    });
  
  
  });
  
  
  
});



