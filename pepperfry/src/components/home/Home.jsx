import "./home.css"
import {Container,Row,Carousel,Image} from "react-bootstrap"
import {Link} from "react-router-dom"
export default function Home () {
     return <div className="most-outer-div">
          <Container fluid className="padding-52">
               <Row className="m-auto width-1136" >
                    <Row className="image-div m-auto p-0">
                    <Carousel className="p-0">
                    <Carousel.Item>
                    <img
                         className="d-block w-100  p-0 m-0"
                         src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_28092021_2x.jpg"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         {/* <h3>First slide label</h3> */}
                         {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB03_Web_28092021_2x.jpg"
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         {/* <h3>Second slide label</h3> */}
                         {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_28092021_2x.jpg"
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         {/* <h3>Third slide label</h3> */}
                         {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                         </Carousel>
                    </Row>
                    <div className="height-72">

               </div>
               <Row className="mx-0 p-0">
                    <Image className="banner-lower width-1136 px-0" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Safe_Web2_2x_11062021.jpg"></Image>
               </Row>
               <div className="bank-offer width-1136  text-start p-0">
                    <h4>
                    <b> BANK OFFERS</b>
                    </h4>
               </div>
               <div className="bank-offer-list p-0 width-1136 m-auto">
                    <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_0116421_2x_new.jpg"></Image>
                    <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_0216421_2x_new.jpg"></Image>
                    <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_0416721_2x.jpg"></Image>
                    <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_HDFC_02_5721_2x.jpg"  ></Image>
                    <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_0522421_2x.jpg"></Image>
                    <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_YES_01_5721_2x.jpg" ></Image>
               </div>
               </Row>
          </Container>



          {/* ########################################################################################### */}




          <Container fluid  className="padding-52 dark m-0" >
               <Row className="p-0 dark width-1136 m-auto">
                    <Row className="p-0 bank-offer text-start width-1136 bottom-32 mx-auto">
                         <h3 className="p-0 m-0">
                              CURATED FOR OUR FAM
                         </h3>
                         <p className="p-0 mb-4">
                         There is Something For Everyone
                         </p>
                         <div className="height-32"></div>
                    </Row>
                    <div className="height-32"></div>
                    <Row className="p-0 width-1136 m-auto d-flex justify-content-between bottom-32" >
                         {/* 1 */}
                         <div className="fam-tile m-0" >
                              <div className="text-start image-holder  overflow-hide">
                                   <Image  className="title-image" src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-woodsworth_2x_15012021.png"  ></Image>
                              </div>
                              <div className="traits-line text-start">
                                   Traits : Contemporary, Clean, functional
                              </div>
                              <div className="overflow-hide">
                                   <Image  className='fam-tile-main-image fade-effect fade-effect' src="https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_1.jpg"></Image>
                              </div>
                              <div className="fams-image-info p-0">
                                   Our Contemporary Wooden Furniture Brand that offers wide furniture Choices.
                              </div>
                              <div className="fams-popular-for p-0">
                              Popular For :<span className="blue-text"> Sofas, Coffee tables, End Tables & More.</span>
                              </div>
                         </div>
                        {/* 2 */}
                         <div className="fam-tile m-0" >
                              <div className="text-start image-holder">

                                   <Image className="title-image" src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-casacraft_2x_15012021.png"  ></Image>
                              </div>
                              <div className="traits-line text-start">
                                   Traits : Trendy, Comfirtable and Vibrant
                              </div>
                              <div className="overflow-hide">
                                    <Link style={{textDecoration:"none",color:"inherit",marginLeft:"-12px",padding:"none"}} to="products" >
                              <Image  className='fam-tile-main-image fade-effect' src="https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_2.jpg"></Image>
                                   </Link>
                              </div>
                              <div className="fams-image-info p-0">
                                   Modern Living Room Furniture Brand Which Brings You
                                   Latest Trends from across the Globe
                              </div>
                              <div className="fams-popular-for p-0">
                              Popular For :<span className="blue-text"> Sofas, Coffee tables, End Tables & More</span>
                              </div>
                         </div>
                         {/* 3 */}
                         <div className="fam-tile m-0" >
                              <div className="text-start image-holder">
                                    <Image  className="title-image" src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mudramark_2x_15012021.png"  ></Image>
                              </div>
                              <div className="traits-line text-start">
                                   Traits : Contemporary, Clean, functional
                              </div>
                              <div className="overflow-hide">
                              <Image  className='fam-tile-main-image fade-effect' src="https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_3.jpg"></Image>
                              </div>
                              <div className="fams-image-info p-0">
                                   A wide range of Traditional Furniture inspired from our Indian Heritage.                              </div>
                              <div className="fams-popular-for p-0">
                              Popular For :<span className="blue-text"> Coffee Tables, Cabinets, Dining sets & More</span>
                              </div>
                         </div>
                    </Row>
                    <Row className="p-0 width-1136 mx-auto d-flex justify-content-between top-32 mx-auto" >
                        {/* 4 */}
                         <div className="fam-tile" >
                              <div className="text-start image-holder">
                                   <Image  className="title-image"src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mintwud_2x_15012021.png"  ></Image>
                              </div>
                              <div className="traits-line text-start  top-23">
                                   Traits : Modern, Functional, Affordable
                              </div>
                              <div className="overflow-hide">
                              <Image  className='fam-tile-main-image fade-effect' src="https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_19082021_4.jpg"></Image>
                              </div>
                              <div className="fams-image-info">
                                   Designed for Compact Homes. Its Minimalistic, Simple and Functional Furniture at Affordable Price.                              </div>
                              <div className="fams-popular-for p-0">
                              Popular For :<span className="blue-text"> Wardrobes, Beds, Shoe Racks & More</span>
                              </div>
                         </div>
                         {/* 5 */}
                         <div className="fam-tile" >
                              <div className="text-start image-holder">
                                   <Image  className="title-image"src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-amberville_2x_15012021.png"  ></Image>
                              </div>
                              <div className="traits-line text-start">
                                   Traits : Gracious Living, Colonial Style, Curved Lines
                              </div>
                              <div className="overflow-hide">
                              <Image  className='fam-tile-main-image fade-effect' src="https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_5.jpg"></Image>
                              </div>
                              <div className="fams-image-info p-0">
                              A range of Hand-crafted Colonial Furniture inspired by Mid-Century Designs.
                              </div>
                              <div className="fams-popular-for p-0">
                              Popular For :<span className="blue-text"> Study Tables, Chest of Drawers, Chairs & More</span>
                              </div>
                         </div>
                         {/* 6 */}
                         <div className="fam-tile" >
                              <div className="text-start image-holder">
                                   <Image  className="title-image"src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-bohemiana_2x_15012021.png"  ></Image>
                              </div>
                              <div className="traits-line text-start">
                                   Traits : Hand-Crafted, Free-Spirited , Adventurous
                              </div>
                              <div className="overflow-hide">
                                   <Image className="fam-tile-main-image fade-effect"  src="https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_6.jpg"></Image>
                              </div>
                              <div className="fams-image-info p-0">
                                   Eclectic Furniture inspired by the Spirit of Freedom and Adventure.
                              </div>
                              <div className="fams-popular-for p-0">
                              Popular For :<span className="blue-text"> End Tables, Seating stools, Bar stools & More</span>
                              </div>
                         </div>
                    </Row>
               </Row>
          </Container>




          {/* ########################################################################################### */}





          <Container fluid className="m-auto width-1136 padding-52">
               <div className="bank-offer width-1136 text-start p-0 bottom-32 mx-auto">
                    <h3 className="p-0 m-0">
                         START THE PARTY
                    </h3>
                    <p className="p-0 mb-4">
                         With our Latest Collection
                    </p>
               </div>
                <Row className="p-0 width-1136 m-auto">
                    <div className="p-0 m-0 d-flex justify-content-between">
                    <div className="p-0 party-card m-0" >
                              <div className="image-div m-0 overflow-hide p-0 overflow-hide">
                                   <Image className="fade-effect"  className="fade-effect"  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_1.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h4 className="p-0 m-0 party-main-text">TISHYA</h4>
                                   <p className="py-1 m-0 party-sub-text">Artsy Cutwork</p>
                              </div>
                         </div>
                         <div className="p-0 party-card" >
                              <div className="image-div m-0 p-0 overflow-hide">
                                   <Image className="fade-effect" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_2.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h4 className="p-0 m-0 party-main-text">BONITO</h4>
                                   <p className="py-1 m-0 party-sub-text">Colourfully Yours</p>
                              </div>
                         </div>
                         <div className="party-card" >
                              <div className="image-div m-0 p-0 overflow-hide">
                                        <Image className="fade-effect" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_3.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h4 className="p-0 m-0 party-main-text">HARLESTON</h4>
                                   <p className="py-1 m-0 party-sub-text">A Tasteful Stance</p>
                              </div>

                         </div>
                    </div>
                    </Row>
          </Container>


          {/* ########################################################################################### */}


          <Container className="dark padding-52"  fluid>
               <Row className="p-0 width-1136 m-auto">
                    <div className="bank-offer width-1136 text-start p-0 bottom-32 mx-auto">
                         <h3>
                         THANKS FOR THE LOVE
                         </h3>
                         <p>Our Most Popular</p>
                    </div>
                    <div className="p-0 m-0 d-flex justify-content-between bottom-32">
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_1.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_2.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_3.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_4.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                    </div>
                    <div className="div-height-32"></div>
                    <div className="p-0 m-0 d-flex justify-content-between">
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_5.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_6.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_7.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="m-0 image-div fade-effect" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Tf_web_14092021_8.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                    </div>
               </Row>
          </Container>


          {/* ########################################################################################### */}



          <Container fluid className="padding-52">
               <Row className="p-0 width-1136 m-auto">
                    <div className="bank-offer width-1136 text-start p-0 bottom-32 mx-auto">
                         <h3>
                         WAKE UP WITH SMILE
                         </h3>
                         <p>Mattresses at Big Discounts</p>
                    </div>
                    <div className="height-32"></div>
                    <div className="p-0 m-0 d-flex justify-content-between bottom-32">
                         <div className="smile-div p-0 m-0" >
                              <div className="p-0 m-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_03082021_1.jpg"></Image>
                              </div>
                         </div>
                         <div className="smile-div p-0 m-0" >
                              <div className="image-div m-0 overflow-hide p-0">
                                   <Image className="fade-effect"  src="https://ii3.pepperfry.com/media/wysiwyg/banners/Tm_web_31082021_2.jpg"></Image>
                              </div>
                         </div>
                         <div className="smile-div p-0 m-0" >
                              <div className="image-div m-0 overflow-hide p-0">
                                   <Image className="fade-effect"  src="https://ii1.pepperfry.com/media/wysiwyg/banners/tm_web_03082021_3.jpg"></Image>
                              </div>
                         </div>
                         <div className="smile-div p-0 m-0" >
                              <div className="image-div m-0 overflow-hide p-0">
                                   <Image className="fade-effect"  src="https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_03082021_4.jpg"></Image>
                              </div>
                         </div>
                    </div>
                    <div className="p-0 m-0 d-flex justify-content-between bottom-32">
                         <div className="smile-div-2 p-0 m-0" >
                              <div className="m-0 py-2">
                                   <h4>Foam Matters</h4>
                                   <p>1000-products | Starting Rs. 3,399</p>
                              </div>
                         </div>
                         <div className="smile-div-2 p-0 m-0" >
                              <div className="m-0 py-2">
                                   <h4>Foam Matters</h4>
                                   <p>1000-products | Starting Rs. 3,399</p>
                              </div>
                         </div>
                         <div className="smile-div-2 p-0 m-0" >
                              <div className="m-0 py-2">
                                   <h4>Foam Matters</h4>
                                   <p>1000-products | Starting Rs. 3,399</p>
                              </div>
                         </div>
                         <div className="smile-div-2 p-0 m-0" >
                         <div className="py-2 m-0" >
                                   <h4>Foam Matters</h4>
                                   <p>1000-products | Starting Rs. 3,399</p>
                              </div>
                         </div>
                    </div>
              </Row>
          </Container>



          {/* ########################################################################################### */}



          <Container fluid className="dark padding-52">
               <Row className="p-0 width-1136 m-auto">
                    <div className="bank-offer width-1136  bottom-32 text-start p-0">
                         <h3>
                         LITTLE THINGS TO MAKE BIG DIFFERENCE
                         </h3>
                         <p>Customer’s Fav Accessories</p>
                    </div>
                    <div className="p-0 m-0 d-flex justify-content-between bottom-32 width-1136 p-0">
                         <div className="thank-card m-0" >
                              <div className="image-div m-0 overflow-hide p-0">
                                   <Image className="fade-effect"  src="https://ii3.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_1.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_2.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii2.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_3.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii3.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_4.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                    </div>
                    <div className="div-height-32"></div>
                    <div className="p-0 m-0 d-flex justify-content-between bottom-32 width-1136 p-0">
                         <div className="thank-card m-0" >
                              <div className="image-div m-0 p-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_5.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii2.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_6.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii3.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_7.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                         <div className="thank-card" >
                              <div className="image-div m-0 overflow-hide">
                                   <Image className="fade-effect"  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Td_web_14092021_8.jpg"></Image>
                              </div>
                              <div className="image-info">
                                   <h6 className="p-0">Houseparty Essential</h6>
                                   <p  className="p-0 my-0">160+ Products | Starting ₹ 12,999</p>
                              </div>
                         </div>
                    </div>
               </Row>
          </Container>
          <div className="div-height-32"></div>
          <Container fluid className="padding-52">
          <Row className="p-0 width-1136 m-auto">
               <div className="bank-offer width-1136  bottom-32 text-start p-0">
                         <h3>
                     PACK MORE PUNCH
                         </h3>
                         <p>More Power To Your Elbow</p>
               </div>
              <div className="d-flex p-0">
                    <div className="m-0 p-0 vertical-card">
                    <div className="p-0 m-0 card-image overflow-hide">
                         <Image className="fade-effect p-0 m-0" src="https://ii2.pepperfry.com/media/wysiwyg/banners/home-store-furniture-20198.jpg"/>
                    </div>
                    <div className="vertical-card-links padding-16">
                              <div className="card-links-title">
                                   FURNITURE
                              </div>
                              <div className="card-links">
                                   <div>Sofas</div>
                                   <div>Seating</div>
                                   <div>Chairs</div>
                                   <div>Tables</div>
                                   <div>Cabinetry</div>
                                   <div>Dining and Bars</div>
                                   <div>Beds</div>
                              </div>
                    </div>
                    </div>
               <div className="d-flex flex-wrap p-0 start-19 justify-content-between">
                    <div className="horizontal-card bottom-16 d-flex p-0 text-start">
                         <div className="card-horizontal-image text-start overflow-hide d-inline-block">
                              <Image className="p-0 m-0 fade-effect" src="https://ii3.pepperfry.com/media/wysiwyg/banners/home-store-decor-20198.jpg"></Image>
                         </div>
                              <div className="horizontal-card-links padding-16">
                                   HOME DECOR
                              <div>
                              <div className="card-links-title bottom-16">
                                   FURNITURE
                                   </div>
                                   <div>Sofas</div>
                                   <div>Wall Art</div>
                                   <div>Chairs</div>
                                   <div>Tables</div>
                                   <div>Cabinetry</div>
                                   <div>Dining and Bars</div>
                                   <div>Beds</div>
                              </div>
                         </div>
                    </div>
                    <div className="horizontal-card bottom-16 d-flex p-0 text-start ">
                              <div className="card-horizontal-image overflow-hide text-start d-inline-block ">
                                   <Image className="p-0 m-0 fade-effect" src="https://ii2.pepperfry.com/media/wysiwyg/banners/home-store-kids-20198.jpg"></Image>
                              </div>
                                   <div className="horizontal-card-links padding-16">
                                        <div>
                                        <div className="card-links-title bottom-16">
                                             FURNITURE
                                             </div>
                                             <div>Sofas</div>
                                             <div>Seating</div>
                                             <div>Chairs</div>
                                             <div>Tables</div>
                                             <div>Cabinetry</div>
                                             <div>Dining and Bars</div>
                                             <div>Beds</div>
                                        </div>
                              </div>
                              </div>
                    <div className="horizontal-card bottom-16 d-flex p-0 text-start ">
                              <div className="card-horizontal-image overflow-hide  text-start d-inline-block ">
                                   <Image className="p-0 m-0 fade-effect" src="https://ii1.pepperfry.com/media/wysiwyg/banners/home-store-furnishings-2020.jpg"></Image>
                              </div>
                                   <div className="horizontal-card-links padding-16">
                                        <div>
                                        <div className="card-links-title bottom-16">
                                             FURNITURE
                                             </div>
                                             <div>Sofas</div>
                                             <div>Seating</div>
                                             <div>Chairs</div>
                                             <div>Tables</div>
                                             <div>Cabinetry</div>
                                             <div>Dining and Bars</div>
                                             <div>Beds</div>
                                        </div>
                              </div>
                              </div>
                              <div className="horizontal-card bottom-16  d-flex p-0 text-start ">
                              <div className="card-horizontal-image overflow-hide text-start d-inline-block ">
                              <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/home-store-lamps-20198.jpg"  className="p-0 m-0 fade-effect"/>
                              </div>
                                   <div className="horizontal-card-links padding-16">
                                        <div>
                                        <div className="card-links-title bottom-16">
                                             FURNITURE
                                             </div>
                                             <div>Sofas</div>
                                             <div>Seating</div>
                                             <div>Chairs</div>
                                             <div>Tables</div>
                                             <div>Cabinetry</div>
                                             <div>Dining and Bars</div>
                                             <div>Beds</div>
                                        </div>
                              </div>
                    </div>
               </div>
               <div className="p-0 vertical-card start-19">
                         <div className="p-0 m-0 card-image overflow-hide">
                              <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/home-store-mattresses-2020.jpg"  className="p-0 m-0 fade-effect"/>
                         </div>
                         <div className="vertical-card-links padding-16">
                                   <div className="card-links-title">
                                        FURNITURE
                                   </div>
                                   <div className="card-links">
                                        <div>Sofas</div>
                                        <div>Seating</div>
                                        <div>Chairs</div>
                                        <div>Tables</div>
                                        <div>Cabinetry</div>
                                        <div>Dining and Bars</div>
                                        <div>Beds</div>
                                   </div>
                         </div>
                    </div>
               </div>
          </Row>
          </Container>
     </div>
}