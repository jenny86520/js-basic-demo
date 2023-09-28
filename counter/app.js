document.addEventListener("DOMContentLoaded", () => {
  const minusBtn = document.querySelector("#minus");
  const plusBtn = document.querySelector("#plus");
  const counter = document.querySelector("#counter");

  minusBtn.addEventListener("click", () => {
    counter.value--;
  });

  plusBtn.addEventListener("click", () => {
    counter.value++;
  });
});
