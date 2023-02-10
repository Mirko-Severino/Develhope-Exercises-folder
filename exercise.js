const user = {
  id: 1,
  name: "John",
  age: 25,
};

const recupero = () => {
  const userData = localStorage.getItem('user');
  const user = JSON.parse(userData);
  console.log(user);
}

recupero();
