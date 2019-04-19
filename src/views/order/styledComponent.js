import styled from "styled-components";

export const Max = styled.div`
    width:100%;
    height:100%;
    background : #fff;
`

export const Banner = styled.div`
    width : 100%;
    div{
        width : 80%;
        // background : red;
        margin:0 auto;
        p{
            width : 100%;
            padding:0.42667rem 0;
            img{
                width : 0.51188rem;
                height : 0.51188rem;
                margin:0 auto;
            }
        }
    }
`
export const Login = styled.div`
    width : 80%;
    margin:0 auto;
    // background : blue;
    p{
        padding:0.08rem 0;
        font-size : 0.13rem;
        color : #A5ADBA;
    }
`
export const Input = styled.div`
    width : 100%;
    div{
        width : 80%;
        margin:0 auto;
       // background:yellow;
        border-radius:10px;
        box-shadow : 0px 4px 20px 0px rgba(121,152,215,0.2);
        background : #fff;
      ul{
          font-size:0.18rem;
          width:100%;
          height:100%;
          li{
              width:2.4rem;
              height:0.2rem;
              //background:green;
              display:flex;
              align-items:center;
              margin:0 auto;
              border-bottom:1px solid #e1e1e1;
              padding:0.2rem 0.1rem;
              i{
                  img{
                    width:0.16rem;
                    height:0.16rem;
                  }
              }
              .aaa{
                padding:0.05rem 0.05rem;
                 border:0;
                width:2rem;
                 font-size:0.12rem;
                 
              }
              .bbb{
                padding:0.05rem 0.05rem;
                border:0;
                width:1rem;
                font-size:0.12rem;
              }
              button{
                width:0.76rem;
                height:0.26rem;
                line-height:0.26rem;
                padding:0 0.06rem;
                background:#ccc;
                font-size: 0.12rem;
                color: #fff;
                border-radius: 12px;   
                border:0;  
                margin-left:0.3rem; 
                text-align:center;           
            }
              
          }
          li:nth-of-type(2){
              border:0;
          }
      }
    }
`
export const Hint = styled.div`
    width:100%;
    div{
        width:80%;
        margin:0 auto;
    
    p{
        font-size:0.12rem;
        color:black;
        line-height:0.2rem;
        margin-top:0.16rem;
        margin-bottom:0.16rem;
        a{
            color:#FC3B72;
        }
    }
}
`

export const Button = styled.div`
    width:80%;
    margin:0 auto;
    font-size:.12rem;
    color:#fff;
    background:rgba(252,59,114,0.78);
    padding:0.14rem;
    text-align:center;
    border-radius:0.3rem;
    margin-bottom:0.16rem;
`
export const Button1 = styled.div`
    width:80%;
    margin:0 auto;
    font-size:.12rem;
    color:rgba(252,59,114,0.78);
    border: 1px solid rgba(252,59,114,0.78);
    padding:0.14rem;
    text-align:center;
    border-radius:0.3rem;
    margin-bottom:0.3rem;
`
export const QQ = styled.div`
    width:50%;
    margin:0 auto;
    //background:red;
    
    
    ul{
        display:flex;
        justify-content:space-around;
  
        li{
            img{
                width:0.5rem;
                height:0.5rem;
            }
        }
    }
    
`
