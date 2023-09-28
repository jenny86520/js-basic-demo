const api = "https://jsonplaceholder.typicode.com/posts";

//#region XMLHttpRequest

const req = new XMLHttpRequest();

req.addEventListener("load", () => {
  const posts = JSON.parse(req.responseText);
  console.log(typeof req.responseText); // string
  console.log(typeof posts); // object
  console.log(posts);
});

// set open type and api
req.open("GET", api);
// call api
req.send();

//#endregion

//#region fetch

fetch(api)
  .then((res) => {
    return res.json(); // transform to object
  })
  .then((posts) => {
    console.log(typeof posts); // object
    console.log(posts);
  });

async function asyncGet() {
  const res = await fetch(api);
  const posts = await res.json();
  console.log(typeof posts); // object
  console.log(posts);
}
// call api
asyncGet();

//#endregion
