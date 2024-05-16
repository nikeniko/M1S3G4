function insertNumbersIntoGrid(total) {
  const gridContainer = document.querySelector("#gridContainer"); // va a prendere l'id
  let counter = 1;

  for (
    let i = 0;
    i < total;
    i++ // qui andiamo a creare un numero specifico di celle
  ) {
    const gridItem = document.createElement("div"); // quindi per ogni cella verrà creato un div
    gridItem.classList.add("grid-item");
    gridItem.textContent = counter++;
    gridItem.addEventListener("click", highlightNumber); // Aggiungi un event listener per evidenziare il numero cliccato
    gridContainer.appendChild(gridItem);
  }
}

// funzione per generare la griglia quando il bottone viene cliccato
function generateGrid() {
  const gridContainer = document.querySelector("#gridContainer");
  gridContainer.innerHTML = ""; // Pulisce il contenuto della griglia prima di generare una nuova griglia
  insertNumbersIntoGrid(76); // Genera la griglia con numeri da 1 a 76
  // Evidenzia un numero casuale
  const cells = document.querySelectorAll(".grid-item");
  const randomNumber = Math.floor(Math.random() * 76) + 1;
  cells.forEach((cell) => {
    if (parseInt(cell.textContent) === randomNumber) {
      cell.classList.add("highlight");
    }
  });
}

function highlightNumber(event) {
  const selectedCell = event.target; // mi determina quale cella è stata cliccata

  const cells = document.querySelectorAll(".grid-item"); // qui vado ad evidenziare il numero cliccato

  selectedCell.classList.add("highlight"); // qui creò una una classe css per cambiare il colore della cella
}
// Funzione per creare la griglia all'avvio della pagina
window.onload = function () {
  generateGrid();
};
