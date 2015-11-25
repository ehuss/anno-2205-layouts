/*jslint node: true */
'use strict';

var _ = require('underscore');

module.exports = function(grunt) {

  // Used for generating <script> tags in index.html.
  function scriptTags(files) {
    return _.reduce(files, function(sum, file) {
      return sum + '\n<script src="' + file + '"></script>';
    }, '');
  }


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Generate index.html from a template.
    // In a dev environment, there are separate <script> tags for each js file.
    // In a dist environment, there is just one "app.js" file.
    includereplace: {
      dev: {
        options: {
          globals: {
            scriptTags: scriptTags(grunt.file.expand('app/**/*.js'))
          }
        },
        src: 'index.html.tmpl',
        dest: 'index.html'
      },
      dist: {
        options: {
          globals: {
            scriptTags: scriptTags(['app.js'])
          }
        },
        src: 'index.html.tmpl',
        dest: 'dist/index.html'
      }
    },

    bower: {
      dev: {
        options: {
          targetDir: 'libs',
          cleanTargetDir: true
        }
      },
      dist: {
        options: {
          targetDir: 'dist/libs',
        }
      }
    },

/*
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
*/

    // For distribution, join all HTML templates together into one JS file.
    html2js: {
      dist: {
        options: {
          base: '.',
          module: 'anno2205Layouts.templates'
        },
        src: [ 'app/**/*.html', '!app/templates-dev.js' ],
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

    // For distribution, join all JS files into one.
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'app/**/*.js', 'build/*.js' ],
        dest: 'dist/app.js'
      }
    },

    // Copy static files into the dist directory.
    copy: {
      dist: {
        files: [
          {expand:true, src: ['app.css', 'images/**/*.png'], dest: 'dist'}
        ]
      }
    },

    jshint: {
     all: [ 'Gruntfile.js']//, 'app/*.js', 'app/**/*.js' ]
    },

    // Development web server.
    connect: {
      server: {
        options: {
          // base: 'dist',
          hostname: 'localhost',
          port: 8000
        }
      }
    },

    // Watch event (see below) is used to conditionally run the includereplace task.
    watch: {
      dev: {
        files: [ 'Gruntfile.js', 'index.html.tmpl', 'app/**/*.js' ],
      },
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

// When JS files are added/removed, re-run includereplace.
grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  if (action == 'added' || action == 'deleted' ||
      filepath == 'index.html.tmpl' || filepath == 'Gruntfile.js') {
    grunt.task.run('includereplace:dev');
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
  grunt.loadNpmTasks('grunt-include-replace');

  grunt.registerTask('dev', [ 'bower:dev', 'includereplace:dev', 'connect:server', 'watch:dev' ]);
  // grunt.registerTask('test', [ 'bower', 'jshint', 'karma:continuous' ]);
//  grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
//  grunt.registerTask('package', [ 'bower', 'jshint', /*'karma:unit',*/ 'html2js:dist', 'concat:dist', 'uglify:dist',
//    'concat:dist', /*'uglify:dist',*/ 'clean:temp', 'compress:dist' ]);

  grunt.registerTask('dist', ['clean:dist',
    'bower:dist', 'html2js:dist', 'includereplace:dist', 'concat:dist', 'copy:dist', 'clean:temp']);

  grunt.registerTask('deploy', ['dist', 'gh-pages']);
};
