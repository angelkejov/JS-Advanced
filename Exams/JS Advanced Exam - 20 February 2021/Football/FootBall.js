class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    signContract(selectedPlayer) {
        let item = selectedPlayer.split('/')
        let name = item[0]
        let playeroffer = item[1]
        let find = this.invitedPlayers.findIndex(p => p.name == name)

        if (find == -1) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (this.invitedPlayers[find].playervalue > playeroffer) {

            let priceDifference = this.invitedPlayers[find].playervalue - playeroffer
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        } else {
            this.invitedPlayers[find].playervalue = 'Bought'
            return `Congratulations! You sign a contract with ${name} for ${playeroffer} million dollars.`
        }

    }

    newAdditions(footballPlayers) {

        for (let el of footballPlayers) {
            let teams = el.split('/');

            let name = teams[0];

            let findindex = this.invitedPlayers.findIndex(p => p.name == name);

            let age = teams[1];

            let playervalue = teams[2];

            if (findindex == -1) {

                this.invitedPlayers.push({ name, age, playervalue });

            } else if (this.invitedPlayers[findindex].playervalue < playervalue) {

                this.invitedPlayers[findindex].playervalue = playervalue;
            }
        }
        let result = this.invitedPlayers.map(name => name.name);
        return `You successfully invite ${result.join(', ')}.`;
    }

    transferWindowResult() {
        let sorting = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
        let mapping = sorting.map(r => `Player: ${r.name}-${r.playervalue}`)

        return `Players list:${mapping.join('\n')}`

    }

    ageLimit(name, age) {

        let find = this.invitedPlayers.findIndex(p => p.name == name)
        if (find == -1) {
            throw new Error(`${name} is not invited to the selection list!`)
        }


        let limit = Number(age) - this.invitedPlayers[find].age
        if (this.invitedPlayers[find].age >= age) {
            return `${name} is above age limit!`
        }
        if (limit < 5) {
            return `${name} will sign a contract for ${limit} years with ${this.clubName} in ${this.country}!`

        } if (limit > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }

    }
}