$(document).ready(function() {
$('#time').text(moment());
  $("#birthday").submit(function(e) {
    e.preventDefault();
    var bday = $("#bday").val(); //XXXX-XX-XX
  });
});
