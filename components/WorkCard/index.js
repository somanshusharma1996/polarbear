import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden m-4 sm:m-2 md:m-2 lg:m-4 xl:m-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
      style={{ height: "500px" }}
    >
      <div className="relative h-64 md:h-72">
        <img
          alt={name}
          className="h-full w-full object-cover"
          src={img}
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{name ? name : "Project Name"}</h1>
        <p className="text-sm md:text-base text-gray-600">{description ? description : "Description"}</p>
      </div>
    </div>
  );
};

export default WorkCard;