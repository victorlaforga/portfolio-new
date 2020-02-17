// $(document).ready(function() {
//   //responsive menu toggle
//   $("#menutoggle").click(function() {
//     $('.xs-menu').toggleClass('displaynone');

//     });
//   //add active class on menu
//   $('ul li').click(function(e) {
//     e.preventDefault();
//     $('li').removeClass('active');
//     $(this).addClass('active');
//   });
// //drop down menu	
//     $(".drop-down").hover(function() {
//       $('.mega-menu').addClass('display-on');
//     });
//     $(".drop-down").mouseleave(function() {
//       $('.mega-menu').removeClass('display-on');
//     });

// });


function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  const modal = document.getElementById("myModal");
  const btn = document.querySelector("#muze");
  const span = document.getElementsByClassName("close")[0];
  
  function openModal() {
    modal.style.display = "block";
  }
  btn.addEventListener("click", openModal);
  function displayModal() {
    modal.style.display = "none";
  }
  span.addEventListener("click" ,displayModal)
  function closeModal(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  window.addEventListener("click", closeModal);

  const modal2 = document.getElementById("myModal2");
  const btn2 = document.querySelector("#nibud");
  const span2 = document.getElementsByClassName("close")[1];
  
  function openModal2() {
    modal2.style.display = "block";
  }
  btn2.addEventListener("click", openModal2);
  function displayModal2() {
    modal2.style.display = "none";
  }
  span2.addEventListener("click" ,displayModal2)
  function closeModal2(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
  window.addEventListener("click", closeModal2);


const $element=$('.each-event, .title');
const $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');
function check_for_fade() { 
    const window_height = $window.height();
    
    $.each($element, function (event) {
        const $element = $(this);
        const element_height = $element.outerHeight();
        const element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset -$(window).scrollTop());
        if (space < 60) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
 
    });
};

