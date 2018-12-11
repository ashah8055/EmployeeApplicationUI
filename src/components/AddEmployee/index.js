import React, { Component } from "react";
import { connect } from "react-redux";
import Validator from "validator";
import { Menu, Icon, Form, Layout, Row, Input, Button, Card, Col } from "antd";
import InlineError from "../messages/InlineError";
import { addEmployee } from "../../redux/actions/home";
import { Link } from "react-router-dom";
const { Header } = Layout;

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        primaryEmail: "",
        SecondaryEmail: "",
        address: "",
        jobCode: "",
        jobTitle: "",
        endClient: "",
        startDate: "",
        vendor: "",
        projectId: "",
        projectName: "",
        managerName: "",
        approverName: ""
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const {
        firstName,
        lastName,
        phoneNumber,
        primaryEmail,
        secondaryEmail,
        address,
        jobCode,
        jobTitle,
        endClient,
        startDate,
        vendor,
        projectId,
        projectName,
        managerName,
        approverName
      } = this.state.data;
      this.props.dispatch(
        addEmployee({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          primaryEmail: primaryEmail,
          SecondaryEmail: secondaryEmail,
          address: address,
          jobCode: jobCode,
          jobTitle: jobTitle,
          endClient: endClient,
          startDate: startDate,
          vendor: vendor,
          projectId: projectId,
          projectName: projectName,
          managerName: managerName,
          approverName: approverName
        })
      );

      this.props.history.push("/home");
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.primaryEmail))
      errors.primaryEmail = "Invalid Email";
    if (!data.firstName) errors.firstName = "Can't be empty";
    if (!data.lastName) errors.lastName = "Can't be empty";
    if (!data.phoneNumber) errors.phoneNumber = "Please Enter Number";
    if (!data.approverName) errors.approverName = "Can't be empty";
    if (!data.managerName) errors.managerName = "Can't be empty";
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <Header>
          <Row>
            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item>
                  <Link to={{ pathname: "/home" }}>
                    {" "}
                    <img
                      src="https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png"
                      width="200px"
                      height="60px"
                    />
                  </Link>
                </Menu.Item>
                <Menu.Item key="mail">
                  <Link to={{ pathname: "/home" }}>
                    <Icon type="mail" />
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item key="timesheet">
                  <Link to={{ pathname: "/createNewRequest" }}>
                    <Icon type="clock-circle" />
                    Time Sheet
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
              <Link to={{ pathname: "/login" }}>
                {" "}
                <Button size="large">
                  <Icon type="logout" />
                  Logout
                </Button>
              </Link>
            </Col>
          </Row>
        </Header>
        <Card title="Add Employee">
          <Form>
            <Col span={6}>
              <Form.Item error={!!errors.firstName}>
                <h3>First Name</h3>
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
            </Col>
            <Col span={6}>
              <Form.Item error={!!errors.lastName}>
                <h3>Last Name</h3>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={this.onChange}
                  placeholder="Enter Last Name"
                />
                {errors.lastName && <InlineError text={errors.lastName} />}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item error={!!errors.phoneNumber}>
                <h3>Phone Number</h3>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="10 Digits Phone number"
                  value={data.phoneNumber}
                  onChange={this.onChange}
                />
                {errors.phoneNumber && (
                  <InlineError text={errors.phoneNumber} />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item error={!!errors.primaryEmail}>
                <h3>Primary Email</h3>
                <Input
                  id="primaryEmail"
                  type="email"
                  name="primaryEmail"
                  value={data.primaryEmail}
                  onChange={this.onChange}
                  placeholder="email@rsrit.com"
                />
                {errors.primaryEmail && <InlineError text={errors.email} />}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Secondary Email</h3>
                <Input
                  id="secondaryEmail"
                  type="email"
                  name="secondaryEmail"
                  value={data.secondaryEmail}
                  onChange={this.onChange}
                  placeholder="email@gmail.com"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Address</h3>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  value={data.address}
                  onChange={this.onChange}
                  placeholder="Enter Current Address"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Job Code</h3>
                <Input
                  id="jobCode"
                  type="text"
                  name="jobCode"
                  value={data.jobCode}
                  onChange={this.onChange}
                  placeholder="Enter Job code"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Job Title</h3>
                <Input
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  value={data.jobTitle}
                  onChange={this.onChange}
                  placeholder="Enter Job Title"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>End Client</h3>
                <Input
                  id="endClient"
                  type="text"
                  name="endClient"
                  value={data.endClient}
                  onChange={this.onChange}
                  placeholder="Enter End Client Name"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Start Date</h3>
                <Input
                  id="startDate"
                  type="date"
                  name="startDate"
                  value={data.startDate}
                  onChange={this.onChange}
                  placeholder="Enter the Date of Joining"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Vendor</h3>
                <Input
                  id="vendor"
                  type="text"
                  name="vendor"
                  value={data.vendor}
                  onChange={this.onChange}
                  placeholder="Enter Vendor Name"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Project ID</h3>
                <Input
                  id="projectId"
                  type="text"
                  name="projectId"
                  value={data.projectId}
                  onChange={this.onChange}
                  placeholder="Enter ID of Project"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <h3>Project Name</h3>
                <Input
                  id="ProjectName"
                  type="text"
                  name="projectName"
                  value={data.projectName}
                  onChange={this.onChange}
                  placeholder="Enter Name of Project"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item error={!!errors.managerName}>
                <h3>Manager Name</h3>
                <Input
                  id="managerName"
                  type="text"
                  name="managerName"
                  value={data.managerName}
                  onChange={this.onChange}
                  placeholder="Person who manages the Employee"
                />
                {errors.managerName && (
                  <InlineError text={errors.managerName} />
                )}
              </Form.Item>
              <br />
              <Button type="primary" onClick={this.onSubmit}>
                Submit
              </Button>
            </Col>
            <Col span={6}>
              <Form.Item error={!!errors.approverName}>
                <h3>Approver Name</h3>
                <Input
                  id="approverName"
                  type="text"
                  name="approverName"
                  value={data.approverName}
                  onChange={this.onChange}
                  placeholder="Person who approved the Employee"
                />
                {errors.approverName && (
                  <InlineError text={errors.approverName} />
                )}
              </Form.Item>
            </Col>
          </Form>
        </Card>
      </div>
    );
  }
}

AddEmployee.propTypes = {};

const mapStateToProps = state => {
  return {
    userObject: state.auth.user
  };
};

export default connect(mapStateToProps)(AddEmployee);
