var numberOfSquares = 16;

$(document).ready(function() {
	for(var i=0; i<numberOfSquares; i++) {
		for(var j=0; j<numberOfSquares; j++) {
			$('#container').append($('<div class="square-div"></div>'));
		}
	}
});