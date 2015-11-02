$(document).ready(function () {
	$('#btnVibrar').click(function (e) {
		e.preventDefault();
		if (window.navigator && window.navigator.vibrate) {
			navigator.vibrate(1000);
		} else{
			alert('Api de Vibrate no soportada');
		};
	});

	$('#btnVibrarDos').click(function (e) {
		e.preventDefault();
		if (window.navigator && window.navigator.vibrate) {
			navigator.vibrate([300, 200, 300, 200, 300, 200]);
		} else{
			alert('Api de Vibrate no soportada');
		};
	});

	$('#btnVibrarLong').click(function (e) {
		e.preventDefault();
		if (window.navigator && window.navigator.vibrate) {
			navigator.vibrate(5000);
		} else{
			alert('Api de Vibrate no soportada');
		};
	});

	$('#btnApagar').click(function (e) {
		e.preventDefault();
		if (window.navigator && window.navigator.vibrate) {
			navigator.vibrate(0);
		} else{
			alert('Api de Vibrate no soportada');
		};
	});
});
