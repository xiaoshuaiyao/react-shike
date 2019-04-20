import React, { Component } from 'react'
import {Header,Top,Footer,Botton} from "./styledComponent"
import {HashRouter as Router,Route,NavLink} from "react-router-dom"
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

export default class SetUp extends Component {
  
  render() {
    return (
      <div>
      <Router>          
          <Header>
              
              <NavLink to="/mine">
               <div className="left">
                   ＜
                 </div>
                 </NavLink>
                 <div className="center"> 
               设置
               </div>         
          </Header>
          <Top>
            <div className="security"><p>安全</p></div>
            <div className="tel"><ul>
            <li className="aaa1"><p>手机(账号)</p><p>156****6173＞</p></li>      
            <li><p>密码设置</p><p>＞</p></li>
            <li><p>手机(账号)</p><p>156****6173＞</p></li>       
          </ul></div>      
          </Top>
          <Footer>
             <div className="other"><p>其他</p></div>
             <div><ul>
              <li><p>给我们评分</p><p>＞</p></li>
              <li><p>关于视客</p><p>＞</p></li>             
             </ul></div>          
          </Footer>
          <Botton>
              <button>退出登陆</button>
          </Botton>
          </Router>
      </div>
    )
  }
}


