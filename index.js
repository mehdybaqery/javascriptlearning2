 console.log("hello js")
 var age = 30
 const aGe = "Hello";
 ///// primitive varibales(boolean -string-null-undefined-number)
 console.log(typeof age);
 console.log(typeof aGe);
 var age = "Hi"
 console.log(typeof age);
//////////////////////
////////object
const userInfo = {
  firstName: "Hamid",
  lastName: "bagheri",
  age: 30,
  isMarried: true,
}
userInfo.age = 20  ////>>>>> ===  userInfo.["age"] = 20
console.log(userInfo)
console.log(userInfo.age)
//////////////////////// Aray
const colors = ["red","green","blue"];
console.log(colors);
console.log(colors[2])

/////////////function
function hello(firstName,lastName)  {


console.log("hello" + " " + firstName + " " + lastName)
}
hello("sara","bagheri")
hello("mehdi","bagheri")

////////////////operators
+ - * / .... 
and &&
or ||
not !

