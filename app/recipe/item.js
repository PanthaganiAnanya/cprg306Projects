import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  const handleSelect = () => {
    onSelect(name);
  };

  return (
    <li className="p-2 border-b border-gray-200" onClick={handleSelect}>
      <strong>{name}</strong><br/>
      Buy {quantity} in {category}
    </li>
  );
};

export default Item;