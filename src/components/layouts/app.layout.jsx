import React from 'react'

import { Layout, Space } from 'antd';
import TopNavigation from '../navigations/TopNavigation';

const {Header, Footer, Sider, Content} = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight : '64px',
    backgroundColor: '#14213d',
};

const contentStyle = {
    textAlign: 'start',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#14213d',
    padding: '20px'
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#14213d',
};

const AppLayout = ({children}) => (
    <Layout style={{minHeight:'100vh'}}>
        <Header style= {hearderStyle}><TopNavigation /></Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer Style={footerStyle}>Footer</Footer>
    </Layout>
);


export default AppLayout