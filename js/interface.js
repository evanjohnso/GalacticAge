import { galacticConverter as converter}  from './../js/galacticConverter.js';

$(document).ready(function() {
  let myConverter;
  $("#birthday").submit(function(e) {
    e.preventDefault();
    let bday = $("#bday").val(); //XXXX-XX-XX format
    myConverter = new converter(bday);
    $("input:checkbox[name=planets]:checked").each(function() {
      let thisPlanet = $(this).val();
      $('#time').append(`<li>If you lived on ${thisPlanet}, you would be ${myConverter.calculateAgeByPlanet(thisPlanet)} years old!!`);
    });
    setTimeout(function() {
      $("#secondForm").fadeIn();
    }, 5000);
  });

  $("#secondForm").submit(function(e){
    e.preventDefault();
    var gender = $("input:radio[name=gender]:checked").val();
    var obese = $("input:radio[name=obese]:checked").val();
    let age = myConverter._calculateYears();
    let lifeLeft = myConverter.lifeExpectancy(age, gender, obese);
    if (lifeLeft === 0) {
      $("#average").text("Shit mate, this is probably the last hoorah, have a beer!");
    } else if (lifeLeft < 0) {
      $("#average").text(`You're doing great, you've lived about ${lifeLeft * -1} years longer than the average!`);
    } else if (lifeLeft >0) {
      $("#average").text(`Keep on trucking, you've got about ${lifeLeft} years before you're at the average age, in earth years!`);
    }
    $("#average").fadeIn(1000);
    $(this).hide();
  });
});
