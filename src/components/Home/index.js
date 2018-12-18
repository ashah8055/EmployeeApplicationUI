import React, { Component } from 'react';
import { Layout } from 'antd';
import { Menu, Icon, Card, List, Button, Tabs, Row, Col, Badge } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { listEmployee } from "../../redux/actions/Employee_list";



const { Header, Sider, Content, Footer } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'home'
        }

    }



    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {

        return (
            <div>

                <Layout>
                    <Header>

                        {/* <img src={require('../../images/reliable.png')} width="200px" height="60px"></img> */}

                        <Row>


                            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                >
                                    <Menu.Item >
                                        <Link to={{ pathname: "/home" }}> <img src='https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png' width="200px" height="60px"></img></Link>
                                    </Menu.Item>
                                    <Menu.Item key="home">
                                        <Link to={{ pathname: "/home" }}><Icon type="home" />Home</Link>
                                    </Menu.Item>
                                    <Menu.Item key="timesheet">
                                        <Link to={{ pathname: "/createNewRequest" }}><Icon type="clock-circle" />TimeSheet</Link>
                                    </Menu.Item>
                                    <Menu.Item key="project">
                                        <Link to={{ pathname: "/Project" }}><Icon type="project" />Project</Link>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                {/* <p>{this.props.auth}</p> */}

                                <Link to={{ pathname: "/login" }}> <Button size='large'><Icon type="logout" />Logout</Button></Link>
                            </Col>

                        </Row>

                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 580 }}>

                        <Row>
                            <Col span={8}> <Link to={{ pathname: "/TimeSheetCalander" }}>Monthly Timesheet </Link> </Col>
                            <Col span={8}> <Link to={{ pathname: "/Employee" }}>Employee</Link> </Col>
                            <Col span={8}> <Link to={{ pathname: "/addEmployee" }}>Add Employee</Link> </Col>

                        </Row>

                    </Content>
                    <Footer><center><Icon type="copyright" />Reliable Software 2018</center></Footer>
                </Layout >

            </div >

        );
    }

}

function mapStateToProps(state) {
    console.log("ggg" + JSON.stringify(state.auth));
    return {

        auth: state.auth

    };
}
// export default Home;


export default connect(mapStateToProps)(Home);