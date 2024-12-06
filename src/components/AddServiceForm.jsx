import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import salonService from "../services/services";

const AddServiceForm = ({ setServices }) => {
  const navigate = useNavigate();
  const [newService, setNewService] = useState({
    name: "",
    duration: "",
    price: "",
  });

  // Event handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      const priceValue = parseFloat(value);
      setNewService((prevNewService) => {
        return {
          ...prevNewService,
          [name]: isNaN(priceValue) ? 0 : priceValue,
        };
      });
    } else {
      setNewService((prevNewService) => {
        return { ...prevNewService, [name]: value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // post new service data to the server
    salonService
      .create(newService)
      .then((salonServices) => {
        console.log(salonServices);
        setServices(salonServices);
        resetNewService();
        navigate("/services");
      })
      .catch((error) => console.log(error.response.data));
  };

  const resetNewService = () => {
    setNewService({
      name: "",
      duration: "",
      price: "",
    });
  };

  return (
    <section>
      <h1 className="text-3xl font-bold underline">Add new service</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service name: </label>
          <input
            type="text"
            name="name"
            value={newService.name}
            onChange={handleFormChange}
            placeholder="Enter new service name"
          />
        </div>
        <div>
          <label>Duration: </label>
          <input
            type="text"
            name="duration"
            value={newService.duration}
            onChange={handleFormChange}
            placeholder="Enter duration"
          />
        </div>
        <div>
          <label>Price $: </label>
          <input
            type="text"
            name="price"
            value={newService.price}
            onChange={handleFormChange}
            placeholder="Enter price"
          />
        </div>
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddServiceForm;
