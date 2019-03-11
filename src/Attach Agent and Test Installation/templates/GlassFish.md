[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

The OverOps Agent runs on the JVM. You can launch the JVM with OverOps, using various launchers. When launching the JVM with Glassfish, follow the instructions of the relevant debug configuration:

 

#Standalone Glassfish
To launch JVM with Glassfish:

1. From the ```{glassfish dir}/domains/{domain}/config/``` directory, locate the domain.xml file.
2. **Locate** the <java-config> xml node.
3. Under <java-config>, **add** the following <jvm-options> node:
```
<jvm-options>-agentlib:TakipiAgent</jvm-options>
```
or respectively
```
<jvm-options>-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so</jvm-options>
```
4. **Restart** Glassfish.
5. [Test your Installation](doc:test-your-installation) 
 

#Admin Console/Netbeans Plugin
[Glassfish-Netbeans Plugin](doc:netbeans#section-netbeans-glassfish-plugin) 
 

#Eclipse Plugin
[Glassfish-Eclipse Plugin](doc:eclipse#section-glassfish-eclipse-plugin) 
 

#IntelliJ Plugin
[Glassfish-IntelliJ Plugin](doc:intellij#section-glassfish-intellij-plugin)