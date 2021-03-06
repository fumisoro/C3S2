
var tabs= $("<div>").attr("id", "tabs");
var tablist= $("<ul>");
tablist.append("<li id = 'tab_template'><a href='#template'>テンプレート</a></li>");
tablist.append("<li id = 'tab_is'><a href='#individual_setting'>個別設定</a></li>");
tablist.append("<li id = 'tab_css'><a href='#css_writing'>CSS記述</a></li>");
tabs.append(tablist);

//テンプレート
var c3s2content = $("<div>").attr("class", "container");
var template= $("<div>").attr("id", "template");
var c3s2row = $("<div>").attr("class", "row");
// btn-groupの命名規約 {背景色}{文字色} または {機能}
var blackWhite = $("<div class='btn-group btn-group-lg col-md-12 well'>").html("<p>背景色黒 文字色白<p>").css({color: "#ffaa00", "font-size": "120%"});
var blackYellow = $("<div class='btn-group btn-group-lg col-md-12 well'>").html("<p>背景色黒 文字色黄<p>").css({color: "#ffaa00", "font-size": "120%"});
var whiteYellow = $("<div class='btn-group btn-group-lg col-md-12 well'>").html("<p>背景色白 文字色黄<p>").css({color: "#ffaa00", "font-size": "120%"});
var blueYellow = $("<div class='btn-group btn-group-lg col-md-12 well'>").html("<p>背景色青 文字色黄<p>").css({color: "#ffaa00", "font-size": "120%"});
var blueWhite = $("<div class='btn-group btn-group-lg col-md-12 well'>").html("<p>背景色青 文字色白<p>").css({color: "#ffaa00", "font-size": "120%"});
var fontsizeChanger = $("<div class='btn-group btn-group-lg col-md-12 well'>").html("<p>フォントサイズの一括変更<p>").css({color: "#ffaa00", "font-size": "120%"});
// c3s2row.append("<div id='list1' class='col-md-4 btn btn-primary'>テンプレート１</div>");
// c3s2row.append("<div id='list2' class='col-md-4 btn btn-primary'>テンプレート2</div>");
c3s2row.append("<div id='list3' class='col-md-4 btn btn-warning'>元に戻す</div>");
blackWhite.append("<div id='b1', class='col-md-4 btn btn-primary'>150%</div>");
blackWhite.append("<div id='b2' class='col-md-4 btn btn-primary'>200%</div>");
blackWhite.append("<div id='b3' class='col-md-4 btn btn-primary'>100%</div>");
blackYellow.append("<div id='b4' class='col-md-4 btn btn-primary'>150%</div>");
blackYellow.append("<div id='b5' class='col-md-4 btn btn-primary'>200%</div>");
blackYellow.append("<div id='b6' class='col-md-4 btn btn-primary'>100%</div>");
whiteYellow.append("<div id='b7' class='col-md-4 btn btn-primary'>150%</div>");
whiteYellow.append("<div id='b8' class='col-md-4 btn btn-primary'>200%</div>");
whiteYellow.append("<div id='b9' class='col-md-4 btn btn-primary'>100%</div>");
blueYellow.append("<div id='b10' class='col-md-4 btn btn-primary'>150%</div>");
blueYellow.append("<div id='b11' class='col-md-4 btn btn-primary'>200%</div>");
blueYellow.append("<div id='b12' class='col-md-4 btn btn-primary'>100%</div>");
fontsizeChanger.append("<div id='b13' class='col-md-4 btn btn-primary'>150%</div>");
fontsizeChanger.append("<div id='b14' class='col-md-4 btn btn-primary'>200%</div>");
blueWhite.append("<div id='b15' class='col-md-4 btn btn-primary'>150%</div>");
blueWhite.append("<div id='b16' class='col-md-4 btn btn-primary'>200%</div>");
blueWhite.append("<div id='b17' class='col-md-4 btn btn-primary'>100%</div>");
c3s2row.append(blackWhite, blackYellow, whiteYellow, blueYellow, blueWhite, fontsizeChanger);
template.append(c3s2row);
c3s2content.append(template);
tabs.append(c3s2content);

