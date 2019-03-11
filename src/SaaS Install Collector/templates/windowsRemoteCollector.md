This section describes the OverOps installation as <<glossary:Remote Collector>>   and Remote <<glossary:Micro-Agent>> . This procedure requires the [Installation Key](doc:generating-installation-keys)  provided by OverOps.
[block:callout]
{
  "type": "info",
  "body": "The Windows installer is installing both logical artifacts for the Collector and the Agent. As we are using the Collector as a remote Collector we will not use the Micro-Agent installed and configure the Collector to act as a Remote Collector."
}
[/block]
1. [Click here](https://app.overops.com/app/download?t=exe), to download and run the OverOps installer.

[block:callout]
{
  "type": "warning",
  "body": "OverOps requires 64bit Windows and 64bit Java\nsee [Software and Hardware Compatibility](doc:compatibility) requirements"
}
[/block]
2. In the installer, enter your [Installation Key](doc:generating-installation-keys), provided by OverOps. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0294d9-shot11.png",
        "shot11.png",
        1020,
        800,
        "#dfe7ea"
      ]
    }
  ]
}
[/block]
3. Click Next
4. Click on the **Advanced...** button if you need to
     * Set a Proxy,
     * Provide manual path to Java,
     * Choose a different installation location then C:\Takipi

otherwise click **Install** and goto Step 5
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5efc104-shot12.png",
        "shot12.png",
        1020,
        800,
        "#dfe6e9"
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
        "https://files.readme.io/21d979b-shot13.png",
        "shot13.png",
        1006,
        798,
        "#e6e8e8"
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
        "https://files.readme.io/d17e81e-shot14.png",
        "shot14.png",
        1016,
        796,
        "#dee6e9"
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
        "https://files.readme.io/b9b19e8-shot15.png",
        "shot15.png",
        1020,
        798,
        "#dee6e9"
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
5. Open the ```collector.properties``` file in the Takipi folder and add
```takipi.listen.port:<listen_port>``` at the end of the file.
Replace ```<listen_port>``` with the port the collector will listening for inbound request from the Micro-Agents.
[block:callout]
{
  "type": "info",
  "body": "OverOps uses Port 6060 as default!\nEnsure to populate the ```takipi.listen.port``` even when using the default!"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Write down the Port number you selected and Domain Name / IP Address of the machine you installed the Collector on.\nYou will need this information when setting up the Agent."
}
[/block]
6. Go to Windows Services and find the Service Takipi
7. Restart the Takipi Service
to ensure the Port change takes effect.
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

