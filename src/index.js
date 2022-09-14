import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Modal from "./Modal";

function App() {
  const [isShowModal, setIsShowModal] = React.useState(true);

  return (
    <div className="App">
      <h2>Click here to open modal</h2>
      <button type="button" onClick={() => setIsShowModal(!isShowModal)}>
        Open
      </button>
      <Modal isShow={isShowModal} onCancel={() => setIsShowModal(false)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
