// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
// import Navbar from bootstrap
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
require('~/node_modules/bootstrap/dist/js/bootstrap.min.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	$('.burger').on('click', function() {
		if ( !$('.navbar-collapse').hasClass('show') ) {
			$('.navbar').addClass('fixed-top');
			$('body').addClass('overflow-hidden');
		} else {
			$('.navbar').removeClass('fixed-top');
			$('body').removeClass('overflow-hidden');
		}
	});

})
