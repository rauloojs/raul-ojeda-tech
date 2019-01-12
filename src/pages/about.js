import React from 'react'
import { FaGithub, FaCode, FaServer, FaPencilRuler, FaPaintBrush } from 'react-icons/fa';

import Layout from '../components/Layout'
import Container from '../components/Container';
import Paper from '../components/Paper';

const AboutPage = ({ data }) => (
  <Layout>
    <Container>
      <Paper>
        <h2>About me</h2>
        <p>I’m a <strong>software engineer</strong> located in <strong>Puebla, México</strong>. I am an IT passionate who has worked for companies committed to <strong>innovation and processes quality</strong>.</p>
        <p>Either giving <strong>support</strong> to internal customers, performing as <strong>dev-ops</strong> or <strong>developing high quality software</strong>, I define myself as a <strong>problem solver</strong> who is always looking for the most <strong>creative</strong> and <strong>efficient</strong> solutions.</p>
        <p><strong>Self taught</strong> learner, <strong>team worker</strong>, and a person who feels very comfortable in <strong>modern web development environments</strong>.</p>
      </Paper>
      <Paper>
        <h2>About this site</h2>
        <p>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> framework which provides modern technologies out of the box for static websites:</p>
        <ul>
          <li>React</li>
          <li>Webpack</li>
          <li>GraphQL</li>
          <li>JAM stack architecture</li>
          <li>Progressive Web App</li>
        </ul>
        <p><FaCode /> Written with VSCode</p>
        <p><FaPaintBrush/> Styling:</p>
        <ul>
          <li>Tachyons (functional CSS)</li>
          <li>Styled components</li>
          <li>Typography (easy web fonts)</li>
        </ul>
        <p><FaPencilRuler /> Storybook as UI dev environment</p>
        <p><FaServer /> Hosting powered by Netlify</p>
        <p>Source code available at <FaGithub /></p>
      </Paper>
    </Container>
  </Layout>
)

export default AboutPage
