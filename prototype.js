let arr = ["Akshay", "Animesh"]
let object = {
  name: "Animesh",
  city: "Delhi",
  getIntro: function () {
    console.log(this.name + "from" + this.city)
  }
}

let obj2 = {
  name: "Adi"
}

obj2.__proto__ = object;


Function.prototype.bind = function () {
  console.log("ksadjhaksjbdkhab")
}
function fun() {

}

