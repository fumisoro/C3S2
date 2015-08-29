/*
var btn = $('<button>').text('change')
$('body').append(btn)
$('body').on('click', 'button', function(){
    document.body.style.backgroundColor="red";
})

    //$(this).remove()

// $('body').remove();
*/

var div= $("<div id='C3S2menu'></div>");
var list = $("<ul>");
list.append("<li><button id='list1'>テンプレート１</button></li>");
list.append("<li><button id='list2'>テンプレート2</button></li>");
list.append("<li><button id='list3'>元に戻す</button></li>");
list.append("<textarea name='inputCSS' cols='200' rows='5', style='overflow:auto;'></textarea>")

div.append("<button id='closeMenu', style='position: absolute; right: 0px; top: 0px'>閉じる</button>")
div.append(list);
div.append("<button>change</button>");
$("body").append(div);
$('#C3S2menu').css({backgroundColor: '#ffd67b', position: 'fixed', width: window.outerWidth-16, top: window.outerHeight-300, border: 'solid', align: 'center', margin: 0});

$("#closeMenu").click(function(){
    $("#C3S2menu").remove();
});

//テンプレート機能
$("#list1").click(function(){
    document.body.style.backgroundColor="red";
    document.body.style.fontWeight='bold';
    document.body.style.fontStyle='italic';
    document.body.style.fontSize='24px';
    document.body.style.color="";
});

$("#list2").click(function(){
    document.body.style.backgroundColor="black";
    document.body.style.fontWeight="";
    document.body.style.fontStyle="";
    document.body.style.fontSize='24px';
    document.body.style.color='yellow';
});

$("#list3").click(function(){
    document.body.style.backgroundColor="";
    document.body.style.fontWeight="";
    document.body.style.fontStyle="";
    document.body.style.fontSize="";
    document.body.style.color="";
});

/*
function changeTemplate(num){
    switch (num){
	case 1:
	    document.body.style.backgroundColor="red";
	    document.body.style.fontWeight='bold';
	    document.body.style.fontStyle='italic';
	    document.body.style.fontSize='24px';
	    break;
    }
}
*/