//個別設定
var i_setting= $("<div>").attr("id", "individual_setting");
i_setting.append("<button id='is_hide'>非表示</button>").css("color", "black");
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
var font1 = $("<li>").text("ABCDEF").css("font-family", "MS Gothic");
var font2 = $("<li>").text("ABCDEF").css("font-family", "Meiryo");
var font3 = $("<li>").text("ABCDEF").css("font-family", "Hiragino Kaku Gothic ProN W3");
// var font4 = $("<li>").text("ABCDEF").css("font-family", "小塚ゴシック");
// var font5 = $("<li>").text("ABCDEF").css("font-family", "源ノ角ゴシック");
var font6 = $("<li>").text("ABCDEF").css("font-family", "Helvetica");
var font7 = $("<li>").text("ABCDEF").css("font-family", "Gill Sans");
fontList.append(font1, font2, font3, font6, font7);
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
						 	height: "25%",
						 	border: "solid thin"
						 });
css_writing.append(inputCSS);
css_writing.append("<button id='writingChange'>change</button>").css("color", "black");
tabs.append(css_writing);


var closeButton= $("<button>").attr("id", "closeMenu")
			      .css("position", "absolute")
			      .css("right", "2%")
			      .css("top","3%")
            .css("color", "black")
			      .text("閉じる");
tabs.append(closeButton);

var removeStyle= $("<button>").attr("id", "removeStyle")
			      .css("position", "absolute")
			      .css("right", "8%")
			      .css("top","3%")
            .css("color", "black")
			      .text("reset");
tabs.append(removeStyle);

$("body").append(tabs);
$("body").css("margin", "0");

$("#tabs").css({
    position: "fixed",
    width: "100%",
    height: "35%",
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

//保存したスタイルを破棄
$("#removeStyle").click(function(){
	console.log("ok");
	window.localStorage.removeItem("c3s2");
	window.localStorage.removeItem("c3s2Template")
	window.localStorage.removeItem("c3s2Style");
	console.log("saved style removed");
	$(myStyle).empty();
	$(myTemplate).empty();
	$("#wrapBody [c3s2_fsize='true']").css("font-size", "").attr("c3s2_fsize", false);
	$("#wrapBody [c3s2_fcolor='true']").css("color", "").attr("c3s2_fcolor", false);
	$("#wrapBody [c3s2_bcolor='true']").css("background-color", "").removeAttr("data").attr("c3s2_bcolor", false);
	$("#wrapBody [c3s2_ffamily='true']").css("font-family", "").attr("c3s2_ffamily", false);
	$("#wrapBody [c3s2_hide='true']").css("display", "").attr("c3s2_hide", false);
});

var css;
if(css = window.localStorage.getItem("c3s2")){
}else{
	css = "";
}

var tempCSS;
if(tempCSS = window.localStorage.getItem("c3s2Template")){
}else{
	tempCSS = "";
}

var i_style = new Array();
var i_styleJson = null;
if(i_styleJson = window.localStorage.getItem("c3s2Style")){
	console.log("i_styleJson:"+$.type(i_styleJson)+"\n"+i_styleJson);
	i_style = JSON.parse(i_styleJson);
}
//console.log("i_style: "+i_style);

// i_style = JSON.parse(window.localStorage.getItem("c3s2Style"));
console.log("i_style:"+$.type(i_style));

//個別設定用変数
var selectable = false;
var elementSelected = false;
var targetElement = null;
var prevStyle = null;

//個別設定・CSS記述での変更を保存
var save = function(Css){
	window.localStorage.setItem("c3s2", Css);
	console.log("saved:\n"+Css);
}

var saveStyle = function(array){
	// var obj = {idx:idx, type:type, css:Css} ;
	// console.log(obj);
	// i_style.push(obj);
	// console.log(i_style);
	// var json = JSON.stringify(i_style);
	var json = JSON.stringify(array);
	window.localStorage.setItem("c3s2Style", json);
	console.log("saved style:\n"+json);
	console.log($.type(json))
}

//JQuery UI tabsウィジェット
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
        $(targetElement).attr("c3s2_fsize", true)
		    if($(targetElement).attr("id")){
		    	var fsize = '#'+$(targetElement).attr("id")+' { font-size: '+ui.value+'px; }\n';
				$(myStyle).html($(myStyle).html() + fsize);
				css = css + fsize;
				console.log(css);
				save(css);
		    }else{
		  //   	var fsize = checkTarget(targetElement) +' { font-size: '+ui.value+'px; }\n';
		  //   	$(myStyle).html($(myStyle).html() + fsize);
				// css = css + fsize;
				// console.log(css);
				// save(css);
				var index = $("*").index(targetElement);
				var obj = {idx:index, type:"fsize", css:ui.value} ;
				console.log(obj);
				i_style.push(obj);
				console.log(i_style);
				saveStyle(i_style);
				// saveStyle(index, "fsize", ui.value);
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
		    $(targetElement).find("p").css("border", "").attr("c3s2_fcolor", true);
		    $(targetElement).css("border", "3px solid #ff0000").attr("c3s2_fcolor", true);
		    if($(targetElement).attr("id")){
		    	var id = $(targetElement).attr("id")
		    	var fcolor = "\
		    		#"+id+" {color: "+fontColor+";}\n\
		    		#"+id+" p {color: "+fontColor+";}\n"
		    	$(myStyle).html($(myStyle).html() + fcolor);
  				css = css + fcolor;
  				console.log(css);
  				save(css);
		    }else{
		  //   	var fcolor = "\
		  //   		"+checkTarget(targetElement)+" { color: "+fontColor+"; }\n\
		  //   		"+checkTarget(targetElement)+" p { color: "+fontColor+"; }\n";
		  //   	$(myStyle).html($(myStyle).html() + fcolor);
				// css = css + fcolor;
				// console.log(css);
				// save(css);
				var index = $("*").index(targetElement);
				var obj = {idx:index, type:"fcolor", css:fontColor} ;
				console.log(obj);
				i_style.push(obj);
				console.log(i_style);
				saveStyle(i_style);
		    }


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
		    $(targetElement).attr("data", backColor).attr("change", true).attr("c3s2_bcolor", true);
		    $(targetElement).find("p").attr("data", backColor).attr("change", true).attr("c3s2_bcolor", true);
		    if($(targetElement).attr("id")){
		    	var id = $(targetElement).attr("id");
		    	var bcolor = "\
		    		#"+id+" {background-color: "+backColor+";}\n\
		    		#"+id+" p {background-color: "+backColor+";}\n"
		    	$(myStyle).html($(myStyle).html() + bcolor);
				css = css + bcolor;
				console.log(css);
				save(css);
		    }else{
		    	var index = $("*").index(targetElement);
				var obj = {idx:index, type:"bcolor", css:backColor} ;
				console.log(obj);
				i_style.push(obj);
				console.log(i_style);
				saveStyle(i_style);
		    }
		}
    }
});

