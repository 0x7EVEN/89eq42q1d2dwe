import { useState,useEffect,useContext } from "react";
import styled from "styled-components";
import axios from "axios"
import { LoginContext } from "../../context/loginContext";
import { Link } from "react-router-dom";

const Navdiv = styled.div`
display:grid;
grid-template-columns:30% 70%;
/* gap:5%; */
height:80px;
/* border:1px solid black; */
background-color:white;
.one{
    /* border:1px solid black; */
    img{
    max-width:100%;
    padding-top:5%;
    padding-left:30%;
}
}
.two{
    p{
        color:rgb(150,150,153);
    }
      span{
          color:#F26522;
      }
}
`;
const Ordermain = styled.div`
display:grid;
grid-template-columns:63% 33%;
gap:1%;
padding-left:4%;
padding-right:4%;
background-color:white;
height:500px;
.address{
    /* border:1px solid black; */
    .staticadd{
        /* border:1px solid black; */
        /* height:168px; */

        div{
            /* border:1px solid black; */
            display:grid;
            grid-template-columns:repeat(2,49%);
            gap:1%;
            div{
            border:1px solid #C5C5C5;
            padding-left:9%;
            max-height:200px;
            background-color:#F5F5F5;

            h5{
                margin-bottom:0px;
            }
            p{
                margin-top:0px;
                color:#969696;
            }
            }
        }
    }
    .one{
        padding-left:6.5%;
        border:1px solid #C4C4C4;
        margin-bottom:2%;
        span{
            float:right;
            color:#969696;
            button{
                border:none;
                font-weight:bolder;
                background-color:white;
            }
        }
    }
    .two{
        display:flex;
        justify-content:space-evenly;
        p{
         color:#969696;
        }
        input{
            height:44px;
            width:30%;
        }
        button{
            border:none;
            background-color:white;
            img{
                max-width:100%;
            }
        }
    }
    .user{
        /* border:1px solid black; */
        background-color:white;
        h4{
            padding-left:6.5%;
        }
        .ones{
            display:flex;
            padding-left:52px;
            gap:9%;
            margin-bottom:2%;
           input{
               width:500px;
           }
        }
        .twos{
             display:flex;
            padding-left:60px;
            margin-bottom:2%;

            gap:4.5%;
           input{
               width:500px;
           }
        }
        .threes{
             display:flex;
            padding-left:55px;
            margin-bottom:2%;

            gap:7%;
           input{
               width:500px;
           }
        }
        .fours{
            display:flex;
            padding-left:55px;
            margin-bottom:2%;
            gap:7%;
           input{
               width:500px;
               height:88px;
           }
        }
        .five{
            padding-left:14px;
            margin-bottom:2%;
            margin-left:30px;
            width:750px;
            input{
                height:48px;
                width:250px;
            }
        }
        .six{
            margin-bottom:2%;
            width:800px;
            button{
                margin-top:2%;
                width:250px;
                height:40px;
                background-color:#F26522;
                color:white;
                border:none;
            }
        }
    }
    .mestro{
        height:300px;
            /* border:1px solid black; */

        .mcardsdiv{
            display:grid;
            grid-template-columns: 30% 50%;
            gap:15%;
            border:1px solid #C5C5C5;
            .cardvariety{
                .normal{
                     height:40px;
                     background:#C5C5C5;
                     color:#969696;
                     position:relative;
                     width:200px;
                     text-align:center;
                     line-height:40px;
                     margin-bottom:1%;
                }
                .arrow{
                     height:40px;
                     background:black;
                     color:#fff;
                     position:relative;
                     width:200px;
                     text-align:center;
                     line-height:40px;
                      margin-bottom:1%;
                }
                .arrow:after{
                    content:"";
                    position:absolute;
                    height:0;
                    width:0;
                    left:100%;
                    top:0;
                    border:20px solid transparent;
                    border-left: 20px solid black;
                  }
            }
            .fourcards{
                /* border:1px solid black; */

                p{
                    margin-top:10%;
                }

                div{
                    /* border:1px solid black; */
                    width:100%;
                    /* height:40px; */
                   display:grid;
                   /* border:1px solid red; */
                   grid-template-columns:repeat(2,30%);
                   gap:20%;
                    div{
                        border:1px solid #969696;
                        height:56px;
                        position:relative;
                    input{
                        /* justify-content:center; */
                        margin-top:0px;
                        position:absolute;left:12px;top:20px;
                        background:red;
                    }

                    img{
                        width:43px;
                        height:25px;
                        margin-top:5px;
                        position:absolute;left:53px;top:10px;
                    }
                }
                }
                button{
                    width:80%;
                    height:48px;
                    margin-left:0%;
                    justify-content:left;
                    background:#F26522;
                    color:white;
                    border:none;
                    margin-top:10%;
                }
            }

        }
    }
}
.amount{
    /* border:1px solid black; */

    .boxamt{
        padding:16px 10px;
       border:1px solid #C4C4C4;
       height:188px;
       span{
           float:right;
       }
    }
}
`
const Checkfooter = styled.div`
display:grid;
grid-template-columns:repeat(3,31%);
/* border:1px solid black; */
height:200px;
background-color:#EFEFEF;
max-width:92%;
margin:auto;
gap:4%;
margin-top:40%;
.card{
/* border:1px solid black; */
/* display:grid;
grid-template-columns:repeat(4,20%) */
p{
    margin-left:10%;
    color:#969696;
}
img{
    border-style:none;
    max-width:100%
}
li{
    vertical-align:middle;
    display:inline-block;
    margin-right: 14px;
    margin-bottom: 15px;
    text-align: center;
}
}
.emi{
/* border:1px solid black; */
p{
    margin-left:10%;
    color:#969696;
}
ul{

    li{
        background:url("https://ii1.pepperfry.com/images/svg/calendar-1.svg") no-repeat left 5px;
        list-style-type:none;
        background-size: 20px 15px;
        span{
            margin-left:25px;
        }
    }
}

}
.secure{
/* border:1px solid black; */
p{

    color:#969696;
}
img{
    margin-right:3%;
}

}`;


