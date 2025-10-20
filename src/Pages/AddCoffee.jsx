// import coffee from "../assets/coffee.png";
// import back from "../assets/back-home-removebg-preview.png";
// import button from "../assets/Add_Coffee-removebg-preview.png";
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import Swal from "sweetalert2";

// const AddCoffee = () => {
//   const handleAddCoffee = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const chefName = form.chefName.value;
//     const SupplierName = form.SupplierName.value;
//     const Countity = form.Countity.value;
//     const Price = form.Price.value;
//     const Details = form.Details.value;
//     const photo = form.photo.value;
//     const newCoffee = {
//       name,
//       chefName,
//       SupplierName,
//       Countity,
//       Price,
//       Details,
//       photo,
//     };
//     console.log(newCoffee);

//     fetch("http://localhost:5000/coffee", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newCoffee),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "SuccessFull!",
//             text: "Do you want to continue",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//           form.reset();
//         }
//         else{
//            Swal.fire({
//             title: "Success!",
//             text: "Coffe added Successfull",
//             icon: "success",
//             confirmButtonText: "Cheek your configration",
//           });
//         }
//       });
//   };
//   return (
//     <div>
//       <div className="mt-10 ml-6">
//         <Link to="/">
//           <button className="flex gap-2 items-center">
//             <span className="text-xl font-bold text-black">
//               <FaArrowLeft />
//             </span>
//             <img className="w-20" src={back} alt="" />
//           </button>
//         </Link>
//       </div>
//       <div className="bg-[#F4F3F0] my-6 rounded-md py-10 mx-6 md:mx-16  lg:mx-32 px-8 md:px-16">
//         <div className="flex flex-col justify-center items-center pb-8">
//           <img src={coffee} alt="" />
//           <p className="text-base font-medium text-[#1B1A1AB3] px-6 pt-2 md:px-20 text-center">
//             It is a long established fact that a reader will be distraceted by
//             the readable content of a page when looking at its layout. The point
//             of using Lorem Ipsum is that it has a more-or-less normal
//             distribution of letters, as opposed to using Content here.
//           </p>
//         </div>

//         <div>
//           <form onSubmit={handleAddCoffee}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//               <div className="flex flex-col space-y-2">
//                 <label className="text-xl font-bold text-[#1B1A1ACC]">
//                   Coffe Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Coffee-Name"
//                   className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
//                 />
//               </div>

//               <div className="flex flex-col space-y-2">
//                 <label className="text-xl font-bold text-[#1B1A1ACC]">
//                   Chef
//                 </label>
//                 <input
//                   type="text"
//                   name="chefName"
//                   placeholder="Enter Coffee Chef"
//                   className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
//                 />
//               </div>

//               <div className="flex flex-col space-y-2">
//                 <label className="text-xl font-bold text-[#1B1A1ACC]">
//                   Supplier
//                 </label>
//                 <input
//                   type="text"
//                   name="SupplierName"
//                   placeholder="Enter coffee supplier"
//                   className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
//                 />
//               </div>

//               <div className="flex flex-col space-y-2">
//                 <label className="text-xl font-bold text-[#1B1A1ACC]">
//                   Countity
//                 </label>
//                 <input
//                   type="text"
//                   name="Countity"
//                   placeholder="Enter coffee taste"
//                   className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
//                 />
//               </div>

//               <div className="flex flex-col space-y-2">
//                 <label className="text-xl font-bold text-[#1B1A1ACC]">
//                   Price
//                 </label>
//                 <input
//                   type="text"
//                   name="Price"
//                   placeholder="Enter coffee category"
//                   className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
//                 />
//               </div>

//               <div className="flex flex-col space-y-2">
//                 <label className="text-xl font-bold text-[#1B1A1ACC]">
//                   Details
//                 </label>
//                 <input
//                   type="text"
//                   name="Details"
//                   placeholder="Enter coffee details"
//                   className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
//                 />
//               </div>

//               <div className="flex flex-col space-y-2">
//                 <label className="text-xl font-bold text-[#1B1A1ACC]">
//                   Photo
//                 </label>
//                 <input
//                   type="text"
//                   name="photo"
//                   placeholder="Enter photo URL"
//                   className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
//                 />
//               </div>
//             </div>

//             <div className="mt-8 mb-8">
//               <button className="bg-[#D2B48C] py-2 mt-4 w-full rounded-md text-center flex justify-center font-bold">
//                 <img src={button} alt="" />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCoffee;
