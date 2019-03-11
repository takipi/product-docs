This section describes the OverOps installation Remote <<glossary:Agent (micro-agent)>>. 

[block:callout]
{
  "type": "warning",
  "body": "The Installation process for the Windows Micro-Agent follows almost all the same steps the Windows Collector installation does."
}
[/block]
1. Follow the installation instructions Step 1 through Step 4 in [Windows Remote Collector Install](doc:windows-remote-collector-install) and then continue with Step 2 below.

## Stop and Disable installed and started Collector Service
[block:callout]
{
  "type": "danger",
  "body": "The installation program installs both the Agent and Collector.  As the Local Collector is not required as we are connecting to the earlier installed remote Collector,  the Local Collector service will be stopped and disabled!"
}
[/block]
2. Go to Windows Services and find the Service Takipi
3. Stop the Takipi Service
4. Set the Startup Type to **Disabled**
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
5. Open the ```agent.properties``` file in the Takipi folder and add the following parameters:
```
takipi.collector.host=<Collector_Domain_Name>
takipi.collector.port=<Collector_Listen_on_Port>
```

Replace 
```<Collector_Domain_Name>``` with the Collector domain name 
```<Collector_Listen_on_Port>``` with the Listen_on_Port 
you wrote down during the Remote Collector Installation.