function Payment() {
    const [plus, setplus] = useState(false);
    const [pay, setPay] = useState(false);
    const [stadd, setStadd] = useState(false);
    const [order, setOrder] = useState(false);

    const [cart ,setCart] = useState(false);

    const {add,setAdd,disP,oriP} = useContext(LoginContext)

    const handleAdd = (e)=>{
        const {name,value} = e.target;
        setAdd({...add , [name]:value});
    }

    function Get(){
        axios.get(`http://localhost:4321/signup/${"6156b5a6ff17ae025803738e"}/cart`)
        .then((res)=>{
            setCart(res.data);
            console.log('res.data:', res.data)

        })
        .catch(err=>{
            setCart(false);
        })
    }

    useEffect(()=>{
        Get()
    },[])


    const handleShip = () => {
        setplus(plus ? false : true)

    }
    const handleCard = () => {
        setPay(pay ? false : true)
        setplus(false)
    }
    const handleSave = () => {
        setStadd(true)
        setplus(false);
        handleCard();

    }
    const handleOrder = () => {
        setOrder(order?false:true)
    }
    return (<>
        <>
        <Navdiv>
                <div className="one">
                    <Link to="/">
                    <img src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1" alt="something"/>
                    </Link>
                </div>
                <div className="two">
                    <p>
                        <br/><span>Cart-----Delivery & Billing Address </span>--------payment

                 <span> <img src="https://image.flaticon.com/icons/png/512/18/18666.png" alt="something" style={{maxWidth:"18px",marginLeft:"50%"}}/></span></p>
                </div>
            </Navdiv>

            <Ordermain>
                <div className="address">
                    <div className="one">
                        <p style={{textAlign:"left",marginTop:"12px"}}>ORDER SUMMARY <span>(items)<button onClick={handleOrder}>{order? "-":"+" }</button></span></p>
                    </div>
                    <div style={order?{display:"block"}:{display:"none"}}>
                        <div style={{display:"grid",rowGap:"1.1%"}}>
                            {cart ? cart.map((el)=>{
                                return <div style={{display:"flex"}}>
                                    <img style={{width:"120px",height:"70px"}} src={el.data.colorImage[0].images[0]} alt="something"/>
                                    <div style={{marginLeft:"1.5%",textAlign:"left"}}>{el.data.name}<br/><p>Delivers in 2 Days<br/><span style={{color:"#F26522"}}>Rs {el.data.disPrice}</span></p></div>
                                </div>
                            })
                            : <div>..loading</div>}
                        </div>
                    </div>
                    <div className="one">
                        <p style={{textAlign:"left",marginTop:"12px"}}>SHIPPING & BILLING ADDRESS <span>Tell us Where To Deliver<button onClick={handleShip}>{plus? "-":"+" }</button></span></p>
                    </div>
                    <div  style={plus?{display:"block"}:{display:"none"}}>
                        <div className="two">
                        <span>Email ID</span> <input placeholder="Enter Email Id" /> <p>or</p>
                        <div><button><img src="https://ii1.pepperfry.com//images/svg/nCheckout-google-login.svg" alt="something" /></button>
                            <button><img src="https://ii1.pepperfry.com//images/svg/nCheckout-facebook-login.svg" alt="something" /></button>
                            <p>Sign in For Express CheckOut,<br /> Exciting Offers & More</p>
                        </div>
                        </div>
                        <div className="user">
                        <h5 style={{textAlign:"left"}}>Add Shipping Address</h5>
                        <div className="ones"><p>Name</p><input onChange={handleAdd} name="name" placeholder="eg.Sandeep" /></div>
                        <div className="twos"><p>Mobile No</p><input onChange={handleAdd} name="mobile" placeholder="911XXXXX56" /></div>
                        <div className="threes"><p>Pincode</p> <input onChange={handleAdd} name="pin" placeholder="59888" /></div>
                        <div className="fours"><p>Address</p> <input onChange={handleAdd} name="address" placeholder="House Number, Building Name ,Society area,Land Mark" /></div>
                        <div className="five"><input onChange={handleAdd} name="city" placeholder="City" /> <input onChange={handleAdd} name="state" placeholder="State" /></div>
                        <div className="five"><input onChange={handleAdd} name="country" style={{width:"69.5%"}} placeholder="Country"/> </div>
                            <div className="six">
                            <input type="checkbox" /> Billing Address is Same As The Shipping Address <br/>
                            <input type="checkbox" /> I Want To SignUp<br />
                            <button onClick={handleSave}>SAVE AND CONTINUE</button>
                        </div>
                        </div>
                    </div>
                          {/* static address */}
                    <div className="staticadd" style={stadd ? { display: "block" } : { display: "none" }}>
                    <div>
                            <div><h5>SHIPPING & BILLING DETAILS</h5><br />
                                <p>{add.name}<br /> {add.address} ,{add.city}, PIN: {add.pin}<br /> {add.state},<br /> MBL:{add.mobile}</p>
                            </div>
                            <div><h5>BILLING DETAILS</h5><br />
                            <p>{add.name}<br /> {add.address} ,{add.city}, PIN: {add.pin}<br /> {add.state},<br /> MBL:{add.mobile}</p></div>
                        </div>
                    </div>
                    {/* ends here */}
                        <div className="one">
                        <p style={{textAlign:"left",marginTop:"12px"}}>PAYMENT <span>How Would You Like To Pay<button onClick={handleCard}>{pay? "-":"+" }</button></span></p>
                          </div>
                    <div className="mestro"  style={pay?{display:"block"}:{display:"none"}}>
                        <p style={{textAlign:"left",paddingLeft:"7%"}}>Select Payment Method</p>
                        <div className="mcardsdiv">
                            <div className="cardvariety">
                              <div className="arrow">ATM/DEBIT CARD</div>
                              <div className="normal">Credit Card</div>
                              <div className="normal">Internet Banking</div>
                              <div className="normal">Emi</div>
                              <div className="normal">Gift Cards</div>
                              <div className="normal">Google Pay/Upi</div>
                              <div className="normal">Wallet</div>
                              <div className="normal">International Cards</div>
                            </div>

                            <div className="fourcards" style={{textAlign:"left"}}>
                                <p>Choose Debit Card Type</p>
                                <div>
                                    <div>
                                    <input type="radio"/> <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/1280px-MasterCard_early_1990s_logo.svg.png" alt="something"/>
                                    </div>
                                     <div >
                                    <input type="radio" /> <img src="https://seeklogo.com/images/V/visa-logo-121ECA05B2-seeklogo.com.png" alt="something"/>
                                    </div>
                                    <div >
                                    <input type="radio" /> <img src="https://creativevip.net/resource-images/15-credit-card-icons-3.png" alt="something"/>
                                     </div>
                                    <div >
                                    <input type="radio" /> <img src="https://th.bing.com/th/id/R.1bb4c635c4c1c1d20fa5fd6ec21a69b3?rik=h5FP8UhnwFm2hw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2fd%2fd1%2fRuPay.svg%2f2000px-RuPay.svg.png&ehk=Tx7gR04xHpAZ6Oxg71R26k39kOXKpLZkOetH%2fkK3hF8%3d&risl=&pid=ImgRaw&r=0" alt="something"/>
                                    </div>
                                </div>
                                <Link to="/payment"><button >PROCEED TO PAY</button></Link>
                                <p>Note: You Will Be Asked To Enter Your Card Details On Proceeding With The Selected Payment Options.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="amount">
                     <div style={{position:"fixed"}}>
                    <div className="boxamt">
                    <p style={{textAlign:"left"}}>Cart Value <span style={{marginRight:"15px"}}>₹{oriP}</span></p>
                    <p style={{color:"#6C9D10",textAlign:"left"}}>Retail DisCount <span style={{marginRight:"15px"}}>₹{oriP-disP}</span></p>
                    <p style={{textAlign:"left"}}>Delivery & Assembly Charges extra. Enter Pincode to Know</p>
                     <h4 style={{textAlign:"left"}}>Total <span style={{marginRight:"15px"}}>₹{disP}</span></h4>
                    </div>
                    <div style={{marginTop:"12px"}}>
                        <h6>No Cost EMI Available starting Rs4,334/month ,EMI Starting Rs1,224/month</h6>
                        <input type="checkbox" /> Contribute Rs.99 For COVID Relief Through GiveIndia.
                    </div>
                    </div>
                </div>
        </Ordermain>
        </>
        <Checkfooter>
                <div className="card" style={{textAlign:"left",background:"rgb(239,239,239)",border:"none"}}>
                 <p > We Accept</p>
                 <ul>
               <li><img src="https://ii2.pepperfry.com/images/new-visa-logo.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/800-px-maestro-logosvg.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/american-express-icon.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/d-i-n-e-r-s-c-a-r-d-1.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/220-px-ru-paysvg.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/mastercard-logo-png.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/982-wallet.png" alt="something"/>Banking</li>
               <li><img src="https://ii2.pepperfry.com/images/985-netbanking.png" alt="something"/>Wallets</li>
               </ul>
                </div>
                <div className="emi" style={{textAlign:"left"}}>
                <p>BUY SAFE,PAY EASY</p>
                    <ul>
                        <li>
                            <span>No Cost EMIs</span>
                            " Now pay in easy installments at no additional cost"
                        </li>
                </ul>
                </div>
                <div className="secure">
                    <p>100% SAFE & SECURE</p>
                    <img src="https://ii2.pepperfry.com/images/download-1.png" alt="something" />
                   <img src="https://ii2.pepperfry.com/images/p-c-i-d-s-s.png" alt="something"/>

                </div>

            </Checkfooter>
        </>
    )
}




export default Payment;