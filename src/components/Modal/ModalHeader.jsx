import React from "react";

export default function ModalHeader({ children, onClose }) {
  return (
    <div>
      <ul className="modal-nav nav nav-tabs" role="tablist">
        <li className="active">
          <a href="#">{children}</a>
        </li>
        <li className="active nav-close">
          <a href="#" onClick={() => onClose()}>
            <i className="ion-close"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
