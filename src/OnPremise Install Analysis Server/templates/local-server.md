#1. Prerequisites
Please see [Software and Hardware Compatibility](doc:compatibility#section-overops-server-on-premises-installation-requirements) 

[block:callout]
{
  "type": "warning",
  "body": "Server is installed under /opt/takipi-server \nand should have at least **200 GB** of free disk space."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Please ensure you have \n* At least 16384 processes (`ulimit -u`)\n* At least 32768 files (`ulimit -n`)"
}
[/block]
#2. Installing the Server 
**To install the server:**
1. Via Terminal, login to the designated On-Premises server.
2. from the link provided by OverOps, download the latest OverOps server tarball:
```takipi-server-java.tar.gz.```
3. Extract files to the /opt directory:
```tar -xvf <Path_to_tar_file> -C /opt```
4. Database configuration
4.1 If using the internal database (default)
   From the terminal, run setup:
   ```/opt/takipi-server/bin/takipi-server.sh start -u <HOSTNAME>```
4.2 If using an external DB
   From the terminal, run setup:
   ```
   /opt/takipi-server/bin/takipi-server.sh start -u <HOSTNAME>
   --db-type mysql
   --db-url <JDBC-URL_OF_MYSQL_SERVER>
   --db-user <USER_FOR_MYSQL>
   --db-password <PASSWORD_FOR_MYSQL_SERVER>
   ```
[block:callout]
{
  "type": "info",
  "body": "For a complete list of options for takipi-server type:\n```/opt/takipi-server/bin/takipi-server.sh --help```"
}
[/block]

[block:callout]
{
  "type": "danger",
  "body": "Ensure the following variables are properly configured in MySQL\n```\nmax_connections - at least 500 (default is 150)\nwait_timeout - at lease 1200 seconds (default is 28000)\n```",
  "title": "For MySQL"
}
[/block]
#3. Activating OverOps
To activate OverOps:
1. From the browser go to ```http://<HOSTNAME>:8080/activate```
and follow the instructions.
2. Send the License ID to OverOps.
OverOps returns the license key to the provided email address.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c9445ed-shot21.png",
        "shot21.png",
        362,
        244,
        "#fafafa"
      ],
      "border": true
    }
  ]
}
[/block]
#4. Installing the Collector 
OverOps can be installed either with local or remote Collectors.
We recommend as the default installation the Remote Collector configuration but it might vary based on your unique requirements.

##4.1 Remote Collector Installation
###4.1.a Linux
[On-Premises Remote Collector Installation](doc:on-premises-remote-collector-installation) 
###4.1.b Windows
[Windows Remote Collector Install](doc:windows-remote-collector-install) 
[block:callout]
{
  "type": "danger",
  "title": "Remote Collector Install - takipi.backend.url",
  "body": "For On-Premises deployments ensure that the\n```takipi.backend.url``` property points to your On-Premises Host and **NOT** to https://backend.takipi.com/\nRead more about Collector properties [here](https://doc.overops.com/docs/collector-properties)."
}
[/block]
##4.2 Installing the Rootless Collector 
[On-Premises Rootless Collector Installation](doc:on-premises-rootless-collector-installation) 
[block:callout]
{
  "type": "danger",
  "title": "Local Collector Install - takipi.backend.url",
  "body": "For On-Premises deployments ensure that the\n```takipi.backend.url``` property points to your On-Premises Host and **NOT** to https://backend.takipi.com/"
}
[/block]
#5. Optional: High-Availability and Load Balancing
[block:callout]
{
  "type": "success",
  "body": "OverOps supports multiple Collectors that can be configured for high-availability and/or for load balancing. For high-availability, traffic is routed as round-robin according to the master endpoint configuration, as described in [Configuring Collector High-Availability](doc:configuring-collector-high-availability) \n\nFor load balancing, routing depends on the load-balancer policy settings.\nTo build a Load Balancer using Nginx for multiple Collectors follow these instructions:\n[Load Balancing with Nginx](doc:load-balancing-with-nginx)",
  "title": "Collector High Availability and Load Balancing"
}
[/block]

#6. Agent Installation
##Linux
[On-Premises Rootless Agent Installation](doc:on-premises-rootless-agent-installation) 

##Windows
[block:callout]
{
  "type": "warning",
  "body": "You need access to the Internet for downloading the Windows Binaries or have them download prior to installation."
}
[/block]
[Windows Micro-Agent Installation](doc:windows-micro-agent-installation)


#7. Attach a Micro-Agent
[Attach a Micro-Agent](doc:attach-a-micro-agent) 

#8. Advanced Configuration Tasks
[On-Premises Advanced Tasks](doc:on-premises-advanced-settings) 

#Advanced - Command Line Arguments
[On-Premises Advanced - Command Line Arguments](doc:on-premises-advanced-command-line-non-docker)