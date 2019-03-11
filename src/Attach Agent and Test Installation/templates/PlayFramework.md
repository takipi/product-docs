[block:callout]
{
  "type": "danger",
  "title": "Rootless Agent Installation Method (Linux only)",
  "body": "When Using the Rootless Agent Installation Method **replace** the \n```-agentlib:TakipiAgent``` JVM startup Argument \nwith\n```-agentpath:<TAKIPI_HOME>/lib/libTakipiAgent.so``` JVM startup Argument"
}
[/block]

#Play 2.2+ - Production mode
To connect OverOps to Play 2.2+ in Production mode:

1. Locate the run script of your Play application. By default is is in: ```{app_folder}/bin/{app_name}```
2. Locate the line: 
```declare -a java_args```
3. Add the following immediately after it:
```java_args=( "${java_args[@]}" "-agentlib:TakipiAgent" )```
4. Restart the application.
5. [Test your Installation](doc:test-your-installation) 



#Play 2.3 - Debug mode
To connect OverOps to Play 2.3 in Debug mode:

1. Run Play in debug mode:
```activator run -J-agentlib:TakipiAgent```
2. [Test your Installation](doc:test-your-installation)



#Play 2.2 - Debug mode (Linux/macOS)
To connect OverOps to Play 2.2 in Debug mode from Linux/macOS:

1. Locate the build file under ```{play dir}/bin```.
2. Add the following line just before the java execution line:
```PLAY_OPTS="$PLAY_OPTS -agentlib:TakipiAgent"```
3. Run Play in debug mode: 
4. play run
5. [Test your Installation](doc:test-your-installation) 



#Play 2.2 - Debug mode (Windows)
To connect OverOps to Play 2.2 in Debug mode from Windows:

1. Locate the build.bat file under ```{play dir}\bin```.
2. Add the following line just before the java execution line:
```set PLAY_OPTS=%PLAY_OPTS% -agentlib:TakipiAgent```
3. Run play in debug mode:
4. play run
5. [Test your Installation](doc:test-your-installation) 



#Play 2.0 - Debug mode (Linux / macOS)
To connect OverOps to Play 2.0 in Debug mode from Linux/macOS:

1. Locate build under ```{play dir}/bin```.
2. Add the following line just before the java execution line:
```JAVA_OPTS="$JAVA_OPTS -agentlib:TakipiAgent"```
3. Run play in debug mode
4. play run
5. [Test your Installation](doc:test-your-installation) 



#Play 2.0 - Debug mode (Windows)
To connect OverOps to Play 2.0 in Debug mode from Windows:

1. Locate the build.bat file under ```{play dir}\bin```.
2. Add the following line just before the java execution line: 
```set JAVA_OPTS=%JAVA_OPTS% -agentlib:TakipiAgent```
3. Run play in debug mode
4.  play run
5. [Test your Installation](doc:test-your-installation)