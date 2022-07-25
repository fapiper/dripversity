const manifestJSON = require("./public/manifest.json");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
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
