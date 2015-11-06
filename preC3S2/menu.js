//$("body").wrapInner("<div id='wrapBody'></div>");

var tabs= $("<div>").attr("id", "tabs");
$("#tabs").load("tabs.html");
var tablist= $("<ul>");
tablist.append("<li id = 'tab_template'><a href='#template'>テンプレート</a></li>");
tablist.append("<li id = 'tab_is'><a href='#individual_setting'>個別設定</a></li>");
tablist.append("<li id = 'tab_css'><a href='#css_writing'>CSS記述</a></li>");
tabs.append(tablist);

//テンプレート
var c3s2content = $("<div>").attr("class", "container");
var template= $("<div>").attr("id", "template");
var c3s2row = $("<div>").attr("class", "row");
var blackWhite = $("<div>");
var blackYellow = $("<div>");
c3s2row.append("<div id='list1' class='col-md-2 btn btn-primary'>テンプレート１</div>");
c3s2row.append("<div id='list2' class='col-md-2 btn btn-primary'>テンプレート2</div>");
c3s2row.append("<div id='list3' class='col-md-2 btn btn-warning'>元に戻す</div>");
blackWhite.append("<div id='b1', class='col-md-2 btn btn-primary'>b1</div>");
blackWhite.append("<div id='b2' class='col-md-2 btn btn-primary'>b2</div>");
blackWhite.append("<div id='b3' class='col-md-2 btn btn-primary'>b3</div>");
blackYellow.append("<div id='b4' class='col-md-2 btn btn-primary'>b4</div>");
blackYellow.append("<div id='b5' class='col-md-2 btn btn-primary'>b5</div>");
blackYellow.append("<div id='b6' class='col-md-2 btn btn-primary'>b6</div>");
c3s2row.append("<div id='b7' class='col-md-2 btn btn-primary'>b7</div>");
c3s2row.append("<div id='b8' class='col-md-2 btn btn-primary'>b8</div>");
c3s2row.append("<div id='b9' class='col-md-2 btn btn-primary'>b9</div>");
c3s2row.append("<div id='b10' class='col-md-2 btn btn-primary'>b10</div>");
c3s2row.append("<div id='b11' class='col-md-2 btn btn-primary'>b11</div>");
c3s2row.append("<div id='b12' class='col-md-2 btn btn-primary'>b12</div>");
c3s2row.append("<div id='b13' class='col-md-2 btn btn-primary'>b13</div>");
c3s2row.append("<div id='b14' class='col-md-2 btn btn-primary'>b14</div>");
c3s2row.append("<div id='b15' class='col-md-2 btn btn-primary'>b15</div>");
c3s2row.append("<div id='b16' class='col-md-2 btn btn-primary'>b16</div>");
c3s2row.append("<div id='b17' class='col-md-2 btn btn-primary'>b17</div>");
c3s2row.append(blackYellow, blackWhite);
template.append(c3s2row);
c3s2content.append(template);
tabs.append(c3s2content);

//個別設定
var i_setting= $("<div>").attr("id", "individual_setting");
i_setting.append("<button id='is_hide'>非表示</button>");
//i_setting.append("<span>A</span>");
//var sliderwrap.append("<span>A</span>");
var slider = $("<div>").attr("id", "slider").css("width", "300px");
i_setting.append(slider);
//i_setting.append("<span>A</span>");
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
// var inputCSS= $("<textarea>").attr("id", "inputCSS")
// 			     .attr("cols", "200")
// 			     .attr("rows", "5")
// 			     .css("width", "90%")
// 			     .css("height", "40%")
// 			     .css("overflow", "auto");
var inputCSS = $("<div>").attr("id", "editor")
						 .css({
						 	width: "90%x",
						 	height: "40%",
						 	border: "solid thin"
						 });
css_writing.append(inputCSS);
css_writing.append("<button id='writingChange'>change</button>");
tabs.append(css_writing);


var closeButton= $("<button>").attr("id", "closeMenu")
			      .css("position", "absolute")
			      .css("right", "2%")
			      .css("top","3%")
			      .text("閉じる");
tabs.append(closeButton);

var removeStyle= $("<button>").attr("id", "removeStyle")
			      .css("position", "absolute")
			      .css("right", "8%")
			      .css("top","3%")
			      .text("reset");
tabs.append(removeStyle);

