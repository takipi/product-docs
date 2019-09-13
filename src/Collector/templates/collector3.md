[block:callout]
{
  "type": "info",
  "body": "Port 6060 will be used by default as the port that the Collector will be listening on.\nIf you're using a Collector port other than 6060, please add --listen_port=<COLLECTOR_PORT> to the end of the installation command.",
  "title": "Note"
}
[/block]
##Verifying the Installation
Verify that the takipi-service is running:
```ps -ef | grep takipi```

##Attaching the OverOps Agent to the MEC
1. To attach each Agent, add the environment name flag ```-Dtakipi.env.name=<Environment_Name>``` (or the environment ID flag ```-Dtakipi.env.id=<Environment_ID>```) to the ```agentlib:TakipiAgent``` argument.
For example: ```-Dtakipi.env.name=Jira-Prod``` (or ```-Dtakipi.env.id=S2```).
Where Jira-Prod is the default environment for the ```-agentlib:TakipiAgent``` argument. The Agent will then pass a ```-Dtakipi.env.name=Jira-Prod``` argument (or ```TAKIPI_env.name``` environment variable) for the Collector to utilize in that environment.
2. Follow the instructions for [installing and an Agent](doc:install-agent) and then [attaching the Agent](doc:attach-agent-and-test-installation).