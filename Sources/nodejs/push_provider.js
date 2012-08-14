var apns = require('apn');

var options = {
    cert: 'cert.pem',                 /* Certificate file path */
    certData: null,                   /* String or Buffer containing certificate data, if supplied uses this instead of cert file path */
    key:  'key.pem',                  /* Key file path */
    keyData: null,                    /* String or Buffer containing key data, as certData */
    passphrase: null,                 /* A passphrase for the Key file */
    ca: null,                         /* String or Buffer of CA data to use for the TLS connection */
    gateway: 'gateway.sandbox.push.apple.com',/* gateway address */
    port: 2195,                       /* gateway port */
    enhanced: true,                   /* enable enhanced format */
    errorCallback: undefined,         /* Callback when error occurs function(err,notification) */
    cacheLength: 100                  /* Number of notifications to cache for error purposes */
};

var apnsConnection = new apns.Connection(options);

var token="device token string";
var myDevice = new apns.Device(token);

var note = new apns.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 3;
// note.sound = "ping.aiff";
note.soude = "default";
note.alert = "Mac App Push Notification Tutorial";
note.payload = {'messageFrom': 'saltfactory'};
note.device = myDevice;

apnsConnection.sendNotification(note);
