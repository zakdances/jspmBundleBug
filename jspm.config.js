SystemJS.config({
  transpiler: "ts",
  typescriptOptions: {
    "module": "system",
    "target": "ES5",
    "noImplicitAny": true,
    "experimentalDecorators": true
  },
  packages: {
    "app": {
      "format": "esm",
      "main": "app.ts",
      "defaultExtension": false
    }
  },
  map: {
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.5"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "jquery": "npm:jquery@3.0.0-beta1",
    "js-url": "github:websanova/js-url@2.3.0",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "ts": "github:frankwallis/plugin-typescript@4.0.5"
  },
  packages: {
    "github:frankwallis/plugin-typescript@4.0.5": {
      "map": {
        "typescript": "npm:typescript@1.8.9"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    }
  }
});
