const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

saveUser(user);
