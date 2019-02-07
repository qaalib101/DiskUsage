var diskspace = require("diskspace");

// get disk space
function diskRequest(callback, dirname){

    diskspace.check(dirname, function(err, result){
        var diskData = {
            "total": result.total,
            "free": result.free,
            "used": result.used
        };
        callback(err, diskData);

    });
}

module.exports = diskRequest;

