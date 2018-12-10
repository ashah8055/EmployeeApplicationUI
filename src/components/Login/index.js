import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Form, Input, Button, Card, Checkbox, Icon } from 'antd';
import { loginUser, getBusinessUsersList } from "../../redux/actions/auth";
const FormItem = Form.Item;

class Login extends Component {

    constructor(props) {
        super(props);
        // defining the state to the component
        this.state = {
            data: {
                email: 'testbiz@rsrit.com',
                password: '123456',
                isBusiness: true
            },
            loading: false,
            errors: {}
        }
    }


    static getDerivedStateFromProps(props, state) {

        console.log(props.result);

        return null;
    }

    componentDidMount() {
        // this.props.dispatch((loginUser(this.state.data.email, this.state.data.password)));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state.data.email, this.state.data.password));

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            try {

                this.props.history.push("/home");
            } catch (e) {
                alert(e.message);
            }

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <center>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <div>
                        <img src='https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png' width="200px" height="60px"></img>
                        <br></br>
                    </div>

                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
              </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </center>
        );
    }
}

Login.propTypes = {
}

const mapStateToProps = state => {
    return {
        result: state.auth.result
    };
};
const WrappedNormalLoginForm = Form.create()(Login);

//ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('root'));

export default connect(mapStateToProps)(WrappedNormalLoginForm);

//export default WrappedNormalLoginForm;
