#Introduction
The need to scale for hundreds of applications, thousands of environments, and tens of functional groups has led to the development of OverOps Multi-Environment Collector (MEC), which enables you to on board new applications and functional groups in an easy and repeatable way.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you wish to deploy MEC in your organization, contact an OverOps representative."
}
[/block]

#Why Deploy MEC?
If your organization is running multiple applications, using a single environment collector means that for each new environment, you'll need to add load balancers and a new collector. Deploying agents to a single collector means:
  * A complex installation
  * Significant effort for the operations team
  * Increased cost for machines

MEC creates a centralized management solution that ensures easy installation and addition of new applications and environments.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The MEC installation uses a new kind of authentication that utilizes an installation token (installation.token file) rather than an installation.key for the Collector."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Important",
  "body": "Whereas in previous installations you didn't need to specify the environment for the Agent (because the Agent and Collector already made this correlation), for the MEC, you'll need to define the environment ID  **-Dtakipi.env.id=S1**"
}
[/block]
##Installation Prep Checklist
To make it easier to complete the installation, we've created a checklist in this article to help you set everything up in advance.
[block:parameters]
{
  "data": {
    "h-0": "Component",
    "h-1": "What's Required",
    "h-2": "Comments",
    "0-0": "Collector",
    "0-1": "The new collector supports a new type of authentication approach called an **Installation Token**.",
    "0-2": "The Installation ***Token ***is generated automatically when you register.",
    "1-0": "Agent",
    "1-1": "Add the environment ID: -Dtakipi.env.id=S1.",
    "1-2": "The Agent will then pass a -Dtakipi.env.id=S2 JVM argument (or TAKIPI_ENV_ID environment variable) for the Collector to utilize in that environment."
  },
  "cols": 3,
  "rows": 2
}
[/block]
## Prerequisites

###1. Installation Token
This token is provided by OverOps - contact OverOps to get your token.

###2. Collector Port
OverOps uses Port 6060 as the default port.



