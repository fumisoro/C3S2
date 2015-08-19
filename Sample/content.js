
$(function() {
	 var btn = $('<button>').text('change')
	 $('body').append(btn)

	 $('body').on('click', 'button', function() {
			$(this).remove()
	 })



	 // $('body').remove();
})




//jqScript.src = 'http://code.jquery.com/jquery-1.10.1.min.js';


// $(function() {
// 	$('body').on('mouseover', 'div', (function() {
// 		$(this).remove()
// 	})
// })