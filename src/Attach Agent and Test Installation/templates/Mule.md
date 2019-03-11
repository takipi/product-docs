[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

Mule ESB 3.X or later uses the Tanuki configuration environment. To specify JVM arguments in your Mule ESB environment, you need to configure them as additional parameters to the [Tanuki Java Service Wrapper](http://wrapper.tanukisoftware.org/) configuration file, wrapper.conf, as described below. 

 

1. Open the configuration file ```<MULE_HOME>/conf/wrapper.conf```.
2. Find the location indicated for Java Additional Parameters:
```
# Java Additional Parameters 
wrapper.java.additional.1=
```
3. Add ```-agentlib:TakipiAgent```  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`  argument using a wrapper.java.additional.n parameter.
4. Start the application you want OverOps to monitor.
5. [Test your Installation](doc:test-your-installation)