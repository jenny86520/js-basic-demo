console.log("Hello World");

//#region Type Coercion
console.log(1 + 2); // 3
console.log(1 + "2"); // 12
console.log("Hello" + 123); // Hello123
console.log("Hello" + true); // Hellotrue
console.log(123 + true); // 124
console.log(123 + false); // 123
console.log([] + []); // 空字串
console.log(typeof ([] + [])); // string
console.log([] + {}); // [object object]
console.log(typeof ([] + {})); // string
console.log({} + []); // [object object]
console.log(typeof ({} + [])); // string
console.log({} + {}); // [object object][object object]
console.log(typeof ({} + {})); // string
//#endregion

//#region Flow Control
const age = window.prompt("請輸入年齡");
console.log("if else:");
if (age >= 18) {
  console.log("已成年");
} else if (age >= 12 && age < 18) {
  console.log("青少年");
} else {
  console.log("小朋友");
}

console.log("switch:");
switch (age) {
  case age >= 18:
    console.log("已成年");
    break;
  case age >= 12 && age < 18:
    console.log("青少年");
    break;
  default:
    console.log("小朋友");
}
//#endregion
