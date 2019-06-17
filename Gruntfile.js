module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    apidoc: {
      myapp: {
        src: "server/routes/",
        dest: "apidoc/"
      }
    },
    "http-server": {
      dev: {
        root: "apidoc",
        port: 8050,
        host: "10.0.2.15",
        logFn: () => {}
      }
    },
    watch: {
      scripts: {
        files: "server/routes/*.js",
        tasks: ["apidoc"],
        options: {
          livereload: true
        }
      }
    },
    concurrent: {
      target: {
        tasks: ["http-server", "watch"],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-apidoc");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-http-server");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.registerTask("default", ["apidoc", "concurrent:target"]);
};