$("body").append(tabs);
$("body").css("margin", "0");

$("#tabs").css({
    position: "fixed",
    "width": "100%",
    height: "34%",
    top: "65%",
    border: "solid",
    // align: "center",
    margin: "0",
    overflow: "scroll",
    zIndex: 0x7FFFFFFF,
    background: ""
});

//閉じるボタン
$("#closeMenu").click(function(){
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

$("#removeStyle").click(function(){
	console.log("ok");
	window.localStorage.removeItem("c3s2");
	console.log("saved style removed");
	$(savedStyle).empty();
});

var myStyle = $("<style type='text/css'>")
$("head").append(myStyle);

var json;
var css;
if(css = window.localStorage.getItem("c3s2")){
}else{
	css = "";
}
// var css = window.localStorage.getItem("c3s2");
// var styleHead = ;
// var styleTail = '</style>';

//個別設定用変数
var selectable = false;
var elementSelected = false;
var targetElement = null;
var prevStyle = null;

// var save = function(Css, Json){
// 	Json = CSSJSON.toJSON(css);
// 	console.log("convert: CSStoJSN");
// 	console.log(JSON.parse(Json));
// 	window.localStorage.setItem("c3s2", Json);
// 	console.log("save");
// }
var save = function(Css){
	window.localStorage.setItem("c3s2", Css);
	console.log("saved:\n"+Css);
}

//JQuery UI関連
$('#tabs').tabs({
	heightStyle: 'auto',
	active: 0
});

//シンタックスハイライトするテキストエリア
var editor = ace.edit("editor");
var CssMode = ace.require("ace/mode/css").Mode;
editor.getSession().setMode(new CssMode());

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
    },
    change: function(e, ui){//スライダーの操作が終了したときに変更をローカルストレージへ保存
    	if (elementSelected) {
		    if($(targetElement).attr("id")){
		    	var fsize = '#'+$(targetElement).attr("id")+' { font-size: '+ui.value+'px; }';
				$(myStyle).html($(myStyle).html() + fsize);
				css = css + fsize+ "\n";
				console.log(css);
				save(css);
		    }

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
    move: function(color) {
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
    move: function(color) {
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
var style = '\
	<style type="text/css">\n\
		#fontList .ui-selected { background: #F39814; color: white; }\n\
		#fontList { margin; 0; padding: 0; width: 15%; list-style: none !important; }\n\
		#fontList>li { margin: 3px; padding: 0.4em; border: solid 1px #000; list-style: none !important; }\n\
	</style>';
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

// $("#fontList").css({"cssText": "margin: 0; padding: 0; width: 15%; list-style: none !important;"});
// $("#fontList>li").css({"cssText": "margin: 3px; padding: 0.4em; border: solid 1px #000; list-style: none !important;"});

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
    /*
    if (elementSelected) {
	prevStyle = $(targetElement).attr('style');
	//$(targetElement).css({'cssText': prevStyle + 'border:  !important;'});
	$(targetElement).css("border", "");
    }*/
    $(targetElement).css("border", "");
    $("#wrapBody [change!='true']").css({
	opacity: "",
	background: "",
	zIndex: ""
    });
    $("#wrapBody [change='true']").filter(function(){
	$(this).css("backgroundColor") == "#92f"
    }).css({
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
//css記述
$("#writingChange").click(function(){
	var text = editor.getValue();
	console.log(text);
	$(myStyle).html($(myStyle).html() + text);
	css = css + text+ "\n";
	console.log(css);
	save(css);
});

//テンプレート機能
var link_style = ''
var template1 = {
    'backgroundColor':'background-color: #ff0000 !important;',
    'fontSize':'font-size: 24px !important;',
    'fontWeight':'font-weight: bold !important;',
    'fontStyle':'font-style: italic !important;',
    'color':'color:  !important;'
};

var templateBan = {
    'backBlack':'background-color: #000000 !important;',
    'backWhite':'background-color: #ffffff !important;',
    'backNavy':'background-color: #000080 !important;',
    'fontSize100':'font-size: 100% !important;',
    'fontSize150':'font-size: 150% !important;',
    'fontSize200':'font-size: 200% !important;',
    'fontWeight':'font-weight: bold !important;',
    'colorWhite':'color: #ffffff !important;',
    'colorYellow':'color: #ffff00 !important;',
    'colorBlack':'color: #000000 !important;',
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
	templateBan.backBlack +
	templateBan.fontSize150 +
	templateBan.colorWhite+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b2").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backBlack +
	templateBan.fontSize200+
	templateBan.colorWhite+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b3").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backBlack +
	templateBan.fontSize100 +
	templateBan.colorWhite+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b4").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backBlack +
	templateBan.fontSize150 +
	templateBan.colorYellow+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b5").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backBlack +
	templateBan.fontSize200+
	templateBan.colorYellow+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b6").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backBlack +
	templateBan.fontSize100 +
	templateBan.colorYellow+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backBlack +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b7").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backWhite +
	templateBan.fontSize150 +
	templateBan.colorBlcak+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize150 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize150 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backWhite +
	    templateBan.fontSize150 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize150 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize150 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b8").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backWhite +
	templateBan.fontSize200+
	templateBan.colorBlcak+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize200 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize200 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backWhite +
	    templateBan.fontSize200 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize200 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize200 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b9").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backWhite +
	templateBan.fontSize100 +
	templateBan.colorBlcak+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize100 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize100 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backWhite +
	    templateBan.fontSize100 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize100 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backWhite +
	    templateBan.fontSize100 +
	    templateBan.colorBlcak +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b10").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backNavy +
	templateBan.fontSize150 +
	templateBan.colorYellow+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b11").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backNavy +
	templateBan.fontSize200+
	templateBan.colorYellow+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b12").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backNavy +
	templateBan.fontSize100 +
	templateBan.colorYellow+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backNavy +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize100 +
	    templateBan.colorYellow +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b13").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.fontSize150 +
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize150 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize150 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.fontSize150 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize150 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize150 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b14").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.fontSize200 +
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize200 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize200 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.fontSize200 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize200 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontSize200 +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b15").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backNavy +
	templateBan.fontSize150 +
	templateBan.colorWhite+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize150 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b16").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backNavy +
	templateBan.fontSize200+
	templateBan.colorWhite+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.fontSize200 +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

$("#b17").click(function(){
    prevStyle = $("#wrapBody").attr('style');
    $("#wrapBody").css({
	'cssText': prevStyle +";"+
	templateBan.backNavy +
	templateBan.colorWhite+
	templateBan.fontFamily

    }).attr("change", true);
    $("#wrapBody").find("p").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("ul").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $(":header").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.fontWeight +
	    templateBan.backNavy +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("table").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
    $("#wrapBody").find("section").each(function(){
	prevStyle = $(this).attr("style")
	$(this).css({'cssText': prevStyle +";"+
	    templateBan.backNavy +
	    templateBan.colorWhite +
	    templateBan.fontFamily
	}).attr("change", true);
    })
});

//元に戻す
$("#list3").click(function(){
    $("#wrapBody").css("background-color", "")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "")
		  .css("font-family", "")
		  .attr("change", false);
    $("#wrapBody").find("p").css("background-color", "")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "")
		  .css("font-family", "")
		  .attr("change", false);
	$("#wrapBody").find("span").css("background-color", "")
		  .css("font-size", "")
		  .css("font-weight", "")
		  .css("font-style", "")
		  .css("color", "")
		  .css("font-family", "")
		  .attr("change", false);
    $(":header").each(function(){
    	$(this).css("background-color", "")
		    .css("font-size", "")
		    .css("font-weight", "")
		    .css("font-style", "")
		    .css("color", "")
		    .css("font-family", "")
		    .attr("change", false);
	})
	$("#wrapBody").find("table").each(function(){
		$(this).css("background-color", "")
			.css("font-size", "")
			.css("font-weight", "")
			.css("font-style", "")
			.css("color", "")
			.css("font-family", "")
			.attr("change", false);
	})
	$("#wrapBody").find("ul").each(function(){
		$(this).css("background-color", "")
			.css("font-size", "")
			.css("font-weight", "")
			.css("font-style", "")
			.css("color", "")
			.css("font-family", "")
			.attr("change", false);
	})
	$("#wrapBody").find("section").each(function(){
		$(this).css("background-color", "")
			.css("font-size", "")
			.css("font-weight", "")
			.css("font-style", "")
			.css("color", "")
			.css("font-family", "")
			.attr("change", false);
	})
});


