import { galacticConverter as converter}  from './../js/galacticConverter.js';

$(document).ready(function() {
  $("#birthday").submit(function(e) {
    e.preventDefault();
    let bday = $("#bday").val(); //XXXX-XX-XX format
    let myConverter = new converter(bday);
    $("input:checkbox[name=planets]:checked").each(function() {
      let thisPlanet = $(this).val();
      $('#time').append(`If you lived on ${thisPlanet}, you would be ${myConverter.calculateAgeByPlanet(thisPlanet)} years old!!` + "<br>");
      $("#secondForm").fadeIn(2000);
    });
  });
  $("#secondForm").submit(function(e){
    e.preventDefault();
    var gender = $("input:radio[name=gender]:checked").val();
    var obese = $("input:radio[name=obese]:checked").val();

  });
});
