import React, { useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';

export const DashboardOptions = ({ classNames }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "0 auto",
        // backgroundImage: `url(${
        //   "http://localhost:3000/public/images/" + "1.webp"
        // })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full h-64 rounded-md shadow-md ${classNames}`}
    >
      <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
        <AddIcon/>
      </div>
    </div>
  );
};

export default DashboardOptions;
