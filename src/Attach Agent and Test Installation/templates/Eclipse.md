[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

The OverOps Agent runs on the JVM. You can launch the JVM with OverOps, using various launchers. When launching the JVM with Eclipse, follow the instructions of the relevant debug configuration:
 

#Java/Scala Application
To launch the JVM using Java Application:

1. From Eclipse, open **Debug Configuration.**
2. From the **Arguments** tab, in the **VM arguments** box, add `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2e94383-shot21.png",
        "shot21.png",
        618,
        484,
        "#e9e8e9"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
3. Click **Apply**.
4. Start the application you want OverOps to monitor.
5. [Test your Installation](doc:test-your-installation) 


#Tomcat-Eclipse Plugin
[Tomcat-Eclipse Plugin](doc:tomcat#section-tomcat-eclipse-plugin) 

 

#Glassfish-Eclipse Plugin
To launch the JVM using Glassfish:

1. From Eclipse, open **Debug Configurations**.
2. Select Glassfish** Application Server** --> <Your Glassfish configuration>.
3. From the **Arguments** tab, in the **VM arguments** box, add `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0828477-shot24.png",
        "shot24.png",
        1132,
        702,
        "#dad9d8"
      ]
    }
  ]
}
[/block]
4. Click **Apply**.
5. **Restart** Glassfish.
6. [Test your Installation](doc:test-your-installation) 
 

#JBoss-Eclipse Plugin
To launch the JVM using JBoss:

1. From Eclipse, open the Servers window.
2. Double-click the Wildfly (JBoss) server and then click Open launch configuration.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e670572-shot26.png",
        "shot26.png",
        749,
        198,
        "#f2f1f2"
      ]
    }
  ]
}
[/block]
3. From the Arguments tab, in the VM arguments box, add `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e8da70c-shot27.png",
        "shot27.png",
        1084,
        963,
        "#dcd9d8"
      ]
    }
  ]
}
[/block]
4. Click OK.
5. Restart JBoss.
6. [Test your Installation](doc:test-your-installation)