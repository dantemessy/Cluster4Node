'use strict';

const serverWithCluster = require("./cluster.js");
const serverWithoutCluster = require("./server.js");

serverWithCluster.start();
// serverWithoutCluster.run();