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
