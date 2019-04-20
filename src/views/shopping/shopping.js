import React, { Component } from 'react';
import {Header,Nologin,EmptyCart} from "./styledComponents";
<<<<<<< HEAD
import {BrowsrRouter,HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
=======
import {HashRouter as Router,NavLink} from "react-router-dom";
>>>>>>> tongyao
import Img from "../../image/kg.png"
import Imgx from "../../image/x.png"
import Imgy from "../../image/y.png"
export default class Shopping extends Component {
  render() {
    return (
      <div>
         <Router>
              <Header>
                  <div class="returns">&lt;</div>
                  <div className="header-content">
                    <li><NavLink to="/shopping">国内购</NavLink></li>
                    <li><NavLink to="/shopping1" >海淘</NavLink></li>
                    </div>
              </Header>
          </Router>
          <EmptyCart>
          <Nologin>
                  <p>登录后您的购物车在电脑和微信商城都会同步</p>
                  <button>登录</button>
          </Nologin>
 
        
               <div><img src={Img} alt=""/></div>
               <div>购物车还是空的</div>
               <div>去挑些中意的商品吧，亲</div>
               <div className="linkBtn">
                   <NavLink to="/home" className="min">前往首页</NavLink>
                   <NavLink to="/class">去搜索</NavLink>
               </div>
               <div className="guessLike">
                 <img src={Imgx} alt=""/>
                    <p>您可能会中意</p>
                 <img src={Imgy} alt=""/>
               </div>
          </EmptyCart>
      </div>
    )
  }
}

