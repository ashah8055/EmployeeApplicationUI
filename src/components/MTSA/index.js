import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Menu,
    List,
    Form,
    Icon,
    Button,
    Layout,
    Row,
    Col,
    Card,
    Badge
} from "antd";
import { Link } from "react-router-dom";
import { getPro, getEmpInfo } from "../../redux/actions/Get_List";
import Moment from "react-moment";

const { Header, Content, Footer } = Layout;
var size1 = 0;
var size2 = 0;
class MTSA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: "mail",
            data: {
                clientProjectName: "",
                startDate: "",
                endDate: "",
                listOfEmployees: [{ employeeId: "", employeeName: "" }],
                activeTimesheetStartDate: "",
                activeTimesheetEndDate: "",
                notes: "",
                projectId: "",
                clientProjectId: "",
                vendorId: "",
                vendorName: ""
            },
            loading: false
        };
    }
    componentDidMount() {
        this.onShow();
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
            listOfEmployees: [{ employeeId, employeeName }],
            activeTimesheetStartDate,
            activeTimesheetEndDate,
            notes
        } = this.state.data;
        this.props.dispatch(
            getEmpInfo({
                listOfEmployees: [
                    {
                        employeeId: employeeId,
                        employeeName: employeeName
                    }
                ],
                activeTimesheetStartDate: activeTimesheetStartDate,
                activeTimesheetEndDate: activeTimesheetEndDate,
                notes: notes
            })
        );
        size1 = 8;
        this.props.history.push("/mTSA");
    };

    onDetails = e => {
        const {
            listOfEmployees: [{ employeeId }],
            projectId,
            clientProjectId,
            vendorId,
            vendorName
        } = this.state.data;
        this.props.dispatch(
            getEmpInfo({
                listOfEmployees: [{ employeeId: employeeId }],
                projectId: projectId,
                clientProjectId: clientProjectId,
                vendorId: vendorId,
                vendorName: vendorName
            })
        );
        size2 = 8;
        this.props.history.push("/mTSA");
    };

    render() {
        const data1 = Array.from(this.props.empList);
        const { data } = this.state;

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
                                    <List
                                        bordered
                                        dataSource={data1}
                                        renderItem={item => (
                                            <List.Item>
                                                <Card onClick={this.onList} value={item.projectId}>
                                                    <Badge count={item.listOfEmployees.length} />
                                                    <b>
                                                        {"Project Name: "}
                                                        {item.clientProjectName}
                                                    </b>
                                                    <br />
                                                    {"Date: "}
                                                    <Moment format="MM/DD/YYYY">{item.startDate}</Moment>
                                                    {" - "}
                                                    <Moment format="MM/DD/YYYY">{item.endDate}</Moment>
                                                    <br />
                                                </Card>
                                            </List.Item>
                                        )}
                                    />
                                </Form>
                            </Card>
                        </Col>

                        <Col xs={size1} sm={size1} md={size1} lg={size1} xl={size1}>
                            <Card title="Employee List" span={4}>
                                <Form span={4}>
                                    <List
                                        bordered
                                        dataSource={data1}
                                        renderItem={item2 => (
                                            <List.Item>
                                                <Card onClick={this.onDetails} value={data}>
                                                    {"Employee ID: "}
                                                    <Badge count={item2.listOfEmployees[0].employeeId} />
                                                    <br />
                                                    {"Employee Name: "}
                                                    {item2.listOfEmployees[0].employeeName}
                                                    <br />
                                                    {"Timesheet Date: "}
                                                    <Moment format="MM/DD/YYYY">
                                                        {item2.activeTimesheetStartDate}
                                                    </Moment>
                                                    {" - "}
                                                    <Moment format="MM/DD/YYYY">
                                                        {item2.activeTimesheetEndDate}
                                                    </Moment>
                                                </Card>
                                            </List.Item>
                                        )}
                                    />
                                </Form>
                            </Card>
                        </Col>
                        <Col xs={size2} sm={size2} md={size2} lg={size2} xl={size2}>
                            <Card title="Employee Details" span={4}>
                                <Form span={4}>
                                    <List
                                        bordered
                                        dataSource={data1}
                                        renderItem={item2 => (
                                            <List.Item>
                                                <Card>
                                                    {"Employee Id: "}
                                                    <Badge count={item2.listOfEmployees[0].employeeId} />
                                                    <br />
                                                    {"Project Id: "}
                                                    <Badge count={item2.listOfEmployees[0].projectId} />
                                                    <br />
                                                    {"Client Id: "}
                                                    <Badge
                                                        count={item2.listOfEmployees[0].clientProjectId}
                                                    />
                                                    <br />
                                                    {"Vendor Id: "}
                                                    {item2.vendorId}
                                                    <br />
                                                    {"Vendor Name: "}
                                                    {item2.vendorName}
                                                </Card>
                                            </List.Item>
                                        )}
                                    />
                                </Form>
                            </Card>{" "}
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
        empList: state.searchList.result
    };
}

export default connect(mapStateToProps)(MTSA);