import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { moneyServices } from "./MoneyServices.js";


class SnacksService {


    buySnack(snackName) {

        let foundSnack = appState.snacks.find(snack => snack.name == snackName)
        moneyServices.buySnack(foundSnack)
        appState.mySnacks.push(foundSnack)
        console.log('my snacks', appState.mySnacks);
    }

}

export const snacksService = new SnacksService