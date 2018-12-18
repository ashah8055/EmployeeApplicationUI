import React, { Component } from 'react'
import { Collapse, Form, Button, Tabs, Layout, Input, TextArea, List, Divider, Row, Col, Menu, Icon, Card } from 'antd';
const Search = Input.Search;

export default class list extends Component {

    render() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
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
                            size="large"
                            header={<div>Header</div>}
                            footer={<div>Footer</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </Card>
                </Row>
            </div>
        )
    }
}
