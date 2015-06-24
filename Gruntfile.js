'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    jshint: {

    },

    webpack: {
      dev: {
        entry: __dirname + '/app/js/main.js',
        output: {
          path: 'build/',
          file: 'bundle.js'
        }
      },
      prod: {
        entry: __dirname + '/app/js/main.js',
        output: {
          path: 'dist/',
          file: 'bundle.js'
        }
      }
    },

    copy: {
      html: {
        cwd: 'app/',
        expand: true,
        flatten: false,
        src: '**/*.html',
        dest: 'build/',
        filter: 'isFile'
      }
    },

    clean: {
      dev: {
        src: 'build/'
      },
      prod: {
        src: 'dist/'
      }
    }
  });

  grunt.registerTask('build:dev', ['webpack:dev', 'copy:html']);
  grunt.registerTask('build:prod', ['webpack:prod', 'copy:html']);
  grunt.registerTask('dev', ['build:dev']);
  grunt.registerTask('prod', ['build:prod']);
};
