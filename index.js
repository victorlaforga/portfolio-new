
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  const modal = document.getElementById("myModal");
  const btn = document.querySelector("#muze");
  const span = document.getElementsByClassName("close")[0];
  
  function openModal() {
    if(window.innerWidth > 850) {
      modal.style.display = "block";
    } else {
      window.open("https://github.com/victorlaforga/Dating-app-pt")
      
    }
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
    if(window.innerWidth > 850) {
      modal2.style.display = "block";
    } else {
      window.open("https://github.com/victorlaforga/nibud-budgethuis")
      
    }
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


function goToGithubKids(){
  window.open("https://github.com/victorlaforga/frontend-data");
}
document.getElementById("kidstreasures").addEventListener("click", goToGithubKids);

function goToGithubDiner(){
  window.open("https://github.com/victorlaforga/project-tech");
}
document.getElementById("dinerfortwo").addEventListener("click", goToGithubDiner);

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










