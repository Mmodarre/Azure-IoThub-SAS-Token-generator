module.exports = function (context, req) {
    var deviceId = req.body.deviceId;
    var HostName = req.body.HostName;
    var SharedAccessKeyName = req.body.SharedAccessKeyName;
    var SharedAccessKey = req.body.SharedAccessKey;
    var expiresInDays = req.body.expiresInDays;
    var iothubHost = HostName+"/devices/"+deviceId;
    
	var serviceSas = require('azure-iothub').SharedAccessSignature;
    
    var expires = Math.floor(Date.now() / 1000) + (expiresInDays * 1440 * 60);
    
    var sasTokenDevice = serviceSas.create(iothubHost, SharedAccessKeyName, SharedAccessKey, expires);
    var sasTokenDeviceString = sasTokenDevice.toString();
    
    
    context.res = { body: {sastoken : sasTokenDeviceString}, headers:{ 'content-type' : 'application/json; charset=utf-8' }};
     
    context.done();
};