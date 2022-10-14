import React from 'react';

import Education from './Education';
import Section from '../';

const EducationList = props => {
  const { config } = props;
  return (
    <Section name="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        {config.education.map((e, i) => {
          return <Education education={e} key={i} />;
        })}
      </div>
    </Section>
  );
};

export default EducationList;
