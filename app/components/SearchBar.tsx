import React from "react";

const SearchBar: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full lg:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
    />
  );
};

export default SearchBar;
