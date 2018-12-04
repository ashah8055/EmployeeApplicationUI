import React, { Component } from "react";
import { Form, Button, Input } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { createWorkingHourTimeSheet } from "../../redux/actions/CreateNewRequest";
import { createSaveTimeSheet } from "../../redux/actions/CreateNewRequest";

class timesheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Workingdetails: {
        employeeId: this.props.timesheet.timesheet.TimeSheetDetails.employeeId,
        timeSheetId: "",
        totalWeekWorkHours: "0",
        totalWeekBillableHours: "0",
        totalWeekTimeoffHours: "0",
        totalWeekHours: "0",
        comments: "",
        status: "false",
        daySheet: [
          {
            day: "monday",
            workHours: "0",
            timeOffHour: "0",
            date: "Test",
            billableHours: "0",
            totalHour: "0",
            notes: "Test"
          },
          {
            day: "tuesday",
            workHours: "0",
            timeOffHour: "0",
            date: "0",
            billableHours: "0",
            totalHour: "0",
            notes: "Test"
          },
          {
            day: "wednesday",
            workHours: "0",
            timeOffHour: "0",
            date: "Test",
            billableHours: "0",
            totalHour: "0",
            notes: "Test"
          },
          {
            day: "thursday",
            workHours: "0",
            timeOffHour: "0",
            date: "Test",
            billableHours: "0",
            totalHour: "0",
            notes: "Test"
          },
          {
            day: "friday",
            workHours: "0",
            timeOffHour: "0",
            date: "Test",
            billableHours: "0",
            totalHour: "0",
            notes: "Test"
          },
          {
            day: "saturday",
            workHours: "0",
            timeOffHour: "0",
            date: "Test",
            billableHours: "0",
            totalHour: "0",
            notes: "Test"
          },
          {
            day: "sunday",
            workHours: "0",
            timeOffHour: "0",
            date: "Test",
            billableHours: "0",
            totalHour: "0",
            notes: "Test"
          }
        ]
      }
    };
    this.baseState = this.state;
  }

  handlenum1Change = evt => {
    const dayArray = {
      monday: 0,
      tuesday: 1,
      wednesday: 2,
      thursday: 3,
      friday: 4,
      saturday: 5,
      sunday: 6
    };
    let Workingdetails = Object.assign({}, this.state.Workingdetails);
    Workingdetails.timeSheetId = Math.floor(Math.random() * 100 + 2);
    //      let workinghours = Object.assign({}, this.state.workinghours);
    //let day = workinghours[evt.target.name]
    let day = Workingdetails.daySheet[dayArray[evt.target.name]];
    //console.log("HA" + JSON.stringify(day));

    day.workHours = Number(evt.target.value);
    Workingdetails.totalWeekWorkHours =
      Number(Workingdetails.totalWeekWorkHours) + Number(evt.target.value);
    Workingdetails.totalWeekBillableHours = Workingdetails.totalWeekWorkHours;
    Workingdetails.totalWeekHours =
      Number(Workingdetails.totalWeekWorkHours) +
      Number(Workingdetails.totalWeekTimeoffHours);
    day.billableHours = Number(evt.target.value);
    day.totalHour = Number(day.timeOffHour) + Number(evt.target.value);

    return this.setState({ Workingdetails });
    // let Workingdetails = Object.assign({}, this.state.Workingdetails);
    // let workinghours = Object.assign({}, this.state.workinghours);
    // let day = workinghours[evt.target.name]
    // day.workHours = Number(evt.target.value);
    // Workingdetails.totalWeekWorkHours = Number(Workingdetails.totalWeekWorkHours) + Number(evt.target.value);
    // Workingdetails.totalWeekBillableHours = Workingdetails.totalWeekWorkHours;
    // Workingdetails.totalWeekHours = Number(Workingdetails.totalWeekWorkHours) + Number(Workingdetails.totalWeekTimeoffHours);
    // day.billableHours = Number(evt.target.value);
    // day.totalHour = Number(day.timeOffHour) + Number(evt.target.value);;

    // return this.setState({ workinghours, Workingdetails });
  };

  handlenum2Change = evt => {
    const dayArray = {
      monday: 0,
      tuesday: 1,
      wednesday: 2,
      thursday: 3,
      friday: 4,
      saturday: 5,
      sunday: 6
    };

    let Workingdetails = Object.assign({}, this.state.Workingdetails);
    //let workinghours = Object.assign({}, this.state.workinghours);
    // let day = workinghours[evt.target.name];
    let day = Workingdetails.daySheet[dayArray[evt.target.name]];
    day.timeOffHour = Number(evt.target.value);
    Workingdetails.totalWeekTimeoffHours =
      Number(Workingdetails.totalWeekTimeoffHours) + Number(evt.target.value);
    day.totalHour = Number(day.workHours) + Number(evt.target.value);
    return this.setState({ Workingdetails });
  };

  onSubmit = () => {
    console.log("dad" + this.state.das);
    let data = {};
    //data.workinghours = this.state.workinghours;
    data.workingdetails = this.state.Workingdetails;

    this.props.dispatch(createWorkingHourTimeSheet(data));
    console.log("Submit click");
  };
  onSave = () => {
    console.log("dad" + this.state.das);
    let data = {};
    // data.workinghours = this.state.workinghours;
    data.workingdetails = this.state.Workingdetails;

    data.workingdetails.status = this.state.Workingdetails.status = "true";
    this.props.dispatch(createSaveTimeSheet(data));
    console.log("Save click");
  };
  onReset = () => {
    this.setState(this.baseState);
  };

  render() {
    const { TextArea } = Input;
    let employeeId = this.props.timesheet.timesheet.TimeSheetDetails.employeeId;
    console.log("Employee" + employeeId);
    let dt = moment(this.props.timesheet.timesheet.TimeSheetDetails.selectWeek);
    let day2 = dt.add(1, "days").format("DD-MMM");
    let day3 = dt.add(1, "days").format("DD-MMM");
    let day4 = dt.add(1, "days").format("DD-MMM");
    let day5 = dt.add(1, "days").format("DD-MMM");
    let day6 = dt.add(1, "days").format("DD-MMM");
    let day7 = dt.add(1, "days").format("DD-MMM");
    const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
    const items = days.map(n => {
      const obj = { totalHr: "0", billableHr: "0" };
      return obj;
    });

    console.log(items);

    return (
      <Form>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Week</th>
              <th>
                Mon{" "}
                <input
                  type="text"
                  value={dt.startOf("week").format("DD-MMM")}
                  readOnly
                />{" "}
              </th>
              <th>
                Tue <input type="text" value={day2} readOnly />
              </th>
              <th>
                Wed <input type="text" value={day3} readOnly />
              </th>
              <th>
                Thur <input type="text" value={day4} readOnly />
              </th>
              <th>
                Fri <input type="text" value={day5} readOnly />
              </th>
              <th>
                Sat <input type="text" value={day6} readOnly />
              </th>
              <th>
                Sun <input type="text" value={day7} readOnly />
              </th>
              <th>TotalHr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hour Claim</td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Hr"
                  name="monday"
                  id="hMon"
                  onChange={this.handlenum1Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Hr"
                  name="tuesday"
                  id="hTue"
                  onChange={this.handlenum1Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Hr"
                  name="wednesday"
                  onChange={this.handlenum1Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Hr"
                  name="thursday"
                  onChange={this.handlenum1Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Hr"
                  name="friday"
                  onChange={this.handlenum1Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Hr"
                  name="saturday"
                  onChange={this.handlenum1Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Hr"
                  name="sunday"
                  onChange={this.handlenum1Change}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.totalWeekWorkHours}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td>Time Off</td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Time Off"
                  name="monday"
                  onChange={this.handlenum2Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Time Off"
                  name="tuesday"
                  onChange={this.handlenum2Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Time Off"
                  name="wednesday"
                  onChange={this.handlenum2Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Time Off"
                  name="thursday"
                  onChange={this.handlenum2Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Time Off"
                  name="friday"
                  onChange={this.handlenum2Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Time Off"
                  name="saturday"
                  onChange={this.handlenum2Change}
                />
              </td>
              <td>
                <Input
                  size="small"
                  placeholder="Enter Time Off"
                  name="sunday"
                  onChange={this.handlenum2Change}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.totalWeekTimeoffHours}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td>Total Bill</td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[0].billableHours}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[1].billableHours}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[2].billableHours}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[3].billableHours}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[4].billableHours}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[5].billableHours}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[6].billableHours}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.totalWeekWorkHours}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td>Total Hours</td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[0].totalHour}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[1].totalHour}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[2].totalHour}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[3].totalHour}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[4].totalHour}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[5].totalHour}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.daySheet[6].totalHour}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.Workingdetails.totalWeekHours}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td />
            </tr>
            <tr>
              <td>Notes</td>
              <td width="400" colSpan="8">
                <TextArea rows={4} />
              </td>
            </tr>
            <tr>
              <td colSpan="3" />
              <td>
                <Button type="primary" onClick={this.onSave}>
                  Save
                </Button>
              </td>
              <td>
                <Button type="primary" onClick={this.onSubmit}>
                  Submit
                </Button>
              </td>
              <td>
                <Button type="primary" onClick={this.onReset}>
                  Reset
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    timesheet: state.timesheet
  };
}

export default connect(mapStateToProps)(timesheet);

//export default timesheet;
