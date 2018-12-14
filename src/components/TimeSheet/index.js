import * as React from "react";
import { Component } from 'react';
import { Collapse, Form, Button, Tabs, Layout, Input, TextArea, InputNumber, message } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createWorkingHourTimeSheet } from "../../redux/actions/CreateNewRequest";
import { createSaveTimeSheet } from "../../redux/actions/CreateNewRequest";

class timesheet extends Component {

    constructor(props) {
        super(props);
        this.state = {

            Workingdetails: {
                employeeId: this.props.timesheet.timesheet.TimeSheetDetails.employeeId,
                timeSheetId: '',
                totalWeekWorkHours: '0',
                totalWeekBillableHours: '0',
                totalWeekTimeoffHours: '0',
                totalWeekHours: '0',
                comments: '',
                status: 'false',
                "daySheet": [{
                    "day": "monday",
                    "workHours": "0",
                    "timeOffHour": "0",
                    "date": "Test",
                    "billableHours": "0",
                    "totalHour": "0",
                    "notes": "Test"
                },
                {
                    "day": "tuesday",
                    "workHours": "0",
                    "timeOffHour": "0",
                    "date": "0",
                    "billableHours": "0",
                    "totalHour": "0",
                    "notes": "Test"
                },
                {
                    "day": "wednesday",
                    "workHours": "0",
                    "timeOffHour": "0",
                    "date": "Test",
                    "billableHours": "0",
                    "totalHour": "0",
                    "notes": "Test"
                },
                {
                    "day": "thursday",
                    "workHours": "0",
                    "timeOffHour": "0",
                    "date": "Test",
                    "billableHours": "0",
                    "totalHour": "0",
                    "notes": "Test"
                },
                {
                    "day": "friday",
                    "workHours": "0",
                    "timeOffHour": "0",
                    "date": "Test",
                    "billableHours": "0",
                    "totalHour": "0",
                    "notes": "Test"
                },
                {
                    "day": "saturday",
                    "workHours": "0",
                    "timeOffHour": "0",
                    "date": "Test",
                    "billableHours": "0",
                    "totalHour": "0",
                    "notes": "Test"
                },
                {
                    "day": "sunday",
                    "workHours": "0",
                    "timeOffHour": "0",
                    "date": "Test",
                    "billableHours": "0",
                    "totalHour": "0",
                    "notes": "Test"
                }]
            }
        };
        this.baseState = this.state;
    }

    // componentDidMount() {
    //     this.props.form.setFields({
    //         testNumber: { value: 8 }
    //     });
    // }
    handlenum1Change = (evt) => {



        const dayArray = { "monday": 0, "tuesday": 1, "wednesday": 2, "thursday": 3, "friday": 4, "saturday": 5, "sunday": 6 };
        let Workingdetails = Object.assign({}, this.state.Workingdetails);
        Workingdetails.timeSheetId = Math.floor((Math.random() * 100) + 2);
        //      let workinghours = Object.assign({}, this.state.workinghours);
        //let day = workinghours[evt.target.name]
        let day = Workingdetails.daySheet[dayArray[evt.target.name]];
        //console.log("HA" + JSON.stringify(day));

        day.workHours = Number(evt.target.value);
        Workingdetails.totalWeekWorkHours = Number(Workingdetails.totalWeekWorkHours) + Number(evt.target.value);
        Workingdetails.totalWeekBillableHours = Workingdetails.totalWeekWorkHours;
        Workingdetails.totalWeekHours = Number(Workingdetails.totalWeekWorkHours) + Number(Workingdetails.totalWeekTimeoffHours);
        day.billableHours = Number(evt.target.value);
        day.totalHour = Number(day.timeOffHour) + Number(evt.target.value);;

        return this.setState({ Workingdetails });

    }

