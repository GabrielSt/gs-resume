import React from 'react';

const Education = props => {
  const { education } = props;
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{education.institution}</h3>
        <div className="subheading mb-3">{education.formation}</div>
        <div>{education.area}</div>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{`${education.startDate} - ${education.endDate}`}</span>
      </div>
    </div>
  );
};

export default Education;
