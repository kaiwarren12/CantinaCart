<<<<<<< HEAD
$("#searchBtn").on("click", function (event) {
    event.preventDefault();

    var name = $("#nameInput").val();
    var queryUrl = "https://api.agify.io?name=" + name;
    var queryUrl2 = "https://api.nationalize.io?name=" + name;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

    $.ajax({
        url: queryUrl2,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
})
=======
// added this code for the result function in HTML (Merdad)
$(function () {
    $('[data-callout-hover-reveal]').hover(function () {
        $(this).find('.callout-footer').slideDown(250);
    }, function () {
        $(this).find('.callout-footer').slideUp(250);
    });
})
// added this function for converting voice to text(Merdad)
function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
        document.getElementById('speechToText').value = event.results[0][0].transcript;
    }
    recognition.start();
}
    // end of voice recognition(Merdad)
>>>>>>> 3d29a483166888389ecf3e514ba2e2a43fd95ce7
