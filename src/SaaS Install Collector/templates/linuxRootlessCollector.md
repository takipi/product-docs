The OverOps Collector can also be installed without root access. This procedure requires the [Installation Key](https://doc.overops.com/docs/generating-installation-keys) provided by OverOps.
[block:callout]
{
  "type": "info",
  "body": "Currently, Rootless Collector installation is not supported on Windows."
}
[/block]
##To install a Collector without root access:

1. From [https://app.overops.com/app/download?t=tgz](https://app.overops.com/app/download?t=tgz), download the Collector installation TAR file.
2. Extract files to your working folder:
```tar -xf takipi-latest.tar.gz```
A ‘takipi’ folder is created.
3. If you do not possess an Installation key, from the OverOps web application, generate an installation key. 
4. Copy the installation key and paste it into a text file named installation.key.
5. Save the installation.key file in the ```<PATH>/takipi ``` directory on your machine.
6. According to the template below, create the collector.properties file (see collector.properties.example for a template):
[block:code]
{
  "codes": [
    {
      "code": "jvmPath=${JAVA_HOME}/jre/lib/amd64/server/libjvm.so\nlibraryPath=<COLLECTOR_DIR>/lib\n\ntakipi.backend.url=https://backend.overops.com\ntakipi.storage.test.url=https://s3.amazonaws.com/app-takipi-com/ConnectionTest\ntakipi.jvm.heap.size=1G\ntakipi.listen.port=\ntakipi.server.name=\n\n\n",
      "language": "text"
    }
  ]
}
[/block]
7. Place the properties file in the *takipi* directory on your machine.


8. Run the Collector:
[block:callout]
{
  "type": "warning",
  "body": "To run the collector as a service sudo is required and you will need to create the appropriate systemd or similar files.   \n\nFor examples see also in ```/opt/takipi/etc/init```"
}
[/block]

```nohup <PATH_TO_TAKIPI>/takipi/bin/takipi-service  &```

[block:callout]
{
  "type": "info",
  "body": "For Troubleshooting purposes you can run the collector in your terminal window and enable logging.\n```<PATH_TO_TAKIPI>/takipi/bin/takipi-service  -l```"
}
[/block]
9. Test the installation:From the OverOps web application ([app.overops.com](https://app.overops.com)) Dashboard, click **Add Server** and then, from the dialog box, click **Next** and then click **Test Installation**.
When the connection is established, the Collector status is 'Monitoring'.
10. Test that your application throws exceptions.
Rootless installation does not enable the Collector to start automatically after a reboot.
11. Run the Collector as a daemon according to your system.