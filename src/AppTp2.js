import React from "react";
import Voiture from "./components/Voiture";

const carsList = [
  { matricule: "5662X7-1-أ", marque: "Renault", chevaux: 8 },
  { matricule: "63H778-72-ب", marque: "Hyundai", chevaux: 16 },
  { matricule: "99I877-26-س", marque: "Bmw", chevaux: 225 },
  { matricule: "28502-33-أ", marque: "Audi", chevaux: 328 },
  { matricule: "511Y77-11-غ", marque: "Cheverolet", chevaux: 420 },
];

const AppTp2 = () => {
  const titleStyle = {
    color: "green",
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={titleStyle}>Information voiture</h1>
      {carsList.map((car) => (
        <Voiture key={car.matricule} car={car} />
      ))}
    </div>
  );
};

export default AppTp2;
