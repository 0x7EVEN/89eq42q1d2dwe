import "./BrandProducts.css";
import { Groups } from "./Groups.js";
import { icons } from "./icons.js";
import { Chairs } from "./Chairs.js";
import styled from "styled-components";
import {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Wrapper = styled.div`


div {

  button{
    width:40%;
    margin:auto;
   position : absolute;
   background:rgba(255,255,255,0.3);
   border:1px solid black;
top : 20vh;
padding:5px;
left:6.5vw;
 font-weight: 500;
  font-size: 12px;
  color: dark gray;
  }
}
  .btn {
    display: none;
  }
  &:hover {
    .btn {
      display: block;
      cursor: pointer;

    }
  }
`;

export default function Brand() {

  const [products, setProducts] = useState([])

    useEffect(() => {
        getData();
    },[])

    async function getData () {
        const {data} = await axios.get('http://localhost:4321/products')
        console.log(data);
        setProducts(data)
        // alert(1);
    }


  return (
    <>
      <div className="mainPic">
        <img
          src="https://ii1.pepperfry.com/media/catalog/product/brands/16107942552020_hero_05cc.jpg"
          alt=""
        />
      </div>

      <div className="iconArray">
        {icons.map((e) => {
          return (
            <div>
              <img src={e.icon} alt="none" />
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>

      <h6 className='collection'>BROWSE COLLECTIONS</h6>

      <div className="browse">
        {Groups.map((e) => (
          <div>
            <img src={e.link} alt="" />
            <h1>{e.title}</h1>
            <p>{e.description}</p>
          </div>
        ))}
      </div>

      <button className="bigButton">VIEW ALL COLLECTION (37)</button>
      <hr />

      <h6 className='collection'>FROM OUR STYLE GURU</h6>

      <div className="quote">
        <svg
          width="51"
          height="42"
          viewBox="0 0 51 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 41.184C7.728 41.184 5.136 40.224 3.024 38.304C1.008 36.288 0 33.792 0 30.816C0 29.28 0.24 27.696 0.72 26.064C1.2 24.432 2.064 22.272 3.312 19.584L12.672 0H23.04L17.136 22.176C20.208 24.288 21.744 27.168 21.744 30.816C21.744 33.792 20.688 36.288 18.576 38.304C16.464 40.224 13.872 41.184 10.8 41.184ZM38.592 41.184C35.52 41.184 32.928 40.224 30.816 38.304C28.8 36.288 27.792 33.792 27.792 30.816C27.792 29.28 28.032 27.696 28.512 26.064C28.992 24.432 29.856 22.272 31.104 19.584L40.464 0H50.832L44.928 22.176C48 24.288 49.536 27.168 49.536 30.816C49.536 33.792 48.48 36.288 46.368 38.304C44.256 40.224 41.664 41.184 38.592 41.184Z"
            fill="#969696"
          />
        </svg>
        <p>
          CasaCraft Offers The Best In Comfort, With Elan. The Collection
          Consists Of A Series Of Modern Designs, Which Are Simple Yet Striking
          And Represent The Ideals Of Minimalism And Cutting Excess. As A
          Perfect Blend Of Functionality And Exceptional Aesthetics, Each Piece
          Is Crafted With Passion And Reflects High Quality And Style.
        </p>
        <svg
          width="51"
          height="42"
          viewBox="0 0 51 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.032 41.184C43.104 41.184 45.696 40.224 47.808 38.304C49.824 36.288 50.832 33.792 50.832 30.816C50.832 29.28 50.592 27.696 50.112 26.064C49.632 24.432 48.768 22.272 47.52 19.584L38.16 0H27.792L33.696 22.176C30.624 24.288 29.088 27.168 29.088 30.816C29.088 33.792 30.144 36.288 32.256 38.304C34.368 40.224 36.96 41.184 40.032 41.184ZM12.24 41.184C15.312 41.184 17.904 40.224 20.016 38.304C22.032 36.288 23.04 33.792 23.04 30.816C23.04 29.28 22.8 27.696 22.32 26.064C21.84 24.432 20.976 22.272 19.728 19.584L10.368 0H2.67029e-05L5.90403 22.176C2.83203 24.288 1.29603 27.168 1.29603 30.816C1.29603 33.792 2.35203 36.288 4.46403 38.304C6.57603 40.224 9.16803 41.184 12.24 41.184Z"
            fill="#969696"
          />
        </svg>
      </div>

      <h6 className='collection'>DISCOVER MORE FROM CASACRAFT COLLECTION</h6>
      <div className="catSelect">
        <div>
          <p>CHOOSE CATEGORY</p>
          <select name="" id="">
            <option value="">Furniture</option>
          </select>
        </div>

        <div>
          <p>CHOOSE CATEGORY</p>
          <select name="" id="">
            <option value="">All</option>
          </select>
        </div>
      </div>

      <div className="lowerCatergories">


        <div className="filterSection">
        <div className="section_1">
          <h2>Home </h2>
          <div className='subCat' >
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666864 9.66728C0.511095 9.66758 0.360138 9.61333 0.240197 9.51395C0.172691 9.45798 0.11689 9.38925 0.0759885 9.31168C0.0350872 9.23412 0.00988963 9.14924 0.00183905 9.06193C-0.00621152 8.97461 0.00304316 8.88656 0.0290728 8.80282C0.0551025 8.71909 0.0973952 8.64131 0.15353 8.57395L3.1402 5.00061L0.260197 1.42061C0.20482 1.35242 0.163465 1.27396 0.138511 1.18973C0.113556 1.1055 0.105494 1.01718 0.114787 0.929823C0.124079 0.842471 0.150544 0.757816 0.19266 0.680725C0.234776 0.603634 0.291712 0.535626 0.360197 0.480611C0.429174 0.41992 0.509951 0.374142 0.59746 0.346149C0.684968 0.318157 0.777318 0.308554 0.868713 0.317944C0.960108 0.327334 1.04858 0.355514 1.12856 0.400715C1.20855 0.445916 1.27833 0.507163 1.33353 0.580611L4.55353 4.58061C4.65158 4.6999 4.70519 4.84953 4.70519 5.00395C4.70519 5.15836 4.65158 5.30799 4.55353 5.42728L1.2202 9.42728C1.15332 9.50796 1.06836 9.57173 0.972223 9.61343C0.876083 9.65513 0.771468 9.67358 0.666864 9.66728Z"
                fill="#616161"
              />
            </svg>
            <p >Brands</p>
          </div>
          <div className='subCat' >
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666864 9.66728C0.511095 9.66758 0.360138 9.61333 0.240197 9.51395C0.172691 9.45798 0.11689 9.38925 0.0759885 9.31168C0.0350872 9.23412 0.00988963 9.14924 0.00183905 9.06193C-0.00621152 8.97461 0.00304316 8.88656 0.0290728 8.80282C0.0551025 8.71909 0.0973952 8.64131 0.15353 8.57395L3.1402 5.00061L0.260197 1.42061C0.20482 1.35242 0.163465 1.27396 0.138511 1.18973C0.113556 1.1055 0.105494 1.01718 0.114787 0.929823C0.124079 0.842471 0.150544 0.757816 0.19266 0.680725C0.234776 0.603634 0.291712 0.535626 0.360197 0.480611C0.429174 0.41992 0.509951 0.374142 0.59746 0.346149C0.684968 0.318157 0.777318 0.308554 0.868713 0.317944C0.960108 0.327334 1.04858 0.355514 1.12856 0.400715C1.20855 0.445916 1.27833 0.507163 1.33353 0.580611L4.55353 4.58061C4.65158 4.6999 4.70519 4.84953 4.70519 5.00395C4.70519 5.15836 4.65158 5.30799 4.55353 5.42728L1.2202 9.42728C1.15332 9.50796 1.06836 9.57173 0.972223 9.61343C0.876083 9.65513 0.771468 9.67358 0.666864 9.66728Z"
                fill="#616161"
              />
            </svg>
            <p >CasaCraft</p>
          </div>
          <div className='subCat' >
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666864 9.66728C0.511095 9.66758 0.360138 9.61333 0.240197 9.51395C0.172691 9.45798 0.11689 9.38925 0.0759885 9.31168C0.0350872 9.23412 0.00988963 9.14924 0.00183905 9.06193C-0.00621152 8.97461 0.00304316 8.88656 0.0290728 8.80282C0.0551025 8.71909 0.0973952 8.64131 0.15353 8.57395L3.1402 5.00061L0.260197 1.42061C0.20482 1.35242 0.163465 1.27396 0.138511 1.18973C0.113556 1.1055 0.105494 1.01718 0.114787 0.929823C0.124079 0.842471 0.150544 0.757816 0.19266 0.680725C0.234776 0.603634 0.291712 0.535626 0.360197 0.480611C0.429174 0.41992 0.509951 0.374142 0.59746 0.346149C0.684968 0.318157 0.777318 0.308554 0.868713 0.317944C0.960108 0.327334 1.04858 0.355514 1.12856 0.400715C1.20855 0.445916 1.27833 0.507163 1.33353 0.580611L4.55353 4.58061C4.65158 4.6999 4.70519 4.84953 4.70519 5.00395C4.70519 5.15836 4.65158 5.30799 4.55353 5.42728L1.2202 9.42728C1.15332 9.50796 1.06836 9.57173 0.972223 9.61343C0.876083 9.65513 0.771468 9.67358 0.666864 9.66728Z"
                fill="#616161"
              />
            </svg>
            <p >Furniture</p>
          </div>


        </div>

        <div className="check">
          <h4>APPLY FILTERS</h4>
          <div>
            <h5>PEPPERFRY BRANDS</h5>
            <div className="labelDiv">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Yes(933)</label>
            </div>

            <div className="labelDiv">
              {" "}
              <input type="checkbox" name="" id="" />
              <label htmlFor="">No(2)</label>
            </div>
          </div>

          <div>
            <h5>PRICE</h5>

            <div className="labelDiv">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Under ₹ 20,000 (141)</label>
            </div>
            <div className="labelDiv">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">₹ 20,000 To ₹ 40,000 (564)</label>
            </div>
            <div className="labelDiv">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Over ₹ 40,000 (232)</label>
            </div>
          </div>

          <div>
            <h5>DOOR LOCK</h5>
            <div className="labelDiv">
              {" "}
              <input type="checkbox" name="" id="" />
              <label htmlFor="">With Lock (3)</label>
            </div>
          </div>

          <div>
            <h5>PRIMARY MATERIAL</h5>

            <div className="labelDiv">
              {" "}
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Fabric (616)</label>
            </div>
            <div className="labelDiv">
              {" "}
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Velvet Fabric (121)</label>
            </div>
            <div className="labelDiv">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Engineered Wood (63)</label>
            </div>
            <div className="labelDiv">
              {" "}
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Polyester (34)</label>
            </div>
            <div className="labelDiv">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Leatherette (30)</label>
            </div>
          </div>
        </div>
      </div>

<div className="mainContainer">
        {products.map((e) => (
          <div key={e._id} style={{position:'relative',textAlign:"left",paddding:"3px 14px"}}>
                  <div>
              <Wrapper>
                <img src={e.colorImage[0].images[0]} alt="Sofa" />
                <div className="btn">
                <Link to={`/products/${e._id}`}><button> Add to Cart</button></Link>
                </div>
              </Wrapper>

            </div>

            <h4>{e.name}</h4>

            <div className="svgDiv1">
              <p>CasaCraft by Pepperfry</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6328 6.64689C21.3187 5.91948 20.8657 5.2603 20.2992 4.70627C19.7323 4.15058 19.064 3.70898 18.3305 3.40549C17.5699 3.08953 16.7541 2.92781 15.9305 2.9297C14.775 2.9297 13.6477 3.24611 12.668 3.84377C12.4336 3.98674 12.2109 4.14377 12 4.31486C11.7891 4.14377 11.5664 3.98674 11.332 3.84377C10.3523 3.24611 9.225 2.9297 8.06953 2.9297C7.2375 2.9297 6.43125 3.08908 5.66953 3.40549C4.93359 3.71017 4.27031 4.14845 3.70078 4.70627C3.13359 5.25968 2.6805 5.91901 2.36719 6.64689C2.04141 7.40392 1.875 8.20783 1.875 9.03517C1.875 9.81564 2.03438 10.6289 2.35078 11.4563C2.61563 12.1477 2.99531 12.8649 3.48047 13.5891C4.24922 14.7352 5.30625 15.9305 6.61875 17.1422C8.79375 19.1508 10.9477 20.5383 11.0391 20.5946L11.5945 20.9508C11.8406 21.1078 12.157 21.1078 12.4031 20.9508L12.9586 20.5946C13.05 20.536 15.2016 19.1508 17.3789 17.1422C18.6914 15.9305 19.7484 14.7352 20.5172 13.5891C21.0023 12.8649 21.3844 12.1477 21.6469 11.4563C21.9633 10.6289 22.1227 9.81564 22.1227 9.03517C22.125 8.20783 21.9586 7.40392 21.6328 6.64689ZM12 19.0969C12 19.0969 3.65625 13.7508 3.65625 9.03517C3.65625 6.64689 5.63203 4.71095 8.06953 4.71095C9.78281 4.71095 11.2688 5.6672 12 7.06408C12.7312 5.6672 14.2172 4.71095 15.9305 4.71095C18.368 4.71095 20.3438 6.64689 20.3438 9.03517C20.3438 13.7508 12 19.0969 12 19.0969Z"
                  fill="#C5C5C5"
                />
              </svg>
            </div>

            <div className="priceDiv">
              <p>
                {" "}
                <b>
                  ₹{e.disPrice}
                </b>
              </p>
              <p style={{ textDecoration: "line-through", margin: "5px" }}>
                {e.oriPrice}
              </p>
            </div>

            <div className="saving">
              <p>
                Save ₹
                {e.oriPrice-e.disPrice}{" "}
                ({e.percentage}% off) , Limited Time Offer
              </p>
            </div>

            <div className="svgDiv2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 12H12V13.5H3V12Z" fill="#969696" />
                <path d="M1.5 8.25H9V9.75H1.5V8.25Z" fill="#969696" />
                <path
                  d="M22.4505 12.4545L20.2005 7.2045C20.1427 7.06956 20.0466 6.95455 19.9241 6.87375C19.8016 6.79295 19.658 6.74992 19.5112 6.75H17.2612V5.25C17.2612 5.05109 17.1822 4.86032 17.0416 4.71967C16.9009 4.57902 16.7102 4.5 16.5112 4.5H4.51124V6H15.7612V15.417C15.4195 15.6154 15.1204 15.8796 14.8812 16.1942C14.6421 16.5088 14.4675 16.8676 14.3677 17.25H9.65474C9.47219 16.543 9.03807 15.9269 8.43373 15.517C7.8294 15.1072 7.09635 14.9319 6.37199 15.0239C5.64763 15.1159 4.98169 15.4689 4.499 16.0168C4.0163 16.5647 3.75 17.2698 3.75 18C3.75 18.7302 4.0163 19.4353 4.499 19.9832C4.98169 20.5311 5.64763 20.8841 6.37199 20.9761C7.09635 21.0681 7.8294 20.8928 8.43373 20.483C9.03807 20.0731 9.47219 19.457 9.65474 18.75H14.3677C14.5309 19.3937 14.904 19.9646 15.4281 20.3724C15.9521 20.7802 16.5972 21.0016 17.2612 21.0016C17.9253 21.0016 18.5703 20.7802 19.0944 20.3724C19.6185 19.9646 19.9916 19.3937 20.1547 18.75H21.7612C21.9601 18.75 22.1509 18.671 22.2916 18.5303C22.4322 18.3897 22.5112 18.1989 22.5112 18V12.75C22.5113 12.6484 22.4906 12.5479 22.4505 12.4545ZM6.76124 19.5C6.46457 19.5 6.17456 19.412 5.92788 19.2472C5.68121 19.0824 5.48895 18.8481 5.37542 18.574C5.26189 18.2999 5.23218 17.9983 5.29006 17.7074C5.34794 17.4164 5.4908 17.1491 5.70058 16.9393C5.91036 16.7296 6.17763 16.5867 6.4686 16.5288C6.75957 16.4709 7.06117 16.5006 7.33526 16.6142C7.60935 16.7277 7.84362 16.92 8.00844 17.1666C8.17326 17.4133 8.26124 17.7033 8.26124 18C8.26084 18.3977 8.10268 18.779 7.82146 19.0602C7.54024 19.3414 7.15894 19.4996 6.76124 19.5ZM17.2612 8.25H19.0162L20.6242 12H17.2612V8.25ZM17.2612 19.5C16.9646 19.5 16.6746 19.412 16.4279 19.2472C16.1812 19.0824 15.9889 18.8481 15.8754 18.574C15.7619 18.2999 15.7322 17.9983 15.7901 17.7074C15.8479 17.4164 15.9908 17.1491 16.2006 16.9393C16.4104 16.7296 16.6776 16.5867 16.9686 16.5288C17.2596 16.4709 17.5612 16.5006 17.8353 16.6142C18.1094 16.7277 18.3436 16.92 18.5084 17.1666C18.6733 17.4133 18.7612 17.7033 18.7612 18C18.7608 18.3977 18.6027 18.779 18.3215 19.0602C18.0402 19.3414 17.6589 19.4996 17.2612 19.5ZM21.0112 17.25H20.1547C19.9895 16.6076 19.6158 16.0381 19.0922 15.6309C18.5685 15.2238 17.9246 15.0018 17.2612 15V13.5H21.0112V17.25Z"
                  fill="#969696"
                />
              </svg>
              <p> Ships In 2 Days</p>
            </div>
          </div>
        ))}
      </div>

      </div>




    </>
  );
}
