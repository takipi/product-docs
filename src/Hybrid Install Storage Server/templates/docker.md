#Running the Storage Server in Docker
The OverOps Storage Server can be made available to other containers through [networking](https://docs.docker.com/network/). 
In this guide, we'll run the Storage Server locally, binding to port 8080 on the host machine. The configuration file and storage data directory are [mounted](https://docs.docker.com/storage/bind-mounts/) into the container from the host machine.

There are two versions of the Storage Server 
* [bind mount](doc:running-storage-server-in-docker#section-run-the-storage-server-bind-mount-)
* [Amazon S3](doc:running-storage-server-in-docker#section-run-the-storage-server-amazon-s3-)

#Run the Storage Server (bind mount)

[block:callout]
{
  "type": "info",
  "body": "Pull [overops/storage-server:latest](https://hub.docker.com/r/overops/storage-server) from Docker Hub",
  "title": "Tip"
}
[/block]
###1. Create a `private` folder


###2. Create a `storage` folder

[block:callout]
{
  "type": "warning",
  "body": "The `private` and `storage` folder needs to be on the same directory from which you run the docker commands or the path to the `private` and `storage` folder needs to be explicitly provided in the docker command arguments."
}
[/block]
###3. In the `private` folder, create the file `settings.yaml` based on [this example](https://github.com/takipi-field/kubernetes/blob/master/hybrid/private/settings.yaml).
###4. Run the [overops/storage-server](https://hub.docker.com/r/overops/storage-server) container
```
docker run -d -p 8080:8080 \
--mount type=bind,source="$(pwd)"/storage,target=/opt/takipi-storage/storage \
--mount type=bind,source="$(pwd)"/private,target=/opt/takipi-storage/private \ 
overops/storage-server:latest
```

###5. Verify connectivity on https://app.overops.com/  in your browser

#Run the Storage Server (Amazon S3)
[block:callout]
{
  "type": "info",
  "body": "Pull [overops/storage-server-s3:latest](https://hub.docker.com/r/overops/storage-server-s3) from Docker Hub"
}
[/block]
###1. Create a `private` folder
[block:callout]
{
  "type": "warning",
  "body": "The `private` folder needs to be on the same directory from which you run the docker commands or the path to the `private` folder needs to be explicitly provided in the docker command arguments."
}
[/block]
###2. In the `private` folder, create the file `settings.yaml` based on [this example](https://github.com/takipi-field/kubernetes/blob/master/hybrid/s3/private/settings.yaml). 
In `settings.yaml` set the bucket name and folder to use and 
set access key and secret key, or leave blank if attaching an IAM role.
```
s3Fs:
  bucket: <BUCKET_NAME>
  pathPrefix: <FOLDER_IN_BUCKET>
  credentials:
	accessKey: <AWS_ACCESS_KEY>
        secretKey: <AWS_SECRET_KEY>
```

###3. Run the overops/storage-server container
```
docker run -d -p 8080:8080 \
--mount type=bind,source="$(pwd)"/private,target=/opt/takipi-storage/private \ 
overops/storage-server-s3:latest
```

###4. Verify connectivity on https://app.overops.com/  in your browser