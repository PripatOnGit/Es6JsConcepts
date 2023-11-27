import { post } from "./post";
import { feed } from "./feed";
const JsConcepts = (language) => {
  console.log("Say Hello", language);
};

JsConcepts("React");

//Arrow Function
const sum = (a, b) => {
  console.log("sum", a + b);
};

sum(3, 4);

//Object destructuring

const user = {
  name: "Priyanka",
  city: "Mumbai",
  age: 30,
};

const { name: Username, city } = user;
console.log(Username);

//Map function
const product = ["Veggies", "Fruits", "Grocery"];

const prodList = product.map((products) => `<li> ${products} </li>`);
console.log(prodList);

//Filter method

const ages = [3, 59, 29, 64, 1, 98];
const adults = ages.filter((age) => age > 18);
console.log(adults);
//Spread operator

const u1 = {
  name: "Priyanka",
};

const u2 = {
  city: "Mumbai",
};

const users = { ...u1, ...u2, age: 30 };
console.log(users);

post();
feed();

export default JsConcepts;
