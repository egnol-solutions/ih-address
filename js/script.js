
 /************** the offCanvas - left side bar**************************/
$("[data-trigger]").on("click", function(e){
  e.preventDefault();
  e.stopPropagation();
  var offcanvas_id =  $(this).attr('data-trigger');
  $(offcanvas_id).toggleClass("showCanvas");
  $('body').toggleClass("offcanvas-active");
  $(".screen-overlay").toggleClass("showCanvas");
}); 

$(".btn-close, .screen-overlay, #navbarSupportedContent .nav-item").click(function(e){
  $(".screen-overlay").removeClass("showCanvas");
  $(".mobile-offcanvas").removeClass("showCanvas");
  $("body").removeClass("offcanvas-active");
}); 
$(window).resize(function(){
  if( $(".screen-overlay").hasClass("showCanvas")){ 
   
        $(".mobile-offcanvas").removeClass("showCanvas");
        $("body").removeClass("offcanvas-active");
        $(".screen-overlay").removeClass("showCanvas");
}
});