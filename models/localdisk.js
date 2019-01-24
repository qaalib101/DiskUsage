var diskspace = require("diskspace");

// get disk space
diskspace.check('C', function(err, result){
    module.exports = {
        free: result.free,
        total: result.total,
        empty: result.empty
    };
});

