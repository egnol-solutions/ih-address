
 /************** the offCanvas - left side bar**************************/
$(function(){
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
  
  $(".buttonFile").click(function(){
    $(".hiddenFile").click();
  });
  $(".hiddenFile").change(function(){
    var fileVal=$(".hiddenFile").val();
    fileVal=fileVal.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
      $(".fileDesc").text(fileVal);
  });


   let searchInput=$(".searchInput");
   let cancelIcon=$(".searchMap .cancel");
   let searchIcon=$(".searchMap .search");
  //  let cancelIcon="<img src='images/ih-cancel.png' alt='cancel'>";
  //  let searchIcon="<img src='images/ih-search.png' alt='search' for='searchInput'>";
  $(searchInput).keyup(function(){
    if ((searchInput.val()).length>0){
      $(cancelIcon).show();
      $(searchIcon).hide();
      $(".searchMap img").click(function(){
        searchInput.val("");
        $(cancelIcon).hide();
      $(searchIcon).show();
      });
     }else{
      $(cancelIcon).hide();
      $(searchIcon).show();
    
     }
  });

});

/*collapse close*/
$(document).on('click',function(){
  $('.collapse').collapse('hide');
})



