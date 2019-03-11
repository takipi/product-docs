There are two scenarios to connect OverOps to Jetty: the Jetty Server can be embedded or the existing Jetty server on which customer application is running.

 

#Embedded Jetty

To connect OverOps to embedded Jetty:

* Add the following argument to your JVM startup arguments:
```-agentlib:TakipiAgent```

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
  "body": "The ```-agentlib``` is a JVM argument and should be written **before** the -jar / -cp arguments. For example:\n```java -Xmx2G -agentlib:TakipiAgent -jar myapp.jar```\nor respectively\n```java -Xmx2G -agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so -jar myapp.jar```"
}
[/block]


 

#Standalone Jetty
To connect OverOps to Jetty running on Linux, follow the instructions of the relevant Jetty launch configuration:

1. From <JETTY_INSTALL_DIR>/bin/ directory, locate the jetty.sh file used to run Jetty.
2. Find the following line:
```
JAVA_OPTIONS="$JAVA_OPTIONS -Djetty.home=$JETTY_HOME -Djetty.base=$JETTY_BASE -Djava.io.tmpdir=$TMPDIR"
```
3. Below this line, add the following:
```JAVA_OPTIONS="-agentlib:TakipiAgent $JAVA_OPTIONS"```
4. Restart Jetty.
5. [Test your Installation](doc:test-your-installation)