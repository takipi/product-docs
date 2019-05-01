#On-Premises OverOps Server in Docker
The OverOps Server can be made available to other containers through [networking](https://docs.docker.com/network/). In this guide, we'll run the Server locally, binding to port 8080 on the host machine. Configuration files are [mounted](https://docs.docker.com/storage/bind-mounts/) into the container from the host machine.



#Prerequisites
Please see [Software and Hardware Compatibility](doc:compatibility#section-overops-server-on-premises-installation-requirements) 

[block:callout]
{
  "type": "warning",
  "body": "Server requires at least **200 GB** of free disk space for OverOps."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Please ensure you have \n* At least 16384 processes (`ulimit -u`)\n* At least 32768 files (`ulimit -n`)"
}
[/block]
This procedure requires a [License Key](doc:non-docker-on-premises-installation#section-3-activating-overops) provided by OverOps.


#Run the Server

[block:callout]
{
  "type": "info",
  "title": "",
  "body": "Pull [overops/server](https://hub.docker.com/r/overops/server) from Docker Hub"
}
[/block]
###1. Create a `private` folder


###2. In the `private` folder, create the
```
my.agentsettings.properties, 
my.server.properties, 
smtp.properties, 
and smtpserver.properties files. 
```


Example configuration files can be found on [GitHub](https://github.com/takipi-field/kubernetes/tree/master/backend/private).

###3. Create a `storage` folder. The Server will store data in this folder.

[block:callout]
{
  "type": "warning",
  "body": "The `private` and `storage` folder needs to be on the same directory from which you run the docker commands or the path to the `private` and `storage` folder needs to be explicitly provided in the docker command arguments."
}
[/block]
###4. Create a MySQL or PostgreSQL database.
###5. Several environment variables must be set, including:
```
HOST_URL - hostname within your cluster
FRONTEND_URL - external hostname for web browsers
DB_TYPE - database type
DB_URL - database server URL
DB_USER - database username
DB_PASS - database password
```

###6. Run the overops/server container
```
docker run -p 8080:8080 \
--mount type=bind,source="$(pwd)"/private,target=/opt/private \
--mount type=bind,source="$(pwd)"/storage,target=/opt/takipi-server/storage \
-e HOST_URL=localhost:8080 \
-e FRONTEND_URL=http://localhost:8080 \
-e DB_TYPE=mysql \
-e DB_USER=<DATABASE_USER> \
-e DB_PASS=<DATABASE_PASS> \
-e DB_URL=<DATABASE_URL> \
overops/server
```

###7. Go to  http://`<FRONTEND_URL>`/  in your browser.
###8. [Activate OverOps](doc:non-docker-on-premises-installation#section-3-activating-overops)


#Next Steps
* [Running the Collector in Docker](doc:installation-overops-collector-in-docker) (same as SaaS, but configured to use on-premise server)
* [Attach OverOps Agent to Docker Containers](doc:attach-overops-agent-to-docker-containers)