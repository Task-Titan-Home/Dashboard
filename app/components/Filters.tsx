import React from "react";

const Filters: React.FC = () => {
  return (
    <div className=" flex gap-4">
      <select className=" bg-neutral-800 p-2 border border-gray-900 rounded-md focus:outline-none focus:ring focus:ring-primary-500">
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <select className="  bg-neutral-800 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500">
        <option value="">All Dates</option>
        <option value="recent">Recently Added</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default Filters;
