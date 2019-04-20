import React, { Component } from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

class slideShow extends React.Component {
  state = {
    data: ['1', '2', '3','4','5'],
    imgHeight: 176,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
               "https://images.vsigo.cn/ADVP/640-260/201941101321326.jpg",
               "https://images.vsigo.cn/ADVP/640-260/20194318324632.jpg",
               "https://images.vsigo.cn/ADVP/640-260/2019417101532398.jpg",
               "https://images.vsigo.cn/ADVP/640-260/201941021525595.jpg",
               "https://images.vsigo.cn/ADVP/640-260/201941101321326.jpg"
            ]
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite 
        >
          {this.state.data.map(val => (
            <a
              key={val}
              // href="http://www.alipay.com"
              style={{ touchAction:"pan-y"}}
            >
              <img
                src={val}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}


export default slideShow

