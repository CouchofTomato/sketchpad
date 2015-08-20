var numberOfSquares = 16;
var width;

var drawGrid = function(num) {
	width = 650 / num;
	for(var i=0; i<num; i++) {
        var row = $('<div>', {id: "x" + i}).addClass('row').appendTo('#container');
		for(var j=0; j<num; j++) {
			$('<div>', {class: "square-div background"}).appendTo(row);
		}
	}
	$('.square-div').css({'width': width,
						'height': width});
	$('.square-div').on('mouseenter', function() {
		$(this).css('opacity', '-=0.2');
		/*$(this).removeClass('background').addClass('background2');*/
	});
}

$(document).ready(function() {
	drawGrid(numberOfSquares);
	$('#clear-button').on('click', function() {
		/*$('.square-div').removeClass('background2').addClass('background');*/
		numberOfSquares = prompt("Enter a number of squares for each row");
		$('#container').empty();
		drawGrid(numberOfSquares);
	});
});