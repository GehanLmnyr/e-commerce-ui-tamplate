$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      rtl:true,
      autoplayHoverPause:true,
      center:true,
  });
});

// scrolling fix-navbar

var fixmeTop = $('.navbar').offset().top;       

$(window).scroll(function() {                  

    var currentScroll = $(window).scrollTop(); 

    if (currentScroll >= fixmeTop) {           
        $('.navbar').css({                     
            position: 'fixed',
            top: '0',
            left: '0',            
        });
    } else {                                   
        $('.navbar').css({                      
            position: 'static'
        });
    }

});
// passord 
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

/* *** qty *** */
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

////// src-card
$(".src-card").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

// product
const els = document.querySelectorAll("[type='radio']");
for (const el of els)
  el.addEventListener("input", e => reorder(e.target, els));
reorder(els[0], els);

function reorder(targetEl, els) {
  const nItems = els.length;
  let processedUncheck = 0;
  for (const el of els) {
    const containerEl = el.nextElementSibling;
    if (el === targetEl) {//checked radio
      containerEl.style.setProperty("--w", "100%");
      containerEl.style.setProperty("--l", "0");
    }
    else {//unchecked radios
      containerEl.style.setProperty("--w", `${100/(nItems-1)}%`);
      containerEl.style.setProperty("--l", `${processedUncheck * 100/(nItems-1)}%`);
      processedUncheck += 1;
    }
  }
}

// cart



























































$('#r11').on('click', function(){
  $(this).parent().find('a').trigger('click')
})

$('#r12').on('click', function(){
  $(this).parent().find('a').trigger('click')
})



