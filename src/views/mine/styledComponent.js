import styled from "styled-components";
import set from "@images/btn_SZ.png";
import logo from "@images/iocn_11.png";
import pay from "@images/icon_3.png";
import goods from "@images/icon_2.png";
import say from "@images/icon_4.png";
import props from "@images/icon_5.png";
import server from "@images/icon_6.png";


export const Header = styled.div`
    height:.836rem;
    background:linear-gradient(90deg, rgba(252, 59, 114, 0.78) 0%, rgba(252, 59, 114, 1) 100%);
    .set{
            postiton:absolute;
            width:.2rem;
            height:.2rem;
            top:.2rem;
            right:.2rem;
            z-index:1;
        }      
`

export const HeaderSet = styled.div`
        position:relative;
        width:.19rem;
        height:.19rem;
        background:url(${set});
        background-size:100% 100%; 
        cursor: pointer; 
        position:absolute;     
        top:.2rem;
        right:.1rem;       
    `
export const Log = styled.div`
        margin:0 auto ;
         width:3rem;
         height:.76rem;  
         background:rgba(255,255,255,1);
         box-shadow:0 0.06rem 0.2rem 0 rgba(121, 152, 215, 0.2);
         border-radius:.06rem;
         z-index:10;
         margin-top: -0.4rem;
         padding-top: 0.13rem;
         padding-bottom: 0.11rem;
         margin-bottom:.13rem;
         display:flex;

            .logo{
                width: .51rem;
                height: .51rem;
                margin-left: 0.15rem;
                background:url(${logo});
                background-size:100% 100%; 
                
            }
            .logos{
                width: 48%;
                position: absolute;
                left: .9rem;
                top: .7rem;
                font-size: 0.13rem;
                color: rgba(24,44,78,1);
            }
`
export const MIneOrder = styled.div`             
                width: 3rem;
                height: 1.17rem;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 0.06rem 0.2rem 0rem rgba(121, 152, 215, 0.2);
                border-radius: 0.06rem;
                margin-top: 0.53rem;
                margin: 0 auto;
                .ccc{
                    width:2,82rem;
                height:.43rem;
                border-bottom: 0.01rem solid rgba(24,44,78,0.1);
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin:0 auto;
                padding:0 .2rem; 
                font-size: 0.12rem;
                font-weight: 400;
                color: rgba(24, 44, 78, 1); 
                .ccc1{
                    font-size: 0.12rem;
                    font-weight: 400;
                    color: rgba(24, 44, 78, 1);
                }
                .ccc2{
                    font-size: 0.11rem;
                    font-weight: 400;
                    color: rgba(165,173,186,1);
                }
                }
                  
                 .bbb{
                    display: flex;
                    justify-content: space-around;
                    align-items:center;  
                    text-align:center;
                     div:nth-child(1){
                        height:.32rem;
                        width:.32rem;                     
                    }       
                    &:nth-child(2){
                        font-size:.1rem;
                    }                                 
                 }


                     .bbb1{
                        width:.32rem;
                        height:.32rem;
                        background:url(${pay});
                        background-size:100% 100%; 
                        
                    }
                    .bbb2{
                        width:.32rem;
                        height:.32rem;
                        background:url(${goods});
                        background-size:100% 100%; 
                       
                    }
                    .bbb3{
                        margin-top:.15rem;
                        div:nth-of-type(1){
                            width:.28rem;
                            height:.2rem;
                            background:url(${props});
                            background-size:100% 100%; 
                            margin-bottom:.1rem;
                        }
                      
                     
                        
                    }
                    .bbb4{
                        width:.32rem;
                        height:.32rem;
                        background:url(${say});
                        background-size:100% 100%; 
                        
                    }
                    .bbb5{
                        width:.32rem;
                        height:.32rem;
                        background:url(${server});
                        background-size:100% 100%; 
                        
                    }
                               
            
   `
export const List = styled.div`
            width:3rem;
            height:2.2rem;
            background: rgba(255,255,255,1);
            box-shadow: 0 0.06rem 0.2rem 0 rgba(121,152,215,0.2);
            border-radius: 0.12rem;
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            
            margin: 0.1rem auto .12rem;
`
export const Lists = styled.div`
            width:33.3%;
            height:.73rem;     
            display:flex;
            align-items:center;
            justify-content:center; 
            flex-direction:column;             
                img{
                
                 width:.32rem;
                 height:.32rem;
             }                                 
                span{ 
                    display:block;
                    padding-top:.1rem;                  
                    width:1rem;
                    font-size:.1rem;
                    color: rgba(126,137,157,1);
                }          
            
`