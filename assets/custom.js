$(document).ready(function($) {
        // Add en remove class on menu item hover  
        $('.big-nav > ul > li').mouseover(function(){
          alert("entered");
          $(this).addClass('show').siblings().removeClass('show');
        });

  console.log("entered");
        // Get the minimum height the big-nav elemtn
        var min_height = 50;
        $('.big-nav > ul > li > ul').each(function(){
          var this_height = $(this).outerHeight();
          if (this_height > min_height) min_height = this_height;
        });
        $('.big-nav > ul, .nav .big-nav > ul > li > ul').css('min-height', min_height + 'px');
        
      });
