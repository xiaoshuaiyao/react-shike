import React, { Component } from 'react'
import { Header, HeaderSet, Log, MIneOrder, List, Lists } from "./styledComponent"
import sessgin from "@images/icon_7.png"
import address from "@images/iocn_10.png"
import member from "@images/iocn_8.png"
import money from "@images/iocn_13.png"
import collection from "@images/iocn_12.png"
import news from "@images/iocn_14.png"
import service from "@images/icon_1.png"
import protect from "@images/iocn_9.png"
import {HashRouter as Router,Route,NavLink} from "react-router-dom"
import TabBarCom1 from "../../common/tabBar/index1.js"


export default class Mine extends Component {
  render() {
    return (
      <div>
      <Router>
      <Header>       
        <NavLink to="/mine/setUp"><HeaderSet/></NavLink>
    </Header>
        <Log>
        <div className="logo"></div>
          <div className="logos">登录账号></div>
        </Log>
        <MIneOrder>
          <div className="ccc">
            <div className="ccc1">我的订单</div>
            <div className="ccc2">全部订单</div>
          </div>
          <div className="bbb">
          <NavLink to="/order"><div className="bbb1"><div></div><div>待付款</div></div></NavLink>
          <NavLink to="/order"><div className="bbb2"><div></div><div>待发货</div></div></NavLink>
          <NavLink to="/order"><div className="bbb3"><div></div><div>待收货</div></div></NavLink>
          <NavLink to="/order"><div className="bbb4"><div></div><div>待评论</div></div></NavLink>
          <NavLink to="/order"><div className="bbb5"><div></div><div>售后</div></div></NavLink>
          </div>
        </MIneOrder>
        <List>
          <Lists>
            <img src={sessgin} alt="" />
            <span>物流信息</span>
          </Lists>
          <Lists>
            <img src={address} alt="" />
            <span>收获地址</span>
          </Lists> <Lists>
            <img src={member} alt="" />
            <span>会员成长</span>
          </Lists> <Lists>
            <img src={money} alt="" />
            <span>我的资产</span>
          </Lists> <Lists>
            <img src={collection} alt="" />
            <span>我的收藏</span>
          </Lists> <Lists>
            <img src={news} alt="" />
            <span>消息盒子</span>
          </Lists> <Lists>
            <img src={service} alt="" />
            <span>我的客服</span>
          </Lists> <Lists>
            <img src={protect} alt="" />
            <span>价格保护</span>
          </Lists>

        </List>
        <TabBarCom1/>
        </Router>
      </div>
    )
  }
}
