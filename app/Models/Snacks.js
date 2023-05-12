

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    
    }


    get SnackTemplate() {
        return `
        <div class="col-4 selectable p-5" >
        <h1>${this.name}</h1>
            <p>${this.price}</p>
            <img class="img-fluid" src="${this.imgUrl}">
            </div >
            <div> <button onclick="app.snacksController.buySnack('${this.name}')">BUY ME</button></div>`
    }


}

