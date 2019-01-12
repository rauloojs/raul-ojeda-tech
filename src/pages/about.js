import React from 'react'
import { FaHeart, FaGithub, FaCode, FaServer, FaPencilRuler, FaPaintBrush } from 'react-icons/fa';

import Layout from '../components/Layout'
import Container from '../components/Container';
import Paper from '../components/Paper';
import AboutCard from '../components/AboutCard';

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
        <AboutCard
          icon={<FaHeart />}
          content={(
            <div>
              <p>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> framework which provides modern technologies out of the box for static websites:</p>
              <ul>
                <li>React</li>
                <li>Webpack</li>
                <li>GraphQL</li>
                <li>JAM stack architecture</li>
                <li>Progressive Web App</li>
              </ul>
            </div>
          )}
        />
        <AboutCard
          icon={<FaCode />}
          content={(
            <div>Written with <a href="https://code.visualstudio.com/">VSCode</a></div>
          )}
        />
        <AboutCard
          icon={<FaPencilRuler />}
          content={(
            <div><a href="https://github.com/storybooks/storybook">Storybook</a> as UI dev environment</div>
          )}
        />
        <AboutCard
          icon={<FaPaintBrush/>}
          content={(
            <div>
              <p>Styling:</p>
              <ul>
                <li><a href="https://github.com/tachyons-css/tachyons/">Tachyons</a> (functional CSS)</li>
                <li><a href="https://github.com/styled-components/styled-components">Styled components</a></li>
                <li><a href="https://github.com/KyleAMathews/typography.js">Typography</a> (easy web fonts)</li>
              </ul>
            </div>
          )}
        />
        <AboutCard
          icon={<FaServer />}
          content={(
            <div>Hosting powered by <a href="https://www.netlify.com">Netlify</a></div>
          )}
        />
        <AboutCard
          icon={<FaGithub />}
          content={(
            <div>Source code available at <a href="https://github.com/rauloojs/raul-ojeda-tech">Github</a></div>
          )}
        />
      </Paper>
    </Container>
  </Layout>
)

export default AboutPage
