const tableBody = $("#tableBody");

//display currentDay and currentTime dayjs
const update = function () {
  // display current day using dayjs
  const currentDay = dayjs().format("dddd, MMMM DD");
  $("#currentDay").text(currentDay);

  //display current time using dayjs
  const currentTime = dayjs().format("h:mm:ss a");
  $("#currentTime").text(currentTime);
};
update();

//setinterval for update
setInterval(update, 1000);

// Array with hours for scheduler
const hours = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
console.log(hours);

hours.forEach(function (hour) {
  const row = $("<tr>");
  row.append(`<td class="col-2 text-center">${hour}</td>`);
  tableBody.append(row);
});
