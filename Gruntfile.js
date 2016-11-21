module.exports = function (grunt) {
    grunt.initConfig({
        px2rem:{
             default_options: {
                options: {
                },
                files: {
                    'dd': ['**/*.css','!**/b.css']
                }
            }
        }        
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('default',['px2rem']);
}