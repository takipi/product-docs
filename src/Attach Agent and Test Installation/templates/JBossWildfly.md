[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

When OverOps is installed on your machine, connect it to your JBoss server.
Follow the instructions of the relevant JBoss launch configuration:
 

#Standalone JBoss/Wildfly
**To connect to JBoss/Wildfly running on Linux/macOS:**
1. Locate the standalone.conf file under {jboss dir}/bin.
2. Add the following line near the end of the file:
```JAVA_OPTS="$JAVA_OPTS -agentlib:TakipiAgent"``` 
3. Restart JBoss.
4. [Test your Installation](doc:test-your-installation) 

**To connect to JBoss running on Windows**:
1. Locate the standalone.conf.bat file under {jboss dir}\bin.
2. Add the following line near the end of the file:
```set JAVA_OPTS=%JAVA_OPTS% -agentlib:TakipiAgent```
3. Restart JBoss.
4. [Test your Installation](doc:test-your-installation)  

#Eclipse Plugin
see [JBoss-Eclipse Plugin](doc:eclipse#section-jboss-eclipse-plugin) 
 
#IntelliJ Plugin
see [JBoss-IntelliJ Plugin](doc:intellij#section-jboss-intellij-plugin) 

#NetBeans Plugin
see [JBoss-NetBeans Plugin](doc:netbeans#section-netbeans-jboss-plugin)