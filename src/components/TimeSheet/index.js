import React, { Component } from 'react';
import { Collapse, Form, Button, Tabs, Layout, Input, TextArea } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createWorkingHourTimeSheet } from "../../redux/actions/CreateNewRequest";


class timesheet extends Component {

    constructor(props) {
        super(props);
        this.state = {

            workinghours: {
                "monday": {
                    day: 'monday',
                    workHours: '0',
                    timeOffHour: '0',
                    date: 'Test',
                    billableHours: '0',
                    totalHour: '0',
                    notes: 'Test'

                },
                "tuesday": {
                    day: 'tuesday',
                    workHours: '0',
                    timeOffHour: '0',
                    date: '0',
                    billableHours: '0',
                    totalHour: '0',
                    notes: 'Test'

                },
                "wednesday": {
                    day: 'wednesday',
                    workHours: '0',
                    timeOffHour: '0',
                    date: 'Test',
                    billableHours: '0',
                    totalHour: '0',
                    notes: 'Test'

                },
                "thursday": {
                    day: 'thursday',
                    workHours: '0',
                    timeOffHour: '0',
                    date: 'Test',
                    billableHours: '0',
                    totalHour: '0',
                    notes: 'Test'

                }, "friday": {
                    day: 'friday',
                    workHours: '0',
                    timeOffHour: '0',
                    date: 'Test',
                    billableHours: '0',
                    totalHour: '0',
                    notes: 'Test'

                }, "saturday": {
                    day: 'saturday',
                    workHours: '0',
                    timeOffHour: '0',
                    date: 'Test',
                    billableHours: '0',
                    totalHour: '0',
                    notes: 'Test'

                },
                "sunday": {
                    day: 'sunday',
                    workHours: '0',
                    timeOffHour: '0',
                    date: 'Test',
                    billableHours: '0',
                    totalHour: '0',
                    notes: 'Test'

                },

            }
            ,

            Workingdetails: {
                totalWeekWorkHours: '0',
                totalWeekBillableHours: '0',
                totalWeekTimeoffHours: '0',
                totalWeekHours: '0',
                comments: ''
            }

        };

        this.baseState = this.state;
    }



    handlenum1Change = (evt) => {
        let Workingdetails = Object.assign({}, this.state.Workingdetails);
        let workinghours = Object.assign({}, this.state.workinghours);
        let day = workinghours[evt.target.name]
        day.workHours = Number(evt.target.value);
        Workingdetails.totalWeekWorkHours = Number(Workingdetails.totalWeekWorkHours) + Number(evt.target.value);
        Workingdetails.totalWeekBillableHours = Workingdetails.totalWeekWorkHours;
        Workingdetails.totalWeekHours = Number(Workingdetails.totalWeekWorkHours) + Number(Workingdetails.totalWeekTimeoffHours);
        day.billableHours = Number(evt.target.value);
        return this.setState({ workinghours, Workingdetails });
    }

    handlenum2Change = (evt) => {
        let Workingdetails = Object.assign({}, this.state.Workingdetails);
        let workinghours = Object.assign({}, this.state.workinghours);
        let day = workinghours[evt.target.name]
        day.timeOffHour = Number(evt.target.value);
        Workingdetails.totalWeekTimeoffHours = Number(Workingdetails.totalWeekTimeoffHours) + Number(evt.target.value);
        day.totalHour = day.workHours + Number(evt.target.value);;
        return this.setState({ workinghours, Workingdetails });


    }


    onSubmit = () => {
        // let data = {};
        // data.workinghours = this.state.workinghours;
        // data.Workingdetails = this.state.Workingdetails;
        // data.reqId = this.state.reqDetails.reqId;
        // this.props.dispatch(createWorkingHourTimeSheet(data));
        console.log("Save click");
    };

    onReset = () => {
        this.setState(this.baseState);
    }


