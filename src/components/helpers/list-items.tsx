import React from 'react';

interface ListItemsProps {
  items: string[];
}

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <div>
      <ul className='Text'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
