// Capabilities for iOS devices and Android devices.
// This files made more easy to change between the requirement.
export const iOSCapabilities = {
            platformName: 'iOS',
            deviceName: 'iPhone 14 Pro',                    
            platformVersion: '16.1',
            automationName: 'XCUITest',
            }
export const AndroidCapabilities = {
    // platformName: 'Android',
    // platformVersion: '11.0',
    // deviceName: 'Pixel 7 Pro API 30',
    // automationName: 'UiAutomator2',
    // newCommandTimeout: 35000,
    // appPackage: 'com.popular.app.android',
    // // autoAcceptAlerts: true,
    // // autoGrantPermissions: true,
    // //enableMultiWindows: true,
    // app: '/Users/siddhatech/Downloads/AppPopular5042CL (1).apk',
    // language: 'en', 
    // locale: 'US'
    "platformName": "Android",
    "appium:platformVersion": "11.0",
    // "appium:deviceName": "samsung SM-N986B",
    "appium:deviceName": "Pixel 7 API 30",
    "appium:automationName": "UiAutomator2",
    "appium:newCommandTimeout": 35000,
    "appium:appPackage": "com.popular.app.android",
    // "appium:app": "/Users/siddhatech/Downloads/AppPopular5042CL (1).apk",
    "appium:app": "/Users/siddhatech/Documents/Refactor_CoreLB/apk/apppopular-CL_8.1.5054.apk",
    "appium:language": "en",
    "appium:locale": "US",
    "appium:unicodeKeyboard": true

    // "appium:unicodeKeyboatd": true,
}