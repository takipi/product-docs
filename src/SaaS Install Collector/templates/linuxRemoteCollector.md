This section describes the OverOps installation as <<glossary:Remote Collector>>  and Remote <<glossary:Agent (micro-agent)>>. This procedure requires root access and the [Installation Key](doc:generating-installation-keys)  provided by OverOps.

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

[block:callout]
{
  "type": "warning",
  "body": "Please review [Software and Hardware Compatibility](doc:compatibility#section-collector-network-requirements) for remote Collector network requirements."
}
[/block]