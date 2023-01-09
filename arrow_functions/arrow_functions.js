// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions?retiredLocale=de


/* const square = function (a) {
  return a * a;
}; */
/* const square = (a) => {
  return a * a;
}; */
/* const square = (a) => a * a;

console.log(square(5)); */

// wont work coz. this is undefind in arrow func
// const car = {
//   model: "Fiesta",
//   manufacturer: "Ford",
//   fullName: () => {
//     console.log(this);
//     return `${this.manufacturer} ${this.model}`;
//   },
// };

const car = {
  model: "Fiesta",
  manufacturer: "Ford",
  fullName: function () {
    console.log(this);
    return `${this.manufacturer} ${this.model}`;
  },
};
console.log(car.fullName());
