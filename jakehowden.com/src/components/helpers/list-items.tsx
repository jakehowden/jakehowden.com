import React from 'react';

interface ListItemsProps {
  items: string[];
}

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListItems;
