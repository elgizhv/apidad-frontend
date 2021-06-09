import React, { useState } from "react";

export default function ModalNav({ list, onChange }) {
  const [active, setActive] = useState(list[0]?.key);
  const onClick = (key) => {
    onChange(key);
    setActive(key);
  };
  return (
    <ul className="modal-nav nav nav-tabs" role="tablist">
      {list.map((item) => (
        <li className={active === item.key && "active"} role="presentation">
          <a href="#" onClick={() => onClick(item.key)}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
