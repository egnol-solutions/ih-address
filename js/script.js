
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
  



  /*****************************toggle close/search buttons******************************* */

   let searchInput=$(".searchInput");
   let cancelIcon=$(".searchMap .cancel");
   let searchIcon=$(".searchMap .search");

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


/*************************preview photos before upload***********************/
$(".buttonFile").click(function(){
  let hidFile=$(this).next(".hiddenFile");
    hidFile.click().change(function(){
      function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();          
            reader.onload = function (e) {
              hidFile.prev().children('.displayImg').attr('src', e.target.result);
            } 
            reader.readAsDataURL(input.files[0]);
        }
      }
    readURL(this);
    $(this).prev().addClass("changed");
    let fileVal =$(this).val();
    fileVal=fileVal.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
      $(this).next(".fileDesc").text(fileVal);
     
});

});


/************************************slide from photos hint to photos uplaod***********************************/

$(".hintPhotos button").click(function(){
  $(this).parents(".hintPhotos").animate({left: '-100%'}).fadeOut('fast',function(){
    $(".uploadPhotos").css({transform: 'translateX(0%)'});
  });
});




/********************openSide-dropdownIHAdress*********************** */

$(".map").click(function(){
  $(".mobile-offcanvas").addClass("showCanvas");
});