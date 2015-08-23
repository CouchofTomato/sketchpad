var drawGrid = function(num) {
	var width = 650 / num;
	var text="";
	for(var i=0; i<num; i++) {
		for(var j=0; j<num; j++) {
			text += '<div class="div1"><div class="square-div"></div></div>';
		}
	}
	$('#container').append(text);
	$('.square-div').css({'width': width,
						'height': width});
	$('.div1').addClass('grid');
}

var normal = function() {
	$('.square-div').on('mouseenter', function(){
		$(this).css({"background": "#FFFF66"});
	});
}

var randomColour = function() {
	$('.square-div').on('mouseenter', function() {
		var num1 = Math.floor((Math.random() * 255) + 1);
		var num2 = Math.floor((Math.random() * 255) + 1);
		var num3 = Math.floor((Math.random() * 255) + 1);
		$(this).css({"background": "rgb(" +num1 + ", " + num2 + ", " + num3 + ")"})
	});
}

var trail = function() {
	$('.square-div').on('mouseenter', function() {
		$(this).fadeTo(0,0).fadeIn(600,1);
	}).on('mouseleave', function () {
		$(this).fadeTo(600,1);
	});
}

var mouseClick = function() {
	isMouseDown = false;

    $('body').mousedown(function() {
        isMouseDown = true;
    }).mouseup(function() {
        isMouseDown = false;
    })

    $('#container').on('mouseover', 'div', function() {
        if(isMouseDown)
            $(this).css({backgroundColor:'orange'});
    });
}

var opacity = function() {
	$('.square-div').on('mouseenter', function() {
		$(this).css('opacity', '-=0.2');
	});
}

$(document).ready(function() {
	var userInput;
	if(userInput === undefined) {
		userInput = 16;
	}
	drawGrid(16);
	$('#row-input').on('keypress', function(e) {
		if(e.keyCode == 13) {
			userInput = $(this).val();
			if(userInput !== "" && userInput > 0 && userInput < 121) {
				$('#container').empty();
				drawGrid(userInput);
				$('#row-input').val("");
			} else {
				alert("Please enter a value between 1 and 120");
				$('#container').empty();
				drawGrid(16);
				$('#row-input').val("");
			}
		}
	});
	$("input").click(function(e){
	    var idClicked = e.target.id;
	    switch(idClicked) {
	    	case "normal-button":
	    		$('#container').empty();
				drawGrid(userInput);
	    		normal();
	    		break;
	    	case "random-button":
	    		$('#container').empty();
				drawGrid(userInput);
	    		randomColour();
	    		break;
	    	case "trail-button":
	    		$('#container').empty();
				drawGrid(userInput);
	    		trail();
	    		break;
	    	case "mouse-button":
	    		$('#container').empty();
				drawGrid(userInput);
	    		mouseClick();
	    		break;
	    	case "opacity-button":
	    		$('#container').empty();
				drawGrid(userInput);
	    		opacity();
	    	case "grid-button":
	    		$('.div1').toggleClass('grid');
	    }
	});
	
});