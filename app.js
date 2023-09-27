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