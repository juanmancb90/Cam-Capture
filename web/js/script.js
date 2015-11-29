$(document).ready(function () {
  //funciones de javascript
  window.URL= window.URL || window.webkitURL;
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia ||
  function() {
    alert('Navegador sin compactibilidad de .GetUserMedia()');
  };

  //datos cam
  window.dataVideo = {
    Stream: null,
    url: null
  };

  $('#botonIniciar').click(function (e){
    try {
      e.preventDefault();
      navigator.getUserMedia({
        audio: false,
        video: true
      },
      function(stream) {
        dataVideo.Stream = stream;
        dataVideo.url = window.URL.createObjectURL(stream);
        $('#cam').attr('src', dataVideo.url);
      },
      function () {
        alert('No se ha podido establecer comunicación con el navegador');
      });
    }
    catch(ex){
      alert(ex.toString());
      console.log(ex.toString());
    }
  });

  $('#botonDetener').click(function (e) {
    try {
      e.preventDefault();
      if (dataVideo.Stream) {
        dataVideo.Stream.stop();
        window.URL.revokeObjectURL(dataVideo.url);
      }
    }
    catch(ex) {
      alert(ex.toString());
      console.log(ex.toString());
    }
  });

  $('#botonFoto').click(function (e) {
    try {
      e.preventDefault();
      var objCam, objPhoto, objContex, w, h;
      objCam = $('#cam');
      objPhoto = $('#photo');
      w = objCam.width();
      h = objCam.height();
      objPhoto.attr({'width': w,
                     'height': h
      });
      objContex = objPhoto[0].getContext('2d');
      objContex.drawImage(objCam[0], 0, 0, w, h);
    }
    catch (ex) {
      alert(ex.toString());
      console.log(ex.toString());
    }
  });
});
