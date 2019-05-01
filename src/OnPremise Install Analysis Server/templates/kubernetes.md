#On Premises OverOps Server in Kubernetes
In this guide, we'll create a Kubernetes (k8s) [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and [Service](https://kubernetes.io/docs/concepts/services-networking/service/) for the Server. 
Configuration files will be stored as a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/). Data will be stored on a [Persistent Volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) and MySQL or PostgreSQL database.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d7e625e-On_Prem.png",
        "On Prem.png",
        900,
        802,
        "#ddebf2"
      ],
      "sizing": "full"
    }
  ]
}
[/block]
#Prerequisites
Please see [Software and Hardware Compatibility](doc:compatibility#section-overops-server-on-premises-installation-requirements) 

[block:callout]
{
  "type": "warning",
  "body": "Server requires at least **200 GB** of free disk space for OverOps"
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
###1. Create a `private` folder
[block:callout]
{
  "type": "warning",
  "body": "The `private` folder needs to be on the same directory from which you run the docker commands or the path to the `private` folder needs to be explicitly provided in the docker command arguments."
}
[/block]
###2. In the private folder, create the
```
my.agentsettings.properties, 
my.server.properties, 
smtp.properties, 
and smtpserver.properties files. 
```

Example configuration files can be found on [GitHub](https://github.com/takipi-field/kubernetes/tree/master/backend/private).

###4. Create a Secret from these files
```
kubectl create secret generic overops-server \
--from-file=private/my.server.properties \
--from-file=private/my.agentsettings.properties \
--from-file=private/smtp.properties \
--from-file=private/smtpserver.properties
```
###4. Create a MySQL or PostgreSQL database
###5. Create a Secret containing database connection info
```
kubectl create secret generic overops-server-db \
--from-literal=user=<USERNAME_HERE> \
--from-literal=pass=<PASSWORD_HERE> \
--from-literal=url=<URL_HERE>
```

###6. Create a Persistent Volume for the Server to store data
###7. Create a Deployment and Service using [overops-server.yaml](https://github.com/takipi-field/kubernetes/blob/master/backend/overops-server.yaml), available on GitHub. 
Modify the config for your environment by updating the volume `overops-server-data-volume` to use the persistent volume you created, and add a service to allow external traffic from web browsers to communicate with the Server. 
Set FRONTEND_URL to the external hostname of your service. 
We recommend using type: [LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer), configured to terminate TLS traffic. 
Internal traffic between the Collector and the Server will use the simple service `overops-server-service`. 
Set DB_TYPE to the correct value for your database.

###8. Now deploy the Server:
```
kubectl apply -f overops-server.yaml
```

###7. Go to  http://`<FRONTEND_URL>`/  in your browser.
###8. [Activate OverOps](doc:non-docker-on-premises-installation#section-3-activating-overops)

[block:callout]
{
  "type": "warning",
  "body": "Please note running more than one instance of the OverOps Server in a ReplicaSet is not supported at this time.",
  "title": "Note"
}
[/block]

#Next Steps
* [Running the Collector in Kubernetes](doc:installation-overops-collector-on-kubernetes) (same as SaaS, but configured to use on-premise server)
* [Attach OverOps Agent to Containers in Kubernetes](doc:attach-overops-agent-to-containers-in-kubernetes)