(function($) {
	$(document).ready(function () {
		$('#btnStart').click(function (e) {
			try{
				e.preventDefault();
				startWebSocket();
			}
			catch(ex){
				alert("Error: "+ex.toString());
			}

		});
	});

	function startWebSocket(){
		if('WebSocket' in window){
			alert('Socket support in your browser');
			var ws = new WebSocket('wss://localhost:3000/echo');

			ws.onopen = function(){
				ws.send('Socket open and emit message');
				console.log('Message Send');
			};

			ws.onerror = function (error) {
				console.log('WebSocket Error ' + error.toString());
			};

			ws.onmessage = function (e) {
				var evt_received = e.data;
				console.log('Message received');
			};

			ws.onclose = function (){
				console.log('Close socket');
			};
		}
		else{
			alert('Socket not support in your browser');
		}
	}

	var wsUri = "ws://echo.websocket.org/";
	var output;
	function init()
	{
		output = document.getElementById("output"); testWebSocket();
	}
	function testWebSocket()
	{
		websocket = new WebSocket(wsUri);
		websocket.onopen = function(evt) { onOpen(evt) };
		websocket.onclose = function(evt) { onClose(evt) };
		websocket.onmessage = function(evt) { onMessage(evt) };
		websocket.onerror = function(evt) { onError(evt) };
	}

	function onOpen(evt)
	{
		writeToScreen("CONNECTED"); doSend("WebSocket rocks");
	}

	function onClose(evt)
	{
		writeToScreen("DISCONNECTED");
	}

	function onMessage(evt)
	{
		writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
		websocket.close();
	}

	function onError(evt)
	{
		writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
	}

	function doSend(message)
	{
		writeToScreen("SENT: " + message);
		websocket.send(message);
	}

	function writeToScreen(message)
	{ var pre = document.createElement("p");
	pre.style.wordWrap = "break-word";
	pre.innerHTML = message;
	output.appendChild(pre);
	}

	window.addEventListener("load", init, false);
})(jQuery);
