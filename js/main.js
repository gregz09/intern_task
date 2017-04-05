$(document).ready(function(){
	//przesuwanie przycisku do obracania tekstu
	$('#form').hover(function(){
		var odwroc = $('#odwroc');
		odwroc.css("transform","translate(200px,0px)");
		odwroc.text("Animuję się");
	},function(){
        var odwroc = $('#odwroc');
		odwroc.css("transform","translate(0px,0px)");
		odwroc.text("Odwróć")
	});
	//sortowanie imion
	$("#sort").click(function(){
		var list = [];
		$('#list').children().each(function(){
			list.push($(this).text());
		});
		list.sort(function(a,b){return a.localeCompare(b);});
		$('#list').empty();
		for(var i=0;i<list.length;i++){
			$('#list').append('<li>'+list[i]+'</li>');
		}
	});
	//ustawianie nawigacji
	for (var i = 0; i < $('a').length; i++) {
		var top = i * 1;
		$('.nav').children().eq(i).css("top",top+"%");
	}
});