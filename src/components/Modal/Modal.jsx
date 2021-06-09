import React from "react";
import cn from "classnames";

export default function Modal({ children, size, visible, onClose }) {
  size = size || "md";
  return (
    <div
      onClick={onClose}
      className={cn("modal", `modal-${size}`, visible && "active")}
    >
      <div onClick={(event) => event.stopPropagation()} className="modal-inner">
        {children}
      </div>
    </div>
  );
}
