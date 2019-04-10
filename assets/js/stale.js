$(document).ready(function () {
    createButton();
});

var i = 0;

function stale() {
    i++;
    createButton();
    if (i == 1) {
        $("#stale-button").text("Click me again. I dare you...");
    }
    else {
        $("#stale-button").text("Clicks: " + i);
    }
}

function createButton() {
    $("#stale-button").remove();
    $("#div2").html('<button type="button" class="btn btn-info" id="stale-button" onclick="stale()">Click me. I dare you...</button>');
}

