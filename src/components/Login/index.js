import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Form, Input, Button, Card, Checkbox } from 'antd';
import { loginUser, getBusinessUsersList } from "../../redux/actions/auth";

class Login extends Component {
    

    constructor(props) {
        super(props);
        // defining the state to the component
        this.state = {            
            data:{
                email: 'testbiz@rsrit.com',
                password: '123456',
                isBusiness:true
            },            
            loading: false,
            errors: {}
      }
    }

    componentDidMount(){

    }

    static getDerivedStateFromProps(props, state) {

        console.log(props.result);

        return null;
      }

    
    onSubmit = () => {
            this.props.dispatch(loginUser(this.state.data.email, this.state.data.password));        
    };



    render() { 
        const { data, errors } = this.state
        return ( 
            <div>
                <Card title="Login">
                    <Form>
                       
                        {/* <Checkbox name="isBusiness" checked={data.isBusiness} onChange={this.onChange}>Business</Checkbox> */}
                        <Button type="primary" onClick={this.onSubmit}>Submit</Button>   
                        {/* <p><Link to={{pathname: "/signup"}}>SignUp</Link></p> */}
                    </Form>
                </Card>
            </div>
         );
    }
}

Login.propTypes = {
}

const mapStateToProps = state => {
    return {
        result:state.auth.result
    };
};
 
export default connect(mapStateToProps)(Login);