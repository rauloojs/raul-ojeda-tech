import React from 'react'
import { FaHeart, FaGithub, FaCode, FaServer, FaPencilRuler, FaPaintBrush } from 'react-icons/fa';

import Layout from '../components/Layout'
import Container from '../components/Container';
import Paper from '../components/Paper';

const AboutPage = ({ data }) => (
  <Layout>
    <Container>
      <Paper>
        <p className="ma0">I’m a software engineer located in Puebla, México. I am an IT passionate who has worked for companies committed to innovation and processes quality. Either giving support to internal customers, performing as dev-ops or developing high quality software, I define myself as a problem solver who is always looking for the most creative and efficient solutions. Self taught learner, team worker, and a person who feels very comfortable in modern web development environments.</p>
      </Paper>
      <Paper>
        <p>This site was built from scratch with <FaHeart /> using <a href="https://www.gatsbyjs.org/">Gatsby</a> framework:</p>
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
