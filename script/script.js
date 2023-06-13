window.addEventListener('DOMContentLoaded', function() {
    var div = document.querySelector('.projects-title');
    var windowHeight = window.innerHeight;
    var divHeight = div.offsetHeight;
    var scrollOffset = 850; // Adjust this value to your desired scroll position
    var slideInDelay = 100; // Adjust this value to your desired delay in milliseconds
  
    // Function to slide the div in
    function slideInDiv() {
      div.style.left = '0';
    }
  
    // Function to slide the div up and reset its position
    function slideUpDiv() {
      div.style.left = '-100%';
    }
  
    // Event listener for the scroll event
    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollPosition = scrollTop + windowHeight;
  
      if (scrollPosition >= scrollOffset && scrollTop <= scrollOffset) {
        setTimeout(slideInDiv, slideInDelay);
      } else {
        slideUpDiv();
      }
    });
  });
  
  