var app = angular.module('myTask', []);
app.controller('myController', [function(){
	var self = this;
	self.outcome = "";
	//obracanie tekstu
	self.click = function(){
		self.outcome = "";
		var text = $('input').val();
		text = text.split(" ");
		for(var i=0;i<text.length;i++){
			text[i] = text[i].split("").reverse().join("");
			self.outcome += text[i] + ' ';
		}
	};
}]);