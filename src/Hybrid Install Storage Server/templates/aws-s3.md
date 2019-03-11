###Installing the Storage Server on AWS S3

To install the Hybrid Storage on an S3 bucket:
1. From Amazon Web Services, designate an S3 bucket for the OverOps hybrid storage: create, allocate or share an existing an S3 bucket with OverOps using a path, e.g. overops-<COMPANY>-storage.

Example:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f063969-shot51.png",
        "shot51.png",
        2312,
        814,
        "#efefef"
      ]
    }
  ]
}
[/block]
2. From the following URL, download the Storage Server installation file:
```wget http://app-takipi-com.s3.amazonaws.com/deployx/s3/deploy/takipi-storage/takipi-storage-latest.tar.gz```
3. Extract files to the /opt directory:
```sudo tar zxvf takipi-storage-latest.tar.gz -C /opt```
4. Run installation:
```sudo chmod +x /opt/takipi-storage/etc/takipi-storage```
```sudo cp /opt/takipi-storage/etc/takipi-storage.init /etc/init.d Edit the /etc/init.d/takipi-storage```
file and verify that it points to a valid Java installation.
5. Set the Storage Server as a service, depending on the Linux distribu on:
   a. Ubuntu:
   ```sudo /usr/sbin/update-rc.d takipi-storage.init defaults```
   b. Other Linux:
   ```sudo /sbin/chkconfig takipi-storage on```
6. Configure access from your EC2 to the S3 bucket:
Generate an access key for the S3 API, or set up an ARN Policy to the bucket, see [https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html). Or attach an IAM role to your instance, see: Configuring Access to S3 Bucket
7. In settings.yml, fill in the s3Fs configuration:
```
# If using attaching IAM Role to instance, leave accessKey and
secretKey empty
s3Fs:
    bucket: <BUCKET_NAME>
    pathPrefix: <FOLDER_IN_BUCKET>
    credentials:
      accessKey:
      secretKey:
```
Example:
```
# If using the attached IAM Role for your instance, leave accessKey
and secretKey empty
s3Fs:
    bucket: hybridtest
    pathPrefix: overops
    credentials:
      accessKey:
      secretKey:
```
[block:callout]
{
  "type": "warning",
  "body": "Leaving the accessKey field empty will cause OverOps to search ~/.aws for\ncredentials."
}
[/block]


8. Start the the Storage Server:
```sudo service takipi-storage start```
9. Verify that the Storage Server is running:
```ps -ef | grep takipi-storage```
If service does not start check the logs and send to the OverOps team:
```less /opt/takipi-storage/log/takipi-storage.log```