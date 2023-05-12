import { appState } from "../AppState.js";


class MoneyServices {
    addMoney() {
        appState.money++
        console.log('adding money', appState.money)
    }

    buySnack(foundSnack) {
        // NOTE we just moved this to our buySnack() in the snacksService... and we are now passing the found object
        // let foundSnack = appState.snacks.find(snack => snack.name == snackName)
        console.log(foundSnack);
        appState.money -= foundSnack.price
        console.log(appState.money);
    }
}

export const moneyServices = new MoneyServices()