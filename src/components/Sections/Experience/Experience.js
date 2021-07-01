import React from 'react';

const Experience = props => {
  const { experience } = props;
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{experience.position}</h3>
        <div className="subheading mb-3">
          {experience.company.name}
          <span className="d-none d-lg-inline">
            <img
              className="img-fluid img-company rounded-circle mx-auto mb-2"
              src={experience.company.logo}
              alt=""
            />
          </span>
        </div>
        <p>{experience.description}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{`${experience.startDate} - ${experience.endDate}`}</span>
      </div>
    </div>
  );
};

export default Experience;
