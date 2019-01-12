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
  <h3>Projects</h3>
  <h4>Kimetrics frontend</h4>
  <p>
    Create frontend project for product's V2. This project was based on a yeoman generator. It used Angular.js. Some libraries I used in this project are:
  </p>

  - Full calendar
  - Google maps
  - Angular permissions (user permissions)
  - Dragula (drag and drop)

  <p>
    This project was specially challenging due to angular performance. Map and calendar views required to render a huge amount of elements so angular went slow. I had to create "custom" directives to remove a lot watchers. One of the views generated recursive directives based on permissions object.
  </p>

  <h4>Kimetrics backend</h4>
  <p>
    Django based project. Postgresql as data base. Django rest framework to serve data through a restful API consumed by Kimetrics frontend
  </p>

  <h4>Flow builder</h4>
  <p>
    Frontend tool to generate flowcharts-like surveys. These "designs" were later used as base for survey answering in mobile app. This project was build with user experience in mind. Grommet was chosen as UI framework. I used JsPlumb to generate SVG elements free to move in viewport and create connections between nodes.
  </p>
  <p>I faced some issues due to JsPlumb DOM management and had to carefully connect event listeners with React components's lifecycle</p>
