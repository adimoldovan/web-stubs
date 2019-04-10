$(document).click(function (event) {
    var text = "";
    if ($(event.target).is(".clickable")) {
        text = "You clicked " + $(event.target).attr("name");
    } else {
        text = "";
    }
    $("#result").text(text);
});