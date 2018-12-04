import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Row>
              <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                <h3 className="color-white">Home</h3>
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
            <Row>
              <Col span={8}>
                {" "}
                <Link to={{ pathname: "/createNewRequest" }}>
                  Create TimeSheet
                </Link>{" "}
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                {" "}
                <Link to={{ pathname: "/TimeSheetCalander" }}>
                  Monthly Timeshhet{" "}
                </Link>{" "}
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                {" "}
                <Link to={{ pathname: "/addEmployee" }}>Add Employee</Link>{" "}
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                {" "}
                <Link to={{ pathname: "/listEmployees" }}>
                  List of SignUp Employees
                </Link>{" "}
              </Col>
            </Row>
          </Content>

          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;
