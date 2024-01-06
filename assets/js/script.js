// display current day using dayjs
const currentDay = dayjs().format("dddd, MMMM DD");
console.log(currentDay);
$("#currentDay").text(currentDay);
