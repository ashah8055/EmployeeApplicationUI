import React, { Component } from 'react'
import { Collapse, Form, Button, Tabs, Layout, Input, TextArea, List, Divider, Row, Col, Menu, Icon, Card } from 'antd';
import { listProjectDetails } from '../../redux/actions/ProjectDetails'
import { connect } from 'react-redux';
import { deleteProject, deleteProjectSucess } from '../../redux/actions/ProjectDetails'
const Search = Input.Search;

class list extends Component {

    componentDidMount() {

        //     this.setState({ this.props.products: Array.from(this.props.empList) })
        this.props.dispatch(listProjectDetails())

    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.projList !== prevProps.projList) {
            this.props.dispatch(listProjectDetails())
        }
    }
    handleDelete(proj) {
        this.props.dispatch(deleteProject(proj._id))
        console.log("DEL" + proj._id);
    }
    handleEdit(proj) {
        console.log("Edit Click")
    }

    render() {

        // const data = Array.from(this.props.projList);
        const data = Array.from(this.props.projList);
        // const data = ['ads', 'dda']

        return (
            <div>
                <Row>
                    <Card>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </Card>
                    <Card>
                        <List
                            pagination="true"
                            size="large"
                            header={<div><b>Project Names</b></div>}
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item  >{item.clientProjectName}<input type="button" value="Remove" className="btn btn-danger" onClick={() => this.handleDelete(item)} /><input type="button" value="Edit" className="btn btn-danger" onClick={() => this.handleEdit(item)} /></List.Item>)}
                        />
                    </Card>
                </Row>
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {

        projList: state.projcetDetails.result

    };
}
export default connect(mapStateToProps)(list);

