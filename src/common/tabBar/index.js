import React, { Component } from 'react'
import {TabBar} from "antd-mobile"
import {withRouter} from "react-router-dom";
 class TabBarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            fullScreen: true,
        };
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(//gw.alicdn.com/tfs/TB1povDrIfpK1RjSZFOXXa6nFXa-80-82.png) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '25px',
                            height: '25px',
                            background: 'url(//gw.alicdn.com/tfs/TB1UlQnrCzqK1RjSZFjXXblCFXa-80-82.png) center center /  25px 25px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                            this.props.history.push("/home")
                        }}
                        data-seed="logId"
                    >
            
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(http://image.4inlook.com/wap/www/index/20151010/con-fixed-all.jpg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '25px',
                                height: '25px',
                                background: 'url(http://image.4inlook.com/wap/www/index/20151010/con-fixed-all.jpg) center center /  25px 25px no-repeat'
                            }}
                            />
                        }
                        title="分类"
                        key="class"
                        selected={this.state.selectedTab === 'calss'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'calss',
                            });
                            this.props.history.push("/class")
                        }}
                        data-seed="logId1"
                    >
                      
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '25px',
                                height: '25px',
                                background: 'url(https://m.zazhipu.com/img/dh/dh04.png) center center /  25px 25px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: 'url(https://m.zazhipu.com/img/dh/dh04.png) center center /  28px 28px no-repeat'
                            }}
                            />
                        }
                        title="购物车"
                        key="shopping"
                        selected={this.state.selectedTab === 'shopping'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'shopping',
                            });
                            this.props.history.push("/shopping")
                        }}
                    >
                      
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(//gw.alicdn.com/tfs/TB1YTgprwHqK1RjSZJnXXbNLpXa-72-82.png) center center /  22px 22px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '25px',
                                height: '25px',
                                background: 'url(//gw.alicdn.com/tfs/TB1YTgprwHqK1RjSZJnXXbNLpXa-72-82.png) center center /  25px 25px no-repeat'
                            }}
                            />
                        }
                        title="订单"
                        key="order"
                        selected={this.state.selectedTab === 'order'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'order',
                            });
                            this.props.history.push("/order")
                        }}
                    >
                        
                    </TabBar.Item>
                    <TabBar.Item
                    icon={
                        <div style={{
                            width: '25px',
                            height: '25px',
                            background: 'url(https://image3.suning.cn/uimg/cms/img/154518780211077845.png?from=mobile) center center /  25px 25px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '28px',
                            height: '28px',
                            background: 'url(https://image3.suning.cn/uimg/cms/img/154518780211077845.png?from=mobile) center center /  28px 28px no-repeat'
                        }}
                        />
                    }
                    title="我的"
                    key="mine"
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'mine',
                        });
                        this.props.history.push("/mine")
                    }}
                >
                    
                </TabBar.Item>                 
                </TabBar>
            </div>
        )
    }
}
export default withRouter(TabBarCom)