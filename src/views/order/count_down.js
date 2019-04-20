import React,{Component} from "react"

class Timer extends Component {

    state = {
        seconds: 60,
        flag:false,
    }

    tick = () => {
        const { seconds } = this.state;
        this.setState({
            seconds: seconds - 1
        })
    }

    componentWillUpdate(a,state){
        if( state.seconds == 0){
            clearInterval(this.timer);
            state.flag=false
            state.seconds = 60;
        }
       
    }

    render() {    
        return ( 
            this.state.flag? 
            <button>{this.state.seconds}S</button>:
            <button onClick={this.handleClick.bind(this)}>获取验证码</button>    
        )
    }
    handleClick(){
        this.setState({
            flag:true
        })
        // 定时器，可以修改1000为自己想要的时间，
        this.timer = setInterval(() => this.tick(), 1000);
    }
} 
export default Timer;


