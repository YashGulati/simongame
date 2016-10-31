// js
$(document).ready(function(){
  $('#green').mousedown(function(){
    $('#green').css('background-color','#13ff7c');
  });
  $('#green').mouseup(function(){
    $('#green').css('background-color','#00994D');
  });

  $('#red').mousedown(function(){
    $('#red').css('background-color','#ff4c4c');
  });
  $('#red').mouseup(function(){
    $('#red').css('background-color','#9F0F17');
  });

  $('#blue').mousedown(function(){
    $('#blue').css('background-color','blue');
  });
  $('#blue').mouseup(function(){
    $('#blue').css('background-color','#004D99');
  });

  $('#yellow').mousedown(function(){
    $('#yellow').css('background-color','#ffff5F');
  });
  $('#yellow').mouseup(function(){
    $('#yellow').css('background-color','#FFFF00');
  });

});
