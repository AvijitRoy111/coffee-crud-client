// import background from "../assets/images/more/13.jpg";
// import logo from "../assets/images/more/logo1.png";
// import text1 from "../assets/images/more/name.png";
// import text2 from "../assets/images/more/get touch.png";
// import text3 from "../assets/images/more/Copyright Espresso Emporium ! All Rights Reserved.png";
// import logo1 from "../assets/images/more/24.jpg";
// import contact from "../assets/images/more/contact.png";
// import button from "../assets/images/more/button.png";
// import { FaFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdMarkEmailRead } from "react-icons/md";
// import { MdAddLocationAlt } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="mt-10 flex flex-col md:flex-row gap-12 justify-between items-center px-4 md:px-12 lg:px-32"
      >
        <div className="flex flex-col space-y-3 w-full">
          <img className="w-20" src={logo} alt="" />
          <img className="w-52" src={text1} alt="" />
          <p className="text-base font-medium text-[#1B1A1A] ">
            Always ready to be your friend. Come & Contact with us <br /> to share your
            memorable moments, to share <br /> with your best companion.
          </p>
          <p className="flex gap-2 *:text-4xl *:font-bold *:text-[#331A15]">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </p>
          <img className="w-52" src={text2} alt="" />
          <div className="*:flex *:gap-2 *:items-center space-y-3">
            <p>
              <span className="text-2xl font-bold text-[#331A15]">
                <FaPhoneAlt />
              </span>{" "}
              <span className="text-lg font-medium text-[#1B1A1A]">
                +88 01533 333 333
              </span>
            </p>
            <p>
              <span className="text-2xl font-bold text-[#331A15]">
                <MdMarkEmailRead />
              </span>{" "}
              <span className="text-lg font-medium text-[#1B1A1A]">
                info@gmail.com
              </span>
            </p>
            <p>
              <span className="text-2xl font-bold text-[#331A15]">
                <MdAddLocationAlt />
              </span>{" "}
              <span className="text-lg font-medium text-[#1B1A1A]">
                72, Wall street, King Road, Dhaka
              </span>
            </p>
          </div>
        </div>

        <div className=" flex flex-col  gap-4 w-full">
          <img className="w-52" src={contact} alt="" />
          <input type="text" name="name" placeholder="Name" className="w-full  px-4 py-2 rounded-md"/>
          <input type="email" name="Email" placeholder="Email" className="w-full px-4 py-2 rounded-md"/>
          <input type="text" name="message" placeholder="Message" className="w-full px-4 pt-4 pb-12 rounded-md"/>
          <button>
               <img src={button} alt="" />
          </button>
        </div>

      </div>

      <div style={{ backgroundImage: `url(${logo1})` }} className="h-16 flex items-center justify-center mt-16">
        <img  src={text3} alt="" />
      </div>
    </div>
  );
};

export default Footer;
