#OverOps Collector in Docker
This guide is based on the [Linux Rootless Collector Installation](doc:linux-rootless-collector-install)  guide.

The OverOps Collector can be made available to other containers through [networking](https://docs.docker.com/network/). In this guide, we'll run the Collector locally, binding to port 6060 on the host machine. The installation key and configuration files are [mounted)(https://docs.docker.com/storage/bind-mounts/) into the container from the host machine.

This procedure requires an [Installation Keys](doc:generating-installation-keys)  provided by OverOps.

#Run the Collector
[block:callout]
{
  "type": "info",
  "body": "Pull overops/collector from [Docker Hub](https://hub.docker.com/r/overops/collector)",
  "title": "TIP"
}
[/block]
###1. Create a private folder
[block:callout]
{
  "type": "warning",
  "body": "The `private` folder needs to be on the same directory from which you run the docker commands or the path to the `private` folder needs to be explicitly provided in the docker command arguments."
}
[/block]
###2. In the private folder, create the file installation.key containing your installation key.
###3. In the private folder, create the collector.properties file based on the following template.
  Additional templates can be found on [GitHub](https://github.com/takipi-field/kubernetes/tree/master/collector/private).

[block:html]
{
  "html": "<div>\n<script src=\"https://gist-it.appspot.com/github/takipi-field/kubernetes/blob/master/collector/private/collector.properties.saas.example?footer=minimal\"></script>\n</div>"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Running OverOps Server on-premise? \nSet `takipi.backend.url` and `takipi.storage.test.url` to point to your on-premises installation.",
  "title": "TIP"
}
[/block]
###4. Run the [overops/collector](https://hub.docker.com/r/overops/collector) container
[block:callout]
{
  "type": "info",
  "body": "Run from directory that contains the private directory. \nOtherwise you will get an error response: `invalid mount config for type \"bind\": source path does not exist: /private/private`",
  "title": "TIP"
}
[/block]
```
docker run -d -p 6060:6060 \
--mount type=bind,source="$(pwd)"/private,target=/opt/takipi/private overops/collector
 ```

###5. Verify connectivity on https://app.overops.com/  in your browser

#Next Steps
[Attach OverOps Agent to Docker Containers](doc:attach-overops-agent-to-docker-containers)