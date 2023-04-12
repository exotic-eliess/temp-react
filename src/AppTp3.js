import React from "react";
import Presentation from "./components/Presentation";

const personnesData = [
  {
    nom: "Ichiri",
    prenom: "Imad",
    diplomes: ["Bac", "Licence", "Master"],
  },
  {
    nom: "Ermili",
    prenom: "Mohamed",
    diplomes: ["Bac", "Licence", "Master"],
  },
  {
    nom: "Bouchtarate",
    prenom: "Hamza",
    diplomes: ["Bac", "Licence", "Master"],
  },
  {
    nom: "Zindar",
    prenom: "Hassan",
    diplomes: ["Bac", "Licence", "Master"],
  },
];

const AppTp3 = () => {
  return (
    <>
      {personnesData.map((personne, index) => (
        <Presentation
          key={index}
          personne={{ nom: personne.nom, prenom: personne.prenom }}
          diplomes={personne.diplomes}
        />
      ))}
    </>
  );
};

export default AppTp3;
