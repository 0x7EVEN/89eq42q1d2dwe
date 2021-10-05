import img1 from "./images/image 67.png";
import img2 from "./images/Group 117.png";
import "./Order.css";
import { data } from "./data.js";
import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect,useState } from "react";
import { LoginContext } from "../../context/loginContext";
import {Link} from "react-router-dom"
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

export default function Order() {

  const [cart,setCart] = useState("");
  const {login} = useContext(LoginContext);
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    axios.get(`http://localhost:4321/signup/${login}/cart`)
      .then((res)=>{
          setCart(res.data);
          //console.log("cart",cart)
          //console.log(cart)
          setLoading(true)
      })
      .catch(err=>{
          setCart(false);
      })
      .finally(()=>{

      })
  },[])

  return (
    loading ? <div>
    <Navdiv>
              <div className="one">
                  <Link to="/"><img src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1" alt="something"/>
                  </Link>
              </div>
              <div style={{alignItems:"center",alignContent:"center" ,marginTop:"12px"}}   className="two">
                  <p>
                         {/* <img src="https://th.bing.com/th/id/OIP.hfixL5WZFsUKi6RLwMNlkQAAAA?pid=ImgDet&w=414&h=400&rs=1" alt="something" style={{maxWidth:"25px",marginLeft:"6.5%",float:"left"}}/><span> */}
                  <br/>

                      <span><img src="https://image.flaticon.com/icons/png/512/18/18666.png" alt="something" style={{maxWidth:"18px",marginLeft:"50%"}}/></span></p>
              </div>
    </Navdiv>
    <div className="totalDetails">
      <div>306145615</div>
      <div>23rd february, 2021 | 22:08:12 IST</div>
      <div>Rs. 23,399</div>
    </div>

    {cart.map((el) => {
      return (
        <div className="itemDetails">
          <img src={el.data.colorImage[0].images[0]} alt="" />

          <div className="itemQty">
            <p>{el.data.name}</p>
            <div className="qtyPrice">
              <p>Qty: {el.quantity}</p>
              <p>Rs. {el.data.disPrice}</p>
            </div>
              <p className="sm-text">Delivery by : 2 days </p>
          </div>

          {/* <div className="align-right" style={{alignSelf:"right"}}>Delivery By: tomorrow</div> */}


        </div>
      );
    })}

    <div className="tracking">
      <div>
        <img src={img2} alt="" />
      </div>
      <div className="status">
        <div>
          <b>Ordered and Approved 27 Sep </b>
        </div>
        <div>Shipping 30 Sep</div>
        <div>Out for Delivery 2nd Oct</div>
        <div>Arriving by 2nd Oct</div>
      </div>
    </div>
  </div> : <div>...loading</div>
  );
}
