cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-light-statusbar.lightstatusbar",
        "file": "plugins/cordova-plugin-light-statusbar/www/lightstatusbar.js",
        "pluginId": "cordova-plugin-light-statusbar",
        "clobbers": [
            "window.LightStatusBar"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova.custom.plugins.exitapp.exitApp",
        "file": "plugins/cordova.custom.plugins.exitapp/www/ExitApp.js",
        "pluginId": "cordova.custom.plugins.exitapp",
        "merges": [
            "navigator.app"
        ]
    },
    {
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-light-statusbar": "2.0.0",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova.custom.plugins.exitapp": "1.0.0",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-console": "1.0.6"
};
// BOTTOM OF METADATA
});