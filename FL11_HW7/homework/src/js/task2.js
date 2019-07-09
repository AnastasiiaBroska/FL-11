const halfPrice = 2;
const doublePrice = 2;
const startingWinPrice = 100;
const maxAttempts = 3;
const increasePocketsCount = 4;

let playGame = confirm('Do you want to play a game?');
while (playGame) {
    let totalPrize = 0;
    let minPocketNumber = 0, maxPocketNumber = 8;
    let pocketNumber = Math.round(Math.random() * (maxPocketNumber - minPocketNumber)) + minPocketNumber;
    let numberOfGames = 1;
    for (let attemptsLeft = maxAttempts, possibleWinPrize = 100; attemptsLeft > 0;) {
        let attempt = parseInt(prompt('Choose a roulette number from 0 to ' + maxPocketNumber + '\n' +
            'Attempts left: ' + attemptsLeft + '\n' +
            'Total prize: ' + totalPrize + '$\n' +
            'Possible prize on current attempt: ' + possibleWinPrize + '$', ''));
        if (attempt === pocketNumber) {
            totalPrize += possibleWinPrize;
            let isGameContinue = confirm('Congratulation, you won!\n' +
                'Your prize is: ' + totalPrize + '$. Do you want to continue?');
            //If game is continue then we refresh attempts, double the winning prize and increase range of pockets.
            if (isGameContinue) {
                attemptsLeft = maxAttempts;
                //100 * 2^1 = 200, 100 * 2^2 = 400 ... 100 * 2^n; n - numberOfGames
                possibleWinPrize = startingWinPrice * Math.pow(doublePrice, numberOfGames);
                numberOfGames++;
                maxPocketNumber += increasePocketsCount;
                pocketNumber = Math.round(Math.random() * (maxPocketNumber - minPocketNumber)) + minPocketNumber;
            } else {
                break;
            }
        } else {
            //Remove one attempt and cut winning prize by a half
            attemptsLeft--;
            possibleWinPrize /= halfPrice;
            //If user doesn't have attempts he looses his game and all money
            if (attemptsLeft === 0) {
                totalPrize = 0;
            }
        }
    }
    alert('Thank you for your participation.\n' + 'Your prize is: ' + totalPrize + '$.');
    playGame = confirm('Do you want to play again?');
}
alert('You did not become a billionaire, but can.');