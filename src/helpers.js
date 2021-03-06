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

//helper regex function for removing html tags,
//source: freecodecamp - Intermediate React and Firebase Tutorial - Build an Evernote Clone (https://www.youtube.com/watch?v=I250xdtUvy8&t=3763s)
export const removeHtmlTags = (str) => {
  return str.replace(/<[^>]*>?/gm, "");
};
