# Azure-IoThub-SAS-Token-generator

This is the Azure Function's implementation of Azure IoT Hun SAS token generator using Node JS. Once deployed in Azure fucntions it can be called using HTTP Post to return the SAS token. 

### Usage:
#### Request:
Header: 
```json
{ 
    "Content-Type" : "application/json" 
}
```

body:

```json
{
    "deviceId" : "<IoT Hub device ID you are requesting the token>",
    "HostName" : "<IoT Hub hostname i.e. myhub.azure-devices.net>",
    "SharedAccessKeyName" : "<Shared Access Policy Name i.e. iohthubowner>",
    "SharedAccessKey" : "<Shared Access Key primary or secondary key>",
    "expiresInDays" : "<number of days the Security Token should be valid to the maximum of 365 days>"    
}
```

#### Response:
```json
{ 
     "sastoken" : "<SAS Token String>"
}
```
