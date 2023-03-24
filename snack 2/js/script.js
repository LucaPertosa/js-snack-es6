// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadreDiCalcio = [
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0},
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

// Creo funzione per generare numeri random nei valori punti fatti e falli subiti
function generaRndNum(squadre) {
    squadre.forEach(element => {
        if (element.puntiFatti === 0) {
            element.puntiFatti = Math.floor(Math.random() * 100) + 1;
        }
        if (element.falliSubiti === 0) {
            element.falliSubiti = Math.floor(Math.random() * 30) + 1;
        }     
    });
};
generaRndNum(squadreDiCalcio)
console.log(squadreDiCalcio);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo funzione che mi ritorna un array con le proprietà richieste 
function nomiEFalli(squadre) {
    return squadre.map(element => {
        const {nome, falliSubiti} = element;
        return {nome, falliSubiti};
    });
};

const squadraFalli = nomiEFalli(squadreDiCalcio)
console.log(squadraFalli);