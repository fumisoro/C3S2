$("body").wrapInner("<div id='wrapBody'></div>");

//var C3S2menu= $("<div>").attr("id", "C3S2menu");

var tabs= $("<div>").attr("id", "tabs");
var tablist= $("<ul>");
tablist.append("<li id = 'tab_template'><a href='#template'>テンプレート</a></li>");
tablist.append("<li id = 'tab_is'><a href='#individual_setting'>個別設定</a></li>");
tablist.append("<li id = 'tab_css'><a href='#css_writing'>CSS記述</a></li>");
tabs.append(tablist);

var template= $("<div>").attr("id", "template");
template.append("<li><button id='list1'>テンプレート１</button></li>");
template.append("<li><button id='list2'>テンプレート2</button></li>");
template.append("<li><button id='list3'>元に戻す</button></li>");
tabs.append(template);

var i_setting= $("<div>").attr("id", "individual_setting");
i_setting.append("<p>個別設定の内容</p>");
i_setting.append("<button id='is_hide'>非表示</button>");
var slider = $("<div>").attr("id", "slider").css("width", "300px");
i_setting.append(slider);
var fontColor = $("<input>").attr("id", "fontColor").attr("type", "text");
i_setting.append(fontColor);
var backColor = $("<input>").attr("id", "backColor").attr("type", "text");
i_setting.append(backColor);

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

$('#slider').slider({
    min: 1,
    max: 50,
    step: 0.5,
    value: 1,
    slide: function(e, ui) {
	if (selected) {
	    $(targetElement).css("font-size", ui.value);
	}
    },
    change: function(e, ui) {
	if (selected) {
	    $(targetElement).css("font-size", ui.value);
	}
    }
});

$('#fontColor').spectrum({
    flat: true,
    showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
    color: 'blanchedalmond',
    palette: [
        ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
        ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
        ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
        ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
        ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
        ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
        ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
        ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
    ],
    change: function(color) {
	var fontColor = color.toHexString();
	console.log(fontColor);
	if (selected) {
	    $(targetElement).css("color", fontColor);
	    $(targetElement).find("p").css("color", fontColor);
	}
    }
});

$('#backColor').spectrum({
    flat: true,
    showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
    color: 'blanchedalmond',
    palette: [
        ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
        ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
        ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
        ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
        ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
        ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
        ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
        ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
    ],
    change: function(color) {
	var backColor = color.toHexString();
	console.log(backColor);
	if (selected) {
	    $(targetElement).css("background-color", backColor);
	    $(targetElement).find("p").css("background-color", backColor);
	}
    }
});

//テンプレート機能
$("#list1").click(function(){
    $("#wrapBody").css("background-color", "red")
		  .css("font-size", "24px")
		  .css("font-weight", "bold")
		  .css("font-style", "italic")
		  .css("color", "");
    $("#wrapBody").find("p").css("background-color", "red")
		  .css("font-size", "24px")
		  .css("font-weight", "bold")
		  .css("font-style", "italic")
		  .css("color", "")
});

$("#list2").click(function(){
    $("#wrapBody").css("background-color", "black")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "yellow")
    $("#wrapBody").find("p").css("background-color", "black")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "yellow")
});

$("#list3").click(function(){
    $("#wrapBody").css("background-color", "")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "");
    $("#wrapBody").find("p").css("background-color", "")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "")
});

//個別設定
var selectable = false;
var selected = false;
var targetElement = null;

/*
$("#is_start").click(function(){
    selectable = true;
    $("#wrapBody *").hover(
	function(eo) {
	    var overT = eo.currentTarget;
	    $(overT).css("border", "3px solid #ff0000");
	    //console.log(eo.target);
	},
	function(eo) {
	    var outT = eo.currentTarget;
	    $(outT).css('border', '');
	}
    );
});
*/
//要素の選択
$("#tab_is").click(function(){
    selectable = true;
    if (selectable) {
	select();
    }
});

var select = function(){
    $("#wrapBody *").mouseover(
	function(eo) {
	    var overT = eo.target;
	    if (selectable) {
		$(overT).css({
		    opacity: "0.6",
		    background: "#9ef",
		    zIndex: "0x7FFFFFFE"
		});
		$(eo.relatedTarget).css({
		    opacity: "",
		    background: "",
		    zIndex: ""
		});
	    }else{
		$(overT).css({
		    opacity: "",
		    background: "",
		    zIndex: ""
		});
		$(eo.relatedTarget).css({
		    opacity: "",
		    background: "",
		    zIndex: ""
		});
		
	    }
	}
    );
}

$("#tab_template, #tab_css").click(function(){
    selectable = false;
});

//選択する要素の決定
$("#wrapBody").click(function(event){
    if (selectable) {
	console.log(event.target);
	if (targetElement) {
	    $(targetElement).css("border", "");
	}
	targetElement = event.target;
	$(targetElement).css("border", "3px solid #ff0000");
	selected = true;
    }
})
//非表示
$("#is_hide").click(function(){
    console.log("ok");
    if (selected) {
	$(targetElement).hide();
    }
});
