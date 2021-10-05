
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Smallnav = styled.div`
/* border:1px solid black; */
background: #ECECEC;
height:50px;
div{
    max-width: 80%;
    margin:auto;
p{
    float:left;
    button{
        border:none;
        background: #ECECEC;

    }
}
img{
    float:right;
    margin-top:1%;
}
}
`
const Maincard = styled.div`
width: 100%;
height:100vh;
/* border:1px solid black; */
background: #ECECEC;
/* height:500px; */

.main{
width: 80%;
margin:auto;
display:grid;
grid-template-columns:30% 35%;
gap:10%;
.leftdiv{
    /* border:1px solid black; */
    background: #ECECEC;
/* height:500px; */
}
.rightdiv{
    /* border:1px solid black; */
     /* height:500px; */
     h4{
               background-color:white;
               border:1px solid white;
               height:44px;
               margin-bottom:0%;
               padding:10px 0px 0px 10px;
     }
     .cardbox{
         padding:0% 10% 10% 10%;
         border:1px solid black;
         background: #F5F5F5;
         border:1px solid #F5F5F5;
     .name{
         input{
             height:44px;
             width:100%;
             margin-bottom:2%;
             padding-left:2%;
         }
     }
     .cvv{
         display:grid;
         grid-template-columns:repeat(2,49%);
         gap:1%;
         margin-bottom:2%;
         input{
             height:44px;
             margin-bottom:2%;
             padding-left:2%;
         }
     }
     button{
         width:100%;
          height:44px;
          color:white;
          background-color:#5897FB;
          border:none;
          margin-top:2%;
     }
    }
}
}
`

function CardPay() {



    return (
        <>
            <Smallnav>
                <div>
                    <p><button>🡠</button>back</p>
                    <img src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1" alt="somethig"/>
                </div>
            </Smallnav>
            <Maincard>
                <div className="main">
                <div className="leftdiv">
               <h4>Enter new card</h4>
                <p>Total Payable Amount</p>
                </div>
                <div className="rightdiv">
                    <h4 style={{textAlign:"left"}}>New Card</h4>
                    <div className="cardbox" >
                     <div className="name">
                           <legend style={{textAlign:"left",fontSize:"18px"}}>Card Number:</legend>
                           <input  placeholder="Enter Card Number" type="text" />
                     </div>
                    <div className="cvv">
                            <legend style={{textAlign:"left",fontSize:"18px"}}>Expiry:</legend>
                            <legend style={{textAlign:"left",fontSize:"18px"}}>CVV:</legend>
                          <input style={{textAlign:"left",paddingLeft:"2%"}} placeholder="MM/YYYY" />
                          <input style={{textAlign:"left",paddingLeft:"2%"}} placeholder="Enter CVV" type="password"/>
                    </div>
                    <div className="name">
                           <legend style={{textAlign:"left",fontSize:"18px"}}> Name On Card :</legend>
                           <input  placeholder="Enter Name" />
                    </div>
                        <input style={{textAlign:"left"}} type="checkbox" /> Save this option securely for faster payment
                        <Link to="/thankyou"><button>PROCEED TO PAY RS</button></Link>
                    </div>
                </div>
                </div>
           </Maincard>

            </>
    )
}

export default CardPay