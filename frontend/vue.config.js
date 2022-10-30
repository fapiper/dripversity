const manifestJSON = require("./public/manifest.json");
const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [new NodePolyfillPlugin()],
        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },
    },
    pwa: {
        name: manifestJSON.short_name,
        themeColor: manifestJSON.theme_color,
        msTileColor: manifestJSON.background_color,
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "./service-worker.js",
        },
    },
});
