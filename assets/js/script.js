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

// Function to create a table row for each hour
function createTableRow(hour) {
  // Create a unique key for the current hour in localStorage
  const localStorageKey = "event_" + hour.replace(/\s+/g, "_");

  // Persist events between refreshes of a page
  // Retrieve the stored event for the current hour from localStorage
  const storedEvent = localStorage.getItem(localStorageKey);

  // create new table row
  const row = $("<tr>");

  const hourCell = $("<td>").addClass("col-2").text(hour);
  const toDoCell = $("<td>")
    .addClass("col-9")
    .html(
      `<textarea class="form-control" placeholder="What are your plans?">${
        storedEvent || ""
      }</textarea>`
    );
  const saveCell = $("<td>")
    .addClass("col-1")
    .html('<button class="btn btn-primary saveBtn">Save</button>');

  //Append cells to the row
  row.append(hourCell, toDoCell, saveCell);

  // event handler for saving the entered event-save button
  row.find(".saveBtn").on("click", function () {
    const eventText = row.find("textarea").val();

    //stored in local storage the event
    localStorage.setItem(localStorageKey, eventText);
    console.log("Event saved for " + hour + ": " + eventText);
  });

  return row;
}

// Loop through each hour in the array and create table rows
hours.forEach(function (hour) {
  const row = createTableRow(hour);
  // Add the row to the tableBody
  tableBody.append(row);
});
