import React from 'react'
import General from "../../Layouts/general"
import {
    DownloadOutlined,
    EditOutlined,
    CaretRightOutlined,
    InfoCircleOutlined
  } from '@ant-design/icons';
import { Table, Tag, Space, Modal, Form, Input, Button, Radio } from 'antd';
import './example.css';
import { Theme } from '../../theme';

import AceEditor from "react-ace";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from './dummy';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";


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

    function onChange(newValue) {
        console.log("change", newValue);
      }
      
    const { Column, ColumnGroup } = Table;

    const data = [
        {
          key: '1',
          timestamp: Date.now(),
          type: 'POST',
          action: ['Preview', 'Use']
        },
        {
          key: '2',
          timestamp: Date.now(),
          type: 'POST',
          action: ['Preview', 'Use']
        },
        {
          key: '3',
          timestamp: Date.now(),
          type: 'POST',
          action: ['Preview', 'Use']
        },
      ];
    
    const animatedComponents = makeAnimated();
    return (
        <General>
            <div className="parentCont">
                <div className="parentDiv">

                    <div className="topicAndButtonParent">
                        <Button onClick={showModal} type="default" size="large">
                            Back
                        </Button>
                        <div className="topic">
                            <h1 className="topicText">My Inbound Pipeline</h1>
                            <EditOutlined className="iconStyle" />
                        </div>
                    </div>
                    
                    <Button onClick={showModal} type="primary" icon={<DownloadOutlined />} size="large">
                        Save
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
                    <Column title="Timestamp" dataIndex="timestamp" key="timestamp" />
                    <Column title="Type" dataIndex="type" key="type" />
                   
                    <Column  
                    title="Action"
                    dataIndex="action"
                    key="action"
                    render={action => (
                        <>
                        {action.map((ac,index)=>(
                            <span style={{color:Theme.skyBlue, marginRight:10}}>
                            {ac}
                            </span>
                        ))}
                        </>
                    )} />
                   
                    </ColumnGroup>
                
                    
                </Table>

                <div style={{width:"100%", display:'flex'}}>
                    <div style={{ width:'50%'}}>
                        <div style={{backgroundColor:Theme.github, display:'flex', alignItems:'center', width:'100%', height:50}}>
                            <h3 style={{marginLeft:30}}>Write Parser</h3>
                        </div>
                        <AceEditor
                        height={200}
                        width="100%"
                        mode="python"
                        theme="github"
                        onChange={onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        editorProps={{ $blockScrolling: true }}
                        />
                    </div>


                    <div style={{ width:'50%',}}>
                        <div style={{backgroundColor:Theme.gray, color:'white', display:'flex', alignItems:'center', width:'100%', height:50}}>
                            <h3 style={{ color:'white',marginLeft:30}}>Output</h3>
                        </div>
                        <div style={{width:'100%', height:200, backgroundColor:Theme.output}}>

                        </div>
                       
                    </div>


                   
                </div>

                <div style={{display:'flex', flexDirection:'row', marginTop:30, width:'50%', justifyContent:'space-between'}}>
                    <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[colourOptions[4], colourOptions[5]]}
                    isMulti
                    options={colourOptions}
                    />

                    <Button type="primary" icon={<CaretRightOutlined />} size="large">
                        Run
                    </Button>
                </div>

            </div>
        </General>
    )
}
