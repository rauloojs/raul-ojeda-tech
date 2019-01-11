import React from 'react'

import Layout from '../components/Layout'
import Courses from '../components/Courses';
import Languages from '../components/Languages';
import Container from '../components/Container';
import Paper from '../components/Paper';

const EducationPage = ({ data }) => (
  <Layout>
    <Container>
      <Paper>
        <div className="flex flex-column">
          <span>B.S. Computer Sciences Degree</span>
          <span>Benemérita Universidad Autónoma de Puebla</span>
          <span>August 2011 - December 2015</span>
        </div>
      </Paper>
      <Languages />
      <Courses />
    </Container>
  </Layout>
)

export default EducationPage
