/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/

module.exports = function (grunt) {
    grunt.initConfig({
    });
    grunt.registerTask('load-core-libs', function () {
        grunt.file.copy('lib/angular/angular.min.js', 'scripts/core/angular.min.js');
        grunt.file.copy('lib/angular-animate/angular-animate.min.js', 'scripts/core/angular-animate.min.js');
        grunt.file.copy('lib/angular-aria/angular-aria.min.js', 'scripts/core/angular-aria.min.js');
        grunt.file.copy('lib/angular-material/angular-material.min.js', 'scripts/core/angular-material.min.js');
        grunt.file.copy('lib/jasmine/lib/jasmine-core.js', 'scripts/core/jasmine.core.js');
    })
};