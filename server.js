'use strict';


const server = require("express")();

module.exports = {
    run: () => server.listen((3000, () => console.log(`Running At Port: 3000 & Worker ${process.pid}`)))
}