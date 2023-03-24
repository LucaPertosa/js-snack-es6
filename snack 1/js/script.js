// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso

const biciCorsa = [
    { nome: "Bianchi", peso: 7.5 },
    { nome: "Specialized", peso: 8.2 },
    { nome: "Trek", peso: 7.1 },
    { nome: "Cannondale", peso: 7.9 },
];

// Funzioni
function lightBici(biciCorsa) {
    let biciLeggera = biciCorsa[0];
    biciCorsa.forEach(element => {
        if (element.peso < biciLeggera.peso) {
            biciLeggera = element;
        }
    });
    console.log(biciLeggera);
    return biciLeggera
}

  
const biciLeggera = lightBici(biciCorsa);
console.log(`La bici più leggera è ${biciLeggera.nome} che pesa ${biciLeggera.peso} kg.`);

const printResult = document.querySelector(".title")
const result = `La bici più leggera è ${biciLeggera.nome} che pesa ${biciLeggera.peso} kg.`
printResult.innerHTML = result