import "./module.css";
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions/counter';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;
import SideBar from './left';

class Home extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Layout>
                <SideBar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>任务管理</Breadcrumb.Item>
                        <Breadcrumb.Item>我的任务</Breadcrumb.Item>
                        <Breadcrumb.Item>任务列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
        </Content>
                </Layout>
            </Layout>
        )
    }
}
export default connect((state) => state, dispatch => ({
    increment: () => {
        dispatch(increment())
    },
    decrement: () => {
        dispatch(decrement())
    },
    reset: () => {
        dispatch(reset())
    }
}))(Home);