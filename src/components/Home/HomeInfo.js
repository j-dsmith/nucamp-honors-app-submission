import React, { useState } from "react";
import { connect } from "react-redux";
import { addGoal } from "../../redux/ActionCreators";
import {
  StyledWidget,
  HomeContainer,
  Clock,
  Greeting,
  GoalLabel,
  DailyGoal,
  GoalCheckbox,
} from "./Home.styles";

const mapStateToProps = (state) => ({
  dailyGoal: state.dailyGoal,
});

const mapDispatchToProps = {
  addGoal: (goal) => addGoal(goal),
};

const HomeInfo = ({ addGoal, dailyGoal }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })
  );
  const [goal, setGoal] = useState("");
  const [goalComplete, setGoalComplete] = useState(false);

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
      addGoal(goal);
      setGoal("");

      console.log("submitted goal");
    }
  };

  return (
    <HomeContainer>
      <StyledWidget>
        <Clock>{time}</Clock>
        <Greeting>{`Good ${timeOfDay}, Jamey`}</Greeting>

        {!dailyGoal.dailyGoal ? (
          <>
            <GoalLabel htmlFor="focus">
              What is your goal for the day?
            </GoalLabel>
            <DailyGoal
              id="focus"
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              onKeyUp={(e) => handleEnter(e)}
            />
          </>
        ) : (
          <>
            <GoalLabel htmlFor="focus">Daily Goal:</GoalLabel>
            <GoalCheckbox className="checkbox">
              <span
                className={`checkbox-input ${goalComplete ? "checked" : null}`}
              >
                <input
                  type="checkbox"
                  name="checkbox"
                  onClick={() => setGoalComplete(!goalComplete)}
                />
                <span
                  className={`checkbox-control ${
                    goalComplete ? "checked" : null
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
              </span>
              <span className={`label ${goalComplete ? "checked" : null}`}>
                {dailyGoal.dailyGoal}
              </span>
            </GoalCheckbox>
          </>
        )}
      </StyledWidget>
    </HomeContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeInfo);
