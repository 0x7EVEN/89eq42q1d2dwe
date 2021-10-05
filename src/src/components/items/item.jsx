import { useEffect, useState ,useContext} from "react"
import "./item.css"
import axios from "axios"
import { LoginContext } from "../../context/loginContext";
import { Link,useParams,useHistory} from "react-router-dom";


export default function Item(){
    const {login} = useContext(LoginContext);

    const history = useHistory()

    const params = useParams()
    const [Oprice,setOPrice] = useState(68999);
    const [Dprice, setDprice] = useState(30399);
    const [per,setPer] = useState(100);
    const [product,setProduct] = useState({});


    const [addCart , setAddCart] = useState(false);
    const [quan,setQuan] = useState(1);

    useEffect(() => {
        GetData();
        // console.log(1)
    },[])

    async function GetData () {
        const {data} = await axios.get(`http://localhost:4321/products/${params.id}`);
        setPer(data.percentage)
        setOPrice(data.oriPrice);
        setDprice(data.disPrice);
        setProduct({...data})
    }

    const data = [
        {
            image1:"https://ii1.pepperfry.com/media/catalog/product/j/o/266x293/jordan-rhs-sectional-sofa-in-blue-colour-jordan-rhs-sectional-sofa-in-blue-colour-lacgro.jpg",
            name : "Jordan RHS Sectional Sofa in Blue Colour",
            disPrice : 30559,
            oriPrice : 47999
        },
        {
            image1:"https://ii1.pepperfry.com/media/catalog/product/h/o/266x293/horse-on-panel-wall-art-with-led-in-multicolour-by-mahalaxmi-art-and-crafts-horse-on-panel-wall-art--s1xweb.jpg",
            name : "Horse On Panel Wall Art With Led",
            disPrice : 7199,
            oriPrice : 12238
        }
    ]

    const dataDis = data.reduce((a,b)=>{
        return a.disPrice+b.disPrice;
    })
    const dataOri = data.reduce((a,b)=>{
        return a.oriPrice+b.oriPrice;
    })

    function Add(){
        //console.log(userID,quan,product._id);
        axios.put("http://localhost:4321/signup/addtocart",{
            item : product._id,
            quantity : quan,
            userID : login
        })
        .then((res)=>{
            setAddCart(true);

        })
    }


    const [read,setRead] = useState(false);

    function Add1(){
        //console.log(userID,quan,product._id);
        axios.put("http://localhost:4321/signup/addtocart",{
            item : product._id,
            quantity : quan,
            userID : login
        })
        .then((res)=>{
            setRead(true);
            history.push('/cart')
            //<Redirect to="/cart"/>
        })
    }

    function handleQuant (e) {
        const value = e.target.value

        setQuan(value);
    }


    const handleImage1 = ()=>{
        let mainI = document.getElementById("mainI");
        let subI1 = document.getElementById("subI1");
        let subI2 = document.getElementById("subI2");
        let subI3 = document.getElementById("subI3");
        mainI.src = subI1.src;
        subI1.style.border = "1px solid #F26522";
        subI2.style.border = "1px solid black";
        subI3.style.border = "1px solid black";
    }

    const handleImage2 = ()=>{
        let mainI = document.getElementById("mainI");
        let subI1 = document.getElementById("subI1");
        let subI2 = document.getElementById("subI2");
        let subI3 = document.getElementById("subI3");

        mainI.src = subI2.src;

         subI2.style.border = "1px solid #F26522";
         subI1.style.border = "1px solid black";
        subI3.style.border = "1px solid black";
    }

    const handleImage3 = ()=>{
        let mainI = document.getElementById("mainI");
        let subI1 = document.getElementById("subI1");
        let subI2 = document.getElementById("subI2");
        let subI3 = document.getElementById("subI3");
        mainI.src = subI3.src;
        subI3.style.border = "1px solid #F26522";
        subI1.style.border = "1px solid black";
        subI2.style.border = "1px solid black";
    }

    const handleColor1 = ()=>{
        let mainI = document.getElementById("mainI");
        let subI1 = document.getElementById("subI1");
        let subI2 = document.getElementById("subI2");
        let subI3 = document.getElementById("subI3");

        let color1 = document.getElementById("color1");
        let color2 = document.getElementById("color2");
        let color3 = document.getElementById("color3");
        let color4 = document.getElementById("color4");

        color1.style.border = "1px solid #F26522";
        color2.style.border = "1px solid black";
        color3.style.border = "1px solid black";
        color4.style.border = "1px solid black";

        let col = document.getElementById("color")

        mainI.src = product.colorImage[0].images[0];
        subI1.src= product.colorImage[0].images[0];
        subI2.src= product.colorImage[0].images[1];
        subI3.src= product.colorImage[0].images[2];

        col.innerHTML = product.colorImage[0].color;

    }

    const handleColor2 = ()=>{
        let mainI = document.getElementById("mainI");
        let subI1 = document.getElementById("subI1");
        let subI2 = document.getElementById("subI2");
        let subI3 = document.getElementById("subI3");

        let color1 = document.getElementById("color1");
        let color2 = document.getElementById("color2");
        let color3 = document.getElementById("color3");
        let color4 = document.getElementById("color4");

        color2.style.border = "1px solid #F26522";
        color1.style.border = "1px solid black";
        color3.style.border = "1px solid black";
        color4.style.border = "1px solid black";

        mainI.src = product.colorImage[1].images[0];
        subI1.src= product.colorImage[1].images[0];
        subI2.src= product.colorImage[1].images[1];
        subI3.src= product.colorImage[1].images[2];

        let col = document.getElementById("color")
        col.innerHTML = product.colorImage[1].color;
    }

    const handleColor3 = ()=>{
        let mainI = document.getElementById("mainI");
        let subI1 = document.getElementById("subI1");
        let subI2 = document.getElementById("subI2");
        let subI3 = document.getElementById("subI3");

        let color1 = document.getElementById("color1");
        let color2 = document.getElementById("color2");
        let color3 = document.getElementById("color3");
        let color4 = document.getElementById("color4");

        color3.style.border = "1px solid #F26522";
        color1.style.border = "1px solid black";
        color2.style.border = "1px solid black";
        color4.style.border = "1px solid black";

        mainI.src = product.colorImage[2].images[0];
        subI1.src= product.colorImage[2].images[0];
        subI2.src= product.colorImage[2].images[1];
        subI3.src= product.colorImage[2].images[2];

        let col = document.getElementById("color")
        col.innerHTML = product.colorImage[2].color;

    }

    const handleColor4 = ()=>{
        let mainI = document.getElementById("mainI");
        let subI1 = document.getElementById("subI1");
        let subI2 = document.getElementById("subI2");
        let subI3 = document.getElementById("subI3");

        let color1 = document.getElementById("color1");
        let color2 = document.getElementById("color2");
        let color3 = document.getElementById("color3");
        let color4 = document.getElementById("color4");

        color4.style.border = "1px solid #F26522";
        color1.style.border = "1px solid black";
        color3.style.border = "1px solid black";
        color2.style.border = "1px solid black";

        mainI.src = product.colorImage[3].images[0];
        subI1.src= product.colorImage[3].images[0];
        subI2.src= product.colorImage[3].images[1];
        subI3.src= product.colorImage[3].images[2];

        let col = document.getElementById("color")
        col.innerHTML = product.colorImage[3].color;

    }


    return product.name ? (

        <div style={{textAlign:"left",marginTop:"20px",fontSize:"16px",fontWeight:"600"}}>
        <div className="topBar"><Link to="/" className="topBar" style={{textDecoration:"none"}}>Home</Link><span className="topW"><img className="small-icon"src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" /></span>Sofas and Lounges<span className="topW"><img className="small-icon"src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" /></span><span className="">{product.name}</span></div>
        <div className="grid1">
            <div>
                <div className="sticky">
                    <img id="mainI" src={product.colorImage[0].images[0]} alt="wrong url"/>
                    <div style={{margin:"15px 0px"}}>
                        <img id="subI1" onClick={handleImage1} style={{border:"1px solid #F26522"}} className="image2" src={product.colorImage[0].images[0]}/>
                        <img id="subI2" onClick={handleImage2} className="image2" src={product.colorImage[0].images[1]}/>
                        <img id="subI3" onClick={handleImage3} className="image2" src={product.colorImage[0].images[2]}/>
                    </div>
                    <img className="image3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAu_nqoT42wQLJ43bxRReetCyQNAIjS6SNSg&usqp=CAU"/><span className="name9">Share This Product</span><span className="name10">Add to Wishlist<img className="image4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYfQ9fOWMSy5mrTuOJSVhaxvOB4bIE7ZAqQ&usqp=CAU"/></span>
                </div>
            </div>
            <div style={{marginLeft:"0.5%"}}>
                    <div className="name1">{product.name}</div>
                    <div className="name2">{product.brand} by pepperfry</div>
                <div className="name3">Pepperfry Fullfiled<span className="name4">BEST SELLER</span></div><br/>
                <div className="name7"><span style={{fontSize: "23px",color: "#F26522",textAlign:"left"}}>&#8377;</span><span className="name5"> {Dprice} </span><span className="name6">&#8377; {Oprice} MRP</span>  (Inclusive of all taxes)</div>
                <div className="name7">Total Savings <span className="name8">  &#8377; {Oprice-Dprice} ({per}% Off)</span></div>
                <div className="name11">Selling at Best Price with Extra 10% Off<span style={{marginLeft:"10px"}}>at Checkout</span></div>
                <div style={{display:"grid",gridTemplateColumns:"150px 150px 100px 100px",marginTop:"10px",borderBottom:"1px solid rgb(206, 189, 189)",paddingBottom:"10px"}}>
                    <div className="name12">
                       <div style={{marginLeft:"40px",marginTop:"10px",marginBottom:"10px"}}>EMI From ₹ {product.emi} No Cost EMI</div>
                    </div>
                    <div className="name13">
                       <div style={{marginLeft:"40px",marginTop:"10px",marginBottom:"10px"}}>{product.details.Waranty} Month's Warranty</div>
                    </div>
                    <div className="name14">
                       <div style={{marginLeft:"40px",marginTop:"10px",marginBottom:"10px"}}>Easy Returns</div>
                    </div>
                    <div className="name15">
                       <div style={{marginLeft:"40px",marginTop:"10px",marginBottom:"10px"}}>Safe Delivery</div>
                    </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"100px 400px",marginTop:"25px"}}>
                    <div style={{marginTop:"70%"}} className="side">Color</div>
                    <div style={{display:"grid",gridTemplateColumns:"190px 190px"}}>
                        <img key={1} id="color1" onClick={handleColor1}  style={{marginBottom: "20px",width:"154px",height:"77px", }} src={product.colorImage[0].images[0]}/>
                        <img key={2} id="color2" onClick={handleColor2} style={{marginBottom: "20px",width:"154px",height:"77px", }} src={product.colorImage[1].images[0]}/>
                        <img key={3} id="color3" onClick={handleColor3} style={{marginBottom: "20px",width:"154px",height:"77px", }} src={product.colorImage[2].images[0]}/>
                        <img key={4} id="color4" onClick={handleColor4} style={{marginBottom: "20px",width:"154px",height:"77px", }} src={product.colorImage[3].images[0]}/>
                    </div>
                </div>
                <div style={{marginTop:"20px"}} className="side">Seating <button className="btn1">3 Seater</button><button className="btn2">2 Seater</button><button className="btn2">1 Seater</button></div>
                <div className="block">
                    <div className="side">More Offers:</div>
                    <div className="part2">
                        <div className="hdfc">HDFC EMI</div>
                        <div className="hdfc1">
                           Get Extra Rs.1,500 Off on HDFC EMI Purchases of Rs.10,000 and Above. Code: <span style={{fontWeight:"bold",color:"black"}}>HDFCPF1500</span>
                        </div>
                        <div style={{marginTop:"10px"}} className="hdfc">HDFC Bank Credit Card</div>
                        <div className="hdfc1">
                            Get Extra Rs.1,000 Off on Purchases through HDFC Credit Card. Applicable on Orders Above Rs.10,000<br/> Code : <span style={{fontWeight:"bold",color:"black"}}> HDFCPF1000</span>
                        </div>
                        <div className="hdfc" style={{marginTop:"10px"}}>No Cost EMI</div>
                        <div className="hdfc1">Get up to 6 months EMI with 0% interest rate</div>
                    </div>
                </div>
                <div className="side">
                    Quantity
                    <select onChange={handleQuant} className="option">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                </div>
                <div className="underline">
                    {addCart ? <Link style={{textDecoration:"none",color:"white"}} to="/cart"><button style={{marginLeft:"0px"}} className="btn4">GO TO CART</button></Link> : <button onClick={Add} className="btn3">ADD TO CART</button>}
                    <button className="btn4" onClick={Add1}>BUY NOW</button>
                </div>
                <div className="delivery">
                    Delivery
                    <input className="delInp" type="text" placeholder="Pincode"></input>
                    <button className="delbtn">APPLY</button>
                    <div className="delImg"><span className="delivery2">Pepperfry Fulfilled, Get It By Wed, 13 Oct Delivery - FREE For Today</span></div>
                    <div className="delImg1"><span className="delivery2">Assembly Offered By Pepperfry Within 24 Hours Assembly - ₹ 449</span></div>
                    <div className="delImg3"><span style={{marginLeft:"35px"}} className="delivery2">Nearest Studio Pepperfry, Pepperfry Banjara Hills (25 km away)</span></div>
                </div>
                <div style={{lineHeight:"18px"}}>
                        <div>Details<span className="detail1">Brand</span><span style={{marginLeft: "0px"}} className="detail2"> : {product.details.Brand}</span></div>
                    <div className="detail2"><span className="detailbold">Dimensions</span> : H{product.details.Dimensions[0]} x W x {product.details.Dimensions[1]} x D {product.details.Dimensions[2]}.5; Seating height :{product.details.Seating_Height} (all dimensions are in inches)</div>
                    <div className="detail2"><span className="detailbold">Weight</span> : {product.details.Weight} KG</div>
                    <div className="detail2"><span className="detailbold">Waranty</span> : {product.details.Waranty} Month's Warranty</div>
                    <div className="detail2"><span className="detailbold">Assembly</span> : {product.details.Assembly}</div>
                    <div className="detail2"><span className="detailbold">Primary Material</span> : {product.details.Primary_Material}</div>
                    <div className="detail2"><span className="detailbold">Room Type</span> : Living Room</div>
                    <div className="detail2"><span className="detailbold">Seating Height</span> : {product.details.Seating_Height}</div>
                    <div className="detail2"><span className="detailbold">Colour : </span><span id="color">{product.colorImage[0].color}</span></div>
                    <div className="detail2"><span className="detailbold"> Sku</span> : FN1850478-S-PM26363</div>
                </div>
            </div>
        </div>
        <div style={{marginBottom:"50px"}} className="nextdiv">
            <div>BOUGHT TOGETHER</div>
            <div className="nextgrid">
                {data.map((el)=>{
                    return <div className="back" style={{marginTop:"50px"}}>
                       <img style={{width:"245px",marginLeft:"10px"}} src={el.image1}/>
                       <div className="font">{el.name}</div>
                       <div className="font" style={{marginTop:"5px"}}><span style={{fontWeight:"bold"}}>&#8377; {el.disPrice} </span><span className="font1"> &#8377; {el.oriPrice}</span></div>
                    </div>
                })}
                <div style={{marginTop:"100px"}}>
                    <span style={{marginLeft:"200px",marginTop:"100px"}} className="font3">&#8377; {dataDis} </span><span style={{fontSize:"14px"}} className="font1">&#8377; {dataOri} MRP</span>
                    <div style={{margin:"0px 0px 10px 190px"}} className="font4">Total Savings &#8377; {dataOri-dataDis} (off)</div>
                    <button className="btn4 btn5" style={{backgroundImage:"none",border:"2px dashed #948686",color:"black"}}>EPIC OFFERS DAILY</button>
                    <button className="btn4 btn5">BUY SET</button>
                </div>

            </div>
        </div>
    </div>  ): "laoding..."
}

