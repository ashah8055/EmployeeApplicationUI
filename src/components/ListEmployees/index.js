import React, { Component } from "react";
import { Menu, Button, Icon, Col, Layout } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

class ListEmployees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "mail"
    };
  }
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Layout>
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
        </Layout>
      </div>
    );
  }
}
export default ListEmployees;
