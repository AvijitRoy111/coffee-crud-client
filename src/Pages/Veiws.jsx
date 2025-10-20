// import coffee from "../assets/images/more/16.png";
// import back from "../assets/back-home-removebg-preview.png";
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import title from "../assets/images/more/tittle.png"

const Veiws = () => {
  return (
    <div className="w-full">
      <div className="mt-10 ml-6">
        <Link to="/">
          <button className="flex gap-2 items-center">
            <span className="text-xl font-bold text-black">
              <FaArrowLeft />
            </span>
            <img className="w-20" src={back} alt="" />
          </button>
        </Link>
      </div>
      <div className="bg-[#F4F3F0] shad flex flex-col items-center justify-center md:flex-row gap-8 md:gap-32 my-6 rounded-md py-10 mx-6 md:mx-16  lg:mx-32 px-8 md:px-16">
          <div>
               <img src={coffee} alt="" />
          </div>

          <div className="space-y-4">
               <img src={title} alt="" />
               <h1 className="flex gap-2 items-center"><span className="text-xl font-bold ">Name:</span> <span className="text-xl font-medium text-[#5C5B5B]">Americano Coffee</span></h1>
               <h1 className="flex gap-2 items-center"><span className="text-xl font-bold ">Chef:</span> <span className="text-xl font-medium text-[#5C5B5B]">Mr. Matin Paul</span></h1>
               <h1 className="flex gap-2 items-center"><span className="text-xl font-bold ">Supplier:</span> <span className="text-xl font-medium text-[#5C5B5B]">Cappu Authorizer</span></h1>
               
               <h1 className="flex gap-2 items-center"><span className="text-xl font-bold ">Category:</span> <span className="text-xl font-medium text-[#5C5B5B]">Americano</span></h1>
               <h1 className="flex gap-2 items-center"><span className="text-xl font-bold ">Details:</span> <span className="text-xl font-medium text-[#5C5B5B]">Espresso with hot water</span></h1>
          </div>
      </div>
    </div>
  );
};

export default Veiws;
