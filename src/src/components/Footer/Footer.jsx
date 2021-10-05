import img1 from "./images/img1.png";
import img2 from "./images/image2.png";
import img3 from "./images/image 56.png";
import img4 from "./images/Group 22.png";
import img5 from "./images/Frame 56.png";
import img6 from "./images/Frame 55.png";
import img7 from "./images/Frame 53.png";
import img8 from "./images/Frame 54.png";
import img9 from "./images/image 61.png";
import img10 from "./images/image 62.png";
import img11 from "./images/Vecto.png";
import img12 from "./images/image 53.png";
import img13 from "./images/Frame 47.png";
import img14 from "./images/Frame 48.png";
import img15 from "./images/Group 20.png";
import img16 from "./images/image 49.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div className="upper_left">
          <div>
            <div>
              {" "}
              <img src={img16} alt="" />
            </div>
            <p>
              About Us Our Blog Careers Corporate Governance Pepperfry in the
              News Find a Studio Gift Cards Brands Customer Reviews
            </p>
          </div>

          <div>
            <h4>POPULAR CATEGORIES</h4>
            <p>
              Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets,
              Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves,
              TV Unit, Wardrobes, Outddoor Furniture, Bar Cabinets, Wall
              Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living
              Room Furniture, Study Tables, Dining Room Furniture, Office
              Furniture, Bed Room Furniture, Dining Table, Beds, Sofas
            </p>
          </div>
        </div>

        <div className="upper_right">
          <div>
            <h4>PARTNERS</h4>
            <p>
              Sell With Us Become a Franchise Design For Us Pepperfry Market
              place Policies Login to Your Merchent Dashboard Important : GST
              and You Corporate Enquiries
            </p>
          </div>
          <div>
            <h4>NEED HELP?</h4>
            <p>
              Contact Us Returns & Refund Track Your Order FAQs Buy on Phone
            </p>
          </div>
          <div>
            <h4>POPULAR BRANDS</h4>
            <p>
              Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana,
              Primorati, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian,
              Star India, Adiko Systems, Crystal Furnitech, Springtek,
              Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi,
              Muebles Casa, Duroflex
            </p>
          </div>
          <div>
            <h4>CITIES WE DELIVER TO</h4>
            <p>
              Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai,
              Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore,
              Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh,
              Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal,
              Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur,
              Aurangabad, Imphal, Hubli, Guwahati and many more
            </p>
          </div>
        </div>
      </div>

    <hr/>
      
      <div className="lowerFooter">
        <div>
          <h4>FOLLOW US</h4>
          <div className="payment">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
          </div>
        </div>

        <div>
          <h4>DOWNLOAD OUR APP</h4>
          <div className="appStore">
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </div>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="social">
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
            <img src={img15} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
