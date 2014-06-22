module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      prod:{
        options: {
          pretty: false,
          data: grunt.file.readJSON("config.json")
        },
        files: [
          {
            cwd: "pages",
            src: ["**/*.jade"],
            dest: "../dist",
            expand: true,
            ext: ".html"
          }
        ]
      }
    },
    less: {
      prod: {
        options: {
          paths: ["less"],
          cleancss: true,
          compress: true,
          ieCompat: true,
          modifyVars: {
          }
        },
        files: {
          "../dist/css/style.css": "less/style.less"
        }
      }
    },
    watch: {
      files: ['less/**/*','js/**/*','*.jade','templates/**/*','pages/**/*','Gruntfile.js'],
      tasks: ['jade:prod','less:prod'] 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['jade:prod','less:prod']);
};
