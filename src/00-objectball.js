
function gameObject() {
    const obj = {
        home: {
            teamName: " Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    lamDunks: 1,
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    lamDunks: 7,
                },

                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    lamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    lamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    lamDunks: 1,
                },





            },
        },


        Away: {
            teamName: " Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    lamDunks: 2,
                },

                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    lamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    lamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    lamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    lamDunks: 12,
                },


            },

        },
    };
    return obj;
}



function numPointsScored(playerName) {
    const game = gameObject();
    const homePlayers = game.home.players
    const awayPlayers = game.Away.players
    let allplayers = { ...homePlayers, ...awayPlayers };

    for (const key in allplayers) {
        if (key === playerName) { return allplayers[key].points }
    }

}


function shoeSize(playerName) {
    const game = gameObject();
    const homePlayers = game.home.players
    const awayPlayers = game.Away.players
    let allplayers = { ...homePlayers, ...awayPlayers };

    for (const key in allplayers) {
        if (key === playerName) { return allplayers[key].shoe }
    }

}


function teamColors(teamName) {
    const game = gameObject();
    const homeName = game.home.teamName
    const awayName = game.Away.teamName
    const colors = []
    if (teamName === homeName) {
        colors.push(game[home].colors)
    }

    if (teamName === awayName) {
        colors.push(game[Away].colors)
    }
    return colors;
}




function teamName() {
    const game = gameObject();
    const homePlayers = game.home.players
    const awayPlayers = game.Away.players
    let allplayers = { ...homePlayers, ...awayPlayers };
    const names = []
    for (const key in allplayers) {
        return names.push(allplayers)
    }

}

console.log(teamName())



