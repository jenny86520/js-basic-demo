const api =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
const list = document.querySelector("ul");
const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchKeyword");

async function getData(key) {
  const res = await fetch(api);
  const dataList = await res.json();

  setList(dataList.filter((data) => data.ar.includes(key)));
}

async function setList(items) {
  list.innerHTML = "";

  items.forEach((item) => {
    const html = `<li class="list-group-item fs-5">
        <i class="fas fa-bicycle"></i>
        ${item.sna.replace("YouBike2.0_", "")} (${item.tot})<br />
        <small class="text-muted">${item.ar}</small>
    </li>`;
    list.insertAdjacentHTML("beforeend", html);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop submit
  getData(input.value);
});
