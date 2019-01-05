import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Modal, List, Form, Checkbox, Input, Menu, Button, Icon, Col, Layout } from "antd";
import { Link } from "react-router-dom";
import InlineError from "../messages/InlineError";
import { getEmp, searchEmp } from "../../redux/actions/Get_List";

const { Header, Content } = Layout;

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: "mail",
            data: {
                firstName: "",
                lastName: "",
                primaryEmail: ""

            },
            loading: false,
            visible: false,
            errors: {}
        };
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onCheck(e) {
        console.log(`checked = ${e.target.checked}`);
        console.log(e.target.value);
        e.target.value.check = true;
    }

    handleClick = e => {
        console.log("click ", e);
        this.setState({
            current: e.key
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
        let selEmpList = Array.from(this.props.searchList);
        const selEmployees = selEmpList.filter(item => {
            if (item.check) {

                return item;
            }
        });

        console.log("selected employees list" + JSON.stringify(selEmployees));
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    validate = data => {
        const errors = {};
        if (!data.firstName) errors.firstName = "Can't be empty";
        return errors;
    };

    onShow = e => {
        this.setState({
            visible: true
        });
        const { firstName, lastName, primaryEmail } = this.state.data;
        this.props.dispatch(
            getEmp({
                firstName: firstName,
                lastName: lastName,
                primaryEmail: primaryEmail,

            })
        );


    };
    onFilter = e => {
        const errors = this.validate(this.state.data);
        this.setState({
            visible: true,
            errors
        });
        if (Object.keys(errors).length === 0) {
            const { firstName, lastName, primaryEmail } = this.state.data;
            this.props.dispatch(
                searchEmp({
                    firstName: firstName,
                    lastName: lastName,
                    primaryEmail: primaryEmail
                })
            );
        }
    };

    render() {
        const { errors } = this.state;
        const data1 = Array.from(this.props.searchList);
        const { data } = this.state;

        return (
            <div>
                <Button type="primary" onClick={this.onShow}>
                    Add Employee{" "}
                </Button>
                <Modal
                    title="Employee Details"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Card title="Search Employee">
                        <Form>
                            <Col span={18}>
                                <Form.Item error={!!errors.firstName}>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={this.onChange}
                                        placeholder="Enter Name"
                                    />
                                    {errors.firstName && <InlineError text={errors.firstName} />}
                                </Form.Item>
                                <Button type="primary" onClick={this.onFilter}>
                                    Filter{" "}
                                </Button>

                                <Content
                                    style={{
                                        margin: "24px 16px",
                                        padding: 24,
                                        background: "#fff",
                                        minHeight: 100
                                    }}
                                >
                                    <List
                                        bordered
                                        dataSource={data1}
                                        renderItem={item => (
                                            <List.Item>
                                                <Checkbox onChange={this.onCheck} value={item} />
                                                {item.firstName}
                                                {"    ||    "}
                                                {item.lastName}
                                                {"    ||    "}
                                                {item.primaryEmail}
                                            </List.Item>
                                        )}
                                    />
                                </Content>
                            </Col>
                        </Form>
                    </Card>
                </Modal>
            </div>
        );
    }
}
function mapStateToProps(state) {
    //console.log("STATE" + JSON.stringify(state.empList.result));
    return {
        searchList: state.searchList.result
    };
}
export default connect(mapStateToProps)(Search);