//CONCAT
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const concatted = num1.concat(num2);

//REVERSE
const num3 = [1, 2, 3];
num3.reverse();

//PUSH
const userNames = ["Baddi", "Sonya", "Teddi"];
userNames.push("Belka", "Strelka", "Sanya");

//UNSHIFT
const userNames1 = ["Baddi", "Sonya", "Teddi"];
userNames1.unshift("Anton", "Artem", "Misha");

//SHIFT
const car = ["BMW", "Audi", "Mercedes"];
const deletedCar = car.shift();

//POP
const car1 = ["Honda", "Nissan", "Sens"];
const deletedCar1 = car1.pop();

//SLICE
const color = ["Black", "Red", "Yellow", "White", "Green"];
const copy = color.slice(0, 3);
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mandarin"];
const copy2 = fruits.slice(-2);

//SPLICE
const list = [1, 2, 3, 4, 5];
list.splice(1, 2);

const list2 = [1, 2, 3, 4, 5];
const newList = list2.splice(1, 3);

const list3 = [1, 2, 3, 4, 5];
list3.splice(3, 0, "a", "b", "c");

const list4 = [1, 2, 3, 4, 5];
list4.splice(1, 0, "a", "b");
list4.splice(6, 0, "c");
list4.splice(8, 0, "e");

//SORT
const list5 = [3, 4, 1, 2, 7];
list5.sort();

//FOREACH

const users = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

users.forEach(function (user) {
  console.log(
    `Пользователь ${user.firstName} ${user.lastName} является ${user.gender} и ему сейчас ${user.age} лет`,
  );
});

//MAP
const users1 = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

// переписал версию из 42 урока
// моя версия мутировала масив users1 добавляя туда номер телефона
const updatedUsers = users1.map(function (elem) {
  const newObject = structuredClone(elem);
  newObject.telephoneNumber = "+3893040595940";

  return newObject;
});

//FILTER
const users2 = [
  { firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
  { firstName: "Undefined", lastName: "Undefinovich", age: 99 },
  { firstName: "Test", lastName: "Testovich", gender: "male" },
];

const users3 = users2.filter(function (elem) {
  if (elem.age >= 18) {
    return true;
  } else {
    return false;
  }
});

//FLAT
const nestedArray = [
  1,
  2,
  3,
  [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]],
];

const flatArray = nestedArray.flat(4);
