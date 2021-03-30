import React, { useState } from "react";
import { connect } from "react-redux";
import { addGoal, toggleGoalComplete } from "../../redux/ActionCreators";
import FadeInHome, {
  StyledWidget,
  HomeContainer,
  Clock,
  Greeting,
  GoalLabel,
  DailyGoal,
  GoalCheckbox,
} from "./Home.styles";
import InfoToast from "../Toast/InfoToast";
import { createClock, getTimeOfDay } from "../../helpers";

const mapStateToProps = (state) => ({
  dailyGoal: state.dailyGoal,
  user: state.user,
});

const mapDispatchToProps = {
  addGoal: (goal) => addGoal(goal),
  toggleGoalComplete,
};

const HomeInfo = ({ addGoal, toggleGoalComplete, dailyGoal, user }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })
  );
  const [goal, setGoal] = useState("");
  const [goalSubmitted, setGoalSubmitted] = useState(false);

  // create clock
  createClock(setTime);

  //set greeting based on time of day
  const timeOfDay = getTimeOfDay();

  //handle enter key event
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addGoal(goal);
      setGoal("");
      setGoalSubmitted(true);
    }
  };

  return (
    <HomeContainer>
      <InfoToast
        heading="Welcome to the Home screen!"
        content="Here you can add a daily goal to keep you motivated while working on projects."
      />

      <FadeInHome>
        <StyledWidget>
          <Clock>{time}</Clock>
          <Greeting>{`Good ${timeOfDay}, ${user.name}`}</Greeting>

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
              <GoalLabel htmlFor="focus">TODAY</GoalLabel>
              <GoalCheckbox className="checkbox">
                <span
                  className={`checkbox-input ${
                    dailyGoal.goalComplete ? "checked" : null
                  }`}
                >
                  <input
                    type="checkbox"
                    name="checkbox"
                    onClick={() => toggleGoalComplete()}
                  />
                  <span
                    className={`checkbox-control ${
                      dailyGoal.goalComplete ? "checked" : null
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
                        strokeWidth="3"
                        d="M1.73 12.91l6.37 6.37L22.79 4.59"
                      />
                    </svg>
                  </span>
                </span>
                <span
                  className={`label ${
                    dailyGoal.goalComplete ? "checked" : null
                  }`}
                >
                  {dailyGoal.dailyGoal}
                </span>
              </GoalCheckbox>
            </>
          )}
        </StyledWidget>
      </FadeInHome>
    </HomeContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeInfo);
