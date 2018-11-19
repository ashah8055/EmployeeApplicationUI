import React, { Component } from 'react';
import { Collapse, Form, Button, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card, Select, Upload, message, Icon } from 'antd';
import moment from 'moment';


class timesheet extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>

                    <tr>
                        <th>Week</th>
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
                            <Input size="small" placeholder="Enter Hr" />
                        </td>


                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td><Input size="small" placeholder="Enter Stat Time" /></td>
                    </tr>
                    <tr>
                        <td>Time Off</td>
                        <td><Input size="small" placeholder="Enter Time Off" /></td>
                    </tr>
                    <tr>
                        <td>Total Bill</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Total Hours</td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        );
    }

}

export default timesheet;