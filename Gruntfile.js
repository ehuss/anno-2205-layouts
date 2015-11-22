/*jslint node: true */
'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          install: true,
          copy: false,
          targetDir: './dist/libs',
          cleanTargetDir: true
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/app.js': [ 'dist/app.js' ]
        },
        options: {
          mangle: false
        }
      }
    },

    html2js: {
      dist: {
        options: {
          base: 'app',
        },
        src: [ 'app/**/*.html' ],
        dest: 'build/templates.js'
      }
    },

    clean: {
      dist: {
        src: [ 'dist' ]
      },
      temp: {
        src: [ 'build' ]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'app/**/*.js', 'build/*.js' ],
        dest: 'dist/app.js'
      }
    },

    copy: {
      dist: {
        files: [
          {expand:true, cwd: 'app', src: ['index.html', 'app.css'], dest: 'dist'},
          {expand:true, src: ['images/**/*.png'], dest: 'dist'}
        ]
      }
    },

    jshint: {
     all: [ 'Gruntfile.js']//, 'app/*.js', 'app/**/*.js' ]
    },

    connect: {
      server: {
        options: {
          base: 'dist',
          hostname: 'localhost',
          port: 8000
        }
      }
    },

    watch: {
      dev: {
        files: [ 'Gruntfile.js', 'app/**/*.js', '*.html' ],
        tasks: [ 'jshint', /*'karma:unit',*/ 'dist'],
        options: {
          atBegin: true
        }
      },
      // min: {
      //   files: [ 'Gruntfile.js', 'app/**/*.js', '*.html' ],
      //   tasks: [ 'jshint', /*'karma:unit',*/ 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist' ],
      //   options: {
      //     atBegin: true
      //   }
      // }
    },


/*
    compress: {
      dist: {
        options: {
          archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
        },
        files: [{
          src: [ 'dist/*.html', 'dist/*.js', 'dist/*.css', 'libs/**' ]
        }]
      }
    },
*/
    'gh-pages': {
      options: {
        base: 'dist',
        push: false,
      },
      src: '**/*'
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        singleRun: true
      },

      continuous: {
        singleRun: false,
        autoWatch: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('dev', [ 'bower', 'connect:server', 'watch:dev' ]);
  grunt.registerTask('test', [ 'bower', 'jshint', 'karma:continuous' ]);
//  grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
//  grunt.registerTask('package', [ 'bower', 'jshint', /*'karma:unit',*/ 'html2js:dist', 'concat:dist', 'uglify:dist',
//    'concat:dist', /*'uglify:dist',*/ 'clean:temp', 'compress:dist' ]);

  grunt.registerTask('dist', ['clean:dist',
    'bower', 'html2js:dist', 'concat:dist', 'copy:dist', 'clean:temp']);

  grunt.registerTask('deploy', ['dist', 'gh-pages']);
};
