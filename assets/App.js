removeplaceholder();

$('.full-carousel').owlCarousel({
    // autoplay:true,
    // autoplayTimeout:8000,
    // autoplayHoverPause:true,
    slideBy: 4,
    loop:true,
    margin: 10,
    dots: false,
    center: false,
    responsiveClass: true,
    nav: true,
    responsive: {
        320: {
            items: 2
        },
        358: {
            items: 2.15,
            slideBy: 2
        },
        375: {
            items: 2.1,
            slideBy: 2
        },
        397: {
            items: 2.33,
            slideBy: 2
        },
        400: {
            items: 2.3,
            slideBy: 2
        },
        420: {
            items: 2.15,
            slideBy: 2
        },
        460: {
            items: 2.4,
            slideBy: 2
        },
        479: {
            items: 2.,
            slideBy: 2
        },
        480: {
            items: 1.7,
            slideBy: 1
        },
        485: {
            items: 1.9,
            slideBy: 1
        },
        500: {
            items: 2,
            slideBy: 2
        },
        540: {
            items: 2.1,
            slideBy: 2
        },
        560: {
            items: 2.2,
            slideBy: 2
        },
        590: {
            items: 2.3,
            slideBy: 2
        },
        620: {
            items: 2.5,
            slideBy: 2
        },
        650: {
            items: 2.6,
            slideBy: 2,
        },
        674: {
            items: 2.7,
            slideBy: 2,
        },
        690: {
            items: 2.8,
            slideBy: 2,
        },
        725: {
            items: 2.9,
            slideBy: 2,
        },
        768: {
            items: 3.6,
            slideBy: 3
        },
        800: {
            items: 3.7,
            slideBy: 3
        },
        820: {
            items: 3.8,
            slideBy: 3
        },
        840: {
            items: 4,
            slideBy: 4
        },
        875: {
            items: 4.1,
            slideBy: 4
        },
        930: {
            items: 4.2,
            slideBy: 4
        },
        970: {
            items: 4.4,
            slideBy: 4
        },
        992: {
            items: 3.7,
            slideBy: 4
        },
        1024: {
            items: 3.9
        },
        1070: {
            items: 4.1
        },
        1110: {
            items: 4.3
        },
        1150: {
            items: 4.5
        },
        1210: {
            items: 4.7
        },
        1260: {
            items: 4.9
        },
        1300: {
            items: 5
        },
        1330: {
            items: 5.2
        },
        1440: {
            items: 5.5
        },
        1470: {
            items: 5.8
        },
        1540: {
            items: 6
        },
        1600:{
            items:6.2
        }

    }
});



$('.small-slider').owlCarousel({
     // autoplay:true,
    // autoplayTimeout:8000,
    // autoplayHoverPause:true,
    slideBy: 4,
    loop:true,
    margin: 10,
    dots: false,
    center: false,
    responsiveClass: true,
    nav: true,
    responsive: {
        320: {
            items: 2
        },
        358: {
            items: 2.15,
            slideBy: 2
        },
        375: {
            items: 2.1,
            slideBy: 2
        },
        397: {
            items: 2.33,
            slideBy: 2
        },
        400: {
            items: 2.3,
            slideBy: 2
        },
        420: {
            items: 2.15,
            slideBy: 2
        },
        460: {
            items: 2.4,
            slideBy: 2
        },
        479: {
            items: 2.,
            slideBy: 2
        },
        480: {
            items: 1.7,
            slideBy: 1
        },
        485: {
            items: 1.9,
            slideBy: 1
        },
        500: {
            items: 2,
            slideBy: 2
        },
        540: {
            items: 2.1,
            slideBy: 2
        },
        560: {
            items: 2.2,
            slideBy: 2
        },
        590: {
            items: 2.3,
            slideBy: 2
        },
        620: {
            items: 2.5,
            slideBy: 2
        },
        650: {
            items: 2.6,
            slideBy: 2,
        },
        674: {
            items: 2.7,
            slideBy: 2,
        },
        690: {
            items: 2.8,
            slideBy: 2,
        },
        725: {
            items: 2.9,
            slideBy: 2,
        },
        768: {
            items: 2.6,
            slideBy: 3
        },
        800: {
            items: 2.7,
            slideBy: 3
        },
        820: {
            items: 2.8,
            slideBy: 3
        },
        840: {
            items: 3,
            slideBy: 4
        },
        875: {
            items: 3.1,
            slideBy: 4
        },
        930: {
            items: 3.2,
            slideBy: 4
        },
        970: {
            items: 3.4,
            slideBy: 4
        },
        992: {
            items: 2.7,
            slideBy: 4
        },
        1024: {
            items: 2.9
        },
        1070: {
            items: 3.1
        },
        1110: {
            items: 3.3
        },
        1150: {
            items: 3.5
        },
        1210: {
            items: 3.7
        },
        1260: {
            items: 3.9
        },
        1300: {
            items: 4
        },
        1330: {
            items: 4
        },
        1440: {
            items: 4.5
        },
        1470: {
            items: 4.8
        },
        1540: {
            items: 5
        },
        1600:{
            items:5.2
        }
    }
});

