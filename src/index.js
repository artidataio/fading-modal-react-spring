import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Modal from "./Modal";

function App() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="App">
      <h2>Click here to open modal</h2>
      <button type="button" onClick={() => setOpen(!open)}>
        Open
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
