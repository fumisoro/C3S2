
$(function() {
	// var btn = $('<button>').text('change')
	// $('body').append(btn)

	// $('body').on('click', 'button', function() {
	// 		$(this).remove()
	//  })

	$("*")
		.mouseover(function() {
			var container = this.firstChild;
			$(container).css('background', 'blue');
			console.log(container);
		})
		.mouseout(function() {
			var container = this.firstChild;
			$(container).css('background', '');
			console.log("あうとーー");
		})





	 // $('body').remove();
})




//jqScript.src = 'http://code.jquery.com/jquery-1.10.1.min.js';


// $(function() {
// 	$('body').on('mouseover', 'div', (function() {
// 		$(this).remove()
// 	})
// })