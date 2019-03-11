#Attaching the OverOps Agent to Docker Containers
The OverOps Agent library can be made available to a container through a [mount](https://docs.docker.com/storage/bind-mounts/) or by copying it directly into an image.

Set [environment variables](doc:agent-properties)  to configure the Agent to connect to the Collector and to attach the Agent to all running JVMs inside the container.
```
TAKIPI_COLLECTOR_HOST=collector
TAKIPI_COLLECTOR_PORT=6060
JAVA_TOOL_OPTIONS=-agentpath:/takipi/lib/libTakipiAgent.so
```
[block:callout]
{
  "type": "warning",
  "body": "If you're running more than one JVM inside a container and you do not want OverOps to monitor all of them, you must modify your [command used to start your JVM](doc:standalone-jvm). \n\nInstead of setting the `JAVA_TOOL_OPTIONS` environment variable, start your JVM with \n`-agentpath:/takipi/lib/libTakipiAgent.so` before the -jar and -cp arguments.",
  "title": "Note"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "For best results, name your applications and deployments at the JVM level.\nsee [Naming your Application, Server, Deployment](doc:naming-your-application-server-deployment)",
  "title": "TIP"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Note",
  "body": "Ensure that the `-Dtakipi.*` JVM arguments are located before the -jar and -cp arguments."
}
[/block]
The OverOps Agent is a native agent - it's OS specific. If using an 
* **Alpine Linux **based image, use the Alpine Agent
* **Red Hat and Debian** based images, use the Standard Agent.
[block:callout]
{
  "type": "danger",
  "body": "Seeing this error? \n[Error relocating libHSAgent.so: __strtod_internal: symbol not found](https://support.overops.com/hc/en-us/articles/360017440174)",
  "title": "Tip"
}
[/block]
#Mount
[block:callout]
{
  "type": "success",
  "body": "Mounting the Agent into a container at runtime is the preferred approach.",
  "title": "TIP"
}
[/block]
To mount the Agent into your image, first download and unzip the latest Agent to create a `takipi` folder.
 
For Red Hat / Debian based images: https://s3.amazonaws.com/app-takipi-com/deploy/linux/takipi-agent-latest.tar.gz 

For Alpine Linux based images (beta): https://s3.amazonaws.com/sam.sparktale/samv2/snapshots/native/native.0.2449/takipi-alpine-agent-native.0.2449.tar.gz 

[block:callout]
{
  "type": "danger",
  "body": "The Alpine Linux image is currently in Beta and not supported.\nPlease see [Software and Hardware Compatibility](doc:compatibility#section-supported-environments-and-versions) for supported OS Versions."
}
[/block]

Now run your image with the required environment variables set and the mount attached.
```
docker run \
-e TAKIPI_RESOURCES_DIR=/tmp \
-e TAKIPI_COLLECTOR_HOST=localhost \
-e TAKIPI_COLLECTOR_PORT=6060 \
-e JAVA_TOOL_OPTIONS=-agentpath:/takipi/lib/libTakipiAgent.so \
--mount type=bind,source="$(pwd)"/takipi,target=/takipi \
example/your-image-here:latest
```
[block:callout]
{
  "type": "warning",
  "body": "If you're sharing the same Agent through a mount across multiple containers, set the [environment variable](https://doc.overops.com/docs/agent-properties#section-2-2-directories) \n `TAKIPI_RESOURCES_DIR=/tmp` to avoid conflicts and to ensure each Agent writes to its own folder.",
  "title": "NOTE"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "If you're running the Collector on the same host machine as the JVM with the Agent, use `TAKIPI_COLLECTOR_HOST=docker.host.internal`",
  "title": "Tip"
}
[/block]
#Copy
To copy the Agent into your image, add the following lines to your Dockerfile:
```
# set default environmental variables
ENV TAKIPI_COLLECTOR_HOST=collector
ENV TAKIPI_COLLECTOR_PORT=6060
ENV JAVA_TOOL_OPTIONS=-agentpath:/takipi/lib/libTakipiAgent.so

# download and install the agent - extracts into the `takipi` folder.
# NOTE: use the correct Agent for your OS
RUN curl -sL https://s3.amazonaws.com/app-takipi-com/deploy/linux/takipi-agent-latest.tar.gz | tar -xvzf -
```

#Verify
Confirm connectivity by going to https://app.overops.com. 
 

#Next Steps
[Naming your Application, Server, Deployment](doc:naming-your-application-server-deployment)  
* Option 1: Using JVM arguments passed at application start-up
* Option 2: Using JAR or WAR manifest attributes