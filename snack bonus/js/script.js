// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const numbersArray = [23, 14, 6, 8, 10];

// Usiamo i nuovi metodi degli array foreach o filter.

// Foreach version:
const newArrayFe = getSubArrayFe(numbersArray, 1, 3);
console.log(`Soluzione con forEach`, newArrayFe);

function getSubArrayFe(array, a, b) {
    // Inizializzo un'array dove pushare i numeri che soddisfano la condizione
    const subArray = [];

    array.forEach((element, index) => {
        if (index >= a && index <= b) {
            subArray.push(element)
        };
    });
    return subArray;
};

// Filter version :
const newArrayFi = getSubArrayFi(numbersArray, 2, 4);
console.log(`Soluzione con Filter`, newArrayFi);

function getSubArrayFi(array, a, b) {
    const subArray = array.filter((element, index) => index >= a && index <= b);
    return subArray;
}
