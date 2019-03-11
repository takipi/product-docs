[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

After you install OverOps, you will need to connect it. Please choose the debug configuration you’re using to launch your application:

[Java/Scala Application](https://doc.overops.com/docs/intellij#section-java-scala-application)
[Glassfish Plugin](https://doc.overops.com/docs/intellij#section-glassfish-intellij-plugin)
[JBoss Plugin](https://doc.overops.com/docs/intellij#section-jboss-intellij-plugin)
[Tomcat Plugin](https://doc.overops.com/docs/intellij#section-tomcat-intellij-plugin)

 

#Java/Scala Application
1. **Open** “Run | Edit Configurations“.
2. **Locate** your project’s application configuration.
3. **In the VM options box**, add: `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/115e1ed-shot21.png",
        "shot21.png",
        599,
        477,
        "#d8d7d7"
      ]
    }
  ]
}
[/block]
4. Click **Apply**.
5. [Test your Installation](doc:test-your-installation)  


#Glassfish-IntelliJ Plugin
1. **Edit** Glassfish Run/Debug configurations.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0239a36-shot22.png",
        "shot22.png",
        243,
        161,
        "#c7ccd2"
      ]
    }
  ]
}
[/block]
2. From **Run/Debug Configuration**, In the **VM options** field, add: `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/def453e-shot23.png",
        "shot23.png",
        1432,
        736,
        "#e2e2e3"
      ]
    }
  ]
}
[/block]
3. Click **OK**.
4. **Start** Glassfish.
5. [Test your Installation](doc:test-your-installation)  




#JBoss-IntelliJ Plugin
1. **Edit** Wildfly Run/Debug configurations.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/605619b-shot22.png",
        "shot22.png",
        243,
        161,
        "#c7ccd2"
      ]
    }
  ]
}
[/block]
 2. In the **VM options** field, add: `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2a9e2ec-shot25.png",
        "shot25.png",
        1432,
        736,
        "#e2e2e3"
      ]
    }
  ]
}
[/block]
3. Click **OK**.
4. **Start** JBoss.
5. [Test your Installation](doc:test-your-installation)  




#Tomcat-IntelliJ Plugin
1. **Edit** Tomcat Run/Debug configurations.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3a0de3e-shot22.png",
        "shot22.png",
        243,
        161,
        "#c7ccd2"
      ]
    }
  ]
}
[/block]
2. In the **VM options** field, add: `-agentlib:TakipiAgent`  or respectively `-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/22b9758-shot26.png",
        "shot26.png",
        1432,
        736,
        "#e3e3e3"
      ]
    }
  ]
}
[/block]
3.Click **OK**.
4. **Start** Tomcat.
5. [Test your Installation](doc:test-your-installation)