    handlenum2Change = (evt) => {
        const dayArray = { "monday": 0, "tuesday": 1, "wednesday": 2, "thursday": 3, "friday": 4, "saturday": 5, "sunday": 6 };

        let Workingdetails = Object.assign({}, this.state.Workingdetails);
        //let workinghours = Object.assign({}, this.state.workinghours);
        // let day = workinghours[evt.target.name];
        let day = Workingdetails.daySheet[dayArray[evt.target.name]];
        day.timeOffHour = Number(evt.target.value);
        Workingdetails.totalWeekTimeoffHours = Number(Workingdetails.totalWeekTimeoffHours) + Number(evt.target.value);
        day.totalHour = Number(day.workHours) + Number(evt.target.value);;
        return this.setState({ Workingdetails });


    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log("dad" + this.state.das);
                let data = {};
                //data.workinghours = this.state.workinghours;
                data.workingdetails = this.state.Workingdetails;

                this.props.dispatch(createWorkingHourTimeSheet(data));
                console.log("Submit click");
            }

        });

    };
    onSave = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log("dad" + this.state.das);
                let data = {};
                // data.workinghours = this.state.workinghours;
                data.workingdetails = this.state.Workingdetails;

                data.workingdetails.status = this.state.Workingdetails.status = "true";
                this.props.dispatch(createSaveTimeSheet(data));
                console.log("Save click");
            }

        });


    };
    onReset = () => {
        this.setState(this.baseState);
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // }


    render() {
        const { getFieldDecorator } = this.props.form;
        //const { Workingdetails, errors } = this.state;
        const { TextArea } = Input;
        const FormItem = Form.Item;
        let employeeId = this.props.timesheet.timesheet.TimeSheetDetails.employeeId;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };



        console.log("" + JSON.stringify(this.props.auth));
        console.log("Employee" + employeeId);
        let dt = moment(this.props.timesheet.timesheet.TimeSheetDetails.selectWeek);
        let selectedDate = dt.startOf('week').format("MM/DD/YYYY");
        let day1 = dt.format("DD");
        let day2 = dt.add(1, 'days').format("DD-MMM");
        let day3 = dt.add(1, 'days').format("DD-MMM");
        let day4 = dt.add(1, 'days').format("DD-MMM");
        let day5 = dt.add(1, 'days').format("DD-MMM");
        let day6 = dt.add(1, 'days').format("DD-MMM");
        let day7 = dt.add(1, 'days').format("DD-MMM");
        const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
        const items = days.map(n => {
            const obj = { totalHr: '0', billableHr: '0' };
            return obj;
        });


        console.log(items)



        return (
            <Form onSubmit={this.onSubmit}>
                <table className="table table-hover">
                    <thead>

                        <tr>
                            <th>Week</th>
                            <th>Mon <FormItem><input type='label' value={dt.startOf('week').format("DD-MMM")} readOnly /> </FormItem></th>
                            <th>Tue <FormItem><input type='label' value={day2} /></FormItem></th>
                            <th>Wed <FormItem><input type='label' value={day3} /></FormItem></th>
                            <th>Thur <FormItem><input type='label' value={day4} /></FormItem></th>
                            <th>Fri <FormItem><input type='label' value={day5} /></FormItem></th>
                            <th>Sat <FormItem><input type='label' value={day6} /></FormItem></th>
                            <th>Sun <FormItem><input type='label' value={day7} /></FormItem></th>
                            <th>TotalHr</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Hour Claim</td>
                            <td>

                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('monday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("monday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Hr" name="monday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum1Change} />

                                    )}
                                </FormItem>
                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('tuesday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("tuesday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Hr" name="tuesday" id="hTue" style={{ width: '100%' }} onChange={this.handlenum1Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('wednesday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("wednesday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Hr" name="wednesday" id="hWed" style={{ width: '100%' }} onChange={this.handlenum1Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('thursday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("thursday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Hr" name="thursday" id="hThur" style={{ width: '100%' }} onChange={this.handlenum1Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('friday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("friday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Hr" name="friday" id="hFri" style={{ width: '100%' }} onChange={this.handlenum1Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('saturday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("saturday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Hr" name="saturday" id="hSat" style={{ width: '100%' }} onChange={this.handlenum1Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('sunday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("sunday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Hr" name="sunday" id="hSun" style={{ width: '100%' }} onChange={this.handlenum1Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem>
                                    <input type='label' size="large" value={this.state.Workingdetails.totalWeekWorkHours} />
                                </FormItem>
                            </td>

                        </tr>
                        <tr>
                            <td>Time Off</td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('timeOffMonday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("timeOffMonday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your TimeOff Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Time Off" name="monday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum2Change} />

                                    )}
                                </FormItem>


                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('timeOfftuesday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("timeOfftuesday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your TimeOff Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Time Off" name="tuesday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum2Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('timeOffwednesday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("timeOffwednesday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your TimeOff Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Time Off" name="wednesday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum2Change} />

                                    )}
                                </FormItem>


                            </td>
                            <td><FormItem
                                {...formItemLayout}
                            >
                                {getFieldDecorator('timeOffthursday', {
                                    getValueFromEvent: (e) => {
                                        const convertedValue = Number(e.currentTarget.value);
                                        if (isNaN(convertedValue)) {
                                            return Number(this.props.form.getFieldValue("timeOffthursday"));
                                        } else {
                                            return convertedValue;
                                        }
                                    },

                                    rules: [
                                        {
                                            required: true, message: 'Please input your TimeOff Hours!',
                                        },
                                        {
                                            type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                        }
                                    ]
                                })(
                                    <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Time Off" name="thursday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum2Change} />

                                )}
                            </FormItem>


                            </td>
                            <td><FormItem
                                {...formItemLayout}
                            >
                                {getFieldDecorator('timeOfffriday', {
                                    getValueFromEvent: (e) => {
                                        const convertedValue = Number(e.currentTarget.value);
                                        if (isNaN(convertedValue)) {
                                            return Number(this.props.form.getFieldValue("timeOfffriday"));
                                        } else {
                                            return convertedValue;
                                        }
                                    },

                                    rules: [
                                        {
                                            required: true, message: 'Please input your TimeOff Hours!',
                                        },
                                        {
                                            type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                        }
                                    ]
                                })(
                                    <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Time Off" name="friday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum2Change} />

                                )}
                            </FormItem>

                            </td>
                            <td><FormItem
                                {...formItemLayout}
                            >
                                {getFieldDecorator('timeOffsaturday', {
                                    getValueFromEvent: (e) => {
                                        const convertedValue = Number(e.currentTarget.value);
                                        if (isNaN(convertedValue)) {
                                            return Number(this.props.form.getFieldValue("timeOffsaturday"));
                                        } else {
                                            return convertedValue;
                                        }
                                    },

                                    rules: [
                                        {
                                            required: true, message: 'Please input your TimeOff Hours!',
                                        },
                                        {
                                            type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                        }
                                    ]
                                })(
                                    <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Time Off" name="saturday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum2Change} />

                                )}
                            </FormItem>

                            </td>
                            <td>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('timeOffsunday', {
                                        getValueFromEvent: (e) => {
                                            const convertedValue = Number(e.currentTarget.value);
                                            if (isNaN(convertedValue)) {
                                                return Number(this.props.form.getFieldValue("timeOffsunday"));
                                            } else {
                                                return convertedValue;
                                            }
                                        },

                                        rules: [
                                            {
                                                required: true, message: 'Please input your TimeOff Hours!',
                                            },
                                            {
                                                type: "number", min: 0, max: 24, message: " Input Hours < 24"
                                            }
                                        ]
                                    })(
                                        <Input size="large" type="number" pattern="[0-9]*" placeholder="Enter Time Off" name="sunday" id="hMon" style={{ width: '100%' }} onChange={this.handlenum2Change} />

                                    )}
                                </FormItem>

                            </td>
                            <td>
                                <FormItem>
                                    <input type='text' value={this.state.Workingdetails.totalWeekTimeoffHours} readOnly />
                                </FormItem>
                            </td>


                        </tr>
                        <tr>
                            <td>Total Bill</td>
                            <td>

                                <FormItem><input type='text' value={this.state.Workingdetails.daySheet[0].billableHours} /></FormItem>
                            </td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[1].billableHours} /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[2].billableHours} /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[3].billableHours} /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[4].billableHours} /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[5].billableHours} /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[6].billableHours} /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.totalWeekWorkHours} /></FormItem></td>


                        </tr>
                        <tr>
                            <td>Total Hours</td>
                            <td> <FormItem> <input type='text' value={this.state.Workingdetails.daySheet[0].totalHour} readOnly /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[1].totalHour} readOnly /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[2].totalHour} readOnly /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[3].totalHour} readOnly /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[4].totalHour} readOnly /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[5].totalHour} readOnly /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.daySheet[6].totalHour} readOnly /></FormItem></td>
                            <td> <FormItem><input type='text' value={this.state.Workingdetails.totalWeekHours} readOnly /></FormItem></td>

                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Notes</td>
                            <td width="400" colSpan="8">
                                <FormItem>

                                    <TextArea rows={4} />
                                </FormItem>
                            </td>
                        </tr>
                        <tr >
                            <td colSpan="3"></td>
                            <td ><FormItem><Button type="primary" onClick={this.onSave} >Save</Button></FormItem></td>
                            <td ><FormItem ><Button type="primary" htmlType="submit" >Submit</Button></FormItem></td>
                            <td ><FormItem><Button type="primary" onClick={this.onReset}>Reset</Button></FormItem></td>

                        </tr>

                    </tbody>

                </table>
            </Form>
        );
    }

}

function mapStateToProps(state) {
    console.log("ggg" + state);
    return {

        timesheet: state.timesheet

    };
}
const WrappedRegistrationForm = Form.create()(timesheet);


export default connect(mapStateToProps)(WrappedRegistrationForm);

//export default timesheet;