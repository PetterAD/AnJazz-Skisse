jQuery(document).ready(function () {

  //if (jQuery("[rel=tooltip]").length) {jQuery("[rel=tooltip]").tooltip();}
 // jQuery('button').addClass('btn');
// ____________________________________________________________________________________________ resize display
/*
        var myWidth = 0;
        myWidth = window.innerWidth;
        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        jQuery(window).resize(function(){
            var myWidth = 0;
            myWidth = window.innerWidth;
            jQuery('#size').remove();
            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        });
*/

// ____________________________________________________________________________________________ responsive menu

	var mainMenu = jQuery('.main_menu ul.menu');
  mainMenu.find('li.parent > a').append('<span class="arrow"></span>');
  mainMenu.find(' > li').last().addClass('lastChild');
// ____________________________________________________________________________________________
 
    jQuery('.icon-calendar').removeClass('icon-calendar').addClass('fa fa-calendar');
    jQuery('.icon-arrow-left').removeClass('icon-arrow-left icon-white').addClass('fa fa-arrow-left');
 // ____________________________________________________________________________________________footer

  var wrapheight = jQuery(window).outerHeight() - jQuery(".header").outerHeight(true) - jQuery("#footer").outerHeight(true);
  jQuery("#wrapper").css("min-height" , wrapheight);


