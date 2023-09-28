// 提示：BMI = 體重(kg) / 身高(m) 平方
document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.querySelector("#bodyHeight");
  const weightInput = document.querySelector("#bodyWeight");
  const countBtn = document.querySelector("button");
  const resultText = document.querySelector("#resultText");

  countBtn.addEventListener("click", () => {
    let h = heightInput.value / 100;
    let w = weightInput.value;
    resultText.textContent = (w / Math.pow(h, 2)).toFixed(2);
  });
});
