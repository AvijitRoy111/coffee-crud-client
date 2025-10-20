import { Link } from "react-router-dom";
import error from "../assets/images/404/404.gif"
import back from "../assets/back-home-removebg-preview.png";
import { FaArrowLeft } from "react-icons/fa6";

const Error = () => {
     return (
          <div className="w-full">
      <div className="mt-10 ml-32">
        <Link to="/">
          <button className="flex gap-2 items-center">
            <span className="text-xl font-bold text-black">
              <FaArrowLeft />
            </span>
            <img className="w-20" src={back} alt="" />
          </button>
        </Link>
      </div>
      <div className=" flex flex-col items-center justify-center">
               <img src={error} alt="" />
      </div>
    </div>
     );
};

export default Error;