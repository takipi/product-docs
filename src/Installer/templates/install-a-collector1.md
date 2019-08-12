[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2cac05a-install_collector2x.png",
        "install_collector@2x.png",
        1492,
        118,
        "#beb4d0"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "If you’ve reached this page from the OverOps application, there are two possibilities:",
  "body": "* You don’t have a Collector installed (for example -  in a new environment) and need to install the Collector and Agent(s). In this case, proceed with the selections below.\n* You have a Collector installed and want to install additional Agents. In this case, skip this step and go directly to the [Install an Agent](doc:install-agent) step. \n\n*When copying and pasting the command lines from the documentation, verify that all characters are copied correctly.* "
}
[/block]
## Prerequisites
This section describes the OverOps installation as <<glossary:Remote Collector>>  and Remote Agent. This procedure requires the following:

###1. Environment ID (f.k.a Installation key)
This ID is provided by OverOps for each of your environments. To get this ID, please follow these instructions:
1. Go to **Settings page** and click **Manage Environments** in the top right corner.
2. Copy the Environment ID of the environment that you are currently installing

###2. Collector Port
OverOps uses Port 6060 as default.
[block:api-header]
{
  "title": "Select the Collector operating system (OS):"
}
[/block]

[block:html]
{
  "html": "<div style=\"display: flex;\">\n  <select id=\"os-select\">\n    <option data-display=\"Select\" selected disabled>None</option>\n    <option value=\"windows\">Windows</option>\n    <option value=\"linux\">Linux</option>\n    <option value=\"docker\">Docker</option>\n    <option value=\"kubernetes\">Kubernetes</option>\n  </select>\n</div>\n"
}
[/block]
 
[block:html]
{
  "html": "<div id=\"windows-yes-start\"></div>"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "The Windows installer installs logical artifacts for both the Collector and the Agent. Because we're using the Collector as a Remote Collector, we won't use the Micro-Agent installed and will instead configure the Collector to act as a Remote Collector.\n\nNote that a remote Collector can support up to 150 concurrent JVMs.",
  "title": "Installing the Collector as a Remote Collector:"
}
[/block]

1. [Click here](https://app.overops.com/app/download?t=exe), to download and run the OverOps installer.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6ffd10a-windows-install1.PNG",
        "windows-install1.PNG",
        498,
        394,
        "#e2dedb"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "OverOps requires 64bit Windows and 64bit Java. Refer to the  [Software and Hardware Requirements](doc:compatibility) for details.\nIn addition, verify that Java is already installed **before** you begin the collector installation.",
  "title": "Software and Hardware Requirements"
}
[/block]

2. In the installer, enter your [Environment ID](doc:generating-installation-keys), provided by OverOps.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/edcb249-windows-install2.PNG",
        "windows-install2.PNG",
        501,
        394,
        "#ebeced"
      ],
      "border": true
    }
  ]
}
[/block]
3. Click Next
4. Click the **Advanced...** button if you need to
     * Set a Proxy,
     * Provide a manual path to Java,
     * Choose a different installation location than C:\Takipi

otherwise click **Install** and go to Step 5

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7b66597-windows-install3.PNG",
        "windows-install3.PNG",
        500,
        394,
        "#ebeded"
      ]
    }
  ]
}
[/block]

4a. Browse or enter the path to your Java installation and click **Next**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7b79117-windows-install4.PNG",
        "windows-install4.PNG",
        507,
        397,
        "#e8eaeb"
      ]
    }
  ]
}
[/block]

4b. Enter your Proxy settings or if not required click **Next**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c2103c2-windows-install5.PNG",
        "windows-install5.PNG",
        505,
        394,
        "#eaebec"
      ]
    }
  ]
}
[/block]

4c. Provide your alternative installation Path and click "Install" to finish the installation

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c1a4532-windows-install6.PNG",
        "windows-install6.PNG",
        503,
        394,
        "#eaebec"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "The default installation path is C:/Takipi"
}
[/block]
When the installation completes, continue with the following steps:
5. Open the ```collector.properties``` file in the Takipi folder and add ```takipi.listen.port:<listen_port>``` at the end of the file.
6. Replace ```<listen_port>``` with the port the collector will listen to for inbound requests from the Micro-Agents.
[block:callout]
{
  "type": "info",
  "body": "OverOps uses Port 6060 as default!\nMake sure you to populate the ```takipi.listen.port``` even when using the default port."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Write down the Port number you selected and Domain Name / IP Address of the machine you installed the Collector on. You'll need this information when setting up the Agent."
}
[/block]

7. Go to Windows Services and find the Service Takipi
8. Restart the Takipi Service to verify that the Port change takes effect.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3733aaa-shot20.png",
        "shot20.png",
        1596,
        754,
        "#e9ecf0"
      ]
    }
  ]
}
[/block]

[block:html]
{
  "html": "<div id=\"windows-yes-end\"></div>"
}
[/block]

[block:html]
{
  "html": "<div id=\"docker-start\"></div>"
}
[/block]

