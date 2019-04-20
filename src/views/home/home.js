import React, { Component } from 'react'
import {Max,Header,Slide,Search,Nav,Timer,Bottom} from "./styledComponent"
import TabBarCom from "../../common/tabBar";
import SearchBarExample from "./search";
import Img from "./img/logosmall.png"
import SlideShow from "./slideshow"
import Img1 from "./img/haitaoIcon.png"
import Img2 from "./img/timer.png"
import Img3 from "./img/right.png"
import BScroll from "better-scroll"


export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      flag:false,
      left: 0
    }
  }

  clickHandler() {
    let targetX = 0
    if(this.state.left === 0) {
      targetX = 200
    } else {
      targetX = 0
    }

    this.setState({
      left: targetX
    })
  }

  componentDidMount() {
    this.clickHandler()
  }
  render() {
    return (
      <Max ref={Max=>this.Max=Max}>


    

        <Header flag={this.state.flag}>
          <div className="one">
            <div className="one-img"><img src={Img}/></div>
            <div className="one-p">
              <p className="one-p1">欢迎<span>使用APP下单</span></p>
              <p className="one-p2">更优惠更方便！</p>
            </div>
            <div className="one-button">
              <button>立即下载</button>
            </div>
          </div>
        </Header>
        
        <Search flag={this.state.flag} >
          <SearchBarExample/>
        </Search>


      
        
        <Slide>
            <SlideShow/>
        </Slide>
        <Nav>
          <ul>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
            <li><a href=""><img src={Img1}/><p>海淘视客</p></a></li>
          </ul>
        </Nav>
        <Timer>
          <div className="timer">
            <img src={Img2}/>
            <p>限时优惠</p>
          </div>
          <div className="timer-bottom" ref={hotList=>this.hotList = hotList}>
            <ul>
              <li>
                <div>
                  <img src="https://images.vsigo.cn/Products/contacts/210-210/2018103117143234.jpg"/>
                </div>
                <p>￥188<span>7.3折</span></p>
              </li>
              <li>
                <div>
                  <img src="https://images.vsigo.cn/Products/contacts/210-210/2018103117143234.jpg"/>
                </div>
                <p>￥188<span>7.3折</span></p>
              </li>
              <li>
                <div>
                  <img src="https://images.vsigo.cn/Products/contacts/210-210/2018103117143234.jpg"/>
                </div>
                <p>￥188<span>7.3折</span></p>
              </li>
              <li>
                <div>
                  <img src="https://images.vsigo.cn/Products/contacts/210-210/2018103117143234.jpg"/>
                </div>
                <p>￥188<span>7.3折</span></p>
              </li>
              <li>
                <div>
                  <img src="https://images.vsigo.cn/Products/contacts/210-210/2018103117143234.jpg"/>
                </div>
                <p>￥188<span>7.3折</span></p>
              </li>
              <li>
                <div>
                  <img src="https://images.vsigo.cn/Products/contacts/210-210/2018103117143234.jpg"/>
                </div>
                <p>￥188<span>7.3折</span></p>
              </li>
              <li>
                <div>
                  <img src="https://images.vsigo.cn/Products/contacts/210-210/2018103117143234.jpg"/>
                </div>
                <p>￥188<span>7.3折</span></p>
              </li>
            </ul>
          </div>
          <div className="timer1">
            <img src={Img2}/>
            <p>9件商品</p>
            <p>正在抢购</p>
            <p className="right"><img src={Img3}/></p>
          </div>
        </Timer>
        <Bottom>
          <div>
            <p>热卖单品</p>
            <ul>
              <li>
                <div><img src="https://images.vsigo.cn/Products/contacts/210-210/201836164111763.jpg"/></div>
                <p>美若康绽美月抛2片</p>
                <div><span>￥75</span><del>￥218</del></div>
              </li>
              <li>
                <div><img src="https://images.vsigo.cn/Products/contacts/210-210/201836164111763.jpg"/></div>
                <p>美若康绽美月抛2片</p>
                <div><span>￥75</span><del>￥218</del></div>  
              </li>
            </ul>
            <ul>
              <li>
                <div><img src="https://images.vsigo.cn/Products/contacts/210-210/201836164111763.jpg"/></div>
                <p>美若康绽美月抛2片</p>
                <div><span>￥75</span><del>￥218</del></div>
              </li>
              <li>
                <div><img src="https://images.vsigo.cn/Products/contacts/210-210/201836164111763.jpg"/></div>
                <p>美若康绽美月抛2片</p>
                <div><span>￥75</span><del>￥218</del></div>  
              </li>
            </ul>
          </div>
        </Bottom>
        <TabBarCom/>
      </Max>
    )
  }
  componentDidMount(){
    

    this.scroll = new BScroll(this.hotList,{
      scrollX:true,
      tap:true
    })

    //滚动事件 
    this.Max.addEventListener("scroll",()=>{
      //console.log(111)
      var top = this.Max.scrollTop;
     // console.log(top)
      if(top>100){
        this.setState({
          flag:true
        })
      }else{
        this.setState({
          flag:false
        })
      }
    })
  }
}

