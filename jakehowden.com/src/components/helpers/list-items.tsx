import React from 'react';

interface ListItemsProps {
  items: string[];
}

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <div style={{textAlign: "center"}}>
      <ul style={{display: "inline-block", textAlign: "left"}}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
