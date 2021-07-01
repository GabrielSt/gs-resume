import React from 'react';

import Section from '../';

const About = props => {
  const { config } = props;
  return (
    <Section name="about">
      <div className="w-100">
        <h1 className="mb-0">
          {`${config.firstName} `}
          <span className="text-primary">{config.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {config.address} · {config.phone} ·
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </div>
        <p className="lead mb-5">
          Graduated in information systems, working as a fullstack developer in
          the market for over 5 years, having as main technologies used
          Javascript using React / Node and also .Net. My focus is on front-end
          development, having already delivered several projects using React
          with Redux. Solid experience in agile methodologies, having experience
          with SCRUM, certified as PSM by scrum.org.
        </p>
        <div className="social-icons">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default About;