    render() {

        const { TextArea } = Input;
        let dt = moment(this.props.timesheet.timesheet.reqDetails.selectWeek);
        let selectedDate = dt.startOf('week').format("MM/DD/YYYY");
        let day1 = dt.format("DD");
        let day2 = dt.add(1, 'days').format("DD-MMM");
        let day3 = dt.add(1, 'days').format("DD-MMM");
        let day4 = dt.add(1, 'days').format("DD-MMM");
        let day5 = dt.add(1, 'days').format("DD-MMM");
        let day6 = dt.add(1, 'days').format("DD-MMM");
        let day7 = dt.add(1, 'days').format("DD-MMM");


        return (
            <table className="table table-hover">
                <thead>

                    <tr>
                        <th>Week</th>
                        <th>Mon <input type='text' value={dt.startOf('week').format("DD-MMM")} readOnly /> </th>
                        <th>Tue <input type='text' value={day2} readOnly /></th>
                        <th>Wed <input type='text' value={day3} readOnly /></th>
                        <th>Thur <input type='text' value={day4} readOnly /></th>
                        <th>Fri <input type='text' value={day5} readOnly /></th>
                        <th>Sat <input type='text' value={day6} readOnly /></th>
                        <th>Sun <input type='text' value={day7} readOnly /></th>
                        <th>TotalHr</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Hour Claim</td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" name="monday" id="hMon" onChange={this.handlenum1Change} />
                        </td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" name="tuesday" id="hTue" onChange={this.handlenum1Change} />
                        </td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" name="wednesday" onChange={this.handlenum1Change} />
                        </td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" name="thursday" onChange={this.handlenum1Change} />
                        </td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" name="friday" onChange={this.handlenum1Change} />
                        </td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" name="saturday" onChange={this.handlenum1Change} />
                        </td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" name="sunday" onChange={this.handlenum1Change} />
                        </td>
                        <td>
                            <input type='text' value={this.state.Workingdetails.totalWeekWorkHours} readOnly />
                        </td>

                    </tr>
                    <tr>
                        <td>Time Off</td>
                        <td><Input size="small" placeholder="Enter Time Off" name="monday" onChange={this.handlenum2Change} /></td>
                        <td><Input size="small" placeholder="Enter Time Off" name="tuesday" onChange={this.handlenum2Change} /></td>
                        <td><Input size="small" placeholder="Enter Time Off" name="wednesday" onChange={this.handlenum2Change} /></td>
                        <td><Input size="small" placeholder="Enter Time Off" name="thursday" onChange={this.handlenum2Change} /></td>
                        <td><Input size="small" placeholder="Enter Time Off" name="friday" onChange={this.handlenum2Change} /></td>
                        <td><Input size="small" placeholder="Enter Time Off" name="saturday" onChange={this.handlenum2Change} /></td>
                        <td><Input size="small" placeholder="Enter Time Off" name="sunday" onChange={this.handlenum2Change} /></td>
                        <td><input type='text' value={this.state.Workingdetails.totalWeekTimeoffHours} readOnly /></td>


                    </tr>
                    <tr>
                        <td>Total Bill</td>
                        <td><input type='text' value={this.state.workinghours.monday.billableHours} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.tuesday.billableHours} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.wednesday.billableHours} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.thursday.billableHours} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.friday.billableHours} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.saturday.billableHours} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.sunday.billableHours} readOnly /></td>
                        <td><input type='text' value={this.state.Workingdetails.totalWeekWorkHours} readOnly /></td>


                    </tr>
                    <tr>
                        <td>Total Hours</td>
                        <td><input type='text' value={this.state.workinghours.monday.totalHour} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.tuesday.totalHour} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.wednesday.totalHour} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.thursday.totalHour} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.friday.totalHour} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.saturday.totalHour} readOnly /></td>
                        <td><input type='text' value={this.state.workinghours.sunday.totalHour} readOnly /></td>
                        <td><input type='text' value={this.state.Workingdetails.totalWeekHours} readOnly /></td>

                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Notes</td>
                        <td width="400" colSpan="8"><TextArea rows={4} /></td>
                    </tr>
                    <tr >
                        <td colSpan="3"></td>
                        <td ><Button type="primary" onClick={this.onSubmit}>Save</Button></td>
                        <td ><Button type="primary" onClick={this.onReset}>Reset</Button></td>

                    </tr>

                </tbody>

            </table>
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