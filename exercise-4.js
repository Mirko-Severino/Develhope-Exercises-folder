const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const { id, age } = person;
const personJSON = JSON.stringify({ id, age });
console.log(personJSON);
