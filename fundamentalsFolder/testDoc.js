function christmasTournament(input) {
    let index = 0;
    let gameTours = Number(input[index++]);

    let totalMoneyWon = 0;
    let daysWinned = 0;
    let daysLosed = 0;

    // Въртим през всеки ден от турнира
    for (let i = 0; i < gameTours; i++) {
        let winedGames = 0;
        let losedGames = 0;

        let game = input[index++];

        // Вътрешният цикъл върти, докато не види "Finish"
        while (game !== "Finish") {
            let result = input[index++];

            if (result === "win") {
                winedGames++;
                totalMoneyWon += 20;
            } else {
                losedGames++;
            }

            // Взимаме следващата игра
            game = input[index++];
        }

        // Ако победите са повече за деня — даваме бонус
        if (winedGames > losedGames) {
            totalMoneyWon *= 1.1;
            daysWinned++;
        } else {
            daysLosed++;
        }
    }

    // Финален резултат
    if (daysWinned > daysLosed) {
        totalMoneyWon *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoneyWon.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyWon.toFixed(2)}`);
    }
}

christmasTournament([
    2,
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"
]);
