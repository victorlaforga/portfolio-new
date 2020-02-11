function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.querySelector("#muze");
  
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  function openModal() {
    modal.style.display = "block";
    console.log("test")
  }
  btn.addEventListener("click", openModal);
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
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