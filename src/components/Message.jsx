import React from "react";

const INITIAL_STATE = {
  message: "Bien venu visiteur",
  btnMessage: "inscription",
  annulerInscriptionBtn: false,
};
const INSCRIPTION_EFFECTUER = {
  message: "votre inscription est effectuée",
  btnMessage: "merci",
  annulerInscriptionBtn: true,
};

export default class Message extends React.Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  inscription() {
    this.setState({ ...INSCRIPTION_EFFECTUER });
  }
  annulerInscription() {
    this.setState({ ...INITIAL_STATE });
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button
          style={{ marginRight: "1rem" }}
          onClick={() => this.inscription()}
        >
          {this.state.btnMessage}
        </button>
        {this.state.annulerInscriptionBtn && (
          <button onClick={() => this.annulerInscription()}>
            Annuler L'inscription
          </button>
        )}
      </div>
    );
  }
}
