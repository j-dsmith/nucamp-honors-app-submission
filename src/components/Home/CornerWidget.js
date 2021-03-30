import React, { useState } from "react";
import { connect } from "react-redux";
import { createClock } from "../../helpers";
import { InfoWidget } from "./Home.styles";

const mapStateToProps = (state) => ({
  dailyGoal: state.dailyGoal,
});

const CornerWidget = ({ dailyGoal }) => {
  console.log(dailyGoal);
  const [time, setTime] = useState("");
  createClock(setTime);

  const date = new Date().toLocaleDateString();

  return (
    <InfoWidget>
      <div className="info-widget-goal">
        <h4>Daily Goal</h4>
        <p className={`${dailyGoal.goalComplete ? "checked" : null}`}>
          {dailyGoal.dailyGoal}
        </p>
      </div>
      <div className="info-widget-clock">
        <p>{time}</p>
      </div>
    </InfoWidget>
  );
};

export default connect(mapStateToProps)(CornerWidget);