//フォント変更
var style = '\
	<style id="fontlist" type="text/css">\n\
		#fontList .ui-selected { background: #F39814; color: white; }\n\
		#fontList { margin; 0; padding: 0; width: 15%; list-style: none !important; }\n\
		#fontList>li { margin: 3px; padding: 0.4em; border: solid 1px #fff; color: white; list-style: none !important; }\n\
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
        $(targetElement).attr("c3s2_ffamily", true)
		    if($(targetElement).attr("id")){
				var id = $(targetElement).attr("id");
		    	var ffamily = "#"+id+" {font-family: "+$('.ui-selected').css("font-family")+";}\n";
		    	$(myStyle).html($(myStyle).html() + ffamily);
				css = css + ffamily;
				console.log(css);
				save(css);
			}else{
				var index = $("*").index(targetElement);
				var obj = {idx:index, type:"ffamily", css:$('.ui-selected').css("font-family")} ;
				console.log(obj);
				i_style.push(obj);
				console.log(i_style);
				saveStyle(i_style);
			}
		}
    }
});

//alert($.fn.jquery);
// $("#tabs").addClass("c3s2");
// $("#tabs *").each(function(){
// 	$(this).addClass("c3s2");
// })

//非表示
$("#is_hide").click(function(){
    if (elementSelected) {
		prevStyle = $(targetElement).attr('style');
		$(targetElement).css({'cssText': prevStyle + 'display: none !important;'});
    $(targetElement).attr("c3s2_hide", true)
		if($(targetElement).attr("id")){
			var id = $(targetElement).attr("id");
	    	var hide = "#"+id+" {display: none;}\n";
	    	$(myStyle).html($(myStyle).html() + hide);
			css = css + hide;
			console.log(css);
			save(css);
		}else{
			var index = $("*").index(targetElement);
			var obj = {idx:index, type:"hide", css:"none"} ;
			console.log(obj);
			i_style.push(obj);
			console.log(i_style);
			saveStyle(i_style);
		}
    }
});

