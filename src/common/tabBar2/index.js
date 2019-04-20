import React, { Component } from 'react';
import { TabBar } from "antd-mobile";
import {
    Stealth,
    Colours,
    Nurse
}from "@views/class"

import {withRouter} from "react-router-dom";


class TabBarClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'stealth',   //默认选择
            fullScreen: false,
        };
    }
    render() {
       // console.log(this);
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 800 }}>
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
                        <Stealth/>
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
                        <Colours/>
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
                        <Nurse/>
                    </TabBar.Item>
                   
                </TabBar>
            </div>
        );
    }
}
export default withRouter(TabBarClass);