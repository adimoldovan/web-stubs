$(document).ready(function () {
    showButton(true);
});

function lazyButton() {
    var aWhile = Math.floor(Math.random() * 9000) + 3000;
    hideButton();
    setTimeout(showButton, aWhile);
}

function hideButton() {
    $("#lazy-container").addClass("animated shake");
    $("#lazy-container").html("");
    $("#lazy-page-heading").text("Please wait for the lazy button");
}

function showButton(first) {
    $("#lazy-container").html("<button class=\"btn btn-m btn-block btn-danger\" id=\"lazy-button\" onclick=\"lazyButton()\">I'm a lazy button.<br>If you click me I'll leave for a while and come back whenever I feel like it.</button>");
    if (first == true) {
        $("#lazy-page-heading").text("");
    }
    else {
        $("#lazy-page-heading").text("Thank you for waiting");
    }
}