[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]


After you install OverOps on your machine, you’ll need to connect it to your WebLogic server.
Please choose the WebLogic launch configuration you’re using:
[Standalone WebLogic](https://doc.overops.com/docs/weblogic#section-standalone-weblogic)
[Clustered WebLogic Servers](https://doc.overops.com/docs/weblogic#section-clustered-weblogic-servers)

 

#Standalone WebLogic
##Linux / macOS:

1. Edit startWebLogic.sh located at ```<weblogic_<version#>_install_dir>/user_projects/domains/<domain_name>/bin/startWebLogic.sh```
2. Add the following argument to the application server start script 
 ```-agentlib:TakipiAgent```  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:callout]
{
  "type": "warning",
  "body": "This argument should appear at the beginning of the arguments list before including any other agents"
}
[/block]
3. Restart WebLogic.
4. [Test your Installation](doc:test-your-installation) 


##Windows:
1. Open the startWebLogic.cmd file, located at ```<weblogic_version_install_dir>\user_projects\domains\<domain_name>\bin```
2. Add the following argument to the application server start script 
```-agentlib:TakipiAgent``` 
[block:callout]
{
  "type": "warning",
  "body": "This argument should appear at the beginning of the arguments list before including any other agents"
}
[/block]
3. Restart WebLogic.
4. [Test your Installation](doc:test-your-installation)  

#Clustered WebLogic Servers
For clustered WebLogic servers you start and stop using Node Manager, configure server startup in the WebLogic Server Administration Console.

1. Open the WebLogic Server Administration Console.
2. Navigate to Environment > Servers and click your server in the Server List.
3. Click the Server Start tab.
4. Add the agentlib argument:
```-agentlib:TakipiAgent```  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:callout]
{
  "type": "warning",
  "body": "This argument should appear at the beginning of the arguments list before including any other agents"
}
[/block]
5. Restart your machine.
6. [Test your Installation](doc:test-your-installation)