#OverOps Collector in Docker
The OverOps Collector can be made available to other containers through [networking](https://docs.docker.com/network/). In this guide, we'll run the Collector locally, binding to port 6060 on the host machine. The environment ID (installation key) and configuration files are [mounted](https://docs.docker.com/storage/bind-mounts/) into the container from the host machine.

Make sure Java is installed **before** you begin the collector installation.

#Run the Collector
[block:callout]
{
  "type": "info",
  "body": "Pull the overops/collector from [Docker Hub](https://hub.docker.com/r/overops/collector).",
  "title": "TIP"
}
[/block]

1. Create a private folder.
[block:callout]
{
  "type": "warning",
  "body": "The `private` folder needs to be on the same directory from which you run the docker commands or the path to the `private` folder needs to be explicitly provided in the docker command arguments."
}
[/block]

2. In the private folder, create the file installation.key containing your Environment ID (installation key).
3. In the private folder, create the collector.properties file based on the following template.
  Additional templates can be found on [GitHub](https://github.com/takipi-field/kubernetes/tree/master/collector/private).

[block:html]
{
  "html": "<div>\n<script src=\"https://gist-it.appspot.com/github/takipi-field/kubernetes/blob/master/collector/private/collector.properties.saas.example?footer=minimal\"></script>\n</div>"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Running OverOps Server on-premises? Set `takipi.backend.url` and `takipi.storage.test.url` to point to your on-premises installation.",
  "title": "TIP"
}
[/block]

4. Run the [overops/collector](https://hub.docker.com/r/overops/collector) container.
[block:callout]
{
  "type": "info",
  "body": "Run from directory that contains the private directory. \nOtherwise you will get an error response: `invalid mount config for type \"bind\": source path does not exist: /private/private`",
  "title": "TIP"
}
[/block]

```
docker run -d -p 6060:6060 \
--mount type=bind,source="$(pwd)"/private,target=/opt/takipi/private overops/collector
 ```

5. Verify connectivity on https://app.overops.com/  in your browser.
[block:html]
{
  "html": "<div id=\"docker-end\"></div>"
}
[/block]

[block:html]
{
  "html": "<div id=\"kubernetes-start\"></div>"
}
[/block]

#OverOps Collector in Kubernetes
In this guide, we'll create a Kubernetes (k8s) [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and [Service](https://kubernetes.io/docs/concepts/services-networking/service/) for the Collector. 

The configuration file and Environment ID (installation key) will be stored as a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/da51e9f-SaaS-1.png",
        "SaaS-1.png",
        1105,
        801,
        "#e3eff6"
      ],
      "sizing": "full"
    }
  ]
}
[/block]

Make sure Java is installed **before** you begin the collector installation.

#Run the Collector
1. Create a private folder
2. In the private folder, create the file installation.key containing your Environment ID (installation key).
3. In the private folder, create the collector.properties file based on the following template.

Additional templates can be found on [GitHub](https://github.com/takipi-field/kubernetes/tree/master/collector/private).

[block:html]
{
  "html": "<div>\n<script src=\"https://gist-it.appspot.com/github/takipi-field/kubernetes/blob/master/collector/private/collector.properties.saas.example?footer=minimal\"></script>\n</div>"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Running OverOps Server on-premise? Set `takipi.backend.url` and `takipi.storage.test.url` to point to your on-premise installation. \nFor example:\n```\ntakipi.backend.url=http://overops-server-service:8080\ntakipi.storage.test.url=http://overops-server-service:8080/service/png\n```",
  "title": "Tip"
}
[/block]
4. Create a Secret from these files
```
kubectl create secret generic overops-collector \
--from-file=./private/collector.properties \
--from-file=./private/installation.key
```

5. Create the Deployment and Service using `overops-collector.yaml`, available on GitHub.
```
kubectl apply -f overops-collector.yaml
```

6. Verify connectivity on https://app.overops.com/  in your browser.
[block:callout]
{
  "type": "info",
  "body": "The overops/collector Docker images are tagged by version. \nTo update the Collector to a specific version (in this example, to version 4.30.11):\n```\nkubectl set image deployment.v1.apps/overops-collector-deployment overops-collector=overops/collector:4.30.11 --record\n```",
  "title": "Tip"
}
[/block]

[block:html]
{
  "html": "<div id=\"kubernetes-end\"></div>"
}
[/block]

[block:html]
{
  "html": "<div id=\"linux-yes-start\"></div>"
}
[/block]

[block:api-header]
{
  "title": "Do you have root privileges on the machine?"
}
[/block]

[block:html]
{
  "html": "<div style=\"display: flex;\">\n  <select id=\"root-select\">\n    <option data-display=\"Select\" selected disabled value=\"none\">None</option\n    ><option value=\"yes\">Yes</option>\n    <option value=\"no\">No</option>\n  </select>\n</div>\n"
}
[/block]

[block:html]
{
  "html": "<div id=\"linux-yes-end\"></div>"
}
[/block]

[block:html]
{
  "html": "<div id=\"linux-root-yes-start\"></div>"
}
[/block]
#Installing a Remote Collector
[block:callout]
{
  "type": "warning",
  "body": "Please review [Software and Hardware Compatibility](doc:compatibility#section-collector-network-requirements) for remote Collector network requirements.\n\nMake sure Java is installed **before** you begin the collector installation."
}
[/block]
## Set Collector Port
1. Select a TCP port to connect to the Collector host: <COLLECTOR_PORT>. 
2. Verify that the <COLLECTOR_PORT> is not blocked by any firewall.