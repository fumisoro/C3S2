var template = $("<style id='template' type='text/css'>");
$(function() {

    $( "#menu" ).menu({
      items: "> :not(.ui-widget-header)"
    });
    $( "button" ).button().click(function() {

    });
  $("head").append(template);
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

  $("#none").click(function(){
    $(template).empty();
    console.log("reset template");
    save("");
  });

 });

var save = function(Css){
  var option = {
    c3s2Option: Css
  };
  console.log("save");
  chrome.storage.local.set(option, function(){
    console.log("Template saved:\n"+Css);
  });
};

var tempChange = function(back, size, color, link, visit){
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
  $(template).empty();
  $(template).html(templateCSS);
  console.log(templateCSS);
  save(templateCSS);
};

var tempChangeB7_9 = function(back, size, color){
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
  $(template).empty();
  $(template).html(templateCSS);
  console.log(templateCSS);
  save(templateCSS);
}

var tempChangeB13_14 = function(size){
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
       #wrapBody h1,h2,h3,h4,h5,h6 { font-weight: bold;}\n
       #wrapBody a:link { text-decoration: underline;}\n\
       #wrapBody a:visited { text-decoration: underline;}\n";
  $(template).empty();
  $(template).html(templateCSS);
  console.log(templateCSS);
  save(templateCSS);
}