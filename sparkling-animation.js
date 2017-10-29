$(document).ready(function() {


    $("h1").fadeIn(2000);
    $("#messy-code").fadeIn(3000);
    $(".supported-langs").fadeIn(5000);
    $("#submit-button").fadeIn(7000);
    $("#submit-button").css("display", "inline-block");

    $("#submit-button").click(function() {
      $("#pretty-code").html("");
      var messyCode = $("#messy-code").val();
      var prettyCode = processCode(messyCode);
      $("#pretty-code").append(prettyCode);
    })

    $(".supported-langs").click(function() {
      original_color = $(this).css("background-color");
      $(this).css("background-color", "yellow");
    })
});

function processCode(messyCode) {
  var prettyCode = "";
  for (character_index = 0; character_index < messyCode.length; character_index++) {
    prettyCode += messyCode.charAt(character_index);
    if (messyCode.charAt(character_index) == ":") {
      prettyCode += "<br>&nbsp&nbsp&nbsp&nbsp";
    }
  }
  return prettyCode;
}
