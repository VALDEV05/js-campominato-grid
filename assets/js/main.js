/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
    in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49

    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

const btnSubmit = document.getElementById("btn-start-game")
const btnLevel = document.getElementById("levelup")
const gameContainer = document.getElementById("boxgame")


const difficoltLevel = btnLevel.value
const numberCellToAdd = cellNumber(difficoltLevel)
btnSubmit.addEventListener("click", function() {

    gameContainer.innerHTML = "";
    const numberCol = Math.sqrt(numberCellToAdd)

    for (let index = 1; index <= numberCellToAdd; index++) {
        // const element = numberCellToAdd[x];
        const cell = document.createElement("div")
        cell.classList.add("cel-box-" + Math.round(numberCol))
        gameContainer.append(cell)

        cell.innerHTML += index
        cell.addEventListener("click", cellOnClick)


    }

    console.log('Il livello scelto dall`utente è: ' + difficoltLevel)
})

//funzione che gestisce il numero delle celle in base al livello selezionato
function cellNumber(difficoltLevel) {
    let risultato

    if (difficoltLevel === "easy") {
        risultato = 100
    } else if (difficoltLevel === "medium") {
        risultato = 81
    } else(
        risultato = 49
    )

    return risultato

}

function cellOnClick() {
    this.classList.toggle("active")
}