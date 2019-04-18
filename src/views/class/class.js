import React, { Component } from 'react'
import { Header } from './styledComponent'
import { Icon } from "antd-mobile"
import TabBarClass from "@/common/tabBar2"

export default class Class extends Component {
  render() {
    return (
      <div>
        <Header>
          <div>
            <Icon type="search" size="xs" />
            <span>搜索/商品/品牌/类别</span>
          </div>
        </Header> 
          <TabBarClass />
      </div>
    )
  }
}
