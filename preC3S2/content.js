$(function(){
	$("body").wrapInner("<div id='wrapBody'></div>");
	//alert("ok");
	//if(window.localStorage){
	var savedCSS = null;
	var savedTemplate = null
	myStyle = $("<style id='myStyle' 'type='text/css'>");
	myTemplate = $("<style id='myTemplate' type='text/css'>");
	$("head").append(myStyle);
	$("head").append(myTemplate);
	savedTemplate = window.localStorage.getItem("c3s2Template");
	savedCSS = window.localStorage.getItem("c3s2");
	var savedStyle = window.localStorage.getItem("c3s2Style");
	if(savedTemplate){
		$(myTemplate).html(savedTemplate);
		console.log("Saved Template applied");
	}	
	if(savedCSS){
		$(myStyle).html(savedCSS);
		console.log("Saved Style applied");
	}
	if(savedStyle){
		var style = JSON.parse(savedStyle)
		console.log($.type(style));
		console.log(style);
		// console.log(style.toSource());
		for(var i in style){
			console.log(style[i]);
			console.log(style[i].idx);
			console.log(style[i].type);
			console.log(style[i].css);
			switch (style[i].type){
				case "fsize":
					var prev = style[i].idx-2;
					console.log("prev:"+$.type(prev));
					console.log($("*:eq("+prev+")"));
					console.log($("*:eq("+style[i].idx+")"));
					// $("*:eq("+style[i].idx+")").css("font-size", style[i].css);
					$("*:eq("+prev+")").css("font-size", style[i].css).attr("c3s2_fsize",true);
					// $("*:eq("+style[i].idx+")").children().css("font-size", style[i].css);
					//$("*:eq("+style[i].idx+")").siblings().children().css("font-size", style[i].css);
					console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: font-size "+style[i].css);
					break;
				case "fcolor":
					var prev = style[i].idx-2;
					console.log("prev:"+$.type(prev));
					console.log($("*:eq("+prev+")"));
					console.log($("*:eq("+style[i].idx+")"));
					$("*:eq("+prev+")").css("color", style[i].css).attr("c3s2_fcolor",true);
					$("*:eq("+prev+")").find("p").css("color", style[i].css).attr("c3s2_fcolor",true);
					console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: color "+style[i].css);
					break;
				case "bcolor":
					var prev = style[i].idx-2;
					console.log("prev:"+$.type(prev));
					console.log($("*:eq("+prev+")"));
					console.log($("*:eq("+style[i].idx+")"));
					$("*:eq("+prev+")").css("backgroundColor", style[i].css).attr("c3s2_bcolor",true);
					$("*:eq("+prev+")").find("p").css("background-color", style[i].css).attr("c3s2_bcolor",true);
					console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: background-color "+style[i].css);
					break;
				case "ffamily":
					var prev = style[i].idx-2;
					console.log("prev:"+$.type(prev));
					console.log($("*:eq("+prev+")"));
					console.log($("*:eq("+style[i].idx+")"));
					$("*:eq("+prev+")").css("font-family", style[i].css).attr("c3s2_ffamily",true);
					console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: font-family "+style[i].css);
					break;
				case "hide":
					var prev = style[i].idx-2;
					console.log("prev:"+$.type(prev));
					console.log($("*:eq("+prev+")"));
					console.log($("*:eq("+style[i].idx+")"));
					$("*:eq("+prev+")").css("display", style[i].css).attr("c3s2_hide",true);
					console.log("type: "+style[i].type+", idx: "+style[i].idx+", css: display "+style[i].css);
					break;
			}

		}
		// style.forEach(function(){
		// 	console.log("this:"+this);
		// 	console.log($.type(this));

		// 	var styleType = this.type;
		// 	console.log(styleType);
		// 	switch (styleType){
		// 		case "fsize":
		// 			$("*:eq("+this.idx+")").css("font-size", this.css);
		// 			console.log("type: fsize, idx: "+this.idx+", css: font-size "+this.css);
		// 			break;

		// 	}
		// 	console.log("applied:\n"+$("*:eq("+this.idx+")"));
		// });

		
	}
	if(!(savedCSS || savedTemplate || savedStyle)){
		console.log("Saved Style or Template is nothing or Failed loading");
	}

	shortcut.add("Shift+Enter", function(){
		console.log("shortcut");
		//$("head").append($("<script type='text/javascript' language='javascript' src='menu.js'>"));
	});
	
});
