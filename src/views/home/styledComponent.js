import styled from "styled-components"


export const Max = styled.div`
    overflow:auto;
    overflow-x:hidden;
    height:100%;
    width:100%;
    padding-bottom:1rem;
`
export const Header = styled.div`
    display:${props=>props.flag?"none":"block"}
    width:100%;
    height:.56rem;
    background: linear-gradient(90deg, rgb(255, 119, 166) 0%, rgb(252, 166, 124) 49%, rgb(225, 143, 234) 100%);
    position:fixed;
    top:0;
    left:0;
    z-index:2;
    .one{
       width:100%;
        height:100%;
       padding:0.06rem 0.2rem 0.06rem 0.2rem;
       display:flex;
       align-items:center;
      
       
       .one-img{
            width:0.35rem;
            height:0.35rem;
            line-height:0.35rem;
            margin-right:0.12rem;
            img{
                width:0.35rem;
                height:0.35rem;
                
            }
        }
        .one-p{
            font-size:0.13rem;
            display:flex;
            flex-direction:column;
            .one-p1{
                font-size:0.15rem;
                color:#fff;
                span{
                    font-size:0.15rem;
                    color:#FF3771;;
                }

            }
            .one-p2{
                font-size:0.12rem;
                color:#fff;
                margin-top:0.05rem;
            }
        }
        .one-button{
            display:flex;
            flex:1;
            align-items:center;
            margin-left:0.4rem;
            height:100%;
            button{
                width:0.7rem;
                height:0.25rem;
                color: #FF3771;
                font-size: 0.12rem;
                background: rgba(255,220,113,1);
                border-radius: 0.13rem;
                border:0;
            }
        }
        
    }
`

export const Search = styled.div`
    position:fixed;
    width:100%;
    z-index:2;
    top:${props=>props.flag?"0":"0.56rem"};
    opacity:${props=>props.flag?"1":"0.5"};
    .am-search{
        background:${props=>props.flag?"rgb(252, 59, 114, 0.78);":"#ccc"};
    }

`


export const Slide = styled.div`
    .am-wingblank.am-wingblank-lg{
        margin:0;
    }
    .am-wingblank{
        margin:0;
    }
    margin-top:0.52rem;
`

export const Nav = styled.div`
    width:100%;

    ul{
        width:100%;
        background:#fff;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        li{
            width:25%;
            padding-top:0.1rem;
            padding-bottom:0.1rem;
            a{
                display:block;
                display:flex;
                width:100%;
                flex-direction:column;
                align-items:center;
                img{
                    width:0.345rem;
                    height:0.345rem;
                }
                p{
                    padding-top:0.05rem;
                    font-size:0.12rem;
                    
                }
            }

        }
    }
`

export const Timer = styled.div`
   width:95%;
   height:2rem;
   margin:12px auto;
  //background:red;
   border-radius: 6px;
   .timer{
       width:100%;
       height:0.37rem;
       background: rgba(255,185,204,.32);
       display:flex;
       align-items:center;
       padding-left:0.05rem;
       border-radius: 6px;
       img{
           width:0.12rem;
           height:0.12rem;
       }
       p{
        padding-left:0.05rem;
          font-size:0.12rem; 
          color: #fc3b72;
       }
   }
   .timer-bottom{
       width:100%;
       overflow:hidden;
       padding-bottom:0.05rem;
       border-bottom:1px solid RGBA(23,43,77,0.1);
       ul{
        width:max-content;
        background:#fff;
        display:flex;
        overflow-x:auto;
        flex-shrink:0;
        li{
            width:.9rem;
            border: 1px solid RGBA(23,43,77,0.1);
            border-radius: 6px;
            padding: 8px 9px;
            margin-left:0.08rem;
            margin-top:0.05rem;
            text-align: center;
            div{
                width:0.64rem;
                height:0.91rem;
                img{
                    width:0.64rem;
                    height:0.64rem;
                    
                }
            }
            p{
                font-size:0.12rem;
                color: #fc3b72;
                span{
                    border:1px solid #fff;
                    color: #fff;
                    border-radius: 6px;
                    background:#fc3b72;
                }
            }
           
        }
        
       }
      
   }
   .timer1{
    width:100%;
    height:0.37rem;
    background: #fff;
    display:flex;
    align-items:center;
    padding-left:0.05rem;
    border-radius: 6px;
    
    
    img{
        width:0.12rem;
        height:0.12rem;
    }
    p{
     padding-left:0.05rem;
       font-size:0.12rem; 
       color: #5E6C84;
    }
    .right{
       margin-left:1.5rem;
       font-size:0.12rem; 
       color: #5E6C84;
    }
}
`

export const Bottom = styled.div`
    width:100%;
    div{
        width:95%;
        margin:0 auto;
        //background:red;
        p{
            display:block;
            width:100%;
            height:0.3rem;
            //background:green;
            font-size:0.14rem;
            line-height:0.3rem;
            color:#A5ADBA;
        }
        ul{
            width:100%;
            display:flex;
            justify-content:space-around;
            margin-bottom:0.1rem;
            li{
                width:45%;
                background:#fff;
                padding-bottom:0.3rem;
                border-radius:10px;
                img{
                    width:1.24rem;
                    height:1.24rem;
                    margin:0 auto;
                    margin-top:0.05rem;
                }
                p{
                    font-size:0.12rem;
                    text-align:center;
                    color:black;
                }
                div{
                    display:flex;
                    span{
                        font-size:0.12rem;
                        color: #FF516C;
                        margin-left:0.15rem;
                        display:block;
                        width:0.3rem;
                        
                    }
                    del{
                        font-size:0.12rem;
                        margin-left:0.06rem;
                        color:#ccc;
                        display:block;
                        width:0.3rem;
                       
                    }
                }
                
            }
        }
    }
`
