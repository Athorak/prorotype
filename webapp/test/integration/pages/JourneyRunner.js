sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"prorotype/test/integration/pages/FlightMain"
], function (JourneyRunner, FlightMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('prorotype') + '/test/flp.html#app-preview',
        pages: {
			onTheFlightMain: FlightMain
        },
        async: true
    });

    return runner;
});

