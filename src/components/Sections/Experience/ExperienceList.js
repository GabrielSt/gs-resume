import React from 'react';

import Experience from './Experience';
import Section from '../';

const ExperienceList = props => {
  const { config } = props;
  return (
    <Section name="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {config.experiences.map(e => {
          return <Experience experience={e} />;
        })}
      </div>
    </Section>
  );
};

export default ExperienceList;
