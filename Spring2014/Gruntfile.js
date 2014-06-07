module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
                options: {
                    targetDir: './lib',
                    layout: 'byType',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        sass: {
            dist: {
                options: {
                    // cssmin will minify later
                    style: 'expanded'
                },
                files: {
                    'css/build/global.css': 'css/global.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'css/build/*.css',
                dest: 'css/build/prefixed/'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'css/build/production.min.css': ['lib/bootstrap/bootstrap.css', 'css/build/prefixed/global.css']
                }
            }
        },

        jshint: {
            beforeconcat: ['js/*.js']
        },

        concat: {
            dist: {
                src: [
                    'lib/jquery/*.js',
                    'lib/bootstrap/*.js',
                    'js/global.js'
                ],
                dest: 'js/build/production.js'
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '/dist/images/'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'index.html'
                }
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['css/build/production.min.css'],
                    dest: 'dist/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: ['js/build/production.min.js'],
                    dest: 'dist/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: ['images/**/*'],
                    dest: 'dist/',
                    filter: 'isFile'
                }, {
					expand: true,
					src: ['docs/**/*'],
					dest: 'dist/',
					filter: 'isFile'
				}]
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify', 'jshint'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
                options: {
                    spawn: false,
                }
            },
            images: {
                files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './'
                }
            }
        },

    });

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-bower-task');

    // Default Task is basically a rebuild
    grunt.registerTask('default', ['bower', 'concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'htmlmin', 'copy']);

    grunt.registerTask('dev', ['connect', 'watch']);

};
