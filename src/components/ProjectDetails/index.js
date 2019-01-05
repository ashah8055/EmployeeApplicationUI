import React, { Component } from 'react'
import { Menu, Collapse, Form, Button, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card, Select, Upload, message, Icon, Switch } from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { isThisTypeNode } from 'typescript';
import { createProjcetDetailsSubmit } from '../../redux/actions/ProjectDetails';
import Projectlist from '../ProjectDetails/list';
import EmpModal from '../Search';
const { Header, Sider, Content, Footer } = Layout;
const { RangePicker } = DatePicker;


class projectDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 'project',
            projectDetails: {
                createdById: '1',
                clientProjectId: '123',
                clientProjectName: 'das',
                vendorId: '1233',
                vendorName: 'dsa',
                clientId: '232',
                clientName: 'ds',
                startDate: '',
                endDate: '',
                notes: 'dsd',
                activeTimesheetStartDate: '',
                activeTimesheetEndDate: '',
                activeTimesheetFreezeDate: '',
                isActiveTimesheet: true,
                "listOfEmployees": [{

                }]
            }



        }

    }
    onChange = (e) => {
        let projectDetails = Object.assign({}, this.state.projectDetails);
        projectDetails[e.target.name] = e.target.value;
        return this.setState({ projectDetails });
    };
    onChangeId = (e) => {
        let projectDetails = Object.assign({}, this.state.projectDetails);
        projectDetails[e.target.name] = Number(e.target.value);
        return this.setState({ projectDetails });
    };


    onChangeRangePicker = (e, date) => {

        // console.log("OnSelect" + date[0])
        // console.log("OnSelect" + date[1])
        let projectDetails = Object.assign({}, this.state.projectDetails);
        projectDetails["startDate"] = date[0];
        projectDetails["endDate"] = date[1];
        //   console.log(projectDetails["projectStartDate"]);

        return this.setState({ projectDetails });
    };


    onChangeActiveRangePicker = (e, date) => {

        let projectDetails = Object.assign({}, this.state.projectDetails);
        projectDetails["activeTimesheetStartDate"] = date[0];
        projectDetails["activeTimesheetEndDate"] = date[1];
        //   console.log(projectDetails["projectStartDate"]);

        return this.setState({ projectDetails });


    }

    onChangeFreezeDatePicker = (e, date) => {
        let projectDetails = Object.assign({}, this.state.projectDetails);
        projectDetails["activeTimesheetFreezeDate"] = date;
        return this.setState({ projectDetails });

    }

    onChanegeActivetimeSheet = (checked) => {
        let projectDetails = Object.assign({}, this.state.projectDetails);
        projectDetails["isActiveTimesheet"] = checked;

        return this.setState({ projectDetails });

    }

    onSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let data = {};
                data.projectDetails = this.state.projectDetails;
                data.projectDetails.createdById = Math.floor((Math.random() * 100) + 1);
                console.log("Submit Details" + data)
                this.props.dispatch(createProjcetDetailsSubmit(data));

                return this.setState({ projectDetails });
            }

        });

    };

    render() {
        const { TextArea } = Input;
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        const formItemLayout = {
            labelCol: {
                xl: { span: 24 },
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xl: { span: 24 },
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

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
                                </Menu>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Link to={{ pathname: "/login" }}> <Button size='large'><Icon type="logout" />Logout</Button></Link>
                            </Col>


                        </Row>
                    </Header>
                    <Content>
                        <Row gutter={24}>
                            <Col span={16}>
                                <Form >

                                    <Row type="flex" justify="start" >

                                        <Col span={8}>
                                            <Card>
                                                <label>PROJECT ID:</label>
                                                <label>{this.state.projectDetails.clientProjectId}</label>
                                                <FormItem
                                                    {...formItemLayout}
                                                >{getFieldDecorator('clientProjectId', {


                                                    rules: [
                                                        {
                                                            required: true, message: 'Please input Project id!',
                                                        }

                                                    ]
                                                })(

                                                    <Input type="text" size="default" name="clientProjectId" onChange={this.onChangeId} value={this.state.projectDetails.clientProjectId} />

                                                )}
                                                </FormItem>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card>
                                                <label>PROJECT NAME:</label>
                                                <FormItem
                                                    {...formItemLayout}
                                                >
                                                    {getFieldDecorator('clientProjectName', {


                                                        rules: [
                                                            {
                                                                required: true, message: 'Please input Project Name!',
                                                            }

                                                        ]
                                                    })(
                                                        <Input type="text" size="default" name="clientProjectName" onChange={this.onChange} placeholder="Enter Project Name" />
                                                    )}
                                                </FormItem>
                                            </Card>
                                        </Col>

                                        <Col span={8}>
                                            <Card>
                                                <label>VENDOR ID:</label>
                                                <FormItem
                                                    {...formItemLayout}
                                                >
                                                    {getFieldDecorator('vendorId', {


                                                        rules: [
                                                            {
                                                                required: true, message: 'Please input Vendor Id!',
                                                            }

                                                        ]
                                                    })(
                                                        <Input type="text" size="default" name="vendorId" onChange={this.onChangeId} placeholder="Enter Vendor Id" />

                                                    )}
                                                </FormItem>
                                            </Card>
                                        </Col>


                                    </Row>
                                    <Row type="flex" justify="start">
                                        <Col span={8}>
                                            <Card>
                                                <label>VENDOR NAME:</label>
                                                <FormItem {...formItemLayout}>
                                                    {getFieldDecorator('vendorName', {
                                                        rules: [
                                                            {
                                                                required: true, message: 'Please input Vendor Name!',
                                                            }
                                                        ]
                                                    })(
                                                        <Input type="text" size="default" name="vendorName" onChange={this.onChange} placeholder="Enter Vendor Name" />

                                                    )}
                                                </FormItem>
                                            </Card>
                                        </Col>

                                        <Col span={8}>
                                            <Card>
                                                <label>CLIENT ID:</label>
                                                <FormItem {...formItemLayout}>
                                                    {getFieldDecorator('clientId', {
                                                        rules: [
                                                            {
                                                                required: true, message: 'Please input Client Id!',
                                                            }
                                                        ]
                                                    })(
                                                        <Input type="text" size="default" name="clientId" onChange={this.onChangeId} placeholder="Enter Client Id" />
                                                    )}
                                                </FormItem>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card>
                                                <label>CLIENT NAME:</label>
                                                <FormItem {...formItemLayout}>
                                                    {getFieldDecorator('clientName', {
                                                        rules: [
                                                            {
                                                                required: true, message: 'Please input Client Name!',
                                                            }
                                                        ]
                                                    })(
                                                        <Input type="text" size="default" name="clientName" onChange={this.onChange} placeholder="Enter Client Name" />
                                                    )}
                                                </FormItem>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row type="flex" justify="start">
                                        <Col span={8}>
                                            <Card>
                                                <label>PROJECT:</label>
                                                <FormItem {...formItemLayout}>
                                                    {getFieldDecorator('projectRangePicker', {
                                                        rules: [
                                                            {
                                                                required: true, message: 'Please Select Project Dates!',
                                                            }
                                                        ]
                                                    })(
                                                        <RangePicker
                                                            name="projectRangePicker"
                                                            format="YYYY-MM-DD"
                                                            placeholder={['Start Time', 'End Time']}
                                                            onChange={this.onChangeRangePicker}
                                                            onOk={this.onChangeRanePickerSubmit}
                                                        />
                                                    )}
                                                </FormItem>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card>
                                                <label>ACTIVE PROJECT:</label>
                                                <FormItem {...formItemLayout}>
                                                    {getFieldDecorator('activeProjectRangePicker', {
                                                        rules: [
                                                            {
                                                                required: true, message: 'Please Select Active Project Dates!',
                                                            }
                                                        ]
                                                    })(
                                                        <RangePicker
                                                            name="activeProjectRangePicker"
                                                            format="YYYY-MM-DD"
                                                            placeholder={['Start Time', 'End Time']}
                                                            onChange={this.onChangeActiveRangePicker}
                                                            onOk={this.onChangeActiveRanePickerSubmit}
                                                        />
                                                    )}
                                                </FormItem>
                                            </Card>
                                        </Col>

                                        <Col span={8}>
                                            <Card>
                                                <label>FREEZE DATE:</label>
                                                <FormItem {...formItemLayout}>
                                                    {getFieldDecorator('freezeDate', {
                                                        rules: [
                                                            {
                                                                required: true, message: 'Please Select Freeze  Dates!',
                                                            }
                                                        ]
                                                    })(


                                                        <DatePicker name="freezeDate" format="YYYY-MM-DD" onChange={this.onChangeFreezeDatePicker} />

                                                    )}
                                                </FormItem>

                                            </Card>
                                        </Col>

                                    </Row>
                                    <Row type="flex" justify="start">

                                        <Col span={8}>
                                            <Card>
                                                <FormItem>
                                                    <EmpModal></EmpModal>
                                                </FormItem>
                                            </Card>
                                        </Col>
                                        <Col span={8}>

                                            <Card>
                                                <label>ACTIVE TIMESHEET:</label>
                                                <FormItem>

                                                    <Switch defaultChecked onChange={this.onChanegeActivetimeSheet} />
                                                </FormItem>
                                            </Card>
                                        </Col>
                                    </Row>

                                    <Row type="flex" justify="start">
                                        <Col span={24}>
                                            <Card>
                                                <div>
                                                    Notes:


                                                <TextArea rows={4} name="notes" onChange={this.onChange} />

                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row type="flex" justify="start">
                                        <Col span={6}>
                                            <Card>

                                                <Button type="primary" htmlType="submit" onClick={this.onSubmit} >Submit</Button>


                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card>
                                                <Button type="primary" >Reset</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                            <Col span={8}>
                                <Projectlist />
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("Project" + JSON.stringify(state.projcetDetails));
    return {
        projcetDetails: state.projectDetails

    }

};

const WrappedRegistrationForm = Form.create()(projectDetails);


export default connect(mapStateToProps)(WrappedRegistrationForm);
