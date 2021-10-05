import { useState,useEffect } from "react"
// import data from "./ProductsData.json"
import axios from "axios"
import "./procards.css"
// console.log(data)
import styled from "styled-components"
import {Link} from "react-router-dom"
const ProCards = styled.div`
/* border: 1px solid black; */
background-color:#F5F5F5;
display: grid;
grid-template-columns: repeat(2,416px);
grid-column-gap:16px;
grid-row-gap:32px;
margin-left:290px;
.pro{
    background-color:white;
    width:416px;
    height:416px;
    padding:16px;
    position:relative;
    p{
        text-align:left;
        font-weight:600px;
    }
    span{
        text-align:left;
    }
    .btn{
    display:none;
    position: absolute;
    bottom:220px;
    opacity:0.8;
    width:384px;
    height:40px;
    border-radious:none;
}&:hover{
    .btn{
    display:block;
    cursor: pointer;
    background-color:white;
    }
    }
}
.pro > button{
    justify-content:center;
}
.pro > span{
    font-weight:300;
    font-size: 12px;
}
.top_div{
    height: 400px;
}

`;
const Topdiv = styled.div`
    height: 60px;
    background-color:white;
    text-align:center;
    padding-top:1%;
`;
const Secdiv = styled.div`
    height: 40px;
    margin-top:56px;
    background-color:white;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Thirddiv = styled.div`
margin-left:290px;
display:flex;
justify-cotent:space-between;
align-content:center;
aling-items:center;
`;
const Filterdiv = styled.div`
height:390px;
border: 1px solid white;
width:272px;
height:448px;
background-color: white;
padding:24px;
position: -webkit-sticky;
position:sticky;
float:left;
top:30px;
p{
    text-align:left;
}
h5{
    text-align:left;

}
input{
    margin-bottom:0%;
}
span{
font-weight: 500;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.02em;
}
`;
const Showbtn = styled.button`
background-color: #F26522;
justify-content: center;
margin-top: 3%;
margin-left: 20%;
color:white;
height:48px;
width:28%;
border:none;
`;
function Products() {
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

    function handleSort (e) {
        const value = e.target.value
        if(value === 'rel'){return}
        products.sort((a, b) => value * a.disPrice - value * b.disPrice);
        setProducts([...products])
    }
    return (
        <div className="fluid dark padding-t-144">
            <div style={{background:"white",paddingTop:"20px"}}>
                <Topdiv className="top_div">
                <h4>Search results for</h4>
                <h5>CasaCraft</h5>
            </Topdiv>
            <Secdiv>
                <div className="p-2 pb-5"><h6>Furniture</h6></div>
                <div className="p-2 pb-5"><h6>Furnishings</h6></div>
            </Secdiv>
            </div>
        <div className="width-1136 mx-auto mt-144 padding-y-160">
            <Thirddiv className="d-flex justify-content-between mt-144">
                    <div  style={{fontWeight:"700"}}><p className="p-0 my-1"> 171 Options in Sofa Sets</p></div>
                    <div style={{fontWeight:"500"}}> SortBy {"  "}
                        <select onChange={handleSort} style={{background: "white", border: "0.5px solid #C5C5C5"}}>
                        <option value= {"rel"}>Relevance</option>
                        <option value={-1} >Price high to low</option>
                        <option value={1}>Price low to high</option>
                    </select>
                    </div>
            </Thirddiv>
            <div style={{ background: "#F5F5F5"}}>
            <Filterdiv>
                <p>Home</p>
                <h5>Apply Filters</h5>
                <hr/>
                    <p>Brand </p>
                    <div>
                       <p><input type="checkbox" style={{ marginLeft:"0%"}}/><span> CasaCraft (171)</span> <br/></p>
               <p> <input type="checkbox" /><span> Woodsworth (171)</span> <br/></p>
                <p><input type="checkbox"/><span> Furny (70)</span> <br/></p>
               <p> <input type="checkbox" /><span> Furnitech (47)</span> <br/></p>
               <p> <input type="checkbox"/><span> Durian (171)</span> <br/></p>
                </div>
            </Filterdiv>

            <ProCards>
                {/* <div style={{border:"1px solid yellow"}}> */}

                {products.map((e) =>
                    <div key={e._id} className="pro">
                        <div><Link to={`/products/${e._id}`}>
                           <div style={{width:"384px",height:"180px"}}> <img src={e.colorImage[0].images[0]} alt="something" style={{height:"180px", width: "384px",paddingTop:"5px" }} /></div>
                            <div><button className="btn">Add to cart</button></div></Link>
                        </div>
                        <div className="p-0 mx-0 pro-outer-name">
                            <p className="name-of-pro" style={{fontWeight:"600"}}> {e.name}</p>
                        </div>
                        <div className="brand-name-outer">
                        <p style={{fontSize: "12px",color: "#969696" , fontWeight:"500",marginTop:"0px !important"}}>{e.category}</p>
                        </div>
                        <div>                        <p className="p-0 m-0" style={{margin:"none",padding:"none"}}>₹{e.oriPrice}</p></div>
                        <p className="p-0 m-0"> Offer: {e.disPrice}</p>
                    <p style={{color:"#14A9CC",fontSize:"12px",fontWeight:"normal"}}>Extra Cashback Worth ₹1,000</p>
                        <div style={{alignItems:"center" ,fontSize:"12px"}}><p><img src="https://ii1.pepperfry.com/images/svg/clip-exp-ship-icon-2018.svg" alt="icon ship"/> Ships In 2 Days</p></div>
                </div>
                )}
                {/* </div> */}
            </ProCards>

                    <Showbtn>SHOW MORE OPTIONS(27)</Showbtn>
                </div>
            </div>
        </div>
    )
}
export default Products

