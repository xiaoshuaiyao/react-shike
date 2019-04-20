import styled from "styled-components";

export const Header  = styled.div`
    z-index: 11;
    height: 44px;  
    background: rgb(255, 255, 255);
    display:flex;
    margin-bottom:.15rem;
    div{
        height:20px;
        font-size:16px;
    }
    .left{
       margin:10px;
    }
    .center{
        margin-top:10px;
        margin-left:1rem;
    } 
`
export const Top = styled.div`
      
        width:2.96rem;
        height:1.56rem;
        margin-top:.12rem;
        box-shadow: rgba(121, 152, 215, 0.2) 0px 4px 20px 0px;
        background: rgb(255, 255, 255);
        border-radius: 12px;
        margin: 0 auto;
        font-size:.13rem;
        .security{
            position: relative;
            color: rgb(126, 137, 157);           
            padding: 12px;
            border-bottom:1px solid rgba(121, 152, 215, 0.2);
        }
        li{
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            padding:12px; 
            color: rgb(126, 137, 157);       
        }
`
export const Footer = styled.div`
        width:2.96rem;
        height:1.24rem;
        box-shadow: rgba(121, 152, 215, 0.2) 0px 4px 20px 0px;
        background: rgb(255, 255, 255);
        border-radius: 12px;
        margin: .12rem auto;
        font-size:.13rem;
        .other{
            position: relative;
            color: rgb(126, 137, 157);           
            padding: 12px;
            border-bottom:1px solid rgba(121, 152, 215, 0.2);
        }
        li{
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            padding:12px; 
            color: rgb(126, 137, 157);       
            
        }
`
export const Botton = styled.div`
                padding: 8px 12px;
                position: fixed;
                left: 0;
                right: 0;
                bottom: 12px;
                button{
                    width: 100%;
                    color: rgb(255, 255, 255);
                    box-shadow: rgba(121, 152, 215, 0.2) 0px 4px 20px 0px;
                    font-size: 0.14rem;
                    border-radius: 30px;
                    background: rgba(126, 137, 157, 0.5);
                    padding: 10px;
                }

`