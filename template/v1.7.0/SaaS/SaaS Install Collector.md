---
title: "SaaS Install Collector"
excerpt: ""
---
[block:api-header]
{
  "title": "Select Collector OS"
}
[/block]
!INCLUDE "./src/SaaS Install Collector/os-select.html"

[section:windows-yes]
!INCLUDE "./src/SaaS Install Collector/templates/windowsRemoteCollector.md"
[/section]

[section:docker]
!INCLUDE "./src/SaaS Install Collector/templates/docker.md"
[/section]

[section:kubernetes]
!INCLUDE "./src/SaaS Install Collector/templates/kubernetes.md"
[/section]

[section:linux-yes]
[block:api-header]
{
  "title": "Do you have root privileges on the machine?"
}
[/block]
!INCLUDE "./src/SaaS Install Collector/root-select.html"
[/section]

[section:linux-root-yes]
!INCLUDE "./src/SaaS Install Collector/templates/linuxRemoteCollector.md"
[/section]

[section:linux-root-no]
!INCLUDE "./src/SaaS Install Collector/templates/linuxRootlessCollector.md"
[/section]

!INCLUDE "./src/select/index.js"
!INCLUDE "./src/select/index.css"
!INCLUDE "./src/section-manager.js"

!INCLUDE "./src/SaaS Install Collector/index.js"