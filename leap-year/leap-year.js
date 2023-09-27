const year = window.prompt("請輸入年份");
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("閏年");
} else {
  console.log("平年");
}
