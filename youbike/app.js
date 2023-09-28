const api =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

$().ready(() => {
  const list = $("ul");
  const form = $("#searchForm");
  const input = $("#searchKeyword");

  async function getData(key) {
    $.ajax({ url: api }).done((dataList) => {
      setList(dataList.filter((data) => data.ar.includes(key)));
    });
  }

  async function setList(items) {
    list.html("");

    items.forEach((item) => {
      const html = `<li class="list-group-item fs-5">
        <i class="fas fa-bicycle"></i>
        ${item.sna.replace("YouBike2.0_", "")} (${item.tot})<br />
        <small class="text-muted">${item.ar}</small>
    </li>`;
      list.append(html);
    });
  }

  form.submit((e) => {
    e.preventDefault(); // stop submit
    getData(input.val());
  });
});
