import React, { Component } from "react";
import { Calendar } from "antd";

export default class TimeSheet_Calander extends Component {
  render() {
    function onPanelChange(value, mode) {
      console.log(value, mode);
    }

    return (
      <div>
        <Calendar onPanelChange={onPanelChange} />
      </div>
    );
  }
}
