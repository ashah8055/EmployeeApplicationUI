import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Modal,
  List,
  Form,
  Checkbox,
  Input,
  Menu,
  Button,
  Icon,
  Col,
  Layout
} from "antd";
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
        primaryEmail: primaryEmail
      })
    );

    this.props.history.push("/search");
  };
  onFilter = e => {
    const errors = this.validate(this.state.data);
    this.setState({
      visible: true,
      errors
    });
    if (Object.keys(errors).length === 0) {
      const { firstName } = this.state.data;
      this.props.dispatch(
        searchEmp({
          firstName: firstName
        })
      );

      this.props.history.push("/search");
    }
  };

  render() {
    const { errors } = this.state;
    const data1 = Array.from(this.props.empList);
    const { data } = this.state;

    return (
      <div>
        <Header>
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
        </Header>
        <Button type="primary" onClick={this.onShow}>
          Search{" "}
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
                        <Checkbox onChange={this.onCheck} value={data} />
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
    empList: state.empList.result
  };
}
export default connect(mapStateToProps)(Search);
