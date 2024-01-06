// display current day using dayjs
const currentDay = dayjs().format("dddd, MMMM DD");
const curDay = $("#currentDay").text(currentDay);

//display current time using dayjs
const currentTime = dayjs().format("h:mm:ss a");
const curTime = $("#currentTime").text(currentTime);
