---
title: "SaaS Attach Agent and Test Installation"
excerpt: ""
---
[block:api-header]
{
  "title": "Are your JVMs running inside a SW container?"
}
[/block]
!INCLUDE "./src/Attach Agent and Test Installation/sw-container.html"

[section:sw-container-no]
[block:api-header]
{
  "title": "Select a JVM type"
}
[/block]
!INCLUDE "./src/Attach Agent and Test Installation/type-select.html"
[/section]

[section:sw-container-yes]
[block:api-header]
{
  "title": "Select a JVM  environment"
}
[/block]
!INCLUDE "./src/Attach Agent and Test Installation/jvm-environments-select.html"
[/section]

[section:environments-kubernetes]
!INCLUDE "./src/Attach Agent and Test Installation/templates/kubernetes.md"
[/section]

[section:environments-docker]
!INCLUDE "./src/Attach Agent and Test Installation/templates/docker.md"
[/section]

[section:CloudFoundry]
!INCLUDE "./src/Attach Agent and Test Installation/templates/CloudFoundry.md"
[/section]

[section:eclipse]
!INCLUDE "./src/Attach Agent and Test Installation/templates/Eclipse.md"
[/section]

[section:Glassfish]
!INCLUDE "./src/Attach Agent and Test Installation/templates/GlassFish.md"
[/section]

[section:intelliJ]
!INCLUDE "./src/Attach Agent and Test Installation/templates/IntelliJ.md"
[/section]

[section:JBoss-Wildfly]
!INCLUDE "./src/Attach Agent and Test Installation/templates/JBossWildfly.md"
[/section]

[section:jetty]
!INCLUDE "./src/Attach Agent and Test Installation/templates/Jetty.md"
[/section]

[section:Mule]
!INCLUDE "./src/Attach Agent and Test Installation/templates/Mule.md"
[/section]

[section:netbeans]
!INCLUDE "./src/Attach Agent and Test Installation/templates/NetBeans.md"
[/section]

[section:play-framework]
!INCLUDE "./src/Attach Agent and Test Installation/templates/PlayFramework.md"
[/section]

[section:scala]
!INCLUDE "./src/Attach Agent and Test Installation/templates/Scala.md"
[/section]

[section:standalone-jvm]
!INCLUDE "./src/Attach Agent and Test Installation/templates/StandaloneJVM.md"
[/section]

[section:tomcat]
!INCLUDE "./src/Attach Agent and Test Installation/templates/Tomcat.md"
[/section]

[section:WebLogic]
!INCLUDE "./src/Attach Agent and Test Installation/templates/WebLogic.md"
[/section]

[section:websphere]
!INCLUDE "./src/Attach Agent and Test Installation/templates/WebSphere.md"
[/section]

[section:testInstallation]
[block:api-header]
{
  "title": "Attach Agent"
}
[/block]
[block:api-header]
{
  "title": "Test Installation"
}
[/block]
**To test your installation**:
1. Make sure you started the application you want OverOps to monitor.
2. From the OverOps [Dashboard](https://app.overops.com), click **Add Server**.
3. From the dialog box, click **Next** and then click ![](https://files.readme.io/e8cc474-shot_test-installation.png)
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e9dbf54-testinstallation1.jpg",
        "testinstallation1.jpg",
        951,
        543,
        "#525d63"
      ]
    }
  ]
}
[/block]
When the connection is established successfully, you will get a  *Monitoring* message next to your JVM.
4. Throw an exception, or make sure your application throws exceptions.
[/section]

!INCLUDE "./src/select/index.js"
!INCLUDE "./src/select/index.css"
!INCLUDE "./src/section-manager.js"

!INCLUDE "./src/Attach Agent and Test Installation/index.js"