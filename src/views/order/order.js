import React, { Component } from 'react'
import { Max, Banner, Login, Input, Hint ,Button,Button1,QQ} from "./styledComponent"
import img from "./img/logoNew.png"
import img1 from "./img/qqIcon.png"
import img2 from "./img/weiboIcon.png"
import img3 from "./img/phone.png"
import img4 from "./img/phonema.png"
import Timer from "./count_down"
export default class Order extends Component {
  render() {
    return (
      <Max>
        <Banner>
          <div>
            <p>
              <img src={img} />
            </p>
          </div>
        </Banner>
        <Login>
          <p>
            免密登录
          </p>
        </Login>
        <Input>
          <div>
            <ul>
              <li>
              <i><img src={img3}/></i>
                <input type="text" placeholder="请输入手机号" className="aaa"/>
                </li>
              <li>
               <i><img src={img4}/></i>
                <input type="text" placeholder="请输入验证码" className="bbb" />
                <Timer></Timer>
                </li>
            </ul>
          </div>
        </Input>
        <Hint>
         <div>
          <p>
            温馨提示：未注册视客账号的手机号，登录后将自动完成注册，且代表您已经同意
              <a href="https://m.vsigo.cn/h5/LoginProtocol.html">《用户服务协议》</a>
          </p>
          </div>
        </Hint>
        <Button>
          登录
        </Button>
        <Button1>
          使用密码登录
        </Button1>
        <QQ>
            <ul>
              <li><img src={img1}/></li>
              <li><img src={img2}/></li>
            </ul>  
        </QQ>
        
      </Max>
         
    )
  }
}
