import React, { Component } from 'react';
import { Collapse, Form, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card, Select } from 'antd';
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon, Upload, Button, message } from 'antd';
import reqwest from 'reqwest';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { createRequestSubmit } from "../../redux/actions/CreateNewRequest";
import { connect } from "react-redux";


const { TextArea } = Input;
const Option = Select.Option;
const { Header, Sider, Content } = Layout;
const Panel = Collapse.Panel;
const FormItem = Form.Item;
function handleChange(value) {
    console.log(`selected ${value}`);
}
class CreateNewRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reqDetails: {
                reqId: moment().valueOf(),
                RequestType: 'Enter Req Type'
            }
        }

    }

    onChange = e => this.setState({
        reqDetails: { ...this.state.reqDetails, [e.target.name]: e.target.value }
    });

    onSubmit = () => {

        let data = {};
        data.reqDetails = this.state.reqDetails;
        data.reqId = this.state.reqDetails.reqId;
        this.props.dispatch(createRequestSubmit(data));
        console.log("Submit click");
    };




    render() {
        const { reqDetails } = this.state;
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
                                            label="RequestGroup"
                                            hasFeedback
                                        >
                                            {/* <Select defaultValue="2" id="ddlreqGroup" name="ddlreqGroup" >
                                                <Option value="1">Option 1</Option>
                                                <Option value="2">Option 2</Option>
                                                <Option value="3">Option 3</Option>
                                            </Select> */}
                                        </FormItem>

                                    </Card>
                                </Col>


                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >
                                        <FormItem

                                            label="Status"
                                            hasFeedback

                                        >
                                            {/* <Select defaultValue="2">
                                                <Option value="1">Option 1</Option>
                                                <Option value="2">Option 2</Option>
                                                <Option value="3">Option 3</Option>
                                            </Select> */}
                                        </FormItem>

                                    </Card>
                                </Col>


                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >
                                        <FormItem

                                            label="RequestType"
                                            hasFeedback

                                        >
                                            <Input id="RequestType" type="text" name="RequestType" value={reqDetails.RequestType} onChange={this.onChange} placeholder="Request type" />


                                            {/* <Select defaultValue="2">
                                                <Option value="1">Option 1</Option>
                                                <Option value="2">Option 2</Option>
                                                <Option value="3">Option 3</Option>
                                            </Select> */}
                                        </FormItem>

                                    </Card>
                                </Col>

                                <Col s={24} sm={24} md={24} lg={24} xl={24}>
                                    <Card >
                                        <FormItem label="Description">
                                            <TextArea rows={4} id="description" />
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
            </div >
        );
    }

}

// const mapStateToProps = state => {
//     return {

//         isTaskCreated: state.createTask.isTaskCreated
//     };
// };

export default (CreateNewRequest);