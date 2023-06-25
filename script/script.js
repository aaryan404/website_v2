var $loader = document.querySelector('.loader')

window.onload = function() {
  setTimeout(function() {$loader.classList.remove('loader--active')}, 500)
};

document.querySelector('.btn').addEventListener('click', function () {
  $loader.classList.add('loader--active')
  
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
  }, 5000)
})




window.addEventListener('DOMContentLoaded', function() {
    var div = document.querySelector('.projects-title');
    var windowHeight = window.innerHeight;
    var divHeight = div.offsetHeight;
    var scrollOffset = 870; // Adjust this value to your desired scroll position
    var slideInDelay = 50; // Adjust this value to your desired delay in milliseconds
  
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


  function flipWordInElement(className, targetWord) {
    var elements = document.getElementsByClassName(className);
  
    // Iterate over each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var sentence = element.innerHTML;
      var words = sentence.split(' ');
  
      // Find the index of the target word
      var index = words.indexOf(targetWord);
  
      // If the word is found, reverse its characters
      if (index !== -1) {
        var flippedWord = targetWord.split('').reverse().join('');
        words[index] = flippedWord;
      }
  
      // Join the array of words back into a sentence
      var flippedSentence = words.join(' ');
  
      // Update the element's content with the flipped sentence
      element.innerHTML = flippedSentence;
    }
  }
  
  // Example usage
  var className = "flip-me";
  var targetWord = "how";
  flipWordInElement(className, targetWord);
  
  
  