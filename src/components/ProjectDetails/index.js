import React, { Component } from 'react'
import { Menu, Collapse, Form, Button, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card, Select, Upload, message, Icon } from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


const { Header, Sider, Content, Footer } = Layout;

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}
class projectDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 'project'
        }

    }


    render() {
        const { TextArea } = Input;
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;


        return (
            <div>
                <Layout>

                    <Header >
                        <Row >
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
                        <Form >
                                <Row type="flex" justify="start">
                                    
                                    <Col span={6}>
                                    <Card>
                                    <label>PROJECT ID:</label>
                                    <FormItem
                                               
                                               >
                                                   {getFieldDecorator('projectId', {


                                                       rules: [
                                                           {
                                                               required: true, message: 'Please input Project Id!',
                                                           }
                                                       ]
                                                   })(
                                                       <Input size="large" name="projectId" id="hMon" placeholder="Enter Project Id" />

                                                   )}
                                               </FormItem>
                                    </Card>
                                    </Col>
                                    <Col span={6}>
                                    <Card>
                                    <label>PROJECT NAME:</label>
                                    <FormItem
                                               
                                               >
                                                   {getFieldDecorator('projectName', {


                                                       rules: [
                                                           {
                                                               required: true, message: 'Please input Project Name',
                                                           }
                                                       ]
                                                   })(
                                                       <Input size="large" name="projectName" id="hMon" placeholder="Enter Project Name" />

                                                   )}
                                               </FormItem>
                                    </Card>
                                    </Col>

                                    <Col span={6}>
                                    <Card>
                                    <label>VENDOR NAME:</label>
                                    <FormItem
                                               
                                               >
                                                   {getFieldDecorator('VendorName', {


                                                       rules: [
                                                           {
                                                               required: true, message: 'Please input VendorName',
                                                           }
                                                       ]
                                                   })(
                                                       <Input size="large" name="VendorName" id="hMon" placeholder="Enter Vendor Name" />

                                                   )}
                                               </FormItem>
                                    </Card>
                                    </Col>

                                </Row>
                                <Row type="flex" justify="start">
                                <Col span={6}>
                                    <Card>
                                    <label>CLIENT ID:</label>
                                    <FormItem
                                               
                                               >
                                                   {getFieldDecorator('ClientId', {


                                                       rules: [
                                                           {
                                                               required: true, message: 'Please input Client Id',
                                                           }
                                                       ]
                                                   })(
                                                       <Input size="large" name="ClientId" id="ClientId" placeholder="Enter Client Id" />

                                                   )}
                                               </FormItem>
                                    </Card>
                                    </Col>
                                    <Col span={6}>
                                    <Card>
                                    <label>CLIENT NAME:</label>
                                    <FormItem
                                               
                                               >
                                                   {getFieldDecorator('ClientName', {


                                                       rules: [
                                                           {
                                                               required: true, message: 'Please input Client Name',
                                                           }
                                                       ]
                                                   })(
                                                       <Input size="large" name="Cleint Name" id="hMon" placeholder="Enter Client Name" />

                                                   )}
                                               </FormItem>
                                    </Card>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                <Col span={12}>
                                    <Card>
                                    <label>PROJECT:</label>
                                    <FormItem
                                               
                                               >
                                                   {getFieldDecorator('VendorName', {


                                                       rules: [
                                                           {
                                                               required: true, message: 'Please input VendorName',
                                                           }
                                                       ]
                                                   })(
                                                    <RangePicker
                                                    showTime={{ format: 'HH:mm' }}
                                                    format="YYYY-MM-DD HH:mm"
                                                    placeholder={['Start Time', 'End Time']}
                                                    onChange={onChange}
                                                    onOk={onOk}
                                                />

                                                   )}
                                               </FormItem>
                                    </Card>
                                    </Col>
                                    
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={12}>
                                        <Card>
                                            <div>
                                                Notes:
    
    
                                                <TextArea rows={4} />

                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                                
                        </Form>
                    </Content>
                </Layout>
            </div>
        )
    }
}
function mapStateToProps() {
    return {

    }

};

const WrappedRegistrationForm = Form.create()(projectDetails);


export default connect(mapStateToProps)(WrappedRegistrationForm);
