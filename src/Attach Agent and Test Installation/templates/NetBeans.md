[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]
Once you install OverOps, you’ll have to connect it. If you’re using NetBeans, please choose the debug configuration you’re using to launch your application:
 
 
#Java/Scala Application
1. Open the File | Project Properties dialog.
2. Select Run in the tree pane on the left.
3. Add to VM Options: `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2220bad-shot11.png",
        "shot11.png",
        617,
        470,
        "#ecebeb"
      ]
    }
  ]
}
[/block]
4. Click OK.
5. Start the application you want OverOps to monitor.
6. [Test your Installation](doc:test-your-installation) 


 
#NetBeans-Glassfish Plugin
1. Open the Glassfish console (http://localhost:4848).
2. Under **Common Tasks**, expand **Configurations > server-config > JVM settings**.
3. **Switch** to the JVM Options tab.
4. **Add** a new JVM option: `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4f645f1-shot12.png",
        "shot12.png",
        1007,
        674,
        "#d4d9dd"
      ]
    }
  ]
}
[/block]
5. Click **Save**.
6. **Restart** Glassfish.
7. [Test your Installation](doc:test-your-installation)  


#NetBeans-JBoss Plugin
1. Enter the Services window (Window | Services).
2. Expand Servers.
3. Right-click Wildfly Application Server.
4. Select Properties.
5. Select the Platform tab.
6. Add to VM Options: `-agentlib:TakipiAgent` 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d5319ff-shot13.png",
        "shot13.png",
        752,
        522,
        "#cdcac8"
      ]
    }
  ]
}
[/block]
7. Click Close.
8. Start JBoss.
9. [Test your Installation](doc:test-your-installation)  



#NetBeans-Tomcat Plugin
1. Enter the Services window (Window | Services).
2. Expand Servers.
3. Right click on the Apache Tomcat server.
4. Select Properties.
5. Select the Platform tab.
6. In the VM Options box, add: `-agentlib:TakipiAgent` 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c61879c-shot14.png",
        "shot14.png",
        752,
        608,
        "#d0cccb"
      ]
    }
  ]
}
[/block]
7. Click Close.
8. Start Tomcat.
9. [Test your Installation](doc:test-your-installation)