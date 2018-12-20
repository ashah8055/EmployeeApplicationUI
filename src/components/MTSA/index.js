import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, List, Form, Icon, Button, Layout, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import { getPro, getEmpInfo } from "../../redux/actions/Get_List";

const { Header, Content, Footer } = Layout;

class MTSA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "mail",
      data: {
        clientProjectName: "",
        startDate: "",
        endDate: "",
        listOfEmployees: "",
        isActiveTimesheet: "",
        activeTimesheetStartDate: "",
        activeTimesheetEndDate: "",
        notes: ""
      },
      loading: false
    };
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  onShow = e => {
    const {
      clientProjectName,
      startDate,
      endDate,
      listOfEmployees
    } = this.state.data;
    this.props.dispatch(
      getPro({
        clientProjectName: clientProjectName,
        startDate: startDate,
        endDate: endDate,
        listOfEmployees: listOfEmployees
      })
    );
    this.props.history.push("/mTSA");
  };
  onList = e => {
    const {
      isActiveTimesheet,
      activeTimesheetStartDate,
      activeTimesheetEndDate,
      notes
    } = this.state.data;
    this.props.dispatch(
      getEmpInfo({
        isActiveTimesheet: isActiveTimesheet,
        activeTimesheetStartDate: activeTimesheetStartDate,
        activeTimesheetEndDate: activeTimesheetEndDate,
        notes: notes
      })
    );
    this.props.history.push("/mTSA");
  };

  render() {
    const data1 = Array.from(this.props.empList);
    const data = this.state;

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
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 580
            }}
          >
            <Col span={8}>
              <Card title="Project List" span={4}>
                <Form span={4}>
                  <Button
                    type="primary"
                    id="pro"
                    onClick={this.onShow}
                    value={data}
                  >
                    View
                  </Button>
                  <List
                    bordered
                    dataSource={data1}
                    renderItem={item => (
                      <List.Item>
                        <Card>
                          <Link>
                          {" "}
                          {item.clientProjectName}
                          {"    ||    "}
                          {item.startDate}
                          {"    ||    "}
                          {item.endDate}
                          {"    ||    "}
                          {item.listOfEmployees}
                          </Link>
                        </Card>
                      </List.Item>
                    )}
                  />
                </Form>
              </Card>
            </Col>

            <Col span={8}>
              <Card title="Employee List" span={4}>
                <Form span={4}>
                  <Button
                    type="primary"
                    id="emp"
                    onClick={this.onList}
                    value={data}
                  >
                    View
                  </Button>
                  <List
                    bordered
                    dataSource={data1}
                    renderItem={item1 => (
                      <List.Item>
                        {item1.isActiveTimesheet}
                        {"    ||    "}
                        {item1.activeTimesheetStartDate}
                        {"    ||    "}
                        {item1.activeTimesheetEndDate}
                        {"    ||    "}
                        {item1.notes}
                      </List.Item>
                    )}
                  />
                </Form>
              </Card>
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
