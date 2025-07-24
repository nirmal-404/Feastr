const { withNativeWind } = require('nativewind/metro');
// const { getDefaultConfig } = require("expo/metro-config");
const { getSentryExpoConfig } = require("@sentry/react-native/metro");
 
// const config = getDefaultConfig(__dirname);
const config = getSentryExpoConfig(__dirname);
 
module.exports = withNativeWind(config, { input: './app/global.css' })