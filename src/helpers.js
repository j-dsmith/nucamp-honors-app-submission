//create clock
export const createClock = (setTime) => {
  const clock = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    setTime(currentTime);
  }, 1000);

  return clock;
};

//set time of day
let timeOfDay = "";

export const getTimeOfDay = () => {
  const time = new Date().getHours();

  if (time > 0 && time < 12) {
    timeOfDay = "Morning";
  } else if (time >= 12 && time <= 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }
  return timeOfDay;
};
