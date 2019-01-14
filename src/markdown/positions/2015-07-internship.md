---
{
  "title": "Internship",
  "company": "T-Systems",
  "dates": "Jul 15 - Dec 15",
  "description": "2nd level support for internal and external customers. Assigned to give maintenance and monitor UNIX based servers. I was in communication with important customers in US. I also developed a desktop app remotely connected to servers to enhance and automate validation of recently configured servers.",
  "tags": [
    {
      "label": "Unix",
      "class": "bg-hot-pink white o-90"
    },
    {
      "label": "Linux",
      "class": "bg-orange white o-90"
    },
    {
      "label": "Support",
      "class": "bg-light-red white o-90"
    }
  ],
  "type": "position",
  "path": "positions/t-systems-internship"
}
---
#Role
Second level support for internal and external customers. Assigned to give maintenance and monitor UNIX based servers.

#Projects

##Python tool for automated server validation
<p>The process of validation wasn't standarized and made by hand. Results were saved in an excel spreadsheet which could which tended to change. This process could take hours per server, and we are talking about a company whose clients required hundreds of virtual servers to work</p>
<p>Along with my teammate wrote a Python tool to automate validation of recently configured servers. First a small script written in bash was remotely ran on servers via SSH to get a text file with output data. Then a desktop app (ui powered by PyQt) took those files and maped them to a excel file using a specified template. Xlsx files were filled using the template as base and mapping values through named cells, this way the arrange of values, styling, etc. could be easily changed.</p>
<p>I wrote a wiki for docs.</p>

<div class="challenges">The process improved in speed considerably: it went from a couple of hours to about 5 minutes</div>
