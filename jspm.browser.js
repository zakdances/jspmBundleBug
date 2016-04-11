SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app/": "src/"
  },
  bundles: {
    "build.js": [
      "app/app.ts",
      "github:websanova/js-url@2.3.0/url.js",
      "github:websanova/js-url@2.3.0.json",
      "npm:jquery@3.0.0-beta1/dist/jquery.js",
      "npm:jquery@3.0.0-beta1.json",
      "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
      "github:jspm/nodelibs-process@0.2.0-alpha.json"
    ]
  }
});