//要素の選択
var overT;
$("#tab_is").click(function(){
    selectable = true;
    console.log("elemCount: "+$("*").length);
    console.log("elemCount_#tabs *: "+$("#tabs *").length);
    console.log("elemCount_#tabs: "+$("#tabs").length);
    if (selectable) {
	select();
    }
});

var select = function(){
    $("#wrapBody *").mouseover(function(eo) {
    //$("body:not(#tabs *)").mouseover(function(eo) {
    	overT = eo.target;
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
		    //$(outT).not("#tabs *").css({
				opacity: "",
				background: colorValue,
				zIndex: ""
		    });
		}else{
		    $(outT).filter("#wrapBody *").css({
		    // $(outT).not("#tabs *").css({
				opacity: "",
				background: "",
				zIndex: ""
		    });
		}
	    }
	});
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
    // $("[change!='true']").not("#tabs *").css({
		opacity: "",
		background: "",
		zIndex: ""
    });
    var data = null;
	$("#wrapBody [change='true']").each(function(){
		if(($(this).css("backgroundColor") == "#92f") || ($(this).css("backgroundColor") == "rgb(153, 238, 255)")){
			console.log($(this));
			data = $(this).attr("data")
			$(this).css({
				opacity: "",
				background: data,
				zIndex: ""
			});
		}
	})

 //    $("#wrapBody [change='true']").filter(function(){
 //    // $("[change='true']").not("#tabs *").filter(function(){
	// 	$(this).css("backgroundColor") == "#92f"
	// 	console.log($(this).attr("data"));
	// 	data = $(this).attr("data")
	// }).each(function(){
	// 	console.log($(this));
	// 	$(this).css({
	// 		opacity: "",
	// 		background: data,
	// 		zIndex: ""
	// 	});
	//  }).css({
	// 	opacity: "",
	// 	background: data,
	// 	zIndex: ""
	// });
});

