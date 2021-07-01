import React from 'react';

const Section = props => {
  const { name, children } = props;
  return (
    <div className="blur-bg">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id={name}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
