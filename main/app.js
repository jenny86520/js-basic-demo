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

//#region Loop
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let i = 0;
while (i < 5) {
  console.log(i++);
}
//#endregion

//#region DOM  - catch & set
const subTitleById = document.getElementById("subTitle");
const subTitleByClassNames = document.getElementsByClassName("sub-title");
console.log(subTitleById);
console.log(subTitleByClassNames);

const subTitleByQueryId = document.querySelector("#subTitle");
const subTitleByQueryClassName = document.querySelector(".sub-title");
const subTitleByQueryTag = document.querySelector("h2"); // get first match
const subTitleByQueryTags = document.querySelectorAll("h2"); // get all match
console.log(subTitleByQueryId);
console.log(subTitleByQueryClassName);
console.log(subTitleByQueryTag);
console.log(subTitleByQueryTags);

subTitleById.textContent = "<i>TextContent</i>";
subTitleByClassNames[0].innerHTML = "<i>TextContent</i>";
subTitleByClassNames[0].style.color = "red";
//#endregion

//#region DOM - Event Listener
document.addEventListener("DOMContentLoaded", () => {
  const testBtn = document.getElementById("testBtn");
  const clickHandler = () => console.log("click!");

  testBtn.addEventListener("click", clickHandler);

  const link = document.querySelector("#link");
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click link!");
  });
});
//#endregion

//#region DOM - Add
const block = document.querySelector("#createBlock");

const h = document.createElement("h1");
h.textContent = "JS Created H1";
const div = document.createElement("div");
div.textContent = "div in H1";

h.appendChild(div);
block.appendChild(h);
//#endregion

//#region DOM - Delete
const deleteBtn = document.querySelector("#deleteBtn");

deleteBtn.addEventListener("click", () => {
  const lastOne = document.querySelector("li:last-child");
  if (lastOne) {
    const ul = document.querySelector("ul");
    ul.removeChild(lastOne);
    // or use lastOne.remove();
  }
});
//#endregion

//#region DOM - Nested
const nestedBlock = document.querySelector("#nestedBlock");
const ul = nestedBlock.querySelector("ul");

const b = ul.querySelector("li:nth-child(2)");
console.log(b.textContent); // b

console.log(b.parentElement); // Element ul
console.log(b.parentNode); // Node ul

console.log(ul.children); // HTMLCollection(4) [li, li, li, li]
console.log(ul.childNodes); // NodeList(9) [text, li, text, li, text, li, text, li, text]

console.log(b.previousElementSibling.textContent); // a
console.log(b.nextElementSibling.textContent); // c
console.log(b.previousSibling.previousSibling.innerHTML); // a
console.log(b.nextSibling.nextSibling.innerHTML); // c

ul.insertAdjacentElement("beforebegin", createElement("b", "beforebegin"));
ul.insertAdjacentElement("afterbegin", createElement("b", "afterbegin"));
ul.insertAdjacentElement("beforeend", createElement("b", "beforeend"));
ul.insertAdjacentElement("afterend", createElement("b", "afterend"));

function createElement(tag, text) {
  const e = document.createElement(tag);
  e.textContent = text;
  return e;
}
//#endregion
