$(document).ready(function() {

		// Start Scroll Menu
		$('.menu').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
		// End Scroll Menu

		// Start Portfolio Grid 
		$('.my-grid').WMGridfolio();
		// Start Portfolio Grid 
});







