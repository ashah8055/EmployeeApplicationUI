import React, { Component } from 'react';
import { Layout } from 'antd';
import { Menu, Icon, Card, List, Button, Tabs, Row, Col, Badge } from 'antd';
import { Link } from "react-router-dom";


const { Header, Sider, Content, Footer } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);

    }
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
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 580 }}>
                        <Row>
                            <Col span={8}> <Link to={{ pathname: "/createNewRequest" }}>Create Task</Link> </Col>
                        </Row>
                        <Row>
                            <Col span={8}> <Link to={{ pathname: "/TimeSheetCalander" }}>Montly Timeshhet </Link> </Col>
                        </Row>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout >

            </div >

        );
    }

}

export default Home;