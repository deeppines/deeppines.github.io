/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function(jQuery) {
	
        // Style Switcher	
		jQuery('#style-switcher').animate({
			right: '-300px'
		});
		
		jQuery('#style-switcher h2 a').click(function(e){
			e.preventDefault();
			var div = jQuery('#style-switcher');
			console.log(div.css('right'));
			if (div.css('right') === '-300px') {
				jQuery('#style-switcher').animate({
					right: '0px'
				}); 
			} else {
				jQuery('#style-switcher').animate({
					right: '-300px'
				});
			}
		})
                
		// Color Changer
		

		
		
		jQuery(".red" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/style.css" );
			jQuery('#style-switcher').animate({	right: '-300px' });
			return false;
		});
		
		jQuery(".yellow" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/stylealt.css" );
			jQuery('#style-switcher').animate({	right: '-300px' });
			return false;
			
		});
		

		
		
		
		

		jQuery("#layout-switcher").on('change', function() {
			jQuery('#layout').attr('href', jQuery(this).val() + '.css');
		});;

		
		
		
		jQuery('.colors li a').click(function(e){
			e.preventDefault();
			jQuery(this).parent().parent().find('a').removeClass('active');
			jQuery(this).addClass('active');
		})
		
	
		
		
		jQuery('#reset a').click(function(e){
		  jQuery("#colors" ).attr("href", "assets/css/style.css" );
					
		})
			

	});