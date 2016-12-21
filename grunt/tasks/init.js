module.exports = function(grunt) {
  grunt.registerTask('init', [
    'update',
    'shell:pattern_lab_require_patternengine',
    'shell:pattern_lab_require_styleguidekit_default',
    'notify:build',
    ]);
};
