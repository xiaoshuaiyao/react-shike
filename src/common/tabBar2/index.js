import React, { Component } from 'react';
import { TabBar } from "antd-mobile";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'stealth',   //默认选择
            fullScreen: false,
        };
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="top"
                >
                    <TabBar.Item
                        title="隐形眼镜"
                        key="stealth"
                        icon={<div style={{
                            width: '1px',
                            height: '1px',
                            
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '1px',
                            height: '1px',
                           
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'stealth'}
                        
                        onPress={() => {
                            this.setState({
                                selectedTab: 'stealth',
                            });
                        }}
                        data-seed="stealth"
                    >
                        111
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '1px',
                                height: '1px',
                                
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '1px',
                                height: '1px',
                                
                            }}
                            />
                        }
                        title="彩色隐形眼睛"
                        key="colours"
                        
                        selected={this.state.selectedTab === 'colours'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'colours',
                            });
                        }}
                        data-seed="colours"
                    >
                       222
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '1px',
                                height: '1px',
                               
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '1px',
                                height: '1px',
                                
                            }}
                            />
                        }
                        title="护理用品"
                        key="nurse"
                        
                        selected={this.state.selectedTab === 'nurse'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'nurse',
                            });
                        }}
                    >
                        333
                    </TabBar.Item>
                   
                </TabBar>
            </div>
        );
    }
}

