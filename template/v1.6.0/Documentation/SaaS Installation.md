---
title: "SaaS Installation"
excerpt: ""
---
In this document the user will install collector
[block:api-header]
{
  "title": "Collector Overview"
}
[/block]
This section remind the user what it the collector component and what shall be taken into account when installing collector.
[block:api-header]
{
  "title": "Select Collector OS"
}
[/block]
!INCLUDE "./src/SaaS Install/os-select.html"
[block:api-header]
{
  "title": "Do you have root privileges on the machine?"
}
[/block]
!INCLUDE "./src/SaaS Install/root-select.html"
[block:api-header]
{
  "title": "Are you planning to run agent behind proxy Server?"
}
[/block]
!INCLUDE "./src/SaaS Install/proxy-select.html"
[block:api-header]
{
  "title": "Installation procedure"
}
[/block]

[section:linux-yes]
This article describes the OverOps installation as <<glossary:Remote Collector>>  and Remote <<glossary:Agent (micro-agent)>>. This procedure requires root access and the [Installation Key](doc:generating-installation-keys)  provided by OverOps.

#System Requirements
see [Software and Hardware Compatibility](doc:compatibility#section-collector-system-requirements) 


#Installing a Remote Collector

1. Select a TCP port to connect to the Collector host: <COLLECTOR_PORT>. 
2. Verify that the <COLLECTOR_PORT> is not blocked by any firewall.
3. Run the installation script from a terminal:
**With Wget:**
```wget -O - -o /dev/null http://get.takipi.com | sudo bash /dev/stdin -i --sk=<INSTALLATION_KEY> --listen_port=<COLLECTOR_PORT>```
**With cURL:**
```curl -sSL http://get.takipi.com | sudo bash /dev/stdin -i --sk=<INSTALLATION_KEY> --listen_port=<COLLECTOR_PORT>```
4. Save the IP address of the <COLLECTOR_HOST> (You will need it when installing the Micro-Agent).
5. Verify that takipi-service is running:
```ps -ef | grep takipi```
6. Add an Micro-Agent --> [Linux Agent for Remote Collector](doc:linux-rootless-agent-installation) 
[/section]

[section:linux-no]
The OverOps Collector can also be installed without root access. This procedure requires the [Installation Key](https://doc.overops.com/docs/generating-installation-keys) provided by OverOps.

##To install a Collector without root access:

1. From [https://app.overops.com/app/download?t=tgz](https://app.overops.com/app/download?t=tgz), download the Collector installation TAR file.
2. Extract files to your working folder:
```tar -xf takipi-latest.tar.gz```
A ‘takipi’ folder is created.
3. If you do not possess an Installation key, from the OverOps web application, generate an installation key. 
4. Copy the installation key and paste it into a text file named installation.key.
5. Save the installation.key file in the ```<PATH>/takipi ``` directory on your machine.
6. According to the template below, create the collector.properties file (see collector.properties.example for a template):
[/section]

[section:windows-yes]
#Prerequisites
This article describes how to install OverOps on a Windows.
[Software and Hardware Compatibility](doc:compatibility) 

This article describes the OverOps installation as <<glossary:Remote Collector>>   and Remote <<glossary:Micro-Agent>> . This procedure requires the [Installation Key](doc:generating-installation-keys)  provided by OverOps.

1. [Click here](https://app.overops.com/app/download?t=exe), to download and run the OverOps installer.

2. In the installer, enter your [Installation Key](doc:generating-installation-keys), provided by OverOps. 

3. Click Next
4. Click on the **Advanced...** button if you need to
     * Set a Proxy,
     * Provide manual path to Java,
     * Choose a different installation location then C:\Takipi

otherwise click **Install** and goto Step 5
[/section]

!INCLUDE "./src/select/index.js"
!INCLUDE "./src/select/index.css"
!INCLUDE "./src/section-manager.js"

!INCLUDE "./src/SaaS Install/index.js"

