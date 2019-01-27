var diskspace = require("diskspace");
// get disk space
function diskRequest(callback){
    diskspace.check('C', function(err, result){
        var diskData = {
            "total": result.total,
            "free": result.free,
            "used": result.used
        };
        callback(err, diskData);

    });
}

module.exports = diskRequest;

