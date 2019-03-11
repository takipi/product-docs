---
title: "OverOps Deployment Models Overview"
excerpt: ""
---
Before beginning the OverOps installation process it’s important to understand two key concepts, as both impact the steps required to start using OverOps:
1. OverOps component architecture and logic
2. Available deployment models
[block:api-header]
{
  "title": "OverOps Components"
}
[/block]
OverOps solution comprises of four logical components:
##Micro-Agent
Agent that attaches to a running JVM or .Net Command Language Runtime.
A typical environment can have hundreds or thousands of deployed Agents.
##Collector 
Always on “service” that works closely with the Micro-Agent either locally or more typically remotely.
Typical environment can have multiple collectors, often times as a ratio of Micro-Agents (as example one (1) remote collector for every 100 Micro-Agents)
##Storage-Server
Always on “service” that stores the snapshot information and symbol tables locally, redacted for PII and privately encrypted under your control. The storage-server is hosted on your premises and does not need to connect to the cloud and can be completely separate from the public internet.
##Analysis-Server
Always on “service” that provides you with the UI and backend services
The Analysis-Server provides you the Dashboard from which your users will work off.
[block:api-header]
{
  "title": "Deployment Models"
}
[/block]
OverOps offers 3 installation options - SaaS, Hybrid and On-Premises

The following matrix provides a quick summary of summary of Deployment Model and Logical Components.
'Customer'  items are installed and managed by the Customer.
'OverOps' items are fully managed by OverOps.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a657e98-matrix_deployment.png",
        "matrix deployment.png",
        632,
        185,
        "#ebf1f6"
      ]
    }
  ]
}
[/block]
##SaaS
In SaaS mode, data collected from your JVMs is redacted for PII and encrypted locally using your private encryption key before it is sent to the OverOps Cloud to be stored for later viewing and analysis by users. [Learn More](https://doc.overops.com/docs/saas-deployment-overview)

##Hybrid
In Hybrid mode, data collected from your JVMs is **locally** redacted for PII and encrypted using your private encryption key before it is **stored in a server that resides behind your firewall**. The central analysis engine is only used to aggregate metrics and correlate events between different JVMs in your environment. [Learn More](https://doc.overops.com/docs/hybrid-deployment-overview)

##On-Premises
In On-premises mode (Enterprise only), data collected from your JVMs is locally redacted for PII and
encrypted using your private encryption key before it is stored locally on-premises behind your
firewall. When viewing an error analysis, information is retrieved directly into the user’s web browser
from the on premise storage server without leaving your firewall and domain. [Learn More](https://doc.overops.com/docs/on-premises-deployment-overview)
[block:api-header]
{
  "title": "Supported Software and Hardware"
}
[/block]
Please review the Hardware and Software prerequisites before installing OverOps - [Software and Hardware Compatibility](https://doc.overops.com/docs/compatibility)