// import { IoEyeOutline } from "react-icons/io5";
// import { FaPencil } from "react-icons/fa6";
// import { MdDelete } from "react-icons/md";
// import { Link } from "react-router-dom";
// import cofi from "../assets/images/more/16.png";
// import Swal from "sweetalert2";
// import { useState } from "react";

// const Coffee = ({ coffee, onDelete }) => {
  
//   const { _id, photo, name, chefName, Price, Details } = coffee;

 

//   return (
//     <div className="bg-gray-200 rounded-md py-8 px-6 flex gap-4 items-center justify-center shadow-2xl">
//       {/* Image Section */}
//       <div>
//         <img src={photo || `${cofi}`} alt={name} />
//       </div>

//       {/* Details Section */}
//       <div className="space-y-3 md:col-span-2">
//         <h1 className="flex gap-2 items-center">
//           <span className="text-xl font-bold">Coffee Name:</span>
//           <span className="text-xl font-semibold text-[#5C5B5B]">{name}</span>
//         </h1>

//         <h1 className="flex gap-2 items-center">
//           <span className="text-xl font-bold">Chef:</span>
//           <span className="text-xl font-semibold text-[#5C5B5B]">
//             {chefName}
//           </span>
//         </h1>

//         <h1 className="flex gap-2 items-center">
//           <span className="text-xl font-bold">Price:</span>
//           <span className="text-xl font-semibold text-[#5C5B5B]">{Price}</span>
//         </h1>

//         <h1 className="flex gap-2 items-start">
//           <span className="text-xl font-bold">Details:</span>
//           <span className="text-xl font-semibold text-[#5C5B5B]">
//             {Details.slice(0, 40)}
//           </span>
//         </h1>
//       </div>

      {/* button */}
      <div className="flex flex-col gap-3">
        <Link to="/coffee_views">
          <button className="text-2xl font-bold text-[#FFFFFF] bg-[#D2B48C] p-2 rounded-md">
            <IoEyeOutline />
          </button>
        </Link>
        <Link to={`/update_coffee/${_id}`}>
          <button className="text-2xl font-bold text-[#FFFFFF] bg-[#3C393B] p-2 rounded-md">
            <FaPencil />
          </button>
        </Link>

        <button
          onClick={() => {
            onDelete(_id);
          }}
          className="text-2xl font-bold text-[#FFFFFF] bg-[#EA4744] p-2 rounded-md"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Coffee;
