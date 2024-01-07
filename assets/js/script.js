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

function createTableRow(hour) {
  // create new table row
  const row = $("<tr>");

  const hourCell = `<td class="col-2">${hour}</td>`;
  const toDoCell = `<td class="col-9"><textarea class="form-control" placeholder="What are your plans?"></textarea>`;
  const saveCell = `</td><td class="col-1"><button class="btn btn-primary saveBtn">Save</button></td>`;

  row.append(hourCell, toDoCell, saveCell);

  return row;
}

// Loop through each hour in the array and create table rows
hours.forEach(function (hour) {
  const row = createTableRow(hour);
  // Add the row to the tableBody
  tableBody.append(row);
});
