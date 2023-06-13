const user = {
  name: "Animesh",
  age: 27,
  occupation: "Engineer"
}
window.sessionStorage.setItem('usr', JSON.stringify(user))
const value = window.sessionStorage.getItem('usr')
console.log(value);