//選択する要素の決定
$("#wrapBody").click(function(event){
// $("body:not(#tabs *)").click(function(event){
	if(!$(this).hasClass("c3s2")){
	    if (selectable) {
			console.log(event.target);
			if (targetElement) {
			    prevStyle = $(targetElement).attr('style');
			    //$(targetElement).css({'cssText': prevStyle + 'border:  !important;'});
			    $(targetElement).css("border", "");
			}
			// targetElement = event.target;
			targetElement = overT;
			prevStyle = $(targetElement).attr('style');
			//$(targetElement).css({'cssText': prevStyle + 'border: 3px solid #ff0000 !important;'});
			$(targetElement).css("border", "3px solid #ff0000");
			elementSelected = true;
			//selectable = false;
			$("#wrapBody [change!='true']").css({
			// $("[change!='true']").not("#tabs *").css({
			    opacity: "",
			    background: "",
			    zIndex: ""
			});
	    }
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
var saveTemplate = function(Css){
	window.localStorage.setItem("c3s2Template", Css);
	console.log("Template saved:\n"+Css);
};

var tempChange = function(back, size, color, link, visit){
	window.localStorage.removeItem("c3s2");
	$(myStyle).empty();
	window.localStorage.removeItem("c3s2Style");
	$("#wrapBody [c3s2_fsize='true']").css("font-size", "").attr("c3s2_fsize", false);
	$("#wrapBody [c3s2_fcolor='true']").css("color", "").attr("c3s2_fcolor", false);
	$("#wrapBody [c3s2_bcolor='true']").css("background-color", "").removeAttr("data").attr("c3s2_bcolor", false);
	$("#wrapBody [c3s2_ffamily='true']").css("font-family", "").attr("c3s2_ffamily", false);
	$("#wrapBody [c3s2_hide='true']").css("display", "").attr("c3s2_hide", false);
	var templateCSS = "\
			 #wrapBody { background-color: "+back+";\n\
			 			 font-size: "+size+";\n\
			 			 color: "+color+";\n\
			 			 font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody p { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody td { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody ul { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody span { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody table { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody section { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody h1,h2,h3,h4,h5,h6 { font-weight: bold;\n\
			                               color: "+color+";\n\
			                           }\n\
			 #wrapBody a:link { color: "+link+";\n\
                          text-decoration: underline;}\n\
			 #wrapBody a:visited { color: "+visit+"}\n\
                             text-decoration: underline;}\n";
	$(myTemplate).empty();
	$(myTemplate).html(templateCSS);
	tempCSS = templateCSS;
	console.log(tempCSS);
	saveTemplate(tempCSS);
	$("#wrapBody").find("p").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("td").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("ul").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("span").each(function(){
		$(this).attr("change", true);
	})
	$("#wrapBody").find("table").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("section").each(function(){
		$(this).attr("change", true);
	});
	$(":header").each(function(){
		$(this).attr("change", true);
	});
}

var tempChangeB7_9 = function(back, size, color){
	window.localStorage.removeItem("c3s2");
	$(myStyle).empty();
	window.localStorage.removeItem("c3s2Style");
	$("#wrapBody [c3s2_fsize='true']").css("font-size", "").attr("c3s2_fsize", false);
	$("#wrapBody [c3s2_fcolor='true']").css("color", "").attr("c3s2_fcolor", false);
	$("#wrapBody [c3s2_bcolor='true']").css("background-color", "").removeAttr("data").attr("c3s2_bcolor", false);
	$("#wrapBody [c3s2_ffamily='true']").css("font-family", "").attr("c3s2_ffamily", false);
	$("#wrapBody [c3s2_hide='true']").css("display", "").attr("c3s2_hide", false);
	var templateCSS = "\
			 #wrapBody { background-color: "+back+";\n\
			 			 font-size: "+size+";\n\
			 			 color: "+color+";\n\
			 			 font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody p { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody td { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody ul { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody span { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody table { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody section { background-color: "+back+";\n\
			 			   font-size: "+size+";\n\
			 			   color: "+color+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody h1,h2,h3,h4,h5,h6 { font-weight: bold;\n\
			                               color: "+color+";\n\
			                           }\n\
       #wrapBody a:link { text-decoration: underline;}\n\
       #wrapBody a:visited { text-decoration: underline;}\n";
	$(myTemplate).empty();
	$(myTemplate).html(templateCSS);
	tempCSS = templateCSS;
	console.log(tempCSS);
	saveTemplate(tempCSS);
	$("#wrapBody").find("p").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("td").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("ul").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("span").each(function(){
		$(this).attr("change", true);
	})
	$("#wrapBody").find("table").each(function(){
		$(this).attr("change", true);
	});
	$("#wrapBody").find("section").each(function(){
		$(this).attr("change", true);
	});
	$(":header").each(function(){
		$(this).attr("change", true);
	});
}

var tempChangeB13_14 = function(size){
	window.localStorage.removeItem("c3s2");
	$(myStyle).empty();
	window.localStorage.removeItem("c3s2Style");
	$("#wrapBody [c3s2_fsize='true']").css("font-size", "").attr("c3s2_fsize", false);
	$("#wrapBody [c3s2_fcolor='true']").css("color", "").attr("c3s2_fcolor", false);
	$("#wrapBody [c3s2_bcolor='true']").css("background-color", "").removeAttr("data").attr("c3s2_bcolor", false);
	$("#wrapBody [c3s2_ffamily='true']").css("font-family", "").attr("c3s2_ffamily", false);
	$("#wrapBody [c3s2_hide='true']").css("display", "").attr("c3s2_hide", false);
	var templateCSS = "\
			 #wrapBody { font-size: "+size+";\n\
			 			 font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody p { font-size: "+size+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody td { font-size: "+size+";\n\
			 			   font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody ul { font-size: "+size+";\n\
			 			    font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody span { font-size: "+size+";\n\
			 			      font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody table { font-size: "+size+";\n\
			 			       font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody section { font-size: "+size+";\n\
			 			         font-family: ヒラギノ角ゴ Pro W3 メイリオ;\n\
			 			}\n\
			 #wrapBody h1,h2,h3,h4,h5,h6 { font-weight: bold;}\n\
       #wrapBody a:link { text-decoration: underline;}\n\
       #wrapBody a:visited { text-decoration: underline;}\n";
	$(myTemplate).empty();
	$(myTemplate).html(templateCSS);
	tempCSS = templateCSS;
	console.log(tempCSS);
	saveTemplate(tempCSS);
	$("#wrapBody").find("p").each(function(){
		$(this).attr("change", false);
	});
	$("#wrapBody").find("td").each(function(){
		$(this).attr("change", false);
	});
	$("#wrapBody").find("ul").each(function(){
		$(this).attr("change", false);
	});
	$("#wrapBody").find("span").each(function(){
		$(this).attr("change", false);
	})
	$("#wrapBody").find("table").each(function(){
		$(this).attr("change", false);
	});
	$("#wrapBody").find("section").each(function(){
		$(this).attr("change", false);
	});
	$(":header").each(function(){
		$(this).attr("change", false);
	});
}

$("#b1").click(function() {
	tempChange("black", "150%", "white", "HotPink", "green");
});

$("#b2").click(function(){
	tempChange("black", "200%", "white", "HotPink", "green");
});

$("#b3").click(function(){
    tempChange("black", "100%", "white", "HotPink", "green");
});

$("#b4").click(function(){
	tempChange("black", "150%", "yellow", "fuchsia", "red");
});

$("#b5").click(function(){
	tempChange("black", "200%", "yellow", "fuchsia", "red");
});

$("#b6").click(function(){
	tempChange("black", "100%", "yellow", "fuchsia", "red");
});

$("#b7").click(function(){
	tempChangeB7_9("white", "150%", "yellow");
});

$("#b8").click(function(){
	tempChangeB7_9("white", "200%", "yellow");
});

$("#b9").click(function(){
	tempChangeB7_9("white", "100%", "yellow");
});

$("#b10").click(function(){
	tempChange("navy", "150%", "yellow", "fuchsia", "red");
});

$("#b11").click(function(){
	tempChange("navy", "200%", "yellow", "fuchsia", "red");
});

$("#b12").click(function(){
	tempChange("navy", "100%", "yellow", "fuchsia", "red");
});

$("#b13").click(function(){
	tempChangeB13_14("150%");
});

$("#b14").click(function(){
	tempChangeB13_14("200%");
});

$("#b15").click(function(){
	tempChange("navy", "150%", "white", "fuchsia", "red");
});

$("#b16").click(function(){
	tempChange("navy", "200%", "white", "fuchsia", "red");
});

$("#b17").click(function(){
	tempChange("navy", "100%", "white", "fuchsia", "red");
});

//元に戻す
$("#list3").click(function(){
	window.localStorage.removeItem("c3s2");
	$(myStyle).empty();
	window.localStorage.removeItem("c3s2Style");
	$("#wrapBody [c3s2_fsize='true']").css("font-size", "").attr("c3s2_fsize", false);
	$("#wrapBody [c3s2_fcolor='true']").css("color", "").attr("c3s2_fcolor", false);
	$("#wrapBody [c3s2_bcolor='true']").css("background-color", "").removeAttr("data").attr("c3s2_bcolor", false);
	$("#wrapBody [c3s2_ffamily='true']").css("font-family", "").attr("c3s2_ffamily", false);
	$("#wrapBody [c3s2_hide='true']").css("display", "").attr("c3s2_hide", false);
	$(myTemplate).empty();
	tempCSS = "";
	console.log("reset template");
	saveTemplate("");
    $("#wrapBody").attr("change", false);
    $("#wrapBody").find("p").each(function(){
    	$(this).attr("change", false);
	});
	$("#wrapBody").find("td").each(function(){
    	$(this).attr("change", false);
	});
	$("#wrapBody").find("a").each(function(){
		$(this).attr("change", false);
	});
	$("#wrapBody").find("span").each(function(){
		$(this).attr("change", false);
	});
    $(":header").each(function(){
    	$(this).attr("change", false);
	});
	$("#wrapBody").find("table").each(function(){
		$(this).attr("change", false);
	});
	$("#wrapBody").find("ul").each(function(){
		$(this).attr("change", false);
	});
	$("#wrapBody").find("section").each(function(){
		$(this).attr("change", false);
	});
});