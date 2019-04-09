$(document).click(function (event) {
    if ($(event.target).is(".clickable")) {
        var text = "You clicked " + $(event.target).attr("name");

    } else {
        var text = "";
    }
    $("#result").text(text);
});