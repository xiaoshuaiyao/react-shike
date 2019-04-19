import styled from "styled-components";

export const Header = styled.div`
      background-color: #fff;
      position:fixed;
      position:relative;
      top:0;
      width:100%;
      height:0.375rem;
      display:flex;
      font-size: 14px;
      color: #A5ADBA;
      align-items: center;
      justify-content: center;
      .header-content{
          width:1.87rem;
          display:flex;
          align-items: center;
          
          li{
            width:0.93rem;
           
            box-sizing: border-box;
            justify-content: center;
            display: block;
            color: #A5ADBA;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            padding:0.1rem;
          }
          .active{
              display:block;
             border-bottom: 2px solid #FC3B72;
             padding:0.1rem;
             color: #FC3B72;
          }
      }

      .returns{
        position:absolute;
        margin-left: -1.4rem;
        color: #A5ADBA;
        font-size: 26px;

      }
`


export const Nologin = styled.div`
        position:absolute;
        margin-top: 0.05rem;
        top:0;
        background-color: #fff;
       width:100%;
       height:0.3rem; 
       display:flex;
       color: rgba(23,43,77,0.5);
       align-items:center;
       justify-content:center;
       p{
           font-size:12px;
           width:2.4rem;
           color: #172B4D
           text-align:center;
       }
       button{
        font-size:12px;
        width:0.48rem;
        height:0.17rem;
        border: 1px solid rgba(252,59,114,1);
        color: #FC3B72;
        text-align: center;
        line-height:0.17rem;
        border-radius: 10px;
        text-align:center;
        margin:0 2px;
        background-color: #fff;

       }
`

export const EmptyCart = styled.div`
   
    position:relative
    width:100%;
    height:3rem;   
    display:flex;
    flex-direction: column;
    font-size:13px;
    align-items:center;
    text-align: center;
    color: rgba(23,43,77,0.5);
     img{
         width:0.68rem;
         height:0.68rem;
         color:red;
         margin:0.34rem 0;
     }
     p{
         font-size:12px;
     }
    .linkBtn{
        width:100%;
        height:0.34rem;
        display:flex;
        margin:0.13rem 0;
        justify-content:center;
        align-items:center;
        margin-bottom:0.6rem;
        a{
            display:block;
            width:1.12rem;
            height:0.36rem;
            line-height:0.34rem;
            text-align:center;
            border-radius:20px;
            border: 2px solid #FC3B72;
            justify-content:space-around;
            color: #FC3B72;
        }
        .min{
            background: linear-gradient(90deg,rgba(252,59,114,0.78) 0%,rgba(252,59,114,1) 100%);
            color:#fff;
            margin-right:0.2rem;
        }
    }
    .guessLike{
        display:flex;
        width:100%;
        height:0.32rem;
        background:#fff;
        justify-content:center;
        align-items:center;
        p{ 
            padding:0.17rem 0.13rem;   
        }
        img{
            width:0.4rem;
            height:0.03rem;
        }
    }

`