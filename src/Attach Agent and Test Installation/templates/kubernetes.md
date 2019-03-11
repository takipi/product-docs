#Attaching the OverOps Agent to Containers in Kubernetes
The OverOps Agent library can be made available to a container through a [Persistent Volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) or by copying it directly into an image.


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
  "title": "Tip"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Ensure that the `-Dtakipi.*` JVM arguments are located before the -jar and -cp arguments.",
  "title": "Note"
}
[/block]
The OverOps Agent is a native agent - it's OS specific. If using an 
* **Alpine Linux **based image, use the Alpine Agent
* **Red Hat and Debian** based images, use the Standard Agent.
[block:callout]
{
  "type": "danger",
  "body": "Seeing this error? \n[Error relocating libHSAgent.so: __strtod_internal: symbol not found](https://support.overops.com/hc/en-us/articles/360017440174)"
}
[/block]
#Persistent Volume
The Agent can be stored on a [persistent volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) and mounted into a container at runtime by adding the following to your pod or deployment controller's container spec, modified to use your volume:
```
  env:
	- name: TAKIPI_COLLECTOR_HOST
  	  value: "overops-collector-service"
	- name: TAKIPI_COLLECTOR_PORT
  	  value: "6060"
	- name: TAKIPI_RESOURCES_DIR
  	  value: "/tmp"
	- name: JAVA_TOOL_OPTIONS
  	  value: "-agentpath:/takipi/lib/libTakipiAgent.so"
  volumeMounts:
	- mountPath: /takipi
  	  name: takipi-volume
  volumes:
	- name: takipi-volume
```
Download and unzip the latest Agent to create a `takipi` folder on the Persistent Volume.
 
For Red Hat / Debian based images: https://s3.amazonaws.com/app-takipi-com/deploy/linux/takipi-agent-latest.tar.gz 

For Alpine Linux based images (beta): https://s3.amazonaws.com/sam.sparktale/samv2/snapshots/native/native.0.2449/takipi-alpine-agent-native.0.2449.tar.gz 

[block:callout]
{
  "type": "danger",
  "body": "The Alpine Linux image is currently in Beta and not supported.\nPlease see [Software and Hardware Compatibility](doc:compatibility#section-supported-environments-and-versions) for supported OS Versions."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "If you're sharing the same Agent through a mount across multiple containers, set the environment variable `TAKIPI_RESOURCES_DIR=/tmp` to avoid conflicts and to ensure each Agent writes to its own folder.",
  "title": "Note"
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

#Pod Preset
[block:callout]
{
  "type": "success",
  "body": "Mounting the Agent into a container at runtime is the preferred approach.",
  "title": "Tip"
}
[/block]
By leveraging [Pod Presets](https://kubernetes.io/docs/concepts/workloads/pods/podpreset/), the environment variables and volume mount method used above can be easily scaled across many pods without significant changes to existing pod or deployment configurations.
[block:callout]
{
  "type": "warning",
  "body": "Pod Presets are currently an alpha-level feature of Kubernetes. \nThe feature must be first be enabled in your cluster before applying the preset.",
  "title": "Note"
}
[/block]
After enabling Pod Presets, create a preset for the Agent using [pod-preset.yaml](https://github.com/takipi-field/kubernetes/blob/master/agent/pod-preset.yaml), available on GitHub. Modify the config for your environment by updating the volume `takipi-volume` to use the Persistent Volume you created.

Now apply the configuration:
```
kubectl apply -f pod-preset.yaml
```
With the preset in place, simply add the label `takipi: inject-agent`  to pods and deployments you wish to monitor with OverOps.

#Verify
Confirm connectivity by going to https://app.overops.com. 

Next Steps
[Naming your Application, Server, Deployment](doc:naming-your-application-server-deployment) 
* Option 1: Using JVM arguments passed at application start-up 
* Option 2: Using JAR or WAR manifest attributes