$("body").wrapInner("<div id='wrapBody'></div>");

//var C3S2menu= $("<div>").attr("id", "C3S2menu");

var tabs= $("<div>").attr("id", "tabs");
var tablist= $("<ul>");
tablist.append("<li id = 'tab_template'><a href='#template'>テンプレート</a></li>");
tablist.append("<li id = 'tab_is'><a href='#individual_setting'>個別設定</a></li>");
tablist.append("<li id = 'tab_css'><a href='#css_writing'>CSS記述</a></li>");
tabs.append(tablist);

//テンプレート
var template= $("<div>").attr("id", "template");
template.append("<li><button id='list1'>テンプレート１</button></li>");
template.append("<li><button id='list2'>テンプレート2</button></li>");
template.append("<li><button id='list3'>元に戻す</button></li>");
template.append("<li><button id='b1'>b1</button></li>");
tabs.append(template);

//個別設定
var i_setting= $("<div>").attr("id", "individual_setting");
i_setting.append("<p>個別設定の内容</p>");
i_setting.append("<button id='is_hide'>非表示</button>");
var slider = $("<div>").attr("id", "slider").css("width", "300px");
i_setting.append(slider);
var fontColor = $("<input>").attr("id", "fontColor").attr("type", "text");
i_setting.append(fontColor);
var backColor = $("<input>").attr("id", "backColor").attr("type", "text");
i_setting.append(backColor);
var fontList = $("<ul>").attr("id", "fontList");
var font1 = $("<li>").text("ABCDEF").css("font-family", "arial");
var font2 = $("<li>").text("ABCDEF").css("font-family", "ＭＳ ゴシック");
var font3 = $("<li>").text("ABCDEF").css("font-family", "fantasy");
var font4 = $("<li>").text("ABCDEF").css("font-family", "Meiryo");
var font5 = $("<li>").text("ABCDEF").css("font-family", "Hiragino Maru Gothic Pro");
var font6 = $("<li>").text("ABCDEF").css("font-family", "Courier New");
var font7 = $("<li>").text("ABCDEF").css("font-family", "Impact");
var font8 = $("<li>").text("ABCDEF").css("font-family", "SimSun");
fontList.append(font1, font2, font3, font4, font5, font6, font7, font8);
i_setting.append(fontList);
tabs.append(i_setting);

//CSS記述
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

$("#tabs").css({
    position: "fixed",
    "width": "100%",
    height: "34%",
    top: "65%",
    border: "solid",
    align: "center",
    margin: "0",
    overflow: "scroll",
    zIndex: 0x7FFFFFFF
});

//個別設定
var selectable = false;
var elementSelected = false;
var targetElement = null;
var prevStyle = null;

//閉じるボタン
$("#closeMenu").click(function(){
    //$("#C3S2menu").remove();
    selectable = false;
    elementSelected = false;
    $(targetElement).css("border", "");
    targetElement = null;
    $("[change!='true']").css({
	opacity: "",
	background: "",
	zIndex: ""
    });
    $("#tabs").remove();
    $("body").css("margin", "");
    //console.log($("wrapBody *").attr("style"));
});

//JQuery UI関連
$('#tabs').tabs({ heightStyle: 'auto' });

$('#slider').slider({
    min: 1,
    max: 50,
    step: 0.5,
    value: 1,
    slide: function(e, ui) {
	if (elementSelected) {
	    prevStyle = $(targetElement).attr('style');
	    $(targetElement).css({'cssText': prevStyle + 'font-size: ' +ui.value+'px !important;'});
	    //$(targetElement).css("font-size", ui.value);
	}
    }
});

//文字色変更
$('#fontColor').spectrum({
    flat: true,
    showPaletteOnly: true,
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
	if (elementSelected) {
	    prevStyle = $(targetElement).attr('style');
	    $(targetElement).css({'cssText': prevStyle + 'color: ' +fontColor+' !important;'});
	    $(targetElement).find("p").css({'cssText': prevStyle + 'color: ' +fontColor+' !important;'});
	    $(targetElement).find("p").css("border", "");
	    $(targetElement).css("border", "3px solid #ff0000");
	}
    }
});

//背景色変更
$('#backColor').spectrum({
    flat: true,
    showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
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
	if (elementSelected) {
	    prevStyle = $(targetElement).attr('style');
	    $(targetElement).find("p").css({'cssText': prevStyle + 'background-color: ' +backColor+' !important;'}).css("border", "");
	    $(targetElement).css({'cssText': prevStyle + 'background-color: ' +backColor+' !important;'}).css("border", "3px solid #ff0000");
	    $(targetElement).attr("data", backColor).attr("change", true);
	}
    }
});

//フォント変更
var style = '<style type="text/css">#fontList .ui-selected { background: #F39814; color: white; }</style>';
$(style).appendTo('head');

$('#fontList').selectable({
    stop: function(e, ui){
	$(".ui-selected:first", this).each(function() {
	    $(this).siblings().removeClass("ui-selected");
        });
	if (elementSelected) {
	    //console.log($('.ui-selected').css("font-family"));
	    //$(targetElement).css("font-family",$('.ui-selected').css("font-family"));
	    prevStyle = $(targetElement).attr('style');
	    //$(targetElement).css({'cssText':'font-family'+ $('.ui-selected').css("font-family") +'!important;'});
	    $(targetElement).css({'cssText': prevStyle + 'font-family: ' +$('.ui-selected').css("font-family")+' !important;'});
	}
    }
});