$('.sliding-header').owlCarousel({
   slideBy: 2,
   dots: false,
   center: false,
   responsiveClass: true,
   nav: true,
   loop:false,
   mouseDrag: true,
   touchDrag: true,
   pullDrag: true,
   merge:true,
   responsive: {
       320: {
           items: 2.3
       },
       350: {
        items: 2.6
       },
       380: {
        items: 2.8
       },
       401: {
        items: 3.2
       },
       425: {
        items: 3.3
       },
       479: {
        items: 2.5
       },
       
       660: {
        items: 3.4
       },
       740: {
        items: 3.6
       },

}
});
// For Slow Net (placeholder)
function removeplaceholder() {
    const placeholder = document.querySelectorAll(".placeholder");
    const itemPic = document.querySelectorAll(".item-pic");
    const arrow = document.querySelectorAll(".arrows");
    const show = document.querySelectorAll(".display");
    placeholder.forEach((element) => {
        element.classList.remove("placeholder");
        element.classList.remove("item-pic");
        element.classList.remove("arrows");
        element.classList.remove("display");
    });
}
//window.onload = removeplaceholder;

// switch between buttons
function myClickFunction(element) {
    element.style.display = "none";
    element.nextElementSibling.style.display = "flex";
    // document.getElementById("edit-offer").style.display = "block";
}

// Side-Bar//Filter Bar
function openNav() {
    document.getElementById("mySidenav").style.width = "240px";
    document.getElementById("close").style.display = 'block';
    document.getElementById("backdrop2").style.display = 'block';
    document.getElementById("side-btn").style.width = "260px";
    document.getElementById("market-body").style.overflowY = 'hidden';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("close").style.display = 'none';
    document.getElementById("backdrop2").style.display = 'none';
    document.getElementById("side-btn").style.width = "0";
    document.getElementById("market-body").style.overflowY = 'scroll';
}
// mobile sidear header
function openHeadNav() {
    document.getElementById("HeadSidebar").style.width = "240px";
    document.getElementById("backdrop").style.display = 'block';
    document.getElementById("account-body").style.overflowY = 'hidden';
  }
  
  function closeHeadNav() {
    document.getElementById("HeadSidebar").style.width = "0";
    document.getElementById("backdrop").style.display = 'none';
    document.getElementById("account-body").style.overflowY = 'scroll';
  }

// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

var coll = document.getElementsByClassName("collapsible__div");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active__div");
        var content = this.nextElementSibling;
        if (content.style.maxHeight && content.style.maxHeight!='0px') {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


$('.checked').each(function() {
    $(this).change(function() {
        if($(this).prop('checked')) {
            var main = $(this).parents().eq(3)
            main.prev().toggleClass('active__div')
            main.css('maxHeight', '0px')
            var selected = main.prev().find('small').text('\n['+$(this).parents().eq(0).text()+']')
            selected.html(selected.html().replace('\n', '<br>'))
            
            var main2 = main.parents().eq(0).next()
            main2.children().eq(0).toggleClass('active__div')
            var content = main2.find('.content__div')
            content.css('maxHeight', content.prop('scrollHeight') + "px")
        }
    })
})

// market Filter Fixed
$(window).scroll(function(e){ 
    var $el = $('.fixed-filter'); 
    var $acc=$('#account-id');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() >= 65 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
      $el.css({'box-shadow':'0 0 5px #cccc'});
      $el.css({'padding':'3px 10px'});
      $acc.css({'margin-top':'40px'});
    }
    if ($(this).scrollTop() <= 65 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
      $el.css({'box-shadow':'none'});
      $el.css({'padding':'0px 10px'});
      $acc.css({'margin-top':'0px'});
    } 
  });


