import React from 'react'
import General from "../../Layouts/general"
import {
    DownloadOutlined
  } from '@ant-design/icons';
import { Table, Tag, Space, Modal, Form, Input, Button, Radio } from 'antd';
import './example.css';
import { Theme } from '../../theme';
import { InfoCircleOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";

export default function Home() {

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const { Column, ColumnGroup } = Table;

    const data = [
        {
          key: '1',
          firstName: 'John',
          lastName: 'Brown',
          age: 32,
          action: 'Edit',
          tags: ['Active'],
        },
        {
          key: '2',
          firstName: 'Jim',
          lastName: 'Green',
          age: 42,
          action: 'Edit',
          tags: ['Active'],
        },
        {
          key: '3',
          firstName: 'Joe',
          lastName: 'Black',
          age: 32,
          action: 'Edit',
          tags: ['Active'],
        },
      ];

    return (
        <General>
            <div className="parentCont">
                <div className="parentDiv">
                    <h1>Destinations</h1>
                    <Button onClick={showModal} type="primary" icon={<DownloadOutlined />} size="large">
                        New
                    </Button>
                </div>
                
                
                <Modal title="Configure MongoDB connection" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form.Item 
                label="Type"  
                name="type"
                rules={[
                {
                    required: true,
                    message: 'Please input the type',
                },
                ]}
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}>
                    <Input placeholder="input placeholder" />
                </Form.Item>
                


                <Form.Item 
                label="Name"
                name="name"
                rules={[
                {
                    required: true,
                    message: 'Please input the name',
                },
                ]}  
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}>
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Host"  
                name="host"
                rules={[
                {
                    required: true,
                    message: 'Please input the host',
                },
                ]} 
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}>
                    <Input placeholder="input placeholder" />
                </Form.Item>


                <Form.Item 
                label="Username"  
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input the username',
                },
                ]} 
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}>
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Password"  
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input the password',
                },
                ]} 
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}>
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Database"  
                name="database"
                rules={[
                {
                    required: true,
                    message: 'Please input the database',
                },
                ]} 
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}>
                    <Input placeholder="input placeholder" />
                </Form.Item>



                <Form.Item label="Table"  
                name="table"
                rules={[
                {
                    required: true,
                    message: 'Please input the table',
                },
                ]} 
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}>
                    <Input placeholder="input placeholder" />
                </Form.Item>
      </Modal>
                <Table dataSource={data}>
                    <ColumnGroup>
                    <Column title="Name" dataIndex="firstName" key="firstName" />
                    <Column title="Created On" dataIndex="lastName" key="lastName" />
                    <Column
                    title="Status"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <>
                        {tags.map(tag => (
                            <Tag color="green" key={tag}>
                            {tag}
                            </Tag>
                        ))}
                        </>
                    )}
                    />
                    <Column  
                    title="Action"
                    dataIndex="action"
                    key="action"
                    render={action => (
                        <span style={{color:Theme.skyBlue}}>
                            <Link to="/single_pipeline/1">{action}</Link>                        
                        </span>
                    )} />
                   
                    </ColumnGroup>
                
                    
                </Table>
            </div>
           
           
        </General>
    )
}
