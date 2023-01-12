const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Commento: In questo caso, person1 e person2 "firstName" condividono la stessa posizione di memoria. 
// Pertanto, modificando una delle due variabili varia anche l'altra.

// Per evitare questo problema, si può utilizzare la funzione Object.assign().