// Remove footer when virtusl keyboard is open
var initialScreenSize = window.innerHeight; 
window.addEventListener("resize", function() {
   if(window.innerHeight < initialScreenSize){
        $("#mobile-footer").hide(); 
   } else{ 
        if($(window).width() < 767) {
            $("#mobile-footer").show(); 
        }
       
   } 
    
});


//   on Search click show header
// Side-Bar//Filter Bar

function openHeader()  {
    if($(window).scrollTop() >=60) {
        document.getElementById("animatedheader").style.height = "fit-content";
        document.getElementById("animatedheader").style.display = 'block';
        document.getElementById("input2").focus();
    }
    if($(window).scrollTop() <=60){
        document.getElementById("input1").focus();
        
    }
}
// For home page
function openHeaderindex()  {
    document.getElementById("input1").focus();
}



 // add a listener to 'scroll' event
document.addEventListener("touchstart", function() {
    // get the active element and call blur
    document.activeElement.blur();
});


document.addEventListener('touchstart', function(e) {
    var container = $("#animatedheader");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
})

// Remove card onclick remove button
// $('#close-btn').on('click', function(){
//     $(this).closest("#close-div").remove();
// });

// 
$("#submit-btn").on('click',function(){
    $("#add-goods").submit();
})
// for editor
// DecoupledEditor
// .create( document.querySelector( '#editor' ) )
// .then( editor => {
//     const toolbarContainer = document.querySelector( '#toolbar-container' );

//     toolbarContainer.appendChild( editor.ui.view.toolbar.element );
// } )
// .catch( error => {
//     console.error( error );
// } );
// Upload File
$('.selected-file').each(function() {
    $(this).on('change', function() {
        if($(this)[0].files.length === 0) {
          $(this).next().remove()
        } else {
          var btn = document.createElement('Button');
          btn.innerHTML = 'x'
          btn.classList.add('cancel-btn')
          $(this).parent().append(btn)
          $(btn).on('click', function() {
            $(this).prev().val(null)
            $(this).remove()
          })
        }
    })
  })


// Delete card
$('.wants__buttons-del').each(function() {
    $(this).on('click', function() {
        $('#confirmDelete').modal('show')
        
        let that = $(this)
    
        $('#delete-btn').on('click', function() {
            // that.parents().get(2).remove()
            that.closest('li').remove()
            $('#confirmDelete').modal('hide')
        })
        
        $('#cancel-delete-btn').on('click', function() {
            $('#confirmDelete').modal('hide')
        })
        
    })
    
})

// Request button click
$('.view__client-btn').each(function () {
    $(this).on('click', function () {
        $(this).css('display', 'none')
        $(this).next().css('display', 'block');
        $(this).prev().css('display', 'inline-block');
        $(this).closest('.col').next().css('display', 'block')
    })
});

$(document).ready(function(){
    $(".show-modal").click(function(){
        $("#generateOffer").modal({
            backdrop: 'static',
            keyboard: false
        });
    });
});

// Active Menu Item
$(document).ready(function() {
    var menus = $('.menu')
    console.log(menus)
    menus.each(function() {
        // alert($(this).attr('data-link'))
        if($(this).attr('data-link') == window.location.pathname.split('/').pop()) {
            var ele = menus.filter('[data-link="'+ $(this).attr('data-link') +'"]')
            var index = menus.index(ele)
            $("#selector").trigger("to.owl.carousel", [index, 1]);
            $(this).addClass('active-menu')
        }
    })
})