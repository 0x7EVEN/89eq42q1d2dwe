import axios from "axios";
import { useEffect } from "react";
import { useState,useContext} from "react";
import styled from "styled-components"
import { LoginContext } from "../../context/loginContext";
import { Link,Redirect } from "react-router-dom";

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
const CartDis = styled.div`
// display:grid;
// grid-template-columns:63% 33%;
// gap:2%;
// padding-left:4%;
// padding-right:2%;
// background-color:white;
width:1136px;
margin:auto;
display:flex;
justify-content:space-between;
.pro_div{
    border:1px solid rgb(240,240,240);
    width:752px;
    .pin_div{
        max-height:70px;
        padding:8px;
        width:752px;
        /* border:1px solid black ; */
        background-color:rgb(245,245,245);
        button{
            background-color:black;
            color:white;
            height:35px;
            width:50px;
            border:none;
        }
        input{
            height:35px;
            margin-left:1%;
        }
        img{
            max-width:14px;
            margin-right:1%;

        }
    }
}
.cash_div{
    /* border:1px solid black; */
    height:500px;
    width:368px;
    padding:0 16px;
    .cash_one{
        max-height:90px;
        border:1px solid rgb(240,240,240);
        p{
            margin-top:0px;
            color:rgb(150,150,153);
        }
    }
    .cash_two{
        /* border:1px solid black; */
        margin-top:20px;
        padding:16px;
        input{
            width:242px;
            height:42px;

        }
        button{
            width:27%;
            height:46px;
            background-color:#F26522;
            color:white;
            border:none;
        }
    }
    .cash_three{
        margin-top:20px;
        border:1px solid rgb(240,240,240);
        padding:16px;
        /* height:200px; */
        p{
            color:#525252
        }
        /* span{
            color:#6C9D10
        } */
    }
    .cash_four{
        margin-top:20px;
        border:1px solid rgb(240,240,240);
        /* height:200px; */
        p{
            color:#525252
        }
        /* span{
            color:#6C9D10
        } */
        button{
            width:100%;
            background-color:#F26522;
            color:white;
            margin-top:15px;
            height:48px;
            border:none;
        }
    }
}
`;
const Checkfooter = styled.div`
display:grid;
grid-template-columns:repeat(3,31%);
/* border:1px solid black; */
height:200px;
background-color:#EFEFEF;
max-width:90%;
margin:auto;
gap:4%;
margin-top:28%;
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

}
`;
function Cart() {

    const {login,setLogin,disP,setDisP,oriP,setOriP} = useContext(LoginContext);
    const [cart,setCart] = useState("");
    const [tp,setTp] = useState(0)

    console.log(oriP,disP)


    const [loading, setLoading] = useState(false)

    function Get(){
        axios.get(`http://localhost:4321/signup/${login}/cart`)
        .then((res)=>{
            setCart(res.data);
            //console.log(cart)
            setLoading(true)
        })
        .catch(err=>{
            setCart(false);
        })
        .finally(()=>{

        })
    }

    useEffect(()=>{
        // if(login){
            Get();
            Price();
        // }
    },[])

    const handleDelete = (id)=>{
        //console.log(id);
        axios.put("http://localhost:4321/signup/addtocart",{
            item : id,
            quantity : -10000,
            userID :login
        })
        .then((res)=>{
            Get();
            Price();

        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleValue = (val,id)=>{
        //console.log(id);
        axios.put("http://localhost:4321/signup/addtocart",{
            item : id,
            quantity : val,
            userID :login
        })
        .then((res)=>{
            Get();
            Price();

        })
        .catch(err=>{
            console.log(err)
        })
    }

    function Price(){
        axios.get(`http://localhost:4321/signup/${login}/cart/price`)
        .then((res)=>{
            setOriP(res.data[1]);
            setDisP(res.data[0])
        })
        .catch(err=>{
            console.log(err)
        })
    }



    return <div>
            <Navdiv>
            <div className="one">
                <Link to="/">
                    <img src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1" alt="something"/>
                </Link>
                </div>
                <div style={{alignItems:"center",alignContent:"center" ,marginTop:"12px"}}   className="two">
                    <p>
                           {/* <img src="https://th.bing.com/th/id/OIP.hfixL5WZFsUKi6RLwMNlkQAAAA?pid=ImgDet&w=414&h=400&rs=1" alt="something" style={{maxWidth:"25px",marginLeft:"6.5%",float:"left"}}/><span> */}
                    <br/><span style={{color:"#F26522"}}>Cart-----</span>Delivery & Billing Address --------payment

                        <span><img src="https://image.flaticon.com/icons/png/512/18/18666.png" alt="something" style={{maxWidth:"18px",marginLeft:"50%"}}/></span></p>
                </div>
            </Navdiv>
            <hr />
            {cart[0]!== undefined ? <div style={{background:"white"}}>
            <div style={{background:"white"}}><h5 style={{textAlign:"left"}} className="width-1136 m-auto p-1">IN YOUR CART</h5></div>
            <CartDis>
                <div className="pro_div">
                <div className="pin_div">
                <span><img src="https://th.bing.com/th/id/OIP.7l-1Z8IIUYoOPOpy9g76CAHaI6?pid=ImgDet&rs=1" alt="something" />Enter Your Pincode For Delivery & Assembly Information   <input placeholder="Pincode"/><button>GO</button></span>
                        </div>
                        {loading ? cart.map((el)=>{
                            return <div key={el.data._id}  className="border">
                                <div style={{padding:"32px 0"}}  className="m-0 d-flex justify-content-between">
                                <div style={{padding:'0 24px'}}><img style={{width:"200px",height:'100px'}} src={el.data.colorImage[0].images[0]} alt="something"/></div>
                                <div style={{textAlign:"left",width:"300px"}}>
                                        <p className="p-0" style={{fontWeight: "600"}}>{el.data.name}</p>
                                        <p className="p-0 m-0">Months Warranty ,100% Geninue</p>
                                        <p className="p-0 m-0">Delivers in 2 days.</p>
                                        <p className="p-0 m-0">Enter your pincode to get those details.</p>
                                    </div>
                                    <div style={{width:"100px"}}>
                                        <div  className="d-flex justify-content-center">
                                            <div><button onClick={()=>{handleValue(-1,el.data._id)}} style={{padding:"7px 12px",fontWeight:"700" , background:"white",border:"none"}}  className="button-icon"> - </button></div>
                                            <div className="p-2">{el.quantity}</div>
                                            <div><button onClick={()=>{handleValue(1,el.data._id)}} style={{padding:"7px 12px",fontWeight:"700", background:"white",border:"none"}} className="button-icon">+</button></div>
                                        </div>
                                        <div style={{marginTop:"16px"}} className="top-40 align-middle">
                                            <p className="p-1 m-0"><span style={{textDecoration:"line-through",color:"grey"}}>₹ {el.data.oriPrice*el.quantity}</span></p>
                                            <p className="p-1 m-0"><span style={{color:"orange"}}>₹ {el.data.disPrice*el.quantity}</span></p>
                                        </div>
                                    </div>
                                <div>
                                        <div className="d-flex p-2 justify-content-between">
                                            <div><button onClick={() => {handleDelete(el.data._id);}}  style={{background:"none",border:"none"}}  className="primary"> <img style={{width:"16px",height:"16px"}} src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="del" />  </button></div>
                                            <div><button style={{background:"none",border:"none"}} > <img style={{width:"16px",height:"16px"}} src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="" /></button></div>
                                        </div></div>
                                </div>
                            </div>
                             }) : <div>..loading</div>}
                </div>
                    <div className="cash_div">
                        <div className="cash_one border" style={{padding:"12px"}}>
                            <h5 style={{textAlign:"left",}}>Login OR Register</h5>
                            <p style={{textAlign:"left"}}>For Express Checkout ,Exciting Offers & More</p>
                        </div>
                        <div style={{fontWeight:"600"}}  className="border p-0 cash_two">
                          <input placeholder="Enter Coupon Code"/><button style={{height:"42px"}}>Apply</button>
                        </div>
                        <div style={{textAlign:"left"}}  className="border cash_three">
                            <div><p  style={{fontWeight:"600"}}>Cart Value : <span style={{float:"right"}}>₹{oriP}</span></p></div>
                           <div><p style={{fontWeight:"600",color:"#6C9D10"}}>Retail Discount : <span style={{float:"right"}}>₹{oriP-disP}</span></p></div>
                           <div><p style={{fontWeight:"600"}}>Give India<span style={{float:"right"}}>₹99</span></p></div>
                            <div><p style={{fontWeight:"600"}}>Delivery & Assembly Charges.Enter Pincode To Know</p></div>
                            <hr/>
                           <div><h5 style={{textAlign:"left"}}>Total : <span style={{float:"right"}}>₹{disP}  <span style={{textDecoration:"line-through",color:"grey"}}> ₹{oriP}</span></span></h5></div>
                           <div><p style={{fontWeight:"600"}}>No cost EMI Available Starting ₹4.350/month.EMI Starting ₹1,229/month</p></div>
                        </div>
                        <div className="cash_four">
                            <input type="checkbox" /> Contribute Rs.99 For COVID Relief Through Give India
                            <br/><br/>
                            <input type="checkbox" /> Use GSTIN For Business Purchase (Optional)
                            <div id="dis" style={{color:"red",display:"none",fontSize:"18px",marginTop:"10px"}}>Login or signup to proceed</div>
                           {login=="6156b5a6ff17ae025803738e" ? <button onClick={()=>{document.getElementById("dis").style.display = "block"}}>PLACE ORDER</button> : <Link style={{zIndex:"100",position:"relative"}} to="/checkout"><button onClick={()=>{document.getElementById("dis").style.display = "none"}}>PLACE ORDER</button></Link>}                        </div>
                  </div>
            </CartDis>
            </div> : <div><h2>Cart Is Empty</h2></div>}
            <Checkfooter>
            <div className="card" style={{ border:"none",background:"#efefef"}}>
                 <p style={{textAlign:"left"}}> We Accept</p>
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
                <div className="emi">
                <p style={{textAlign:"left"}}>BUY SAFE,PAY EASY</p>
                    <ul>
                        <li>
                            <span>No Cost EMIs</span>
                            "Now pay in easy installments at no additional cost"
                        </li>
                </ul>
                </div>
                <div className="secure">
                    <p>100% SAFE & SECURE</p>
                    <img src="https://ii2.pepperfry.com/images/download-1.png" alt="something" />
                   <img src="https://ii2.pepperfry.com/images/p-c-i-d-s-s.png" alt="something"/>

                </div>

            </Checkfooter>
    </div>

}
export {Cart}

/*
<div className="pro_display"><
    <div className="image"  style={{padding:"0 24px"}}><img style={{width:"200px",height:'200px'}} src={el.data.colorImage[0].images[0]} alt="something"/></div>
    <div style={{width:"300px"}}><h5>{el.data.name}</h5>
    <span>{el.data.details.Waranty} Months Warranty ,100% Geninue</span>
    <div style={{color:"orange"}}>₹{el.data.disPrice} <span style={{textDecoration:"line-through",color:"grey"}}>{el.data.oriPrice}</span></div>
    {/* add original priced line through section
        <p style={{marginRight: "50%"}}>Delivered in two days </p>
    </div>


    <button><img src="https://ii1.pepperfry.com/images/svg/checkout-wish-icon.svg" alt="something" /></button>


    <button onClick={() => {handleDelete(el.data._id);}}><img src="https://ii1.pepperfry.com/images/svg/checkout-bin-icon.svg" alt="something" /></button>
    <div className="qty">
        <button onClick={()=>{handleValue(-1,el.data._id)}}>-</button>
        <div>{el.quantity}</div>
        <button onClick={()=>{handleValue(1,el.data._id)}}>+</button>
    </div>

</div>
 */