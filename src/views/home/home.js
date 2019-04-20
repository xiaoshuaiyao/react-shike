import React, { Component } from 'react'
import {Header} from "./styledComponent"
import TabBarCom from "../../common/tabBar";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TabBarCom/>
      </div>
    )
  }
}
