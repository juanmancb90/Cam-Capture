$(document).ready(function () {
	function capture() {
		if (document.createElement("input").webkitSpeech == undefined) {
			alert("La entrada de voz no esta soportada en tu navegador.");
		}
		else {
			$('#vozset').css('backgorund','black');
		}
	}
});
