import { appState } from "../AppState.js";
import { setText } from "../Utils/Writer.js";
import { moneyServices } from "../Services/MoneyServices.js";





function _drawMoney() {
    let money = appState.money
    setText('money', money)
}

export class MoneyController {
    constructor() {
        appState.on('money', _drawMoney)
    }

    addMoney() {
        moneyServices.addMoney()
    }

}

