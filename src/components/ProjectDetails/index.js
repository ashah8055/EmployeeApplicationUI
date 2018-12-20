import React, { Component } from "react";
import {
  Menu,
  Form,
  Button,
  Layout,
  Input,
  Row,
  Col,
  DatePicker,
  Card,
  Icon
} from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createProjectDetailsSubmit } from "../../redux/actions/Get_List";
import Projectlist from "../ProjectDetails/list";
import EmpModal from "../Search";
const { Header, Content } = Layout;
const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}
class projectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "project",
      projectDetails: {
        loginId: "1",
        projectId: "123",
        projctName: "das",
        vendorId: "1233",
        vendorName: "dsa",
        clientId: "232",
        clientName: "ds",
        StartDate: "",
        EndDate: "",
        notes: "dsd",
        activeTimeSheetStDt: "",
        activeTimeSheetEdDt: "",
        freezeDate: ""
      }
    };
  }
  onChange = e => {
    let projectDetails = Object.assign({}, this.state.projectDetails);
    projectDetails[e.target.name] = e.target.value;
    return this.setState({ projectDetails });
  };

  onChangeRangePicker = (e, date) => {
    // console.log("OnSelect" + date[0])
    // console.log("OnSelect" + date[1])
    let projectDetails = Object.assign({}, this.state.projectDetails);
    projectDetails["StartDate"] = date[0];
    projectDetails["EndDate"] = date[1];
    //   console.log(projectDetails["projectStartDate"]);

    return this.setState({ projectDetails });
  };

  onChangeActiveRangePicker = (e, date) => {
    let projectDetails = Object.assign({}, this.state.projectDetails);
    projectDetails["activeTimeSheetStDt"] = date[0];
    projectDetails["activeTimeSheetEdDt"] = date[1];
    //   console.log(projectDetails["projectStartDate"]);

    return this.setState({ projectDetails });
  };

  onSubmit = e => {
    let data = {};
    data.projectDetails = this.state.projectDetails;
    data.projectDetails.employeeId = Math.floor(Math.random() * 100 + 1);
    console.log("Details for time sheet details", data.projectDetails);
    //  data.reqId = this.state.TimeSheetDetails.reqId;
    this.props.dispatch(createProjectDetailsSubmit(data));
    //this.props.dispatch(createWorkingHourTimeSheet(data));
    console.log("Submit click");
  };
  render() {
    const { TextArea } = Input;
    //   const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;

    return (
      <div>
        <Layout>
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
                  <Menu.Item key="home">
                    <Link to={{ pathname: "/home" }}>
                      <Icon type="home" />
                      Home
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="timesheet">
                    <Link to={{ pathname: "/createNewRequest" }}>
                      <Icon type="clock-circle" />
                      TimeSheet
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="Manager Approval">
                    <Link to={{ pathname: "/mTSA" }}>
                      <Icon type="clock-circle" />
                      Manager TimeSheet Approval
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="project">
                    <Link to={{ pathname: "/project" }}>
                      <Icon type="project" />
                      Project
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
          <Content>
            <Row gutter={24}>
              <Col span={16}>
                <Form>
                  <Row type="flex" justify="start">
                    <Col span={8}>
                      <Card>
                        <label>PROJECT ID:</label>
                        <FormItem>
                          {/* value={this.state.projectDetails.projectId} */}
                          <Input
                            type="text"
                            size="default"
                            name="projectId"
                            onChange={this.onChange}
                            placeholder="Enter Project Id"
                          />
                        </FormItem>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <label>PROJECT NAME:</label>
                        <FormItem>
                          <Input
                            type="text"
                            size="default"
                            name="projectName"
                            onChange={this.onChange}
                            placeholder="Enter Project Name"
                          />
                        </FormItem>
                      </Card>
                    </Col>

                    <Col span={8}>
                      <Card>
                        <label>VENDOR ID:</label>
                        <FormItem>
                          <Input
                            type="text"
                            size="default"
                            name="vendorId"
                            onChange={this.onChange}
                            placeholder="Enter Vendor Name"
                          />
                        </FormItem>
                      </Card>
                    </Col>
                  </Row>
                  <Row type="flex" justify="start">
                    <Col span={8}>
                      <Card>
                        <label>VENDOR NAME:</label>
                        <FormItem>
                          <Input
                            type="text"
                            size="default"
                            name="vendorName"
                            onChange={this.onChange}
                            placeholder="Enter Vendor Name"
                          />
                        </FormItem>
                      </Card>
                    </Col>

                    <Col span={8}>
                      <Card>
                        <label>CLIENT ID:</label>
                        <FormItem>
                          <Input
                            type="text"
                            size="default"
                            name="clientId"
                            onChange={this.onChange}
                            placeholder="Enter Client Id"
                          />
                        </FormItem>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <label>CLIENT NAME:</label>
                        <FormItem>
                          <Input
                            type="text"
                            size="default"
                            name="clientName"
                            onChange={this.onChange}
                            id="hMon"
                            placeholder="Enter Client Name"
                          />
                        </FormItem>
                      </Card>
                    </Col>
                  </Row>
                  <Row type="flex" justify="start">
                    <Col span={8}>
                      <Card>
                        <label>PROJECT:</label>
                        <FormItem>
                          <RangePicker
                            format="YYYY-MM-DD"
                            placeholder={["Start Time", "End Time"]}
                            onChange={this.onChangeRangePicker}
                            onOk={this.onChangeRanePickerSubmit}
                          />
                        </FormItem>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <label>ACTIVE PROJECT:</label>
                        <FormItem>
                          <RangePicker
                            format="YYYY-MM-DD"
                            placeholder={["Start Time", "End Time"]}
                            onChange={this.onChangeActiveRangePicker}
                            onOk={this.onChangeActiveRanePickerSubmit}
                          />
                        </FormItem>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <FormItem>
                          <EmpModal />
                        </FormItem>
                      </Card>
                    </Col>
                  </Row>
                  <Row type="flex" justify="start">
                    <Col span={8}>
                      <Card>
                        <div>
                          Notes:
                          <TextArea
                            rows={4}
                            name="notes"
                            onChange={this.onChange}
                          />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <Row type="flex" justify="start">
                    <Col span={6}>
                      <Card>
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={this.onSubmit}
                        >
                          Submit
                        </Button>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card>
                        <Button type="primary">Reset</Button>
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
    );
  }
}
function mapStateToProps(state) {
  console.log("Project" + JSON.stringify(state.projcetDetails));
  return {
    projcetDetails: state.projectDetails
  };
}

const WrappedRegistrationForm = Form.create()(projectDetails);

export default connect(mapStateToProps)(WrappedRegistrationForm);
