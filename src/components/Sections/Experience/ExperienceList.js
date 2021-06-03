import React from 'react';

import Experience from './Experience';

const ExperienceList = props => {
  const { config } = props;
  return (
    <div className="blur-bg">
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {config.experiences.map(e => {
            return <Experience experience={e} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ExperienceList;
