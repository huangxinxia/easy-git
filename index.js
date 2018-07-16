var spawn = require('child_process').spawn;
module.exports = function(opts, cb) {
    opts = opts || {};
    var args = []
    //克隆
    if (opts['clone']) {
        args.push('clone');
        args.push(opts['repo']);
        args.push(opts['tar']);
    }
    var process = spawn('git', args);
    process.on('close', function(status) {
        if (status == 0) {
            cb && cb();
        } else {
            cb && cb(new Error("'git clone' failed with status " + status));
        }
    });
}
