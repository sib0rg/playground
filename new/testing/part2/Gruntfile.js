module.exports = function(grunt){

	grunt.initConfig({

		watch: {
			files: 'styles/sass/*.scss',
			//tasks: ['copy:main','concat','sass'],
			tasks: ['sass'],
			options: {
				livereload: true
			}
		},

		sass: {
			dist: {
				files: {
					'styles/css/main.css' : 'styles/sass/main.scss'
				}
			}	
		}

	});
	
	require('load-grunt-tasks')(grunt);

	//require('grunt-contrib-sass'); 'concat', 'useminPrepare', 'sass', 'connect', 'watch'
	grunt.registerTask('default', ['sass', 'watch']);
	//grunt.registerTask('default', ['sass']);

}
