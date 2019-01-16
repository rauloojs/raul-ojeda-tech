---
{
  "title": "Full Stack Web Developer",
  "company": "Kimetrics",
  "companySite": "https://kimetrics.com/",
  "dates": "Feb 16 - Sep 17",
  "description": "<strong>On-site</strong> position. Worked as <strong>leader</strong> of <strong>frontend</strong> and (at some point) <strong>backend</strong> projects, which belong to company's <strong>main product</strong>. Also worked as <strong>freelance</strong> for some <strong>later projects</strong>. Developments included <strong>Django</strong> stack in backend and <strong>Angular.js</strong> and <strong>React</strong> stacks in frontend",
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
  "gradient": "linear-gradient(to right, #fc4a1a, #f7b733)",
  "path": "positions/kimetrics-full-stack-web-developer"
}
---

#Role

**Full time developer** and **freelancer** for later projects. I worked **on-site** along with other developers for most of the projects, always under **SCRUM** framework. We had daily meetings with the team and/or clients. We used **JIRA** for projects management, **Slack** for team communication and **Git** (Github and Bitbucket) for version control (following **git flow** branching model). My main responsibilities were to implement **new features** for new versions of platform (v2 and v3). I also were in charge of sites **deployment and maintenance** and **attending requests from other departments**.

Some of the **challenges** I faced when developing the following projects included: **real-time data acquisition, data visualization, geolocation and role-based administration.**

#Projects

##Kimetrics Backend

**Restful API** designed to be **consumed by mobile application** (Android) and **feed a datawarehouse**. This project went through **2 major updates**: v2 and v3. I started working on **v2 features and maintainance**, and later I participated **designing and implementing v3**.

- Hosted on AWS EC2
- Nginx for server
- Django (from 1.9 to 1.11)
- Django Rest Framework for API
- PostgreSQL on AWS RDS
- PIP + venv for package management
- Fabric for deployment
- Celery + RabbitMQ for asynchronous tasks
- Other libraries:
django-tenants, django-filters, openpyxl, requests

##Kimetrics Frontend

**Single Page Application** for **administration** and **monitoring** of **mobile** users activity. Frontend views included: **CRUDs** for most of backend models, users activity **visualized in map** and **event-based schedules** in calendar.

<ul class="challenges">
  <li>Due to <strong>users activity</strong> it was required to render a <strong>huge amount of elements</strong>. This casued a lot of <strong>performance issues</strong> due to <strong>Angular's design</strong>. I <strong>developed custom directives</strong> to <strong>remove useless watchers</strong> in <strong>maps</strong> and <strong>calendar</strong> views. This <strong>improved site speed substantially</strong>.</li>
  <li><strong>Settings and permissions</strong> were in <strong>constant change</strong> so I <strong>developed "recursive" directives</strong> to render views based only on those objects structures</li>
  <li>The <strong>survey builder component</strong> (based on angular-surveys) <strong>could be a separated project</strong> due to its <strong>complexity</strong>, which included <strong>nested CRUDS</strong>, a lot of <strong>drag and drop interaction</strong>, <strong>strong forms validation</strong> among other features.</li>
</ul>

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
- Survey builder (forked from angular-surveys)
- Other libraries:
ui-router, moment, google-maps, full-calendar, angular-permissions, dragula

##Flow Builder

**Frontend** tool to generate **flowcharts-like surveys**. These "designs" were **later used as base for survey answering in mobile app**. This project was build with **excellent user experience in mind**. **Grommet** was chosen as **UI framework** and **JsPlumb** to generate **SVG elements free to move** in viewport and **create connections between nodes**. This tool was the **first piece of new frontend** project based on **React**.

<ul class="challenges">
  <li>This tool required <strong>excellent user experience</strong> due to survey's complex design.</li>
  <li>New surveys model <strong>supports versions management</strong>, so the UI.</li>
  <li>It was hard to find an adecuate library for the flow-chart-like part. <strong>JSPlumb proved to be the right answer</strong> by providing a <strong>graph-like approach</strong> with great performance (it's SVG based).</li>
  <li>I faced <strong>some issues</strong> due to <strong>JsPlumb DOM management</strong> and had to carefully <strong>connect event listeners</strong> with <strong>React components's lifecycle</strong>.</li>
  <li>Surveys's design included a <strong>custom query language</strong> (based on <strong>react-query-builder</strong>) to be strong <strong>directly over backend's ORM</strong>.</li>
  <li>Implented a <strong>first time walkthrough</strong> using <strong>react-joyride</strong></li>
</ul>

- Hosted on AWS S3
- Fabric for deployment
- Yarn for package management
- React + Webpack + Babel
- Redux + Redux thunk + Immutable for state management
- Grommet + SASS
- JSPlumb
- Other libraries:
react-router, eslint, axios, validate.js, lodash, moment, react-query-builder, react-joyride

##Photos Report

Frontend tool to **generate** a **report** using **photographies** taken by mobile application users. Backend **categorizes** photos using **elastic search** so I used the **Searchkit** project which provides a great number of **powerful components** to consume **elastic APIs**.

<div class="challenges">
  <li>The report was <strong>easily</strong> created using <strong>specified photos</strong>. But <strong>non-inclusive filters</strong> were required, so I had to <strong>carefully</strong> manage <strong>elastic query exposed by Searchkit</strong> and <strong>pass it to backend</strong> with the desired changes.</li>
</div>

- Searchkit boiler plate (similar to create-react-app) which includes React + Webpack + Babel + Searchkit components
- Redux + Redux thunk for state management
- Some react-semantic-ui components
- Styled components
- Standard + Husky + lint-staged for code linting
- Other libraries:
axios, date-fns, react-loaders, react-responsive-carousel


## Issues Report

**Frontend** tool to **administrate issues** created by platform users (mobile and web). This project is **based on react-admin** and is meant to be the **starter project of kimetrics frontend's next version**.

<ul class="challenges">
  <li>Although react-admin provides a component for <strong>date filtering</strong>, <strong>a range filter</strong> was needed so I created a <strong>custom filter component based on react-date-range</strong>.</li>
  <li>Developed my <strong>own data provider</strong> to allow <strong>react-admin</strong> to handle <strong>Django REST Framework based APIs</strong>.</li>
  <li>UI included a <strong>chat-like</strong> dialog with a <strong>mentions system</strong> easily implemented with <strong>react-mentions</strong>.</li>
</ul>

- Project generated using create-react-app
- Redux + Redux Sagas + Reselect for state management
- Redux Form
- Other libraries:
react-date-range, axios, date-fns, normalize.css, react-scroll, react-mentions
