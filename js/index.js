$(document).ready(function(){
//  $( window ).on( "orientationchange", function( event ) {
 //   window.location.reload;
  //}
  //if(window.innerHeight > window.innerWidth){
  //  alert("Please use Landscape!");
  //}
  //else {

    var i = 0;

    $('.component').on("click", function(){
      
      var index = $(this).index()+1;
      var url = "url('../img/" + index + "-1.png')"
      
      if(!$(this).hasClass("clicked")) {
        $(this).css("background-image", url);
        $(this).addClass("clicked");
        i++;
        console.log(i);
        if(i==5){
          setTimeout(function(){
            $(".container").css("background-image", "url('../img/6.png')");
          }, 900);
        }
      }
      
    });
  //}
});