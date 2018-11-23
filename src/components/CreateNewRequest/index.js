import React, { Component } from 'react';
import { Collapse, Form, Button, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card, Select, Upload, message, Icon } from 'antd';
import moment from 'moment';
import { createRequestSubmit } from "../../redux/actions/CreateNewRequest";
import { connect } from "react-redux";
import TimeSheet from "../TimeSheet/index";
const { TextArea } = Input;
const Option = Select.Option;
const { Header, Sider, Content } = Layout;
const Panel = Collapse.Panel;
const FormItem = Form.Item;



// function onChange(date, dateString) {
//     console.log(date, dateString);
// }
class CreateNewRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewTimesheet: false,
            error: "",

            TimeSheetDetails: {

                reqId: moment().valueOf(),
                ddlJob: '3',
                selectWeek: '',
                jobId: 'Test',
                jobTitle: 'Test',
                endClient: 'N/A',
                client: 'Inhouse',
                approver: 'Amar Shah',
                endDate: '12/31/2018',
                projectId: 'Test'
            }
        }

    }

    onDropdownChange = (e, i) => {
        console.log("DDL" + e);
        let TimeSheetDetails = Object.assign({}, this.state.TimeSheetDetails);
        TimeSheetDetails.ddlJob = e;
        return this.setState({ TimeSheetDetails });
    }

    onSubmit = () => {
        this.setState({ viewTimesheet: !this.state.viewTimesheet });
        let data = {};
        data.TimeSheetDetails = this.state.TimeSheetDetails;
        console.log("Details for time sheet details", data.TimeSheetDetails);
        data.reqId = this.state.TimeSheetDetails.reqId;
        this.props.dispatch(createRequestSubmit(data));
        console.log("Submit click");
    };

    onSelectWeekChange = (e, date) => {

        console.log("select week change", e);
        console.log("date" + date);
        let TimeSheetDetails = Object.assign({}, this.state.TimeSheetDetails);
        TimeSheetDetails["selectWeek"] = moment(e).valueOf();
        return this.setState({ TimeSheetDetails });


    }

    render() {
        const { WeekPicker } = DatePicker;
        // const weekpicker = DatePicker.WeekPicker;


        return (
            <div>
                <Layout>
                    <Header >
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            </Col>
                            <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                                <h3 >CREATE NEW REQUEST</h3>
                            </Col>
                        </Row>
                    </Header>
                    <Content>
                        <Form layout="inline">

                            <Row>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Card >
                                        CLIENT:
                                        <div> {this.state.TimeSheetDetails.client}</div>
                                    </Card>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Card >

                                        APPROVER(S):
                                        <div> {this.state.TimeSheetDetails.approver}</div>


                                    </Card>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Card >


                                        JOB END DATE:
                                        <div> {this.state.TimeSheetDetails.endDate}</div>

                                    </Card>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Card >


                                        END CLIENT:
                                        <div> {this.state.TimeSheetDetails.endClient}</div>

                                    </Card>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Card >


                                        PROJECT:
                                        <div> {this.state.TimeSheetDetails.projectId}</div>

                                    </Card>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Card >



                                    </Card>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >

                                        <FormItem
                                            label="Job"
                                            hasFeedback
                                        >
                                            <Select id="ddlJob" name="ddlJob" value={this.state.TimeSheetDetails.ddlJob} onChange={this.onDropdownChange}>
                                                <Option value="1">Java Developer</Option>
                                                <Option value="2">Full Stack</Option>
                                                <Option value="3">Data Analyst</Option>
                                            </Select>
                                        </FormItem>

                                    </Card>
                                </Col>



                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >
                                        <FormItem

                                            label="Week Picker"
                                            hasFeedback

                                        >
                                            <WeekPicker onChange={this.onSelectWeekChange} defaultValue={this.state.TimeSheetDetails.selectWeek} placeholder="Select week" />
                                        </FormItem>

                                    </Card>
                                </Col>

                                <Col s={24} sm={24} md={24} lg={24} xl={24}>
                                    <Card >
                                        <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>

                        <div>
                            {this.state.viewTimesheet && (
                                <TimeSheet />
                            )}

                        </div>
                    </Content>
                </Layout>

            </div >

        );
    }

}

// const mapStateToProps = state => {
//     return {

//         isTaskCreated: state.createTask.isTaskCreated
//     };
// };
const mapStateToProps = state => {
    return {




    };
};

export default connect(mapStateToProps)(CreateNewRequest);



// <Col xs={12} sm={12} md={12} lg={12} xl={12}>
// <Card >
//     <FormItem

//         label=" Start Date"
//         hasFeedback

//     >


//         <DatePicker onChange={this.onPlacementDateChange} placeholder="Select Date" defaultValue={this.state.reqDetails.startDate} />

//         {/* <RangePicker onChange={this.onPlacementDateChange} defaultValue={this.state.reqDetails.datepicker} /> */}
//     </FormItem>

// </Card>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12}>
// <Card >
//     <FormItem

//         label=" End Date"
//         hasFeedback

//     >
//         <DatePicker onChange={this.onPlacementDateChange} placeholder="Select Date" defaultValue={this.state.reqDetails.endDate} />

//         {/* <RangePicker onChange={this.onPlacementDateChange} defaultValue={this.state.reqDetails.datepicker} /> */}
//     </FormItem>

// </Card>
// </Col>
