function submitBrowsers()
{
    var select = document.getElementById("select-browsers");
    var result = [];
        var options = select && select.options;
        var opt;

        for (var i=0, iLen=options.length; i<iLen; i++) {
            opt = options[i];

            if (opt.selected) {
            result.push(opt.text);
            }
        }

    $("#selected-browsers").text(result);
}