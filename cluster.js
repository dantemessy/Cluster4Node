'use strict';

const cluster = require('cluster');
const server = require("./server.js");


module.exports = {
    start: () => {
        if (cluster.isMaster) {
            // Count the machine's CPUs
            var cpuCount = require('os').cpus().length;

            // Create a worker for each CPU
            for (var i = 0; i < cpuCount; i++) {
                cluster.fork();
            }

            // Listen for dying workers
            cluster.on('exit', function () {
                cluster.fork();
            });
        } else {
            server.run();
        }
    }
}
