#Running the Storage Server in Kubernetes
In this guide, we'll create a Kubernetes (k8s) [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and [Service](https://kubernetes.io/docs/concepts/services-networking/service/) for the Server. 
Configuration files will be stored as a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/).


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ea39d61-Hybrid-1.png",
        "Hybrid-1.png",
        970,
        850,
        "#dfecf3"
      ],
      "sizing": "full"
    }
  ]
}
[/block]
There are two versions of the Storage Server 
*  [Persistent Volume](doc:running-storage-server-in-kubernetes#section-run-the-storage-server-persistent-volume-) 
* [Amazon S3](doc:running-storage-server-in-kubernetes#section-run-the-storage-server-amazon-s3-)

#Run the Storage Server (Persistent Volume)
###1. Create a `private` folder
[block:callout]
{
  "type": "warning",
  "body": "The `private` folder needs to be on the same directory from which you run the docker commands or the path to the `private` folder needs to be explicitly provided in the docker command arguments."
}
[/block]
###2. In the private folder, create the file `settings.yaml` based on [this example](https://github.com/takipi-field/kubernetes/blob/master/hybrid/private/settings.yaml).

###3. Create a Secret from this file
```
kubectl create secret generic overops-storage --from-file=./settings.yaml
```

###4. Create a [Persistent Volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) in your cluster for the Storage Server to store data.
###5. Create the Deployment and Service using [overops-storage-server.yaml](https://github.com/takipi-field/kubernetes/blob/master/hybrid/overops-storage-server.yaml), available on GitHub. 
Modify the config for your environment by updating the volume `takipi-storage-volume` to use the Persistent Volume you created, and adding a service to allow external traffic from web browsers to communicate with the Storage Server. 
We recommend using type [LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer), configured to terminate TLS traffic. 
Internal traffic between the Collector and the Storage Server will use the service overops-storage-service.
###6. Apply the configuration
```
kubectl apply -f overops-storage-server.yaml
```
###7. Verify connectivity on https://app.overops.com/  in your browser

#Run the Storage Server (Amazon S3)
###1. Create a `private` folder
[block:callout]
{
  "type": "warning",
  "body": "The `private` folder needs to be on the same directory from which you run the docker commands or the path to the `private` folder needs to be explicitly provided in the docker command arguments."
}
[/block]
###2. In the private folder, create the file `settings.yaml` based on [this example](https://github.com/takipi-field/kubernetes/blob/master/hybrid/s3/private/settings.yaml).
Set the bucket name and folder to use. 
Set access key and secret key, or leave blank if attaching an IAM role.
```
s3Fs:
  bucket: <BUCKET_NAME>
  pathPrefix: <FOLDER_IN_BUCKET>
  credentials:
	accessKey: <AWS_ACCESS_KEY>
secretKey: <AWS_SECRET_KEY>
```

###3. Create a Secret from this file
```
kubectl create secret generic overops-storage --from-file=./settings.yaml
```
###4. Create the Deployment and Service using [overops-storage-server-s3.yaml](https://github.com/takipi-field/kubernetes/blob/master/hybrid/s3/overops-storage-server-s3.yaml), available on GitHub. 
Modify the config for your environment, adding a service to allow external traffic from web browsers to communicate with the Storage Server. 
We recommend using type [LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer), configured to terminate TLS traffic. 
Internal traffic between the Collector and the Storage Server will use the service overops-storage-service.

###5. Apply the configuration
```
kubectl apply -f overops-storage-server-s3.yaml
```

###6. Verify connectivity on https://app.overops.com/  in your browser