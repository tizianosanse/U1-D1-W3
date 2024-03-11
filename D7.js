/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatenaStringhe(stringa1, stringa2) {
  // Seleziona i primi 2 caratteri della prima stringa
  const primoSubstring = stringa1.substring(0, 2);

  // Seleziona gli ultimi 3 caratteri della seconda stringa
  const secondoSubstring = stringa2.substring(stringa2.length - 3);

  // Concatena i due substrings
  const stringaConcatenata = primoSubstring + secondoSubstring;

  // Converti la stringa risultante in maiuscolo
  const stringaMaiuscola = stringaConcatenata.toUpperCase();

  // Mostra la stringa maiuscola nella console
  console.log(stringaMaiuscola);

  // Ritorna la stringa maiuscola
  return stringaMaiuscola;
}

// Esempio d'uso della funzione
const stringa1 = "esempio1";
const stringa2 = "esempio2";
concatenaStringhe(stringa1, stringa2);
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/ function generaArrayCasuale() {
  const arrayCasuale = [];

  for (let i = 0; i < 10; i++) {
    // Genera un numero casuale compreso tra 0 e 100
    const numeroCasuale = Math.floor(Math.random() * 101);
    arrayCasuale.push(numeroCasuale);
  }

  return arrayCasuale;
}

// Esempio d'uso della funzione
const arrayCasuale = generaArrayCasuale();
console.log(arrayCasuale);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function trovaPari(array) {
  // Utilizza il metodo filter() per creare un nuovo array contenente solo i valori pari
  const pari = array.filter((numero) => numero % 2 === 0);
  return pari;
}

// Esempio d'uso della funzione
const arrayNumerico1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valoriPari = trovaPari(arrayNumerico1);
console.log(valoriPari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  let somma = 0;

  array.forEach(function (numero) {
    if (typeof numero === "number") {
      somma += numero;
    }
  });

  return somma;
}

// Esempio d'uso della funzione
const arrayNumerico2 = [1, 2, 3, 4, 5];
const risultatoSomma = sommaArray(arrayNumerico2);
console.log("La somma degli elementi dell'array è:", risultatoSomma);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  // Utilizza il metodo reduce() per sommare tutti i numeri dell'array
  const somma = array.reduce(
    (accumulatore, valoreCorrente) => accumulatore + valoreCorrente,
    0
  );
  return somma;
}

// Esempio d'uso della funzione
const arrayNumerico3 = [1, 2, 3, 4, 5];
const risultatoSomm = sommaArray(arrayNumerico3);
console.log("La somma degli elementi dell'array è:", risultatoSomm);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/ function incrementaArrayConMap(array, n) {
  return array.map((numero) => {
    if (typeof numero === "number") {
      return numero + n;
    } else {
      return numero;
    }
  });
}

// Esempio d'uso della funzione
const arrayNumerico = [1, 2, 3, 4, 5];
const n = 3;
const arrayIncrementato = incrementaArrayConMap(arrayNumerico, n);
console.log("Array originale:", arrayNumerico);
console.log("Array incrementato di", n, ":", arrayIncrementato);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function lunghezzeStringhe(arrayDiStringhe) {
  return arrayDiStringhe.map((stringa) => stringa.length);
}

// Esempio d'uso della funzione
const arrayDiStringhe = ["EPICODE", "is", "great"];
const lunghezze = lunghezzeStringhe(arrayDiStringhe);
console.log("Array di partenza:", arrayDiStringhe);
console.log("Lunghezze delle stringhe:", lunghezze);
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function creaArrayDispari() {
  const arrayDispari = [];

  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }

  return arrayDispari;
}

// Esempio d'uso della funzione
const arrayDispari = creaArrayDispari();
console.log(arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function trovaFilmPiuVecchio(movies) {
  // Inizializza una variabile per memorizzare il film più vecchio
  let filmPiuVecchio = movies[0];

  // Scorri gli altri film per trovare quello più vecchio
  movies.forEach(function (film) {
    if (parseInt(film.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}

// Esegui la funzione per trovare il film più vecchio
const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log("Il film più vecchio è:", filmPiuVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/ function numeroDiFilm(movies) {
  return movies.length;
}

// Esegui la funzione per ottenere il numero di film
const numeroFilm = numeroDiFilm(movies);
console.log("Il numero di film nell'array è:", numeroFilm);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/ function ottieniTitoliDeiFilm(movies) {
  return movies.map((film) => film.Title);
}

// Esegui la funzione per ottenere gli array dei titoli dei film
const titoliDeiFilm = ottieniTitoliDeiFilm(movies);
console.log("Array dei titoli dei film:", titoliDeiFilm);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/ function filmDelMillennioCorrente(movies) {
  const annoCorrente = new Date().getFullYear();
  return movies.filter(
    (film) => parseInt(film.Year) >= 2000 && parseInt(film.Year) <= annoCorrente
  );
}

// Esegui la funzione per ottenere i film del millennio corrente
const filmMillennioCorrente = filmDelMillennioCorrente(movies);
console.log("Film usciti nel millennio corrente:", filmMillennioCorrente);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnniDiProduzione(movies) {
  return movies.reduce((acc, film) => acc + parseInt(film.Year), 0);
}

// Esegui la funzione per ottenere la somma degli anni di produzione
const sommaAnni = sommaAnniDiProduzione(movies);
console.log("Somma degli anni di produzione:", sommaAnni);
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/ function trovaFilmPerID(movies, imdbID) {
  return movies.find((film) => film.imdbID === imdbID);
}

// Esegui la funzione per trovare un film per ID
const imdbIDCercato = "tt0120737"; // ID del film "The Lord of the Rings: The Fellowship of the Ring"
const filmTrovato = trovaFilmPerID(movies, imdbIDCercato);
console.log("Film trovato:", filmTrovato);

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/ function trovaIndicePrimoFilmPerAnno(movies, anno) {
  return movies.findIndex((film) => film.Year === anno);
}

// Esegui la funzione per trovare l'indice del primo film per l'anno specificato
const annoCercato = "2001";
const indicePrimoFilm = trovaIndicePrimoFilmPerAnno(movies, annoCercato);
console.log(
  "Indice del primo film uscito nel",
  annoCercato + ":",
  indicePrimoFilm
);
