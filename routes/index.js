var express = require('express');
var router = express.Router();

const itemList = [ ['1', 'Devops', 'Developers and operations (dev and ops) work together in DevOps. The methodology aims to facilitate a culture of collaboration and shared responsibility between the development team and the operations team.','GitLab. “DevOps Explained.” GitLab, 23 May 2022, about.gitlab.com/topics/devops/'],
['2', 'Agile Method ', 'An Agile methodology emphasizes continuous collaboration and improvement throughout the project lifecycle. During the planning, execution, and evaluation phases of a project, teams follow a cycle','Atlassian. “What Is Agile?” Atlassian, www.atlassian.com/agile#:~:text=What%20is%20the%20Agile%20methodology.'],
['3', 'Waterfall model', 'A waterfall design is a linear, sequential approach to software development lifecycles (SDLCs) that is popular in software engineering and product development.','“What Is Waterfall Model? - Definition from WhatIs.com.” SearchSoftwareQuality, www.techtarget.com/searchsoftwarequality/definition/waterfall-model#:~:text=The%20waterfall%20model%20is%20a.'],
['4', 'Command Line Interface', 'To run programs, manage files, interact with computers, and manage commands, command-line interfaces (CLIs) are text-based user interfaces (UIs).','What Is a Command-Line Interface (CLI)? SearchWindowsServer, www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI#:~:text=A%20command%2Dline%20interface%20(CLI)%20is%20a%20text%2D.'],
['5', 'MicroService', 'Microservices allow organizations to deliver large, complex applications rapidly, frequently, reliably and sustainably - a necessary capability for competing and winning.','Richardson, Chris. “Microservices.io.” Microservices.io, Chris Richardson, 2017, microservices.io/.'],
['6', 'Prototyping', 'It is an experimental process where design teams turn ideas into tangible objects, whether they be paper or digital. Design concepts are captured and tested on users using prototypes with varying degrees of fidelity.','Interaction Design Foundation. “What Is Prototyping?” The Interaction Design Foundation, UX courses, 2019, www.interaction-design.org/literature/topics/prototyping.'],
['7', 'Deployment', 'An application is deployed when it is rolled out across a company IT infrastructure or when an end user initiates it.','“What Is Software Deployment?” PagerDuty, www.pagerduty.com/resources/learn/what-is-software-deployment/.'],
['8', 'UX-Design', ' UX design involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.','Interaction Design Foundation. “What Is User Experience (UX) Design?” The Interaction Design Foundation, 2019, www.interaction-design.org/literature/topics/ux-design.'],
['9', 'Adopt continuous delivery (CD)', 'The goal of continuous delivery is to ensure that your code changes are ready for primetime by ensuring they are automatically prepared through rigorous testing for deployment to production. Troubleshooting should be easier this way.','“What Is Software Deployment?” PagerDuty, www.pagerduty.com/resources/learn/what-is-software-deployment/.'],
['10', 'Continuous integration (CI)', 'Continuously integrate servers and test your software development team code. Run your apps in your environment rather than the developer sandbox to ensure they work.','“What Is Software Deployment?” PagerDuty, www.pagerduty.com/resources/learn/what-is-software-deployment/.'],


]; 

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express', items: itemList });
});

module.exports = router;
   