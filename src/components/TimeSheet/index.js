import React, { Component } from 'react';
import { Collapse, Form, Button, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card, Select, Upload, message, Icon } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class timesheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            totalBill: 0,
            noOfShift: 0,
            timeOff: 0
        };
        this.handlenum1Change = this.handlenum1Change.bind(this);
        this.handlenum2Change = this.handlenum2Change.bind(this);
    }

    handlenum1Change(evt) {
        console.log(evt.target.value);
        this.setState({ noOfShift: Number(evt.target.value) });
        let y = this.state.noOfShift + Number(evt.target.value)
        this.setState({ total: y })
        this.setState({ totalBill: Number(evt.target.value) })


    }
    handlenum2Change(evt) {
        console.log(typeof evt.target.value);
        this.setState({ timeOff: Number(evt.target.value) });
        let y = this.state.noOfShift + Number(evt.target.value)
        this.setState({ total: y })


    }

    onReset(evt) {

        this.setState({

            noOfShift: 0,
            timeOff: 0

        });
    }

    // getDay() {
    //     return this.state.timesheet.map((timesheet) => {
    //         return (
    //             <div>
    //                 {timesheet.selectWeek}
    //             </div>
    //         );
    //     });
    // }
    render() {
        return (
            <table className="table table-hover">
                <thead>

                    <tr>
                        <th>Week</th>
                        {/* <th> {this.getDay()}</th> */}
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thur</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                        <th>TotalHr</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Hour Claim</td>
                        <td>
                            <Input size="small" placeholder="Enter Hr" onChange={this.handlenum1Change} />
                        </td>


                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td><Input size="small" placeholder="Enter Start Time" /></td>
                    </tr>
                    <tr>
                        <td>Time Off</td>
                        <td><Input size="small" placeholder="Enter Time Off" onChange={this.handlenum2Change} /></td>
                    </tr>
                    <tr>
                        <td>Total Bill</td>
                        <td><input type='text' value={this.state.totalBill} readOnly /></td>
                    </tr>
                    <tr>
                        <td>Total Hours</td>
                        <td><input type='text' value={this.state.total} readOnly /></td>
                    </tr>
                    <tr>
                        <td><Button type="primary">Save</Button></td>
                        <td><Button type="primary" onClick={this.onReset}>Reset</Button></td>
                    </tr>

                </tbody>

            </table>
        );
    }

}

// function mapStateToProps(state) {
//     return {
//         timesheet: state.timesheet
//     };
// }


//export default connect(mapStateToProps)(timesheet);

export default timesheet;