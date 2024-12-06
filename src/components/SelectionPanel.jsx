import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

const SelectionPanel = ({ services, selectedServices, setSelectedServices }) => {

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
    <div className="space-y-4">
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
