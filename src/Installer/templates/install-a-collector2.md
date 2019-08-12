## Verify Installation
Verify that the takipi-service is running:
```ps -ef | grep takipi```
[block:callout]
{
  "type": "info",
  "body": "Save the IP address of the <COLLECTOR_HOST>, and the collector listening port <COLLECTOR_PORT>. You will need them in the agent installation step.",
  "title": "Keep the Collector host and port for next steps"
}
[/block]

[block:html]
{
  "html": "<div id=\"linux-root-yes-end\"></div>"
}
[/block]

[block:html]
{
  "html": "<div id=\"linux-root-no-start\"></div>"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Please review [Software and Hardware Compatibility](doc:compatibility#section-collector-network-requirements) for remote Collector network requirements.\n\nMake sure Java is installed **before** you begin the collector installation."
}
[/block]

## Download the Collector Installation TAR File

### For SaaS Deployment
1. From [the download site](https://app.overops.com/app/download?t=tgz), download the Collector installation TAR file.
```wget --content-disposition https://app.overops.com/app/download?t=tgz```
2. Extract the files to your working folder:
```tar -xf takipi-latest.tar.gz```
A ‘takipi’ folder is created.

### For On-Premises Deployment
1. From the On-Premises server, download the Agent installation TAR file.
```wget -O takipi.tar.gz "$TAKIPI_HOST:8080/app/download?t=tgz"```
2. Extract the files to your working folder:
```tar xvf takipi.tar.gz```
A ‘takipi’ folder is created.

## Add the Environment ID (Installation key)
1. If you do not possess an Installation key, from the OverOps web application, generate an installation key. 
2. Copy the installation key and paste it into a text file named installation.key.
3. Save the installation.key file in the ```<PATH>/takipi ``` directory on your machine.

## Create the **collector.properties** File
Using the template below, create the **collector.properties** file (see collector.properties.example for a template):

### For SaaS Deployment
[block:code]
{
  "codes": [
    {
      "code": "jvmPath=${JAVA_HOME}/jre/lib/amd64/server/libjvm.so\nlibraryPath=<COLLECTOR_DIR>/lib\n\ntakipi.backend.url=https://backend.overops.com\ntakipi.storage.test.url=https://s3.amazonaws.com/app-takipi-com/ConnectionTest\n\n# The internal JVM max heap size\ntakipi.jvm.heap.size=1G\n# The TCP port to listen on\ntakipi.listen.port=<COLLECTOR_PORT>\n# The server name of the Collector. Leave empty for HOSTNAME\ntakipi.server.name=<COLLECTOR_HOST>\n...",
      "language": "text",
      "name": "SaaS collector.properties"
    }
  ]
}
[/block]
### For a Hybrid Deployment
Use the same collector properties as the SaaS deployment with the following change:

[block:code]
{
  "codes": [
    {
      "code": "takipi.backend.url=https://backend.overops.com\ntakipi.storage.test.url=https://ec2-18-212-154-63.compute-1.amazonaws.com:8443/storage/v1/diag/ping",
      "language": "text",
      "name": "Hybrid collector properities"
    }
  ]
}
[/block]
### For an On-Premises Deployment
Use the same collector properties as the SaaS deployment with the following change:
[block:code]
{
  "codes": [
    {
      "code": "takipi.backend.url=http://$TAKIPI_HOST:8080\ntakipi.storage.test.url=http://$TAKIPI_HOST:8080/service/png",
      "language": "text",
      "name": "On-Premises collector.properties"
    }
  ]
}
[/block]
2. Place the properties file in the *takipi* directory on your machine.


## Run the Collector
[block:callout]
{
  "type": "warning",
  "body": "To run the Collector as a service sudo is required and you will need to create the appropriate systemd or similar files.   \n\nFor examples see also in ```/opt/takipi/etc/init```"
}
[/block]
```nohup <PATH_TO_TAKIPI>/takipi/bin/takipi-service  &```
[block:callout]
{
  "type": "info",
  "body": "For Troubleshooting purposes you can run the collector in your terminal window and enable logging.\n```<PATH_TO_TAKIPI>/takipi/bin/takipi-service  -l```"
}
[/block]

## Test the Installation
1. Test the installation:From the OverOps web application ([app.overops.com](https://app.overops.com)) Dashboard, click **Add Server** and then, from the dialog box, click **Next** and then click **Test Installation**.
When the connection is established, the Collector status is 'Monitoring'.
2. Verify that your application throws exceptions.
Rootless installation does not enable the Collector to start automatically after a reboot.
3. Run the Collector as a daemon according to your system.
[block:html]
{
  "html": "<div id=\"linux-root-no-end\"></div>"
}
[/block]