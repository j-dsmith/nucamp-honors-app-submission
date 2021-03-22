import React, { useState } from "react";
import {
  StyledWidget,
  HomeContainer,
  Clock,
  Greeting,
  GoalLabel,
  DailyGoal,
} from "./Home.styles";

const HomeInfo = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })
  );
  const [goal, setGoal] = useState("");

  //create clock
  setInterval(() => {
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    setTime(currentTime);
  }, 1000);

  //set greeting based on time of day
  let timeOfDay = "";
  const getTimeOfDay = () => {
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

  getTimeOfDay();

  //handle enter key event
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setGoal("");
      console.log("submitted goal");
    }
  };

  return (
    <HomeContainer>
      <StyledWidget>
        <Clock>{time}</Clock>
        <Greeting>{`Good ${timeOfDay}, Jamey`}</Greeting>
        <GoalLabel htmlFor="focus">What is your goal for the day?</GoalLabel>
        <DailyGoal
          id="focus"
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
        />
      </StyledWidget>
    </HomeContainer>
  );
};

export default HomeInfo;
