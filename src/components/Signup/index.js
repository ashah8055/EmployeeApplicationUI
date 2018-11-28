import React, { Component } from "react";
import { connect } from "react-redux";
import Validator from "validator";
import { Form, Input, Row, Col, Button, Card } from "antd";
import InlineError from "../messages/InlineError";
import { signupUser } from "../../redux/actions/home";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword
      } = this.state.data;
      this.props.dispatch(
        signupUser({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        })
      );
      this.props.history.push("/login");
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    if (!data.password) errors.password = "Can't be empty";
    if (!data.firstName) errors.firstName = "Can't be empty";
    if (!data.lastName) errors.lastName = "Can't be empty";
    if (!data.phoneNumber) errors.phoneNumber = "Please Enter Number";
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Write the same password";
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <Card title="Signup">
          <Form>
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Form.Item error={!!errors.firstName}>
                  <Input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={this.onChange}
                    placeholder="First Name"
                  />
                  {errors.firstName && <InlineError text={errors.firstName} />}
                </Form.Item>
                <Form.Item error={!!errors.lastName}>
                  <Input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={this.onChange}
                    placeholder="Last Name"
                  />
                  {errors.lastName && <InlineError text={errors.lastName} />}
                </Form.Item>
                <Form.Item error={!!errors.phoneNumber}>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="10 Digits Phone number"
                    value={data.phoneNumber}
                    onChange={this.onChange}
                  />
                  {errors.phoneNumber && (
                    <InlineError text={errors.phoneNumber} />
                  )}
                </Form.Item>
                <Form.Item error={!!errors.email}>
                  <Input
                    id="email"
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={this.onChange}
                    placeholder="email@rsrit.com"
                  />
                  {errors.email && <InlineError text={errors.email} />}
                </Form.Item>
                <Form.Item error={!!errors.password}>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={this.onChange}
                    placeholder="Password (Make it Secure)"
                  />
                  {errors.password && <InlineError text={errors.password} />}
                </Form.Item>
                <Form.Item error={!!errors.confirmPassword}>
                  <Input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={this.onChange}
                    placeholder="Same as Password"
                  />
                  {errors.confirmPassword && (
                    <InlineError text={errors.confirmPassword} />
                  )}
                </Form.Item>

                <br />
                <br />
                <Button type="primary" onClick={this.onSubmit}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
}

Signup.propTypes = {};

const mapStateToProps = state => {
  return {
    userObject: state.auth.user
  };
};

export default connect(mapStateToProps)(Signup);
