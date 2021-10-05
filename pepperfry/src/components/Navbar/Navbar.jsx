import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import DropFurniture from "./DropFurniture";
import DropLiving from "./DropLiving";
import "./Navbar.css";
import { icons } from "./icons";
import logo from "./images/image1.png";
import { RegisterContext } from "../Contexts/RegisterContext";
import Register from "../Register/Register";
import CartModal from "../cart/CartModal";
import { LoginContext } from "../../context/loginContext";

export default function Navbar() {
  const [token, handleLogin, handleLogout] = useContext(RegisterContext);
  const [cart, setCart] = useState(false);

  const {login,setLogin,name} = useContext(LoginContext);

  const handleCart = (val) => {
    if (val === "Cart" || val === "Wishlist") setCart(!cart);
  };


  return (
    <>
      <nav>
        <div className="nav_search">
         <Link to="/">
          <div className="img">
            <img src={logo} alt="" />
          </div>
        </Link>
          <div class="search">
            <input type="text" id="inp" placeholder="Search" />
            <svg
              className="search_icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 19.5C15.4706 19.5 19.5 15.4706 19.5 10.5C19.5 5.52944 15.4706 1.5 10.5 1.5C5.52944 1.5 1.5 5.52944 1.5 10.5C1.5 15.4706 5.52944 19.5 10.5 19.5Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.25 17.25L22.5 22.5"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="icons">
            {icons.map((e,i) =>{
              return (e.name=="Profile" && login!=="6156b5a6ff17ae025803738e")  ? <div
              onMouseLeave={() => handleLogout(e.name)}
              onClick={() => handleCart(e.name)}

            >
              {e.icon}
              <div>{name}</div>
            </div> : <>
              <div
                onMouseEnter={() => handleLogin(e.name)}
                // onMouseLeave={() => handleLogout(e.name)}
                onClick={() => handleCart(e.name)}

              >
                {e.icon}
                <div>{e.name}</div>
              </div>
            </>
            })}
          </div>
        </div>

        <div className="nav_container">
          <div className="nav_menu">
            <div className="furniture">
              <span>Furniture</span>
              <div>
                <DropFurniture />
              </div>
            </div>
            <div className="living">
              <span> Living</span>
              <div><DropLiving /></div>
            </div>
            <div>Bedroom</div>
            <div>Kids Room</div>
            <div>Mattresses</div>
            <div>Furnishings</div>
            <div>Decor</div>
            <div>Lighting</div>
            <div>Appliances</div>
            <div>Modular </div>
            {/* <div>Modular Furniture</div> */}
          </div>
        </div>
      </nav>

      <Register />
      <CartModal cart={cart} handleCartModal={handleCart} />
    </>
  );
}
