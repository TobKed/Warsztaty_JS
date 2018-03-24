'use strict';

document.addEventListener('DOMContentLoaded', function() {  // console.log('działa');

  // DROPDOWN MENU
  var forDropdown = document.querySelector('.for-dropdown');
  var dropdown = document.querySelector('.dropdown');

  forDropdown.addEventListener('mouseover', function() {
      dropdown.style.display = 'block';
      // set width of dropdown menu due to parrent button
      dropdown.style.width = String(forDropdown.offsetWidth) + 'px';
  });

  forDropdown.addEventListener('mouseout', function() {
      dropdown.style.display = 'none';
  });


  // MORE BUTTONS
  var more_paragraphs = document.querySelectorAll('.more');
  for (var i = 0; i < more_paragraphs.length; i++) {
      more_paragraphs[i].style.display = 'none';
  };

  var buttons = document.querySelectorAll('.read-more');

  function showHide() {
    var textArea = this.previousElementSibling;
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }

});
