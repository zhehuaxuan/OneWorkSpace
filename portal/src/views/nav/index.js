import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default () => {
    const menus = [{
        key: 1,
        name: "任务管理"
    }, {
        key: 2,
        name: "文章归档"
    }];
    return (
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                {
                    menus.map(menu =>
                        <Menu.Item key={menu.key}>{menu.name}</Menu.Item>
                    )
                }
            </Menu>
        </Header>
    )
}
