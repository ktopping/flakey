// Used to make Facebook Share dialogs and Custom Tweet dialogs open in a
// dialog rather than taking the user to a new tab.

if (typeof jQuery === "undefined") {
  throw "Flakey popup requires jQuery";
};

(function($) {
  // Function for opening popups.
  var openPopup = function(url, name, options){
    options || (options = {});

    var width  = options.width || 575;
    var height = options.height || 400;
    var left   = ($(window).width() - width) / 2;
    var top    = ($(window).height() - height) / 2;
    var opts   = "status=1,width=" + width + ',height=' + height + ',top=' + top + ',left=' + left;
      
    window.open(url, name, opts)
  };

  $(function(){
    $('.custom-tweet-button, .facebook-share-button, .flakey-popup').on('click', function(e){
      e.preventDefault();
      openPopup($(e.target).closest('a').attr('href'), 'twitter');
    });
  });
})(jQuery);
