---
title: "SaaS Install Agent"
excerpt: ""
---
[block:api-header]
{
  "title": "Select Agent OS"
}
[/block]
!INCLUDE "./src/Install Agent/os-select.html"
[section:windows-yes]
!INCLUDE "./src/Install Agent/templates/WindowsMicro-AgentInstallation.md"
[/section]

[section:linux-yes]
[block:api-header]
{
  "title": "Are you planning to run agent behind proxy Server?"
}
[/block]
!INCLUDE "./src/Install Agent/proxy-select.html"
[/section]

[section:linux-proxy-yes]
!INCLUDE "./src/Install Agent/templates/LinuxRootlessAgentInstallation.md"
!INCLUDE "./src/Install Agent/templates/RunningBehindProxyServer.md"
[/section]

[section:linux-proxy-no]
!INCLUDE "./src/Install Agent/templates/LinuxRootlessAgentInstallation.md"
[/section]

!INCLUDE "./src/select/index.js"
!INCLUDE "./src/select/index.css"
!INCLUDE "./src/section-manager.js"

!INCLUDE "./src/Install Agent/index.js"