import React from "react";
import "./Presentation.css";

// const Presentation = (props) => {
//   const { nom, prenom } = props.personne;

//   return (
//     <div style={{ textAlign: "center", fontFamily: "Roboto" }}>
//       <h2>
//         Salut {nom} {prenom}!
//       </h2>
//       <hr />
//       <h3>Diplomes:</h3>
//       <p>[ {props.diplomes.join(" -- ")} ]</p>
//     </div>
//   );
// };
// export default Presentation;

export default class Salutation extends React.Component {
  render() {
    const {
      personne: { nom, prenom },
      diplomes,
    } = this.props;
    // console.log(nom, prenom, diplomes);
    return (
      <div className="main_div">
        <h2>
          Salut {nom} {prenom}
        </h2>
        <h3>Diplomes</h3>
        <p>{diplomes.join(" -- ")}</p>
        <hr />
      </div>
    );
  }
}
