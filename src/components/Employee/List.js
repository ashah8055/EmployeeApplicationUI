import React, { Component } from 'react'
import { listEmployee } from "../../redux/actions/Employee_list";
import { connect } from 'react-redux';
import { Collapse, Form, Button, Tabs, Layout, Input, TextArea, List, Divider, Row, Col, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";



class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = ({
        });
    }

    componentDidMount() {

        //this.setState({ this.props.products: Array.from(this.props.empList) })
        this.props.dispatch(listEmployee())

    }

    // renderProducts() {
    //     return this.props.empList.map(product => {
    //         return (
    //             <tr key={product.id}>
    //                 <td>{product.name}</td>
    //             </tr>
    //         );
    //     })
    // }

    render() {
        const data = Array.from(this.props.empList);
        const { Header, Sider, Content, Footer } = Layout;

        console.log("ADDS" + JSON.stringify(this.props.empList))
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
                                    <Menu.Item >
                                        <Link to={{ pathname: "/home" }}> <img src='https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png' width="200px" height="60px"></img></Link>
                                    </Menu.Item>
                                    <Menu.Item key="mail">
                                        <Link to={{ pathname: "/home" }}><Icon type="mail" />Home</Link>
                                    </Menu.Item>
                                    <Menu.Item key="timesheet">
                                        <Link to={{ pathname: "/createNewRequest" }}><Icon type="clock-circle" />TimeSheet</Link>
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

                        <List
                            header={<div>Employee</div>}

                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item>{item.name}</List.Item>)}
                        />
                    </Content>
                </Layout>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("STATE" + JSON.stringify(state.empList.result))
    return {

        empList: state.empList.result

    };
}
export default connect(mapStateToProps)(EmployeeList);
//export default EmployeeList;


{/* <table className="table">
<thead>
    <tr>
        <th>ID</th>
        <th>Name</th>

    </tr>
</thead>

<tbody>
    {this.renderProducts()}
</tbody>
</table> */}