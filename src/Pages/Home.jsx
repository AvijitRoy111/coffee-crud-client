// import Banner from "../Components/Banner";
// import instagramText1 from "../assets/images/cups/Follow on Instagram.png";
// import instagramText2 from "../assets/images/cups/Follow Us Now.png";
// import card1 from "../assets/images/cups/Rectangle 9.png";
// import card8 from "../assets/images/cups/Rectangle 10.png";
// import card2 from "../assets/images/cups/Rectangle 11.png";
// import card3 from "../assets/images/cups/Rectangle 12.png";
// import card4 from "../assets/images/cups/Rectangle 13.png";
// import card5 from "../assets/images/cups/Rectangle 14.png";
// import card6 from "../assets/images/cups/Rectangle 15.png";
// import card7 from "../assets/images/cups/Rectangle 16.png";
// import { useLoaderData } from "react-router-dom";
// import Coffee from "../Components/Coffee";
// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// const Home = () => {
//   const loadedCoffees = useLoaderData(); 
//   const [coffees, setCoffees] = useState(loadedCoffees); 

//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/coffee/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your coffee has been deleted.",
//                 icon: "success",
//               });

              
//               const remaining = coffees.filter((coffee) => coffee._id !== _id);
//               setCoffees(remaining);
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div className="w-full">
//       <Banner />

//       {/* coffee list */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-6 md:px-20">
//         {coffees.map((coffee) => (
//           <Coffee
//             key={coffee._id}
//             coffee={coffee}
//             onDelete={handleDelete} 
//           />
//         ))}
//       </div>

      {/* instagram section */}
      <div className="flex flex-col items-center justify-center gap-2 pt-32 pb-24">
        <img src={instagramText2} alt="" />
        <img src={instagramText1} alt="" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 pt-10">
          <img src={card1} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
          <img src={card4} alt="" />
          <img src={card5} alt="" />
          <img src={card6} alt="" />
          <img src={card7} alt="" />
          <img src={card8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
