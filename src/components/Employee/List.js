import React, { Component } from 'react'
import { listEmployee } from "../../redux/actions/Employee_list";
import { connect } from 'react-redux';
import { Collapse, Form, Button, Tabs, Layout, Input, TextArea } from 'antd';


class EmployeeList extends Component {



    onSubmit = () => {
        this.props.dispatch(listEmployee())

    };

    render() {

        return (
            <div>
                <td ><Button type="primary" onClick={this.onSubmit}>Submit</Button></td>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

        empList: state.empList.result

    };
}
export default connect(mapStateToProps)(EmployeeList);
