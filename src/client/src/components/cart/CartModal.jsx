import { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios"
import { LoginContext } from "../../context/loginContext";
import { useContext } from "react";
import { Button } from "./Button";
import {useHistory} from "react-router-dom"



export default function CartModal ({cart, handleCartModal}) {
  const [data,setData] = useState([])
  const [item, setItem] = useState(true);
  const {login,setLogin,disP,setDisP,oriP,setOriP} = useContext(LoginContext);
  const history = useHistory();
  function Get () {
        axios.get(`http://localhost:4321/signup/${login}/cart`)
        .then((res)=>{
            setData(res.data);
            console.log('data:', res.data)
        })
        .catch(err=>{
            setData([]);
        })
        .finally(()=>{
        })
    }
  useEffect(() => {
    Get()
  },[])

  const handleDelete = (id)=>{
        axios.put("http://localhost:4321/signup/addtocart",{
            item : id,
            quantity : -10000,
            userID :login
        })
        .then((res)=>{
            Get();
        })
        .catch(err=>{
            console.log(err)
        })
    }
  const handleCart = () => {
    setItem(true);
  };

  const handleWish = () => {
    setItem(false);
  };

  const [theme, setTheme] = useState("wish");

  return cart ? (
    <div className="outer_div2">
      <div className="inner_div2">
        <div className="subDiv">
          <button className="closeBtn" onClick={() => handleCartModal(`Cart`)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.81591 1.35441L7.99991 6.53841L13.1626 1.37574C13.2531 1.27944 13.362 1.2024 13.483 1.14925C13.604 1.09609 13.7345 1.06791 13.8666 1.06641C14.1495 1.06641 14.4208 1.17879 14.6208 1.37883C14.8209 1.57886 14.9332 1.85018 14.9332 2.13307C14.9357 2.26385 14.9115 2.39375 14.8619 2.51481C14.8124 2.63587 14.7387 2.74554 14.6452 2.83707L9.42925 7.99974L14.6452 13.2157C14.821 13.3877 14.9241 13.6206 14.9332 13.8664C14.9332 14.1493 14.8209 14.4206 14.6208 14.6207C14.4208 14.8207 14.1495 14.9331 13.8666 14.9331C13.7306 14.9387 13.595 14.916 13.4683 14.8664C13.3416 14.8169 13.2266 14.7415 13.1306 14.6451L7.99991 9.46107L2.82658 14.6344C2.73645 14.7275 2.62878 14.8018 2.50978 14.8531C2.39078 14.9043 2.26281 14.9315 2.13325 14.9331C1.85035 14.9331 1.57904 14.8207 1.379 14.6207C1.17896 14.4206 1.06658 14.1493 1.06658 13.8664C1.06409 13.7356 1.08836 13.6057 1.13788 13.4847C1.18741 13.3636 1.26115 13.2539 1.35458 13.1624L6.57058 7.99974L1.35458 2.78374C1.17878 2.61175 1.07569 2.37885 1.06658 2.13307C1.06658 1.85018 1.17896 1.57886 1.379 1.37883C1.57904 1.17879 1.85035 1.06641 2.13325 1.06641C2.38925 1.06961 2.63458 1.17307 2.81591 1.35441Z"
                fill="#C5C5C5"
              />
            </svg>
          </button>

          <div className="head">
            <p style={{}}>Showing Availability At</p>
            <input placeholder="Enter Pincode" type="text" />
            <button>Check</button>
          </div>

          <div className="btns">
            <Button
              theme={theme === "cart" ?"dark":"light" }
              onClick={() => {
                setTheme("wish");
                handleCart();
              }}
              >
              MY CART
            </Button>
            <Button
              theme={theme === "wish" ? "dark":"light" }
              onClick={() => {
                setTheme("cart");
                handleWish();
              }}
            >
              MY WHISLIST
            </Button>
            <Button>RECENTLY VIEWED</Button>
          </div>
        </div>

        <div className="container">
          {item ? (

            <div>
            {data.length ? <div>
              {data.map((e) => {
                return (
                  <div key={e.data._id}  className="cartItemDetails my-1 p-1 border align-middle">
                    <div>
                      <img className="align-middle align-center p-2" src={e.data.colorImage[0].images[0]} alt="" />
                    </div>

                    <div className="itemPriceDetails">
                      <p className="m-0 p-0">{e.data.name}</p>
                      <div className="qtyPrice p-0 m-0">
                        <p className="retailPrice my-0 py-0">
                          Retail Price <span>{e.data.oriPrice}</span>{" "}
                        </p>
                        <p>
                          Offer Price <b>{e.data.disPrice}</b>
                        </p>
                      </div>
                    </div>
                    <div className="funcBtn">
                      <button>Move To Wishlist</button>
                      <button onClick={()=>handleDelete(e.data._id)}>Remove</button>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => {
                  history.push("/cart")
                }}
                style={{
                width: "480px",
                height: "40px",
                background: "#f26522",
                border: "none",
                color: "white",
                fontWeight: "600",
                fontSize: "24px"
                  }}>PROCEED TO CART
                </button>
              </div>
                : <h1>You don't have anything in cart</h1>
              }
          </div>
          ) : (
            <h1>You Haven't Added Any Item To Your Wishlist</h1>
          )}
        </div>
      </div>
    </div>
  ) : null;
}