import coffee from "../assets/images/more/Update Existing Coffee Details.png";
import back from "../assets/back-home-removebg-preview.png";
import button from "../assets/images/more/Update Coffee Details.png";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();

  const { _id, name, chefName, SupplierName, Quantity, Price, Details, photo } =
    loadedCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCoffee = {
      name: form.name.value,
      chefName: form.chefName.value,
      SupplierName: form.SupplierName.value,
      Quantity: form.Quantity.value,
      Price: form.Price.value,
      Details: form.Details.value,
      photo: form.photo.value,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT", 
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "No Change!",
            text: "You didn't update anything",
            icon: "info",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="mt-10 ml-6">
        <Link to="/">
          <button className="flex gap-2 items-center">
            <span className="text-xl font-bold text-black">
              <FaArrowLeft />
            </span>
            <img className="w-20" src={back} alt="back" />
          </button>
        </Link>
      </div>

      {/* Update Form */}
      <div className="bg-[#F4F3F0] my-6 rounded-md py-10 mx-6 md:mx-16 lg:mx-32 px-8 md:px-16">
        <div className="flex flex-col justify-center items-center pb-8">
          <img src={coffee} alt="update banner" />
          <p className="text-base font-medium text-[#1B1A1AB3] px-6 pt-2 md:px-20 text-center">
            Update the coffee details below and save your changes.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Coffee Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-xl font-bold text-[#1B1A1ACC]">
                Coffee Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
              />
            </div>

            {/* Chef Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-xl font-bold text-[#1B1A1ACC]">Chef</label>
              <input
                type="text"
                name="chefName"
                defaultValue={chefName}
                placeholder="Enter Coffee Chef"
                className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
              />
            </div>

            {/* Supplier */}
            <div className="flex flex-col space-y-2">
              <label className="text-xl font-bold text-[#1B1A1ACC]">
                Supplier Name
              </label>
              <input
                type="text"
                name="SupplierName"
                defaultValue={SupplierName}
                placeholder="Enter Supplier Name"
                className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
              />
            </div>

            {/* Quantity */}
            <div className="flex flex-col space-y-2">
              <label className="text-xl font-bold text-[#1B1A1ACC]">
                Quantity
              </label>
              <input
                type="text"
                name="Quantity"
                defaultValue={Quantity}
                placeholder="Enter Quantity"
                className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col space-y-2">
              <label className="text-xl font-bold text-[#1B1A1ACC]">Price</label>
              <input
                type="text"
                name="Price"
                defaultValue={Price}
                placeholder="Enter Price"
                className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col space-y-2">
              <label className="text-xl font-bold text-[#1B1A1ACC]">
                Details
              </label>
              <input
                type="text"
                name="Details"
                defaultValue={Details}
                placeholder="Enter Details"
                className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
              />
            </div>

            {/* Photo */}
            <div className="flex flex-col space-y-2">
              <label className="text-xl font-bold text-[#1B1A1ACC]">Photo</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter Photo URL"
                className="text-xl font-bold text-[#1B1A1A99] px-4 py-2 rounded-md"
              />
            </div>
          </div>

          <div className="mt-8 mb-8">
            <button
              type="submit"
              className="bg-[#D2B48C] py-2 mt-4 w-full rounded-md text-center flex justify-center font-bold"
            >
              <img src={button} alt="update button" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
