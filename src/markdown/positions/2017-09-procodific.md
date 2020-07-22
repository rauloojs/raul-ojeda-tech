---
{
  "title": "Full Stack Web Developer",
  "company": "Procodific",
  "companySite": "https://procodific.com/",
  "dates": "Sep 17 - Mar 19",
  "description": "<strong>Remote</strong> position. Worked on <strong>three</strong> different projects: CountN, dmi and Tech for Reporters. Developments included <strong>Node</strong> and <strong>RoR</strong> stacks in backend and <strong>React</strong> stack in frontend",
  "tags": [
    {
      "label": "React",
      "class": "bg-blue white o-90"
    },
    {
      "label": "React on rails",
      "class": "bg-light-red white o-90"
    },
    {
      "label": "Node",
      "class": "bg-green white o-90"
    },
    {
      "label": "Ruby on Rails",
      "class": "bg-red white o-90"
    }
  ],
  "type": "position",
  "gradient": "linear-gradient(to right,#16759e,#79eadd)",
  "path": "positions/procodific-full-stack-web-developer"
}
---
#Role
As a **remote full time developer** I worked along with the dev team for some projects, and on my own for one of them, always under **SCRUM** framework. Other of my activities included: **review pull requests** from other developers and giving advice about the technologies I know. We had daily/weekly meetings with the team and/or clients. We used **JIRA** for projects management, **Slack** for team communication and **Git** (Github and Bitbucket) for version control (following **git flow** branching model).

#Projects

##CountN

CountN (not released yet) helps musicians to connect with live venues to schedule and perform gigs.

The main goal was to create a **Restful API** to be consumed by mobile app.

<ul class="challenges">
  <li>App had <strong>Stripe</strong> as payment option.</li>
  <li>App had a <strong>escrow system</strong> which required payments to be in hold until a gig was performed.</li>
  <li>App had a <strong>chat system</strong> linked to events system.</li>
  <li>API needed <strong>custom search and filtering</strong> so I developed a mini framework for it. Used <strong>Mongo's aggregation framework</strong> and created a <strong>pagination module</strong>.</li>
  <li>API needed to be fully documented for mobile dev so I <strong>used Apidoc to generate inline docs</strong>.</li>
</ul>

###Backend
- Hosted on AWS EC2
- Nginx for server
- Let’s Encrypt for HTTPS certificate
- MongoDB + Mongoose for database.
- Node + Express for API
- Apidoc.js for API inline documentation
- Socket.io for realtime
- Ansible for provisioning and deployment
- Passport + JWT for authentication
- Stripe for payments
- Mailgun for email delivery
- Multer for binaries
- Nunjucks for templates
- Babel + Gulp for ES6/modules transpiling
- Eslint + Lint Staged for code linting

##Data Markets Inc.

[Data Markets Inc](https://dmi.io). develops an electronic commerce platform for data. It’s a hybrid between eBay and a commodities exchange for data.

I was in charge of the <strong>complete redesign</strong> of dmi.io site by implementing given UI mockups (from <strong>Invision</strong>) using a <strong>React</strong> stack, and <strong>upgrading</strong> backend's <strong>RoR</strong> stack.
<ul class="challenges">
  <li>Frontend had to be <strong>SEO friendly</strong>. <strong>Server side rendering</strong> was mandatory.</li>
  <li>Frontend should behave as a <strong>SPA</strong>. I decided to use <strong>React on Rails</strong> library which provides SSR and helpers to keep React code separated from backend.</li>
  <li>New design came along with <strong>new features</strong> to the platform, so besides backend "upgrade", <strong>a few modules where also refactored</strong>.</li>
  <li>A <strong>Restful API</strong> based on existing code was needed to be consumed by frontend.</li>
</ul>

###Backend
- Hosted on Heroku
- Ruby on Rails
- PostgreSQL for database
- Webpacker + React on Rails to support SSR with frontend as a SPA
- Devise + JWT for API authentication

Backend project has a larger list of dependencies. I only mention the relevant ones for the parts of code I worked with.

###Frontend
- Hosted on Heroku
- Invision mockups
- React
- Rails/webpacker to generate react starter project
- React on Rails to get props + context from backend
- Custom Bootstrap + SASS
- Reactstrap instead of boostrap's jQuery parts
- Other libraries:
font awesome icons, date-fns, download.js, validate.js, react-autosuggest, lodash, react-dropzone, react-infinite-scroller, react-number-format, react-slick, rxjs

##Tech for reporters
[TechForReporters](https://techforreporters.com/) is a place where reporters can ask questions about the latest tech news and where technologists – programmers, engineers, designers, and thinkers – can answer in an anonymous or open forum.

I just developed a few features and perform some changes for this project, however I <strong>upgraded frontend to React 16</strong> and <strong>started site redesign</strong> from material UI to a custom one (which hasn't been released yet).

###Backend
- Hosted on DigitalOcean
- Node + Express for API
- MongoDB + Mongoose for database.
- Apidoc.js for API inline documentation
- Ansible for provisioning
- Passport + JWT for authentication
- Mailgun for email delivery
- Nunjucks for templates
- Babel + Gulp for ES6/modules transpiling
- Eslint + Lint Staged for code linting

###Frontend
- Hosted on DigitalOcean
- Zeplin mockups
- React
- Babel
- Webpack
- Redux + Redux-saga + Inmutable + Reselect for state management
- Enzyme + Jest for testing
- Material UI (at first stage)
- Styled components (at second stage to generate custom UI/UX)
- Storybook
- React-intl
- Other libraries:
date-fns, react-autosuggest, lodash, fuse.js
