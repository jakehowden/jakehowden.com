import React, { FC } from 'react';
import SummaryText from './text/summary-text';
import './../styles/text.css'

const Summary: FC = () => {
  return (
    <div>
      <h1 className='HeaderCenterText'>Summary</h1>
      <p className='Text'>{SummaryText}</p>
      <br></br>
    </div>
  );
};

export default Summary;