module.exports = function (grunt) {

    // Configure grunt here
    grunt.initConfig({
        ts: {
            options: {
                logConcurrentOutput: true,
                sourceMap: true,
                declaration: true
            },
            dev: { // a particular target
                src: ["app/**/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
                out: 'app/main.js', // If specified, generate an out.js file which is the merged js file
                watch: 'app'
            },
            test: {
                src: ["app/scripts/test/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
                out: 'app/scripts/test/testSpec.js', // If specified, generate an out.js file which is the merged js file
                watch: 'app/scripts/test'

            }
        },
        copy: {
            main: {
                files: [

                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9004,
                    base: '',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:9004/app/index.html#'
                    }
                }
            }
        },
        uglify: {
            main: {
                files: {}
            }
        }
    });

    // load the task
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // register the defaults
    grunt.registerTask("default", ["ts:dev", "ts:test"]);
    grunt.registerTask("minify", ["uglify:main"]);
    grunt.registerTask("start", ["connect:server"]);
};
