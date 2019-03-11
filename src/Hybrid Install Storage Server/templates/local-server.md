###Installing the Storage Server on a Local Server
1. From the following URL, download the Storage Server installation file:
      ```wget https://app-takipi-com.s3.amazonaws.com/deploy/takipi-storage/takipi-storage-latest.tar.gz```
2. Extract files to the ```/opt``` directory:
```sudo tar zxvf takipi-storage-latest.tar.gz -C /opt```
3. Configure and copy the takipi-storage file to the init.d directory:
```sudo chmod +x /opt/takipi-storage/etc/```
```sudo cp /opt/takipi-storage/etc/takipi-storage.init /etc/init.d```
Verify that the /etc/init.d/takipi-storage file points to a valid Java installation.
4. Depending on the Linux distribution, run installation:
  * Ubuntu:
```sudo /usr/sbin/update-rc.d takipi-storage.init defaults```
  * Other Linux:
```sudo /sbin/chkconfig takipi-storage on```
5. Start the service:
```sudo service takipi-storage start```
6. Verify that the Storage Server is running:
```ps -ef | grep takipi-storage```
If service does not start check the logs and send to the OverOps team:
```less /opt/takipi-storage/log/takipi-storage.log```