module.exports = function(grunt) {
    
    grunt.initConfig({
        
        uglify: {
            my_target: {
                files: {
                    'build/output.min.js': ['src/script.js'] 
                }
            }
        },

        
        less: {
            development: {
                files: {
                    'build/styles.css': 'src/styles.less' 
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    
    grunt.registerTask('default', ['uglify', 'less']);
};
