import React from "react";
import { useTransition, animated } from "@react-spring/web";

function Modal({ open, onClose }) {
  const animContainer = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const animBackdrop = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 0.4 },
    leave: { opacity: 0 }
  });

  return (
    <React.Fragment>
      {animBackdrop(({ opacity }, item) => {
        return item ? (
          <animated.div
            style={{ opacity }}
            onClick={onClose}
            className="modal-backdrop"
          />
        ) : null;
      })}
      {animContainer(({ opacity }, item) => {
        return item ? (
          <animated.div style={{ opacity }} className="modal-container">
            <h2>Hello</h2>
            <button type="button" onClick={onClose}>
              CLOSE
            </button>
          </animated.div>
        ) : null;
      })}
    </React.Fragment>
  );
}

export default Modal;
