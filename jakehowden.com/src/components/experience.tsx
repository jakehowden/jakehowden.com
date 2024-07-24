import React, { FC } from 'react';
import ExperienceItem from './experience-item';

const Experience: FC = () => {
  return (
    <div>
      <h1>Experience</h1>
      <ExperienceItem company='Ensono' position='Software Consultant' location='UK, Remote' skills={['C#', '.NET']} details={['Cool Job', 'Developer']}></ExperienceItem>
    </div>
  );
};

export default Experience;