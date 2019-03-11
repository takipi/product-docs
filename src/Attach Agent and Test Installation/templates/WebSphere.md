[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

#WebSphere 7.x and 8.x
1. In the admin console of each WebSphere node go to Servers > Server Types > WebSphere application servers.
2. For each Server Infrastructure, go to Java and Process Management > Process Definition.
3. Under the Additional Properties section, click Java Virtual Machine.
4. Add the OverOps agent argument:
`-agentlib:TakipiAgent` or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
5. Click OK.
6. Restart the application.
7. [Test your Installation](doc:test-your-installation) 

#WebSphere 6.x
1. In the WebSphere admin console, go to Servers > Application servers.
2. For each server, in the Configuration tab, click Java and Process Management.
3. In the Generic JVM arguments field enter the OverOps agent argument 
`-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
4. Click OK.
5. Restart the application.
6. [Test your Installation](doc:test-your-installation) 

#WebSphere 5.x
1. In the WebSphere admin console, click Servers > Application Servers.
2. For each Server, under Additional Properties, click Process Definition > Java Virtual Machine.
3. Add the OverOps agent argument:
`-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
4. Click OK.
5. Restart the application.
6. [Test your Installation](doc:test-your-installation)