import React, { useState } from "react";
import { connect } from "react-redux";
import { Toast } from "./Toast.styles";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";

const mapStateToProps = (state) => ({
  tipsOn: state.user.tipsOn,
});

const InfoToast = ({ heading, content, tipsOn, positionX, positionY }) => {
  const [visible, setVisible] = useState(true);
  const [toastCount, setToastCount] = useState(0);
  const [closeToastVisible, setCloseToastVisible] = useState(false);

  //fades for toast notification
  if (toastCount === 0) {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
    setToastCount(1);
  }

  return tipsOn ? (
    <Toast out={visible} positionX={positionX} positionY={positionY}>
      <div className="toast-header">
        <h4>{heading}</h4>
        <div
          className="icon-container"
          //!fix hover effects with hover zone
          onMouseEnter={() => setCloseToastVisible(true)}
          onMouseLeave={() => setCloseToastVisible(false)}
        >
          {closeToastVisible ? (
            <BsIcons.BsXCircleFill
              className="close-icon"
              onClick={() => {
                setVisible(true);
              }}
            />
          ) : (
            <IoIcons.IoAlertCircle className="lightbulb-icon" />
          )}
        </div>
      </div>
      <div className="toast-content">
        <p>{content}</p>
      </div>
    </Toast>
  ) : (
    <div />
  );
};

export default connect(mapStateToProps)(InfoToast);
