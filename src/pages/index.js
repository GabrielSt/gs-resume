import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import config from '../../config';

import About from '../components/Sections/About';
import ExperienceList from '../components/Sections/Experience';
import EducationList from '../components/Sections/Education';
import Skills from '../components/Sections/Skills';
import Certifications from '../components/Sections/Certifications';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <About config={config} />

      <hr className="m-0" />

      <ExperienceList config={config} />

      <hr className="m-0" />

      <EducationList config={config} />

      <hr className="m-0" />

      <Skills config={config} />

      <hr className="m-0" />

      <Certifications config={config} />
    </div>
  </Layout>
);

export default IndexPage;
