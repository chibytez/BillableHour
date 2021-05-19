exports.config = {
    runner: 'local',
    port:4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    frameWork: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances:1,
    sync: true,
    specs: [
         './src/test.js'

    ],
    capabilities:[{
        "platformName": "Android",
        "automationName": "UIAutomator2",
        "udid": "S574020000707",
        "appPackage": "com.bundle.billable_hours_app",
        "appActivity": ".MainActivity"
      }]
    }