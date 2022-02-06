import React, { useEffect, useReducer, useState } from "react";
import { DashboardOptions, TableNew } from "@components";
import { useSelector, useDispatch } from "react-redux";
import { getAllLivraison } from "@services/livraison.js";

export const DashboardContent = () => {

 

  return (
    <div>
      <h1 className="title font-bold text-5xl mb-4">Dashboard</h1>
      <DashboardOptions classNames="py-6" />
      <TableNew />
    </div>
  );
};

export default DashboardContent;
