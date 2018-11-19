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
            error: "",
            reqDetails: {
                reqId: moment().valueOf(),
                ddlJob: '3',
                //   startDate: '',
                //  endDate: '',
                selectWeek: ''
            }
        }

    }

    onDropdownChange = (e, i) => {
        let reqDetails = Object.assign({}, this.state.reqDetails);
        reqDetails.ddlJob = e;
        return this.setState({ reqDetails });
    }

    onSubmit = () => {

        let data = {};
        data.reqDetails = this.state.reqDetails;
        console.log("Details", data.reqDetails);
        data.reqId = this.state.reqDetails.reqId;
        this.props.dispatch(createRequestSubmit(data));
        console.log("Submit click");
    };
    // onPlacementDateChange = (e, date) => {
    //     // this.setState({
    //     //     ...this.state.empDetails.recruiter, placementDate: date,
    //     // });
    //     let reqDetails = Object.assign({}, this.state.reqDetails);
    //     reqDetails["startDate"] = moment(date).valueOf();
    //     reqDetails["endDate"] = moment(date).valueOf();

    //     return this.setState({ reqDetails });
    // };

    onSelectWeekChange = (e, date) => {

        console.log("select week change", e);
        console.log("date" + date);

        let dt = moment(e);
        let selectedDate = dt.startOf('week').format("MM/DD/YYYY");
        let day1 = dt.format("DD");
        let day2 = dt.add(1, 'days').format("DD");
        let day3 = dt.add(1, 'days').format("DD");
        let day4 = dt.add(1, 'days').format("DD");
        let day5 = dt.add(1, 'days').format("DD");
        let day6 = dt.add(1, 'days').format("DD");
        let day7 = dt.add(1, 'days').format("DD");


        console.log(dt.format("MM/DD/YYYY"));
        console.log(dt.endOf('week').format("MM/DD/YYYY"));
        console.log("duration");
        console.log("D1" + day1);
        console.log("D2" + day2);
        console.log("D3" + day3);
        console.log("D4" + day4);
        console.log("D5" + day5);

        let reqDetails = Object.assign({}, this.state.reqDetails);
        reqDetails["selectWeek"] = moment(e).valueOf();
        return this.setState({ reqDetails });


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
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >

                                        <FormItem
                                            label="Job"
                                            hasFeedback
                                        >
                                            <Select id="ddlJob" name="ddlJob" value={this.state.reqDetails.ddlJob} onChange={this.onDropdownChange}>
                                                <Option value="1">Option 1</Option>
                                                <Option value="2">Option 2</Option>
                                                <Option value="3">Option 3</Option>
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
                                            <WeekPicker onChange={this.onSelectWeekChange} defaultValue={this.state.reqDetails.selectWeek} placeholder="Select week" />
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


                    </Content>
                </Layout>
                <TimeSheet />
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
