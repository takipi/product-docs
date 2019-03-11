the OverOps agent is already included within the java build pack. To get the latest agent, you should update the java build pack (requires Admin rights):

1.**Update the java-buildpack**
```cf update-buildpack java-buildpack-offline```

2.**Create a User-provided service**
Connecting to a remote collector we are providing the remote collector host and remote collector port (6060 is default).
```cf cups takipi -p '{"collector_host":"<collector-host-domain-name-here>","collector_port":"6060"}'```

3.**Attach the Micro Agent to your JVM** (The application you want to monitor)
Bind the application service to the OverOps agent:
```
cf bind-service APP_NAME takipi
cf restage APP_NAME
```

4.**Update system parameters with application and deployment names**
```
cf set-env my-application JAVA_OPTS '-Dtakipi.deployment.name=<version-name-here>'
cf set-env my-application JAVA_OPTS '-Dtakipi.name=<app-name-here>'
```
 or combined
```
cf set-env my-application JAVA_OPTS '-Dtakipi.name=<app-name-here> -Dtakipi.deployment.name=<version-name-here>'
```

5.[Test your Installation](doc:test-your-installation)