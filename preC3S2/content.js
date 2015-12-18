$(function(){
	$("body").wrapInner("<div id='wrapBody'></div>");
	var savedCSS = null;
	var savedTemplate = null;
	var savedStyle = null;
	myStyle = $("<style id='myStyle' 'type='text/css'>");
	myTemplate = $("<style id='myTemplate' type='text/css'>");
	$("head").append(myTemplate);
	$("head").append(myStyle);
	var option = null;
	chrome.storage.local.get("c3s2Option", function(result){
  	console.log(result.c3s2Option);
  	option = result.c3s2Option;
  	$(myTemplate).html(option);

		savedTemplate = window.localStorage.getItem("c3s2Template");
		savedCSS = window.localStorage.getItem("c3s2");
		savedStyle = window.localStorage.getItem("c3s2Style");
		var dif = 2;
		console.log("elemCount: "+$("*").length);
		if(savedTemplate){
			$(myTemplate).html(savedTemplate);
			console.log("Saved Template applied");
			dif++;
		}
		if(savedCSS){
			$(myStyle).html(savedCSS);
			console.log("Saved Style applied");
			dif++;
		}
		if(savedStyle){
			var style = JSON.parse(savedStyle)
			console.log($.type(style));
			console.log(style);

			for(var i in style){
				console.log(style[i]);
				console.log(style[i].idx);
				console.log(style[i].type);
				console.log(style[i].css);
				var prev = style[i].idx-dif;
				switch (style[i].type){
					case "fsize":
						console.log("prev:"+$.type(prev));
						console.log($("prev_*:eq("+prev+")"));
						console.log($("*:eq("+style[i].idx+")"));
						// $("*:eq("+style[i].idx+")").css("font-size", style[i].css);
						$("*:eq("+prev+")").css("font-size", style[i].css).attr("c3s2_fsize",true);
						// $("*:eq("+style[i].idx+")").children().css("font-size", style[i].css);
						//$("*:eq("+style[i].idx+")").siblings().children().css("font-size", style[i].css);
						console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: font-size "+style[i].css);
						break;
					case "fcolor":
						console.log("prev:"+$.type(prev));
						console.log($("*:eq("+prev+")"));
						console.log($("*:eq("+style[i].idx+")"));
						$("*:eq("+prev+")").css("color", style[i].css).attr("c3s2_fcolor",true);
						$("*:eq("+prev+")").find("p").css("color", style[i].css).attr("c3s2_fcolor",true);
						console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: color "+style[i].css);
						break;
					case "bcolor":
						console.log("prev:"+$.type(prev));
						console.log($("*:eq("+prev+")"));
						console.log($("*:eq("+style[i].idx+")"));
						$("*:eq("+prev+")").css("backgroundColor", style[i].css).attr("data", style[i].css).attr("change", true).attr("c3s2_bcolor",true);
						$("*:eq("+prev+")").find("p").css("background-color", style[i].css).attr("data", style[i].css).attr("change", true).attr("c3s2_bcolor",true);
						console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: background-color "+style[i].css);
						break;
					case "ffamily":
						console.log("prev:"+$.type(prev));
						console.log($("*:eq("+prev+")"));
						console.log($("*:eq("+style[i].idx+")"));
						$("*:eq("+prev+")").css("font-family", style[i].css).attr("c3s2_ffamily",true);
						console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: font-family "+style[i].css);
						break;
					case "hide":
						console.log("prev:"+$.type(prev));
						console.log($("*:eq("+prev+")"));
						console.log($("*:eq("+style[i].idx+")"));
						$("*:eq("+prev+")").css("display", style[i].css).attr("c3s2_hide",true);
						console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: display "+style[i].css);
						break;
				}
			}
		}
	});
	if(!(savedCSS || savedTemplate || savedStyle)){
		if(option){
			console.log("Default Template applied");
		}else{
			console.log("Saved Style or Template is nothing or Failed loading");
		}
	}

	// shortcut.add("Shift+Enter", function(){
	// 	console.log("shortcut");
	// });

});
