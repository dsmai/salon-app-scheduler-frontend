import React, { useState } from "react";

const ServiceCard = ({ checked, onCheckSelect, service }) => {
  return (
    <section
      className={`px-4 py-2 rounded-md border hover:bg-slate-100 transition duration-400 ${
        checked ? "border-blue-500" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <p>{service.name}</p>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckSelect(service, e.target.checked)}
        />
      </div>
      <p>{service.duration}</p>
      <p>${service.price}</p>
    </section>
  );
};

export default ServiceCard;
