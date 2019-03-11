#Connecting the OverOps Agent
In order to connect OverOps to your application, add the following argument to your JVM startup arguments:
```
-agentlib:TakipiAgent
```
[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Important: -agentlib is a JVM argument and has to be written **before** -jar / -cp arguments. For example:\n```java -Xmx2G -agentlib:TakipiAgent -jar myapp.jar```  \nor respectively\n``` java -Xmx2G -agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so -jar myappjar```"
}
[/block]
 

#Using Maven
In the terminal / command line, add -agentlib:TakipiAgent to the MAVEN_OPTS environment variable:

##Linux / macOS:
```
export MAVEN_OPTS="$MAVEN_OPTS -agentlib:TakipiAgent"
```
##Windows:
```
set MAVEN_OPTS=%MAVEN_OPTS% -agentlib:TakipiAgent
```