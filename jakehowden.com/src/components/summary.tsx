import React, { FC } from 'react';
import SummaryText from './text/summary-text';

const Summary: FC = () => {
  return (
    <div>
      <h1>Summary</h1>
      <p>{SummaryText}</p>
    </div>
  );
};

export default Summary;