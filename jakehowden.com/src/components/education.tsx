import React, { FC } from 'react';
import { headerInlineTextStyles, headerTextStyles } from '../styles/header-text-styles';

const Education: FC = () => {
  return (
    <div>
      <h1 style={headerInlineTextStyles}>Education</h1>
      <h3 style={headerTextStyles}>BSc (Hons) Computer Games Development</h3>
      <h4 style={headerTextStyles}>University of South Wales</h4>
      <h5 style={headerTextStyles}>First-Class Honours</h5>
    </div>
  );
};

export default Education;