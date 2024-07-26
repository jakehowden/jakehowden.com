import React, { FC } from 'react';
import SummaryText from './text/summary-text';
import { headerInlineTextStyles } from '../styles/header-text-styles';

const Summary: FC = () => {
  return (
    <div>
      <h1 style={headerInlineTextStyles}>Summary</h1>
      <p>{SummaryText}</p>
    </div>
  );
};

export default Summary;