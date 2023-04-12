import React from "react";
import MainImage from "../assets/images/main_image.png";
import image_1 from "../assets/images/image_1.png";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/image_3.png";
import image_4 from "../assets/images/image_4.png";
import image_5 from "../assets/images/image_5.png";
import image_6 from "../assets/images/image_6.png";
import "./Game.css";

const imgesObject = {
  1: image_1,
  2: image_2,
  3: image_3,
  4: image_4,
  5: image_5,
  6: image_6,
};

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    if (valeur === this.props.cache) {
      this.setState({
        face: valeur,
        compteur: this.state.compteur + 1,
        fin: true,
      });
    } else {
      this.setState({
        face: valeur,
        compteur: this.state.compteur + 1,
        fin: false,
      });
    }
  }
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }
  render() {
    return (
      <div className="Game_Holder">
        <img src={MainImage} alt="" />
        <h1>Jeu de Dé... ({this.props.cache})</h1>
        <h2>Face: {this.state.face || "--"} </h2>

        {Boolean(this.state.face) && (
          <img src={imgesObject[this.state.face]} alt="" />
        )}

        <h2>Nombre d'essais {this.state.compteur}</h2>

        {!this.state.fin && <button onClick={() => this.jouer()}>jouer</button>}
        {this.state.fin && (
          <>
            <p>
              Bravo vous avez trouvez la face cachée {this.props.cache} 👏👏👏
            </p>
            <button onClick={() => this.initialiser()}>Initialiser</button>
          </>
        )}
      </div>
    );
  }
}
