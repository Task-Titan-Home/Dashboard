import React from "react";
import Columns from "./Columns";

const Board: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-white bg-customGrey">
      <div className="px-10 mt-6">
        <h1 className="text-3xl font-bold">Team Project Board</h1>
      </div>
      <Columns />
    </div>
  );
};

export default Board;
