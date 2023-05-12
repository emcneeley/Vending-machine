
import { appState } from "../AppState.js"
import { moneyServices } from "../Services/MoneyServices.js"
import { snacksService } from "../Services/SnacksService.js"
import { setHTML } from "../Utils/Writer.js"
// import { MoneyController } from "./MoneyController.js"



function _drawSnacks() {
    console.log('draw snacks')
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(s => template += s.SnackTemplate)
    // console.log(template)
    setHTML('snack', template)

}


export class SnacksController {
    constructor() {
        console.log('Hello from Snacks Controller')
        _drawSnacks()

    }


    buySnack(snackName) {
        // debugger
        console.log('IM BUYING THIS', snackName)
        snacksService.buySnack(snackName)

    }

}

export const snacksController = new SnacksController