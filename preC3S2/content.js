$(function(){
	$("body").wrapInner("<div id='wrapBody'></div>");
	//alert("ok");
	//if(window.localStorage){
	var savedCSS = null;
	if(savedCSS = window.localStorage.getItem("c3s2")){
		// var savedCSS = CSSJSON.toCSS(str);
		// console.log("Convert: JSONtoCSS");
		// console.log(savedCSS);
		// var savedStyle = $("<style type='text/css'>");
		// $("head").append(savedStyle);
		// $(savedStyle).html(savedCSS);
		// console.log("Saved Style applied");
		savedStyle = $("<style type='text/css'>");
		$("head").append(savedStyle);
		$(savedStyle).html(savedCSS);
		console.log("Saved Style applied");
	}else{
		console.log("Saved Style is nothing or Failed loading");
	}
	//}
});