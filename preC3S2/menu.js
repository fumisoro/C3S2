$("body").wrapInner("<div id='wrapBody'></div>");

var div= $("<div id='C3S2menu'></div>");
var tabs= $("<div id='tabs'></div>");
var tablist= $("<ul>");
tablist.append("<li><a href='#template'>テンプレート</a></li>");
tablist.append("<li><a href='#individual_setting'>個別設定</a></li>");
tablist.append("<li><a href='#css_writing'>CSS記述</a></li>");
tabs.append(tablist);

var template= $("<div id='template'></div>");
template.append("<li><button id='list1'>テンプレート１</button></li>");
template.append("<li><button id='list2'>テンプレート2</button></li>");
template.append("<li><button id='list3'>元に戻す</button></li>");
tabs.append(template);

var i_setting= $("<div id='individual_setting'></div>");
i_setting.append("<p>個別設定の内容</p>");
tabs.append(i_setting);

var css_writing= $("<div id='css_writing'></div>");
css_writing.append("<textarea name='inputCSS' cols='200' rows='5', style='overflow:auto;'></textarea>");
css_writing.append("<button>change</button>");
tabs.append(css_writing);

div.append(tabs);
div.append("<button id='closeMenu', style='position: absolute; right: 0px; top: 0px'>閉じる</button>")

$("body").append(div);
$('#C3S2menu').css({backgroundColor: '#ffd67b', position: 'fixed', width: window.outerWidth-16, top: window.outerHeight-300, border: 'solid', align: 'center', margin: 0});

$("#closeMenu").click(function(){
    $("#C3S2menu").remove();
});

$('#tabs').tabs({ heightStyle: 'content' });


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


