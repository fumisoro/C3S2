//マウスオーバー
/*
$(function() {
	// var btn = $('<button>').text('change')
	// $('body').append(btn)

	// $('body').on('click', 'button', function() {
	// 		$(this).remove()
	//  })

	$("*")
		.on('mouseover', '*', function() {
			var container = this.firstChild;
			var attr = this.attributes;
			$(container).css('backgroundColor', 'blue');
			console.log(typeof(container));
			// console.log(attr);
		})
		.on('mouseout', '*', function() {
			var container = this.firstChild;
			$(container).css('backgroundColor', '');
			console.log("あうとーー");
		})

		$('p')
			.mouseover( function() {
				$(this).css('backgroundColor', 'blue');
			})
			.mouseout( function() {
				$(this).css('backgroundColor', '');
			});






	 // $('body').remove();
})
*/

//jqScript.src = 'http://code.jquery.com/jquery-1.10.1.min.js';


// $(function() {
// 	$('body').on('mouseover', 'div', (function() {
// 		$(this).remove()
// 	})
// })

/*
document.getElementById('button1').onclick = function(){
    document.getElementById('button1').innerHTML = "changed";
    chrome.windows.getLastFocused(
    {populate: false},
    function(currentWindow) {
	alert(currentWindow.id);
    });
	
}
*/

/*
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.command && (msg.command == "open")) {
         $(function() {
             var btn = $('<button>').text('change')
	     $('body').append(btn)
	     $('body').on('click', 'button', function() {
	     $(this).remove()
	 })
	 // $('body').remove();
    })       
    sendResponse("menu opened");
  }
});
*/