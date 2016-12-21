module.exports = function(grunt) {
    grunt.registerTask('default', [
        'update',
        'notify:server',
        'parallel:watch'
    ]);
};
