import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Row, Col, Menu, Switch, Divider } from 'antd';
import {
    FilterOutlined,
    AimOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
  } from '@ant-design/icons';
import './general.css'
import { Theme } from '../theme';
function General(props) {
    return (
        <Row style={{marginBottom:20}}>
            <Col xs={{ span:24 }} sm={{ span:24 }} md={{ span:4 }} lg={{ span:4 }}>
                <Menu
                className="menu-style"
              

                >
                    <div className="spacer"/>
                        <Menu.Item  key="1" icon={<FilterOutlined />}>
                            <NavLink  to="/" activeStyle={{ color:Theme.skyBlue }} exact>
                                Pipelines
                            </NavLink>         
                        </Menu.Item>
                        <Menu.Item key="2" icon={<AimOutlined />}>
                            <NavLink  to="/destination" activeStyle={{ color:Theme.skyBlue }} exact>
                                Destination
                            </NavLink> 
                        </Menu.Item>
                   
                    

                </Menu>
            </Col>
            <Col xs={{ span:24 }} sm={{ span:24 }} md={{ span:20 }} lg={{ span:20 }}>
                {props.children}
            </Col>
        </Row>
    )
}

General.propTypes = {

}

export default General

