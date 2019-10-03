module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        shell: {
            clean: {
                command: "find ./build ! -name '.gitignore' -mindepth 1 -maxdepth 1 -exec rm -rf {} +"
            }
        },
        copy: {
            js: {
                files: [
                    {src: './src/*.js', dest: './build', flatten: true, expand: true}
                ]
            }
        },
        sass: {
            options: {
                implementation: require('node-sass'),
                sourceMap: false,
                sourceComments: false,
                outputStyle: "compressed",
                sourceComments:false,
                includePaths: [],
                precision: 5,
                linefeed: "lf"
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: ['wikidark.scss'],
                    dest: './build',
                    ext: '.css'
                }]
            }
        }
    });
    
    grunt.registerTask('clean', ['shell:clean']);
    grunt.registerTask('build', ['clean', 'copy:js', 'sass']);
}
