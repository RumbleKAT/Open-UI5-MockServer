sap.ui.define([
    "sap/ui/demo/MockServer/localService/mockserver"],
function(mockServer){
    "use strict"
    mockServer.init();

    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});