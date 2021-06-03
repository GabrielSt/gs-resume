import React from 'react';

import Education from './Education';

const EducationList = props => {
  const { config } = props;
  return (
    <div className="blur-bg">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          {config.education.map(e => {
            return <Education education={e} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default EducationList;
