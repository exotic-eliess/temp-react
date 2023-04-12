import React from "react";

const Voiture = ({ car }) => {
  const VoitureStyle = {
    fontFamily: "sans-serif",
    border: "2px solid teal",
    maxWidth: "450px",
    margin: "0.5rem auto",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  };
  const matriculeStyle = {
    color: "red",
  };
  return (
    <div style={VoitureStyle}>
      <h4>
        Matricule du Voiture:{" "}
        <span style={matriculeStyle}>{car.matricule}</span>
      </h4>
      <h5>
        Marque: {car.marque.toUpperCase()} ------- Nombre de Chevaux:{" "}
        {car.chevaux}
      </h5>
    </div>
  );
};

export default Voiture;
