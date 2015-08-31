$("body").wrapInner("<div id='wrapBody'></div>");

var div= $("<div id='C3S2menu'></div>");
var list = $("<ul>");
list.append("<li><button id='list1'>テンプレート１</button></li>");
list.append("<li><button id='list2'>テンプレート2</button></li>");
list.append("<li><button id='list3'>元に戻す</button></li>");
list.append("<textarea name='inputCSS' cols='200' rows='5', style='overflow:auto;'></textarea>")

div.append("<button id='closeMenu', style='position: absolute; right: 0px; top: 0px'>閉じる</button>")
div.append(list);
div.append("<button>change</button>");
$("body").append(div);
$('#C3S2menu').css({backgroundColor: '#ffd67b', position: 'fixed', width: window.outerWidth-16, top: window.outerHeight-300, border: 'solid', align: 'center', margin: 0});

$("#closeMenu").click(function(){
    $("#C3S2menu").remove();
});

//テンプレート機能
$("#list1").click(function(){
    $("#wrapBody").css("background-color", "red")
		  .css("font-size", "24px")
		  .css("font-weight", "bold")
		  .css("font-style", "italic")
		  .css("color", "");
});

$("#list2").click(function(){
    $("#wrapBody").css("background-color", "black")
		  .css("font-size", "24px")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "yellow");
});
//元に戻す
$("#list3").click(function(){
    $("#wrapBody").css("background-color", "")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "");
});


