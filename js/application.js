var numberOfSquares = 16;
var width = 800 / numberOfSquares;

$(document).ready(function() {
	for(var i=0; i<numberOfSquares; i++) {
		for(var j=0; j<numberOfSquares; j++) {
			$('#container').append($('<div class="square-div"></div>'));
		}
	}
	$('.square-div').css({'width': width,
						'height': width});
});