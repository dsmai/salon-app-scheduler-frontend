import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

const SelectionPanel = ({ selectedServices, setSelectedServices }) => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "European Spa Pedicure",
      duration: "1 hr",
      price: 50,
    },
    {
      id: 2,
      name: "Luxury Spa Pedicure",
      duration: "2 hr",
      price: 60,
    },
    {
      id: 3,
      name: "Asian Spa Manicure",
      duration: "40 mins",
      price: 20,
    },
    {
      id: 4,
      name: "Madagasca Spa Pedicure",
      duration: "30 mins",
      price: 40,
    },
  ]);

  // event handler
  const handleCheckSelect = (service, checked) => {
    if (checked) {
      // add this service to the selectedServices state array
      setSelectedServices((prev) => [...prev, service]);
    } else {
      setSelectedServices((prev) =>
        prev.filter((s) => s.name !== service.name)
      );
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">These are the services</h1>
      {services.map((service) => {
        return (
          <ServiceCard
            key={service.id}
            onCheckSelect={handleCheckSelect}
            service={service}
            checked={selectedServices.some((s) => s.id === service.id)}
          />
        );
      })}
    </div>
  );
};

export default SelectionPanel;
