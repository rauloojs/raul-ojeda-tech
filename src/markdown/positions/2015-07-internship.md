---
{
  "title": "Internship",
  "company": "T-Systems",
  "companySite": "https://www.t-systems.com/",
  "dates": "Jul 15 - Dec 15",
  "description": "<strong>2nd level support</strong> for internal and external customers. Assigned to give <strong>maintenance</strong> and <strong>monitor UNIX</strong> based servers. I was in <strong>constant communication</strong> with <strong>customers in US</strong>. I also developed a <strong>desktop app</strong> to <strong>automate remote configuration validation of new servers</strong>",
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
    },
    {
      "label": "Python",
      "class": "bg-gold white o-90"
    }
  ],
  "type": "position",
  "gradient": "linear-gradient(to right, #cc2b5e, #753a88)",
  "path": "positions/t-systems-internship"
}
---
#Role
**Second level support** for **internal and external customers**. Assigned to give **maintenance** and **monitor UNIX** based servers. I was in **constant communication** with **customers in US**.

Some of the technologies I worked with included:

- HP Service Manager as ticket system tool based on ITIL
- VMware vSphere hypervisor for servers cloud management
- MS Office
- CISCO Jabber
- Operating Systems: Linux (Redhat and Suse), IBM AIX, HP-UX, Solaris
- Python3, xlwings, PyQt, PyCharm, QtDesigner and PyInstaller for the desktop app

#Projects

##Python tool for automated server validation

The **process** of **new servers validation** was **neither standarized nor automated**. The **spreadsheet report** tended to **change in a short period of time.** The **whole process** could **take hours per server**, and we are talking about a **company** whose **clients** required **hundreds of virtual servers** to work.


Along with my teammate, we wrote a **Python tool** to **automate** validation of recently configured servers. First, a small **script written in bash** was **remotely ran** on servers via **SSH** to get a text file with output data. Then a **desktop app** (ui powered by **PyQt**) took those files and **mapped them** to an excel file (with **xlwings**) using a **specified template**. Xlsx files were filled using the template as base, **mapping values through named cells**. This way the arrange of **values**, **styling**, etc. could be **easily changed in future**.

I wrote **documentation** for this app in **department's internal wiki**.

<ul class="challenges">The process <strong>improved</strong> in <strong>speed substantially</strong>: it went from a couple of <strong>hours</strong> to just <strong>minutes</strong></ul>
