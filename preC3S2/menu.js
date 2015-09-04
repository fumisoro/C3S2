$("body").wrapInner("<div id='wrapBody'></div>");

//var C3S2menu= $("<div>").attr("id", "C3S2menu");

var tabs= $("<div>").attr("id", "tabs");
var tablist= $("<ul>");
tablist.append("<li><a href='#template'>テンプレート</a></li>");
tablist.append("<li><a href='#individual_setting'>個別設定</a></li>");
tablist.append("<li><a href='#css_writing'>CSS記述</a></li>");
tabs.append(tablist);

var template= $("<div>").attr("id", "template");
template.append("<li><button id='list1'>テンプレート１</button></li>");
template.append("<li><button id='list2'>テンプレート2</button></li>");
template.append("<li><button id='list3'>元に戻す</button></li>");
tabs.append(template);

var i_setting= $("<div>").attr("id", "individual_setting");
i_setting.append("<p>個別設定の内容</p>");
tabs.append(i_setting);

var css_writing= $("<div>").attr("id", "css_writing");
var inputCSS= $("<textarea>").attr("name", "inputCSS")
			     .attr("cols", "200")
			     .attr("rows", "5")
			     .css("width", "90%")
			     .css("overflow", "auto");
css_writing.append(inputCSS);
css_writing.append("<button>change</button>");
tabs.append(css_writing);

//C3S2menu.append(tabs);
var closeButton= $("<button>").attr("id", "closeMenu")
			      .css("position", "absolute")
			      .css("right", "2%")
			      .css("top","4%")
			      .text("閉じる");
//C3S2menu.append(closeButton);
tabs.append(closeButton);

//$("body").append(C3S2menu);
$("body").append(tabs);
$("body").css("margin", "0");
//$('#C3S2menu').css("position", "fixed")
$('#tabs').css("position", "fixed")
	      .css("width", "100%")
	      .css("height", "34%")
	      .css("top", "65%")
	      .css("border", "solid")
	      .css("align", "center")
	      .css("margin", "0")
	      .css("overflow", "scroll")
	      .css("z-index", 0x7FFFFFFF);

$("#closeMenu").click(function(){
    //$("#C3S2menu").remove();
    $("#tabs").remove();
    $("body").css("margin", "");
});

$('#tabs').tabs({ heightStyle: 'auto' });


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

$("#list3").click(function(){
    $("#wrapBody").css("background-color", "")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "");
});


