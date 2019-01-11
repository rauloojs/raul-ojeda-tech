import React from 'react'

import Layout from '../components/Layout'
import Courses from '../components/Courses';
import Languages from '../components/Languages';
import Container from '../components/Container';
import Education from '../components/Education';

const EducationPage = ({ data }) => (
  <Layout>
    <Container>
      <Education />
      <Languages />
      <Courses />
    </Container>
  </Layout>
)

export default EducationPage
