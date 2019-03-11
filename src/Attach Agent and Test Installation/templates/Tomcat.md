When OverOps is installed on your machine, connect it to your Tomcat server.

[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]


##Linux/MacOs
To connect OverOps to Tomcat running on Linux/macOS:

1. Locate the **catalina.sh** file used to run Tomcat.
2. If it doesn’t already exist, create a **setenv.sh** file in the same folder.
3. Add the following line to the end of **setenv.sh** file: 
```CATALINA_OPTS="$CATALINA_OPTS -agentlib:TakipiAgent"```
4. Restart Tomcat.
5. [Test your Installation](doc:test-your-installation) 
 


##Windows
1. Locate the **catalina.bat** file used to run Tomcat.
2. If it doesn’t already exist, create **setenv.bat** in the same folder.
3. Add the following line to the end of **setenv.bat** file: 
```set CATALINA_OPTS=%CATALINA_OPTS% -agentlib:TakipiAgent```
4. Restart Tomcat.
5. [Test your Installation](doc:test-your-installation) 

##Windows Service
Apache Tomcat has a configuration application which allows you to specify JVM arguments for the server when running as a service.

To add the OverOps agent to Tomcat (Windows):

1. In the **Start** menu, from **All programs**, select **Apache Tomcat **(version), and click **Configure Tomcat**.

[block:callout]
{
  "type": "info",
  "body": "On Windows Server 2012 + use the following command to edit the Service Properties:\n```tomcat8w.exe //ES//<service_name>```"
}
[/block]
2. From the Apache Tomcat Properties, switch to the Java tab and in the Java Options field, add: 
```-agentlib:TakipiAgent.```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5b93d57-shot22.png",
        "shot22.png",
        434,
        418,
        "#d4d6db"
      ]
    }
  ]
}
[/block]
3. Click **Apply** and then **OK**.
4. Restart your machine.
5. [Test your Installation](doc:test-your-installation) 
 

#Application Plugins

##Tomcat-Eclipse Plugin
To connect OverOps to Tomcat:

1. From Eclipse, click **Run** and select **Debug Configurations**.
2. From the Debug Configurations dialog box, select **Apache Tomcat** and then click the relevant <Tomcat configuration>.
3. From the **Arguments tab**, in the **VM arguments** field, add: 
```-agentlib:TakipiAgent```

or respectively

```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e835dcf-shot23.png",
        "shot23.png",
        798,
        832,
        "#d9d7d6"
      ]
    }
  ]
}
[/block]
4. Click **Apply** and then **Close**.
5. **Restart** Tomcat.
6. [Test your Installation](doc:test-your-installation) 


##Tomcat-IntelliJ Plugin
1. From IntelliJ, open **Edit Configurations.** 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9c12716-shot24.png",
        "shot24.png",
        243,
        161,
        "#c7ccd2"
      ]
    }
  ]
}
[/block]
2. From **Run/Debug Configurations**, in the **VM options** field, 
add: ```-agentlib:TakipiAgent```

or respectively

```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0b7694-shot25.png",
        "shot25.png",
        1432,
        736,
        "#e3e3e3"
      ]
    }
  ]
}
[/block]
3. Click **OK**.
4. Restart Tomcat.
5. [Test your Installation](doc:test-your-installation) 
 

##Tomcat-NetBeans Plugin
1. From NetBeans, from the **Services** window (Window | Services), click **Servers**.
2. Right click the **Apache Tomcat** server and select **Properties**.
3. In the Server Properties dialog box, switch to the **Platform** tab.
4. In the **VM Options** field, 
add: ```-agentlib:TakipiAgent```

or respectively

```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6899667-shot26.png",
        "shot26.png",
        752,
        608,
        "#d0cccb"
      ]
    }
  ]
}
[/block]
5. Click **Close**.
6. Restart Tomcat.
7. [Test your Installation](doc:test-your-installation)