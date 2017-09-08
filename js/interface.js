$(document).ready(function() {
alert('page loaded');
$('#time').text(moment());
  $("#birthday").submit(function(e) {
    e.preventDefault();
    var bday = $("#bday").val();
    console.log(bday);
    alert('hey');
  });
});
