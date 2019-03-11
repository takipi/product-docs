#OverOps Collector in Kubernetes
In this guide, we'll create a Kubernetes (k8s) [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and [Service](https://kubernetes.io/docs/concepts/services-networking/service/) for the Collector. 
The configuration file and installation key will be stored as a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/da51e9f-SaaS-1.png",
        "SaaS-1.png",
        1105,
        801,
        "#e3eff6"
      ],
      "sizing": "full"
    }
  ]
}
[/block]
This procedure requires an [Installation Keys](doc:generating-installation-keys)  provided by OverOps.

#Run the Collector
###1. Create a private folder
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
  "body": "Running OverOps Server on-premise? \nSet `takipi.backend.url` and `takipi.storage.test.url` to point to your on-premise installation. \nFor example:\n```\ntakipi.backend.url=http://overops-server-service:8080\ntakipi.storage.test.url=http://overops-server-service:8080/service/png\n```",
  "title": "Tip"
}
[/block]

###4. Create a Secret from these files
```
kubectl create secret generic overops-collector \
--from-file=./private/collector.properties \
--from-file=./private/installation.key
```

###5. Create the Deployment and Service using `overops-collector.yaml`, available on GitHub.
```
kubectl apply -f overops-collector.yaml
```

###6. Verify connectivity on https://app.overops.com/  in your browser
[block:callout]
{
  "type": "info",
  "body": "The overops/collector Docker images are tagged by version. \nTo update the Collector to a specific version (in this example, to version 4.30.11):\n```\nkubectl set image deployment.v1.apps/overops-collector-deployment overops-collector=overops/collector:4.30.11 --record\n```",
  "title": "Tip"
}
[/block]

#Next Steps
Attaching the Micro-Agent