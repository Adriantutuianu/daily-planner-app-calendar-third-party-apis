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
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];
// really struggled a few days to find a solution that is working.
// I think dayjs have an issue(doesn't really make the diff between am and pm properly even if the format is the same)
// if I am applying a simple if statement all the hours will take the class future even if it is not right.

function determineClass(hourValue) {
  const currentTime = dayjs();
  const [targetHour, targetMinute, targetPeriod] = hourValue
    .match(/(\d{2}):(\d{2}) (AM|PM)/)
    .slice(1, 4);

  let targetHourValue = parseInt(targetHour);
  if (targetPeriod === "PM" && targetHourValue !== 12) {
    targetHourValue += 12;
  } else if (targetPeriod === "AM" && targetHourValue === 12) {
    targetHourValue = 0;
  }

  const targetTime = dayjs()
    .set("hour", targetHourValue)
    .set("minute", parseInt(targetMinute))
    .set("second", 0)
    .set("millisecond", 0);

  // if statemnt to apply classes - diff colors based on current hour.
  if (currentTime.hour() === targetTime.hour()) {
    return "present";
  } else if (currentTime.hour() > targetTime.hour()) {
    return "past";
  } else {
    return "future";
  }
}

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

  const timeClass = determineClass(hour);

  const toDoCell = $("<td>")
    .addClass("col-9")
    .html(
      `<textarea class="form-control ${timeClass}" placeholder="What are your plans?">${
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
hours.forEach(function (item) {
  const row = createTableRow(item);
  // Add the row to the tableBody
  tableBody.append(row);
});
