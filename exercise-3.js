function isAdult(person) {
  let {id:id,firstName:name,lastName:lastname,age:age} = person;
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));