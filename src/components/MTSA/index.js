import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Modal,
  Menu,
  List,
  Form,
  Icon,
  Button,
  Layout,
  Row,
  Col,
  Card
} from "antd";
import { Link } from "react-router-dom";
import { getPro, getEmpInfo } from "../../redux/actions/Get_List";
import Moment from "react-moment";

const { Header, Content, Footer } = Layout;

class MTSA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "mail",
      data: {
        clientProjectName: "",
        startDate: "",
        endDate: ""
      },
      data0: {
        listOfEmployees: [{ employeeId: "", isTimesheetActive: "" }],
        activeTimesheetStartDate: "",
        activeTimesheetEndDate: "",
        notes: ""
      },
      data2: {
        listOfEmployees: [{ employeeId: "" }],
        projectId: "",
        clientProjectId: "",
        vendorId: "",
        vendorName: ""
      },
      loading: false,
      visible1: false,
      visible2: false
    };
  }
  componentDidMount() {
    this.onShow();
  }
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
      data0: { ...this.state.data0, [e.target.name]: e.target.value },
      data2: { ...this.state.data2, [e.target.name]: e.target.value }
    });

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  handleOk1 = e => {
    console.log(e);
    this.setState({
      visible1: false
    });
  };

  handleCancel1 = e => {
    console.log(e);
    this.setState({
      visible1: false
    });
  };

  handleOk2 = e => {
    console.log(e);
    this.setState({
      visible2: false
    });
  };

  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false
    });
  };

  onShow = e => {
    const { clientProjectName, startDate, endDate } = this.state.data;
    this.props.dispatch(
      getPro({
        clientProjectName: clientProjectName,
        startDate: startDate,
        endDate: endDate
      })
    );
    this.props.history.push("/mTSA");
  };
  onList = e => {
    const {
      listOfEmployees: [{ employeeId, isTimesheetActive }],
      activeTimesheetStartDate,
      activeTimesheetEndDate,
      notes
    } = this.state.data0;
    this.props.dispatch(
      getEmpInfo({
        listOfEmployees: [
          { employeeId: employeeId, isTimesheetActive: isTimesheetActive }
        ],
        activeTimesheetStartDate: activeTimesheetStartDate,
        activeTimesheetEndDate: activeTimesheetEndDate,
        notes: notes
      })
    );
    this.state.visible1 = true;
    this.props.history.push("/mTSA");
  };

  onDetails = e => {
    const {
      listOfEmployees: [{ employeeId }],
      projectId,
      clientProjectId,
      vendorId,
      vendorName
    } = this.state.data2;
    this.props.dispatch(
      getEmpInfo({
        listOfEmployees: [{ employeeId: employeeId }],
        projectId: projectId,
        clientProjectId: clientProjectId,
        vendorId: vendorId,
        vendorName: vendorName
      })
    );
    this.state.visible2 = true;
    this.props.history.push("/mTSA");
  };

  render() {
    const data1 = Array.from(this.props.empList);
    const { data, data0, data2 } = this.state;

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
                  <Menu.Item key="Manager Approval">
                    <Link to={{ pathname: "/mTSA" }}>
                      <Icon type="ordered-list" />
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
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 500
            }}
          >
            <Col span={8}>
              <Card title="Project List" span={4}>
                <Form span={4}>
                  {/* <Button type="primary" onClick={this.onShow} value={data}>
                    View List
                  </Button> */}
                  <List
                    bordered
                    dataSource={data1}
                    renderItem={item => (
                      <List.Item>
                        <Card onClick={this.onList} value={data0}>
                          {" "}
                          <b> {item.clientProjectName}</b>
                          <br />
                          <Moment format="MM/DD/YYYY">{item.startDate}</Moment>
                          {"-"}
                          <Moment format="MM/DD/YYYY">{item.endDate}</Moment>
                          <br />
                        </Card>
                      </List.Item>
                    )}
                  />
                </Form>
              </Card>
            </Col>

            <Col span={8}>
              <Modal
                title="Employee List"
                visible={this.state.visible1}
                onOk={this.handleOk1}
                onCancel={this.handleCancel1}
              >
                <Form span={4}>
                  <List
                    bordered
                    dataSource={data1}
                    renderItem={item2 => (
                      <List.Item>
                        <Card onClick={this.onDetails} value={data2}>
                          {item2.listOfEmployees.employeeId}
                          <br />
                          {item2.listOfEmployees.isActiveTimesheet}
                          <br />
                          {item2.activeTimesheetStartDate}
                          <br />
                          {item2.activeTimesheetEndDate}
                        </Card>
                      </List.Item>
                    )}
                  />
                </Form>
              </Modal>
            </Col>
            <Col span={8}>
              <Modal
                title="Employee Details"
                visible={this.state.visible2}
                onOk={this.handleOk2}
                onCancel={this.handleCancel2}
              >
                <Form span={4}>
                  <List
                    bordered
                    dataSource={data1}
                    renderItem={item2 => (
                      <List.Item>
                        <Card>
                          {item2.listOfEmployees.employeeId}
                          <br />
                          {item2.projectId}
                          <br />
                          {item2.clientProjectId}
                          <br />
                          {item2.vendorId}
                          <br />
                          {item2.vendorName}
                        </Card>
                      </List.Item>
                    )}
                  />
                </Form>
              </Modal>{" "}
            </Col>
          </Content>

          <Footer>
            <center>
              <Icon type="copyright" />
              Reliable Software 2018
            </center>
          </Footer>
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("STATE" + JSON.stringify(state.empList.result));
  return {
    empList: state.empList.result
  };
}

export default connect(mapStateToProps)(MTSA);
