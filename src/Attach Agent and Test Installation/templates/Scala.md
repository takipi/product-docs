[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

#SBT/Scala commands
You can add TakipiAgents to your Scala application by passing a JVM argument to scala/sbt with a "-J" prefix:
```scala -J-agentlib:TakipiAgent```
```sbt -J-agentlib:TakipiAgent```

 or respectively

```scala -J-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so```
```sbt -J-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so```

Add TakipiAgents to your Scala application by setting JAVA_OPTS environment variable before starting Scala:
[block:code]
{
  "codes": [
    {
      "code": "export JAVA_OPTS=\"$JAVA_OPTS -agentlib:TakipiAgent\"",
      "language": "text",
      "name": "Linux/macOS"
    },
    {
      "code": "set JAVA_OPTS=%JAVA_OPTS% -agentlib:TakipiAgent",
      "language": "text",
      "name": "Windows"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "In some sbt versions the environment variable is SBT_OPTS and not JAVA_OPTS."
}
[/block]
#Maven
In the terminal/command line, add ```-agentlib:TakipiAgent``` to the MAVEN_OPTS environment variable:

[block:code]
{
  "codes": [
    {
      "code": "export MAVEN_OPTS=\"$MAVEN_OPTS -agentlib:TakipiAgent\"",
      "language": "text",
      "name": "Linux/MacOS"
    },
    {
      "code": "set MAVEN_OPTS=%MAVEN_OPTS% -agentlib:TakipiAgent",
      "language": "text",
      "name": "Windows"
    }
  ]
}
[/block]

#Test your Installation
[Test your Installation](doc:test-your-installation)