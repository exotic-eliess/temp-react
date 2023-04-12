import React, { useState } from "react";

const MessageHooks = () => {
  const [state, setState] = useState({
    message: "Bien venu visiteur",
    btnMessage: "inscription",
  });

  const inscription = () => {
    setState({
      message: "votre inscription est effectuée",
      btnMessage: "merci",
    });
  };
  const annulerInscription = () => {
    setState({
      message: "Bien venu visiteur",
      btnMessage: "inscription",
    });
  };
  return (
    <div>
      <h2>{state.message}</h2>
      <button style={{ marginRight: "1rem" }} onClick={() => inscription()}>
        {state.btnMessage}
      </button>
      {state.annulerInscription && (
        <button onClick={() => annulerInscription()}>
          Annuler L'inscription
        </button>
      )}
    </div>
  );
};

export default MessageHooks;
