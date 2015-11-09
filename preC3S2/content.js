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
	savedCSS = window.localStorage.getItem("c3s2")
	savedTemplate = window.localStorage.getItem("c3s2Template")
	if(savedCSS){
		$(myStyle).html(savedCSS);
		console.log("Saved Style applied");
	}
	if(savedTemplate){
		$(myTemplate).html(savedTemplate);
		console.log("Saved Template applied");
	}
	if(!(savedCSS || savedTemplate)){
		console.log("Saved Style or Template is nothing or Failed loading");
	}

	shortcut.add("Shift+Enter", function(){
		console.log("shortcut");
		//$("head").append($("<script type='text/javascript' language='javascript' src='menu.js'>"));
	});
});