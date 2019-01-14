---
{
  "title": "Full Stack Web Developer",
  "company": "Procodific",
  "dates": "Sep 17 - Now",
  "description": "Working for data market client located in Denver, Colorado. Helping to upgrade RoR version to 5.1.3, and developing frontend from Invision mockups.",
  "shortDescription": "This is a short description",
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
Full time developer (sometimes with flexible times, depending on workload). I worked remotely under SCRUM framework. Worked with other developers for some projects, and on my own for one of them. I used to review pull requests from other developers. We had daily/weekly meetings with the team and/or clients. We used JIRA for projects management, Slack for team communication and Git (Github and Bitbucket) for version control (following git flow branching model).

#Projects

##CountN
Restful API for CountN mobile app (not released yet). CountN helps musicians to connect with live venues to schedule and perform gigs.
<ul class="challenges">
  <li>App had Stripe as payment option.</li>
  <li>App had a escrow system which required payments to be in hold until gig was performed.</li>
  <li>App had a chat system linked to events system.</li>
  <li>API needed custom search and filtering so I developed a mini framework for it. Used Mongo's aggregation framework and created a pagination module.</li>
  <li>API needed to be fully documented so I used Apidoc to generate inline docs.</li>
</ul>

###Backend
- Hosted on AWS EC2
- MongoDB + Mongoose for database.
- Node + Express for api
- Apidoc.js for API inline documentation
- Socket.io for realtime
- Ansible for provisioning and deployment
- Passport + JWT for authentication
- Stripe for payments
- Mailgun for email delivery
- Multer for bynaries
- Nunjucks for templates
- Babel + Gulp for ES6/modules transpiling
- Eslint + Lint Staged for code linting

##Data Markets Inc.
Complete redesign for dmi platform. Implement given UI design using React and upgrade backend stack.
<ul class="challenges">
  <li>Frontend had to be SEO friendly. Server side rendering was mandatory.</li>
  <li>Frontend should behave as a SPA. I decided to use React on rails library which provides SSR and helpers to keep React code separated from backend</li>
  <li>New design came with new features for platform, so besides backend "upgrade", a few modules where refactored.</li>
  <li>Created Restful API based on existing code to be consumed by frontend.</li>
</ul>

###Backend
- Hosted on Heroku
- Ruby on Rails
- PostgreSQL for database
- Webpacker + React on Rails to support SSR with frontend as a SPA
- Devise + JWT for API authentication

Backend project has a larger list of dependencies. I'm just mentioning the relevant ones for the parts of code I worked in.

###Frontend
- React
- Rails/webpacker to generate react starter project
- React on Rails to get props + context from backend
- Bootstrap + Custom styles + SASS
- Reactstrap instead of boostrap's jQuery parts
- FontAwesome for icons
- Date-fns for dates
- Download.js for easy binary downloads/previews
- Validate.js for easy forms validation
- Other libraries:
react-autosuggest, lodash, react-dropzone, react-infinite-scroller, react-number-format, react-slick, rxjs

##Tech for reporters
TechForReporters is a place where reporters can ask questions about the latest tech news and where technologists – programmers, engineers, designers, and thinkers – can answer in an anonymous or open forum. I just developed a few features and perform some changes for this project, however I upgraded frontend to React 16 and started site redesign from material UI to custom design (which hasn't been released yet).

###Backend
- Hosted on Digital Ocean
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
- React
- Babel
- Webpack
- Redux + Redux-saga + Inmutable + Reselect for state management
- Enzyme + Jest for testing
- Material UI (at first stage)
- Styled components (at second stage to generate custom UI/UX)
- Storybook
- Date-fns
- React-autosuggest
- Lodash
- Fuse.js
