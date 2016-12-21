module.exports = function(grunt){
    var path = require('path');
    
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        jitGrunt: {
          customTasksDir: 'grunt/tasks'
        },
        data: {
            source: 'source',
            public: 'public',
            bower_directory: 'source/bower_components'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-wiredep');
}