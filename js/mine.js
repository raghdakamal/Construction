

$(window).scroll(function(){
    
    var windowScroll  =$(window).scrollTop();
    var aboutOffest =$(".about").offset().top;
    
    if (windowScroll > aboutOffest)
        {
          $(".topbar").css("backgroundColor","#024059")
        }
    else
        {
            $(".topbar").css("backgroundColor","transparent")
        }
});


$("#btnUp").click(function(){
    
   // $(window).scrollTop('0');
    
    
    $("body").animate({scrollTop:'0'},2000);
})
