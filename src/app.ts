import $ from 'jquery'
import jsurl from 'js-url'

$(function() {
	
	
 	const scriptsToWatchFor = {
	 	'app.ts': false,
	 	'build.js': false
 	}
 	
 	setInterval( function() {
	 	
	 	window.document.requestsMade.forEach( function(v,i,a) {
		 	
		 	console.log( v.responseURL )
		 	
		 	
		 	const filename = jsurl('file', v.responseURL)
		 	
		 	if (scriptsToWatchFor.hasOwnProperty(filename) && scriptsToWatchFor[filename] === false) {
			 	$('#content').append("<h1>" + filename + " has been requested.</h1>")
			 	scriptsToWatchFor[filename] = true
		 	}
		 	
	 	})
	 	
		
	}, 1000)
})

