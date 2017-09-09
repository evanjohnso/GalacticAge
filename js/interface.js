import { galacticConverter as converter}  from './../js/galacticConverter.js';

$(document).ready(function() {
$('#time').text(moment());
  $("#birthday").submit(function(e) {
    e.preventDefault();
    let bday = $("#bday").val(); //XXXX-XX-XX
    alert(bday);
    let date = Date.UTC(bday);
    alert(date.getUTCDate());
    // alert(date.getTime());
    // console.log(date);
    // console.log(date.getTime());
  });
});
