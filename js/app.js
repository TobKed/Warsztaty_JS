'use strict';

document.addEventListener('DOMContentLoaded', function() {  // console.log('działa');

  var forDropdown = document.querySelector('.for-dropdown');
  var dropdown = document.querySelector('.dropdown');

  forDropdown.addEventListener('mouseover', function() {
      dropdown.style.display = 'block';
      // set width of dropdown menu due to parrent button
      dropdown.style.width = String(forDropdown.offsetWidth) + "px";
  });

  forDropdown.addEventListener('mouseout', function() {
      dropdown.style.display = 'none';
  });

});
