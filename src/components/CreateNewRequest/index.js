import React, { Component } from 'react';
import { Collapse, Form, Tabs, Layout, Input, Row, Col, DatePicker, Radio, Card } from 'antd';
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon, Upload, Button, message } from 'antd';
import reqwest from 'reqwest';
import ReactDOM from 'react-dom';
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);
const { TextArea } = Input;
const { Header, Sider, Content } = Layout;
const Panel = Collapse.Panel;
const FormItem = Form.Item;
function handleChange(value) {
    console.log(`selected ${value}`);
}
class CreateNewRequest extends Component {

    constructor(props) {
        super(props);

    }
    state = {
        fileList: [],
        uploading: false,
    }

    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });
        reqwest({
            url: '//jsonplaceholder.typicode.com/posts/',
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                this.setState({
                    fileList: [],
                    uploading: false,
                });
                message.success('upload successfully.');
            },
            error: () => {
                this.setState({
                    uploading: false,
                });
                message.error('upload failed.');
            },
        });
    }
    render() {
        const { uploading } = this.state;
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }));
                return false;
            },
            fileList: this.state.fileList,
        };

        return (
            <div>
                <Layout>
                    <Header >
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            </Col>
                            <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                                <h3 >CREATE NEW REQUEST</h3>
                            </Col>
                        </Row>
                    </Header>
                    <Content>
                        <Form layout="inline">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >
                                        <FormItem label="Request Group">
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link" href="#">
                                                    Hover me <Icon type="down" />
                                                </a>
                                            </Dropdown>

                                        </FormItem>
                                    </Card>
                                </Col>


                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >
                                        <FormItem label="Status">
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link" href="#">
                                                    Hover me <Icon type="down" />
                                                </a>
                                            </Dropdown>

                                        </FormItem>
                                    </Card>
                                </Col>


                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card >
                                        <FormItem label="Request Type">
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link" href="#">
                                                    Hover me <Icon type="down" />
                                                </a>
                                            </Dropdown>

                                        </FormItem>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Upload {...props}>
                                        <Button>
                                            <Icon type="upload" /> Select File
                                        </Button>
                                    </Upload>
                                    <Button
                                        className="upload-demo-start"
                                        type="primary"
                                        onClick={this.handleUpload}
                                        disabled={this.state.fileList.length === 0}
                                        loading={uploading}
                                    >
                                        {uploading ? 'Uploading' : 'Start Upload'}
                                    </Button>
                                </Col>
                                <Col s={24} sm={24} md={24} lg={24} xl={24}>
                                    <Card >
                                        <FormItem label="Description">
                                            <TextArea rows={4} />
                                        </FormItem>
                                    </Card>
                                </Col>
                                <Col s={24} sm={24} md={24} lg={24} xl={24}>
                                    <Card >
                                        <Button type="primary">Submit</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>


                    </Content>
                </Layout>
            </div >
        );
    }

}

ReactDOM.render(<CreateNewRequest />, document.getElementById('root'));

export default CreateNewRequest;