$("#fontList").css({
    listStyleType: "none",
    margin: "0",
    padding: "0",
    width: "15%"
});
$("#fontList>li").css({
    margin: "3px",
    padding: "0.4em",
    border: "solid 1px #000"
});


//テンプレート機能
var template1 = {
    'backgroundColor':'background-color: #ff0000 !important;',
    'fontSize':'font-size: 24px !important;',
    'fontWeight':'font-weight: bold !important;',
    'fontStyle':'font-style: italic !important;',
    'color':'color:  !important;'
};

var templateB1 = {
    'backgroundColor':'background-color: #000000 !important;',
    'fontSize':'font-size: 200% !important;',
    'fontWeight':'font-weight: bold !important;',
    'color':'color: #ffffff !important;',
    'link':'link: #00ffff !important;',
    'fontFamily':'font-family: ヒラギノ角ゴ Pro W3 メイリオ !important'
};

$("#list1").click(function(){
    
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	template1.fontWeight +
	template1.backgroundColor +
	template1.fontSize +
	template1.fontStyle +
	template1.color
    });
    $("#wrapBody").find("p").css({
	'cssText': prevStyle +";"+
	template1.fontWeight +
	template1.backgroundColor +
	template1.fontSize +
	template1.fontStyle +
	template1.color
    });
    
    $(":header").css({
	'cssText': prevStyle +";"+
	template1.fontWeight +
	template1.backgroundColor +
	template1.fontSize +
	template1.fontStyle +
	template1.color
    });
    
    $("#wrapBody").attr("data", "red").attr("change", true);
    
    /*
    $("#wrapBody").css("background-color", "red")
		  .css("font-size", "24px")
		  .css("font-weight", "bold")
		  .css("font-style", "italic")
		  .css("color", "")
		  .attr("data", "red").attr("change", true);
    
    
    $("#wrapBody").find("p").css("background-color", "red")
		  .css("font-size", "24px")
		  .css("font-weight", "bold")
		  .css("font-style", "italic")
		  .css("color", "");
    $(":header").css("background-color", "red")
		  .css("font-size", "24px")
		  .css("font-weight", "bold")
		  .css("font-style", "italic")
		  .css("color", "");
    */
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
		  .css("color", "yellow");
    $(":header").css("background-color", "black")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "yellow");
});

$("#b1").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateB1.backgroundColor +
	templateB1.fontSize +
	templateB1.color+
	templateB1.fontFamily 

    }).attr("change", true);
    /*
    $("#wrapBody").find("p").css({
	'cssText': prevStyle +";"+
	templateB1.backgroundColor +
	templateB1.fontSize +
	templateB1.color +
	templateB1.fontFamily
    });*/
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateB1.backgroundColor +
	    templateB1.fontSize +
	    templateB1.color +
	    templateB1.fontFamily
	}).attr("change", true);
    })
        
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateB1.backgroundColor +
	    templateB1.fontSize +
	    templateB1.color +
	    templateB1.fontFamily
	})
    })
    
    $(":header").css({
	'cssText': prevStyle +";"+
	templateB1.fontWeight +
	templateB1.backgroundColor +
	templateB1.fontSize +
	templateB1.color +
	templateB1.fontFamily
    });
    
    $("#wrapBody").attr("change", true);
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
		  .css("color", "");
    $(":header").css("background-color", "")
		.css("font-size", "")
		.css("font-weight", "")
		.css("font-style", "")
		.css("color", "");
});

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
	    var outT = eo.relatedTarget
	    var colorValue = null;
	    if ($(outT).attr("data")){
		colorValue = $(outT).attr("data");
	    }
	    if (selectable) {
		$(overT).css({
		    opacity: "0.6",
		    background: "#9ef",
		    zIndex: 0x7FFFFFFE
		});
		//console.log($(outT).filter("wrapBody"));
		if (colorValue) {
		    $(outT).filter("#wrapBody *").css({
			opacity: "",
			background: colorValue,
			zIndex: ""
		    });
		}else{
		    $(outT).filter("#wrapBody *").css({
			opacity: "",
			background: "",
			zIndex: ""
		    });
		}
	    }
	}
    );
}

//タブの切り替え時の処理
$("#tab_template, #tab_css").click(function(){
    selectable = false;
    if (elementSelected) {
	prevStyle = $(targetElement).attr('style');
	//$(targetElement).css({'cssText': prevStyle + 'border:  !important;'});
	$(targetElement).css("border", "");
    }
    $("#wrapBody [change!='true']").css({
	opacity: "",
	background: "",
	zIndex: ""
    });
});

//選択する要素の決定
$("#wrapBody").click(function(event){
    if (selectable) {
	console.log(event.target);
	if (targetElement) {
	    prevStyle = $(targetElement).attr('style');
	    //$(targetElement).css({'cssText': prevStyle + 'border:  !important;'});
	    $(targetElement).css("border", "");
	}
	targetElement = event.target;
	prevStyle = $(targetElement).attr('style');
	//$(targetElement).css({'cssText': prevStyle + 'border: 3px solid #ff0000 !important;'});
	$(targetElement).css("border", "3px solid #ff0000");
	elementSelected = true;
	//selectable = false;
	$("#wrapBody [change!='true']").css({
	    opacity: "",
	    background: "",
	    zIndex: ""
	});
    }
})

//非表示
$("#is_hide").click(function(){
    if (elementSelected) {
	prevStyle = $(targetElement).attr('style');
	$(targetElement).css({'cssText': prevStyle + 'display: none !important;'});
	//$(targetElement).hide();
    }
});

