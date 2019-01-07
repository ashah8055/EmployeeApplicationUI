import React, { Component } from 'react';
import { Menu, Collapse, Form, Button, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card, Select, Upload, message, Icon } from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";

import { createRequestSubmit } from "../../redux/actions/CreateNewRequest";
//import { createWorkingHourTimeSheet } from "../../redux/actions/CreateNewRequest";
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
            current: 'timesheet',
            TimeSheetDetails: {

                //  reqId: moment().valueOf(),
                selectWeek: '',
                jobTitle: 'Full Stack',
                endClient: 'N/A',
                client: 'Inhouse',
                approver: 'Amar Shah',
                endDate: '12/31/2018',
                projectId: 'Test',
                employeeId: '',
            }
        }

    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    onDropdownChange = (e, i) => {
        console.log("DDL" + e);
        let TimeSheetDetails = Object.assign({}, this.state.TimeSheetDetails);
        TimeSheetDetails.jobTitle = e;
        return this.setState({ TimeSheetDetails });
    }

    onSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({ viewTimesheet: !this.state.viewTimesheet });
                let data = {};
                data.TimeSheetDetails = this.state.TimeSheetDetails;
                data.TimeSheetDetails.employeeId = Math.floor((Math.random() * 100) + 1);
                console.log("Details for time sheet details", data.TimeSheetDetails);
                //  data.reqId = this.state.TimeSheetDetails.reqId;
                this.props.dispatch(createRequestSubmit(data));
                //this.props.dispatch(createWorkingHourTimeSheet(data));
                console.log("Submit click");
            }

        });



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
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xl: { span: 24 },
                lg: { span: 24 },
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xl: { span: 24 },
                lg: { span: 24 },
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        // const weekpicker = DatePicker.WeekPicker;


        return (
            <div>
                <Layout>
                    <Header >
                        <Row>
                            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                >

                                    <Menu.Item >
                                        <Link to={{ pathname: "/home" }}> <img src='https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png' width="200px" height="60px"></img></Link>
                                    </Menu.Item>
                                    <Menu.Item key="home">
                                        <Link to={{ pathname: "/home" }}><Icon type="home" />Home</Link>
                                    </Menu.Item>
                                    <Menu.Item key="timesheet">
                                        <Link to={{ pathname: "/createNewRequest" }}><Icon type="clock-circle" />TimeSheet</Link>
                                    </Menu.Item>
                                    <Menu.Item key="project">
                                        <Link to={{ pathname: "/Project" }}><Icon type="project" />Project</Link>
                                    </Menu.Item>
                                    <Menu.Item key="Manager Approval">
                                        <Link to={{ pathname: "/mTSA" }}>
                                            <Icon type="clock-circle" />
                                            Manager TimeSheet Approval
                                        </Link>
                                    </Menu.Item>

                                </Menu>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Link to={{ pathname: "/login" }}> <Button size='large'><Icon type="logout" />Logout</Button></Link>
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
                                            <Select id="jobTitle" name="jobTitle" value={this.state.TimeSheetDetails.jobTitle} onChange={this.onDropdownChange}>
                                                <Option value="Java Developer">Java Developer</Option>
                                                <Option value="Full Stack">Full Stack</Option>
                                                <Option value="Data Analyst">Data Analyst</Option>
                                            </Select>
                                        </FormItem>

                                    </Card>
                                </Col>



                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >

                                        <FormItem
                                            {...formItemLayout}
                                        >
                                            {getFieldDecorator('testNumber', {


                                                rules: [
                                                    {
                                                        required: true, message: 'Please Select Week!',
                                                    }

                                                ]
                                            })(
                                                <WeekPicker onChange={this.onSelectWeekChange} defaultValue={this.state.TimeSheetDetails.selectWeek} placeholder="Select week" />

                                            )}
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
const WrappedRegistrationForm = Form.create()(CreateNewRequest);

export default connect(mapStateToProps)(WrappedRegistrationForm);



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
