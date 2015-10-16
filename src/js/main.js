/* jshint devel:true */
var hecate = (function(hecate) {
	'use strict';

	var currentSectionNumber = 0;

	var sectionCount = document.querySelectorAll('section').length - 1;

	var maskHeight = document.getElementById('mask').offsetHeight;

	var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

	hecate.scrolling = false;

        hecate.move = function() {
        	if(iOS) {
	                document.getElementById('container').style.top = '-' + (currentSectionNumber * maskHeight) + 'px';
	            } else {
	                document.getElementById('container').style.top = '-' + (currentSectionNumber * window.innerHeight) + 'px';
	        }
	};

	hecate.moveUp = function() {
		if (currentSectionNumber === 0) {
            		return;
        	}
	        currentSectionNumber--;
	        hecate.move();
	};

	hecate.moveDown = function() {
		if (currentSectionNumber === sectionCount) {
        		return;
        	}
	        currentSectionNumber++;
	        hecate.move();
	};

	hecate.moveTo = function(sectionNumber) {
		currentSectionNumber = sectionNumber;
		hecate.move();
	};

	hecate.addEvent = function(element, sectionNumber) {
        	document.querySelector(element).addEventListener('click', function() {
                	hecate.moveTo(sectionNumber);
		});
        };

        hecate.setScrollTimeout = function(ms) {
    		setTimeout(function(){
            		hecate.scrolling = false;
        	}, ms);
        };

	return hecate;

})(hecate || {});
