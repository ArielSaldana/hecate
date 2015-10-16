(function (window, document, hecate, undefined) {
	'use strict';

    var listItems = document.getElementsByTagName('li');

	var keyCodes = {
		up: 38,
		down: 40
	};

    var wheel = function(event){
        var delta = 0;
        var currentEvent = event || window.event;

        if (currentEvent.wheelDelta) {
            delta = (window.opera ? -1 : 1) * currentEvent.wheelDelta / 120;
        } else if (currentEvent.detail) {
            delta = -currentEvent.detail / 3;
        }

        if (delta) {
            mousewheelHandle(delta);
        }
    };

    var mousewheelHandle = function(delta) {
        if(hecate.scrolling) {
            return;
        }
        if (delta > 0) {
            hecate.scrolling = true;
            hecate.moveUp();
            hecate.setScrollTimeout(1500);
        } else if (delta <= 0) {
            hecate.scrolling = true;
            hecate.moveDown();
            hecate.setScrollTimeout(1500);
        }
    };

    var navHandler = function() {
        hecate.moveTo(event.target.getAttribute('data-section'));
    };

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].getAttribute('data-section')) {
            listItems[i].addEventListener('click', navHandler);
        }
    }

    window.addEventListener('keydown', function(event) {
        if (event.keyCode === keyCodes.up) {
           hecate.moveUp();
        } else if (event.keyCode === keyCodes.down) {
           hecate.moveDown();
        }
    });

    window.addEventListener('resize', function(){
            hecate.move();
    });

    window.addEventListener('DOMMouseScroll', wheel, false);

    window.onmousewheel = document.onmousewheel = wheel;

})(window, document, hecate);// jshint ignore:line
