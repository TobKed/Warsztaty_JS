'use strict';

document.addEventListener('DOMContentLoaded', function() {  // console.log('działa');

    // DROPDOWN MENU
    var forDropdown = document.querySelector('.for-dropdown');
    var dropdown = document.querySelector('.dropdown');

    forDropdown.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';
        // set width of dropdown menu due to parrent button
        dropdown.style.width = forDropdown.offsetWidth + 'px';
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


    // HEADER FIX GO UP BUTTON
    var menu = document.querySelector(".navbar");
    var goUpButton =document.querySelector("#go-up-btn")
    goUpButton.style.display = 'none';
    window.addEventListener('scroll', function() {
        goUpButton.style.display = 'inline-block';
        menu.style.borderBottom = '1px solid #7f7f7f';
    });

    goUpButton.addEventListener("click", function() {
        window.scroll(0, 0);
    });


    // SLDIER
    var items = document.querySelectorAll('.slider li');
    var dots = document.querySelectorAll('.dot');
    for (var i = 1; i < items.length; i++) {
        dots[i].classList.remove('active');
        items[i].classList.remove('visible');
    }

    // attach event listener to dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].onclick = function() {
            displayItem(this);
            return false;
        }
        dots[i].onfocus = function() {
            displayItem(this);
            return false;
        }
    }

    // display adequate item
    function displayItem(itemToActivate) {
        for (var i = 0; i < dots.length; i++) {
            if (dots[i] == itemToActivate) {
                dots[i].classList.add("active");
                items[i].classList.add("visible");
            } else {
                dots[i].classList.remove("active");
                items[i].classList.remove("visible");
            }
    	}
    }


});
