#Running an Application Behind a Proxy Server
If your application is running behind a proxy server, enter its address by setting the optional MyProxyAddress value (e.g. http://user:pass@192.168.1.101:8080/).
**With wget:**
```wget -e http_proxy=<MyProxyAddress> -e https_proxy=<MyProxyAddress> -O - -o /dev/null http://get.takipi.com | sudo bash /dev/stdin -i --sk=<INSTALLATION_KEY> --https_proxy=<MyProxyAddress> -d; source /opt/takipi/etc/takipi-auto-agent```
**With cURL:**
```curl -x <MyProxyAddress> -sSL http://get.takipi.com | sudo bash /dev/stdin -i --sk=<INSTALLATION_KEY> --https_proxy=<MyProxyAddress> -d;```

[block:callout]
{
  "type": "warning",
  "body": "The address must be entered in two places – once for the cURL / Wget command, and once for the installation script itself."
}
[/block]