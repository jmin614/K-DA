$(function(){
  $(window).scroll(function(){
    var wHeight = $(this).height(); // window  창의 높이를 가져온다.
    var thisScrollTop = $(this).scrollTop(); // window 창의 scroll top 값을 가져온다.
    var navBar = $("nav");
    if( thisScrollTop > wHeight - 70 ){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });

  $("#member a").click(function(){ //a를 클릭했을 때 실행
    $("a").removeClass("on");
    $(this).addClass("on"); //선택하기!!!
    $(".img_box img").attr("src",$(this).attr("href")); //클릭 시 이미지 바꾸기!
    return false;
  });
});
