---
{
  "title": "Full Stack Web Developer",
  "company": "Kimetrics",
  "dates": "Feb 16 - Sep 17",
  "description": "CRM-like platform oriented to data analysis and field management. Staff on field uses a mobile app connected to a web platform feeding the data warehouse. Working as full-stack web developer, leader of frontend and backend projects.",
  "tags": [
    {
      "label": "React",
      "class": "bg-blue white o-90"
    },
    {
      "label": "Angular",
      "class": "bg-red white o-90"
    },
    {
      "label": "Django",
      "class": "bg-light-blue white o-90"
    }
  ],
  "type": "position",
  "path": "positions/kimetrics-full-stack-web-developer"
}
---
#Role
Full time developer and freelancer for later projects. I worked on-site under SCRUM framework. Worked with other developers for most of the projects. We had daily meetings with the team and/or clients. We used JIRA for projects management, Slack for team communication and Git (Github and Bitbucket) for version control (following git flow branching model). My main responsibilities were to implement new features for new versions of platform (v2 and v3). I also were in charge of sites deployment and attending requests from other departments.

#Projects

##Kimetrics backend

Restful API designed to be consumed by a mobile application (Android) and feed a datawarehouse. This project passed through 2 major updates: v2 and v3. I started working on v2 maintainance and later I participated designing and implementing v3.

- Hosted on AWS EC2
- Django (from 1.9 to 1.11)
- Django Rest Framework for API
- PostgreSQL on AWS RDS
- PIP + venv for package management
- Fabric for deployment
- Celery + RabbitMQ for asynchronous tasks
- Nginx for server
- Django tenants
- Django filters
- Openpyxl
- Requests

##Kimetrics frontend

Single Page Application for administrative users and monitoring of mobile users activity.

<div class="challenges">
  <li>The amount of data required to render a huge amount of elements which casued a lot of performance issues due to Angular's design. I had to create custom directives to remove useless watchers in maps and calendar views.</li>
  <li>Settings and permissions were in constant change so I developed "recursive" directives which will render views based on objects structures</li>
  <li>Survey builder (based on angular-surveys) could be a separated project due to its complexity</li>
</div>

- Hosted on AWS S3
- Based on a Yeoman generator
- Angular.js
- NPM and Bower for package management
- Gulp task automation
- Fabric for deployment
- Angular Material for UI
- Pug (Jade) for templates
- SASS
- Jasmine + Karma for testing
- Ui-router
- Moment
- Full calendar
- Google maps
- Angular permissions (user permissions)
- Dragula (drag and drop)
- Survey builder (forked from angular-surveys)

##Flow Builder

Frontend tool to generate flowcharts-like surveys. These "designs" were later used as base for survey answering in mobile app. This project was build with user experience in mind. Grommet was chosen as UI framework. I used JsPlumb to generate SVG elements free to move in viewport and create connections between nodes. This tool was the first piece of new frontend project based on React.

<div class="challenges">
  <li>This tool required excellent User Experience due to survey's complex design.</li>
  <li>New surveys model (flow) supports versions management, so the UI.</li>
  <li>It was hard to find and adecuate library for the flow-chart-like part. JSPlumb proved to be the right answer by providing a graph-like approach with great performance (it's SVG based).</li>
  <li>I faced some issues due to JsPlumb DOM management and had to carefully connect event listeners with React components's lifecycle.</li>
  <li>Flow's design include a custom query language (based on React Query Builder) to be applied directly over backend's ORM.</li>
</div>

- Hosted on AWS S3
- Fabric for deployment
- Yarn for package management
- React
- Webpack
- Babel
- Eslint
- SASS
- Redux + redux thunk
- React router
- Axios
- Grommet
- JSPlumb
- Validate.js
- Immutable
- Lodash
- Moment
- React Query Builder
- React Joy ride

##Photos Report

Frontend tool to generate a report using photographies taken by mobile application users. Backend categorizes photos using elastic search so I used the Searchkit project which provides a great number of powerful components to consume elastic APIs.

<div class="challenges">
  <li>Although Searchkit provides a component for date filtering. A custom filter was needed so I created a new custom filter component from scratch.</li>
  <li>The report was easily created using specified photos. But non-inclusive filter were required, so I had to carefully manage elastic query to pass it to backend with the desired changes.</li>
</div>

- Searchkit boiler plate (similar to create-react-app) which includes React + Webpack + Babel + Searchkit
- Redux + redux-thunk
- Axios
- Date-fns
- React-loaders
- React-responsive-carousel
- Some react semantic ui components
- Styled components
- Standard + Husky + lint-staged for code linting


## Issues Report

Frontend tool to administrate issues created by platform users (mobile and web). This project is based on react-admin and is meant to be the starter project of kimetrics frontend's next version.

- Project generated using create-react-app
- Redux + Reselect
- Redux-form
- Axios
- Date-fns
- Normalize.css
- React-date-range
- React-scroll
- React-mentions

