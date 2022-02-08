import React, { useEffect, useReducer, useState } from "react";
import { DashboardOptions, TableNew, TableDrivers, Mapbox } from "@components";
import { useSelector, useDispatch } from "react-redux";
import { getAllLivraison } from "@services/livraison.js";

export const DashboardContent = ({ show }) => {
  const [reload, setReload] = useState(0);

  useEffect(() => {
    console.log(reload);
  }, [reload]);

  const [livraisons, setLivraisons] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [SelectedDriverFromTable, setSelectedDriverFromTable] = useState();
  const [selectedLivraisonFromTable, setSelectedLivraisonFromTable] =
    useState();

  return (
    <div>
      <h1 className="title font-bold text-5xl mb-4">Dashboard</h1>
      <DashboardOptions
        livraisons={livraisons}
        drivers={drivers}
        setReload={setReload}
        SelectedDriverFromTable={SelectedDriverFromTable}
        selectedLivraisonFromTable={selectedLivraisonFromTable}
        classNames="py-6"
      />
      {show.toLowerCase() == "livraison" ? (
        <TableNew
          setLivraisons={setLivraisons}
          setSelectedLivraisonFromTable={setSelectedLivraisonFromTable}
          reload={reload}
        />
      ) : show.toLowerCase() == "drivers" ? (
        <TableDrivers
          reload={reload}
          setAllDrivers={setDrivers}
          setSelectedDriverFromTable={setSelectedDriverFromTable}
        />
      ) : show.toLowerCase() == "map" ? (
        <Mapbox />
      ) : null}
    </div>
  );
};

export default DashboardContent;
