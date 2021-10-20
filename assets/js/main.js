/*

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
    in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49

    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

const btnSubmit = document.getElementById("btn_start_game")
const btnLevel = document.getElementById("levelup")
const gameContainer = document.getElementById("boxgame")

btnSubmit.addEventListener("click", function () {
    const difficoltLevel = btnLevel.value
    const numberCellToAdd = numberCell(difficoltLevel)
    let cell;

    gameContainer.innerHTML = "";
    const numberCol = Math.round(Math.sqrt(numberCellToAdd))
    console.log(numberCol)

    for (let index = 1; index <= numberCellToAdd; index++) {
        /*console.log(index) */
        //creazione dell'elemento
        cell = `<div class="cell-box-${numberCol} cell" id="cell-${index}">${index}</div>`
        gameContainer.innerHTML += cell


        const element = document.getElementById(`cell-${index}`)
        console.log(element);
        element.addEventListener('click', function () {
            console.log(element);
            console.log('ciao!');
            this.style.backgroundColor = "red";
        })
    }


})
// funzione scelta livello
function numberCell(difficoltLevel) {
    let result

    if (difficoltLevel === "easy") {
        result = 49
    }

    else if (difficoltLevel === "medium") {
        result = 81
    }
    else (
        result = 100
    )
    return result

}
