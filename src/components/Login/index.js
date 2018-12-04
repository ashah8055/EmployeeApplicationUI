import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Select, Checkbox, Icon } from "antd";
import { loginUser } from "../../redux/actions/auth";
const FormItem = Form.Item;
const Option = Select.Option;

class Login extends Component {
  constructor(props) {
    super(props);
    // defining the state to the component
    this.state = {
      data: {
        email: "testbiz@rsrit.com",
        password: "123456",
        isBusiness: true,
        role: "3"
      },
      loading: false,
      errors: {}
    };
  }

  componentDidMount() {}

  static getDerivedStateFromProps(props, state) {
    console.log(props.result);

    return null;
  }

  onDropdownChange = (e, i) => {
    let data = Object.assign({}, this.state.data);
    data.role = e;
    return this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      loginUser(this.state.data.email, this.state.data.password)
    );

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }

      try {
        this.props.history.push("/home");
      } catch (e) {
        alert(e.message);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem label="Role">
          <Select
            id="role"
            name="role"
            value={this.state.data.role}
            onChange={this.onDropdownChange}
          >
            <Option value="1">Admin</Option>
            <Option value="2">HR Manager</Option>
            <Option value="3">Employee</Option>
          </Select>
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/signup">Sign Up</Link>
        </FormItem>
      </Form>
    );
  }
}

Login.propTypes = {};

const mapStateToProps = state => {
  return {
    result: state.auth.result
  };
};
const WrappedNormalLoginForm = Form.create()(Login);

//ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('root'));

export default connect(mapStateToProps)(WrappedNormalLoginForm);

//export default WrappedNormalLoginForm;
