import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, List, Form, Input, Menu, Button, Icon, Col, Layout } from "antd";
import { Link } from "react-router-dom";
import InlineError from "../messages/InlineError";
import { searchEmp } from "../../redux/actions/Get_List";

const { Header, Content } = Layout;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "mail",
      data: {
        firstName: ""
      },
      loading: false,
      errors: {}
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

  validate = data => {
    const errors = {};
    if (!data.firstName) errors.firstName = "Can't be empty";
    return errors;
  };

  onSearch = e => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
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
        <Card title="Search Employee">
          <Form>
            <Col span={8}>
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
              <Button type="primary" onClick={this.onSearch}>
                Search
              </Button>
            </Col>
            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 580
                }}
              >
                <List
                  header={<div>Employee Details</div>}
                  bordered
                  dataSource={data1}
                  renderItem={item => (
                    <List.Item>{item.primaryEmail}</List.Item>
                  )}
                />
              </Content>
            </Col>
          </Form>
        </Card>
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
