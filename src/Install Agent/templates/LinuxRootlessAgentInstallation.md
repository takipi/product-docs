For security reasons, the OverOps Agent can also be installed without root access.
To install the OverOps Agent on monitored machines, without root access

1. From, [https://app.overops.com/app/download?t=sa-tgz](https://app.overops.com/app/download?t=sa-tgz)
download the Agent installation TAR file.

2. Extract files to your working folder.
A 'takipi' folder is created.

3. From the takipi folder, edit the agent.properties file and set the following parameters:
  * **takipi.server.name**: the machine name, usually this is the output of echo `hostname`.
  * **takipi.collector.host**: the Collector host.
  * **takipi.collector.port**: the Collector port.

4. Start your application with ```-agentpath``` option: 
```java -agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so -jar sample.jar arg1```