const tableBody = $("#tableBody");

//display currentDay and currentTime dayjs
const update = function () {
  // display current day using dayjs
  const currentDay = dayjs().format("dddd, MMMM DD");
  $("#currentDay").text(currentDay);

  //display current time using dayjs
  const currentTime = dayjs().format("h:mm:ss a");
  $("#currentTime").text(currentTime);

  //display current year footer
  const currentYear = dayjs().format("YYYY");
  $("#currentYear").text(currentYear);
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

//loop through each hour in the array
hours.forEach(function (hour) {
  // create new table row
  const row = $("<tr>");
  row.append(`<td class="col-2 hour ">${hour}</td>`); // cell 1
  row.append(
    `<td class="col-8 "><textarea class="form-control" placeholder="What are your plans?"></textarea>`
  ); //cell 2
  row.append(
    `</td><td class="col-2 "><button class="btn btn-primary saveBtn">Save</button></td>`
  ); //cell 3
  //added row to the tableBody
  tableBody.append(row);
});
