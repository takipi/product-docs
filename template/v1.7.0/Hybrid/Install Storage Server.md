---
title: "Install Storage Server"
excerpt: ""
---
[block:api-header]
{
  "title": "Select the Installation Location for the Storage Server"
}
[/block]
!INCLUDE "./src/Hybrid Install Storage Server/installation-location-select.html"

[section:local-server]
!INCLUDE "./src/Hybrid Install Storage Server/templates/local-server.md"
[/section]

[section:kubernetes]
!INCLUDE "./src/Hybrid Install Storage Server/templates/kubernetes.md"
[/section]

[section:docker]
!INCLUDE "./src/Hybrid Install Storage Server/templates/docker.md"
[/section]

[section:aws-s3]
!INCLUDE "./src/Hybrid Install Storage Server/templates/aws-s3.md"
[/section]

!INCLUDE "./src/select/index.js"
!INCLUDE "./src/select/index.css"
!INCLUDE "./src/section-manager.js"

!INCLUDE "./src/Hybrid Install Storage Server/index.js"