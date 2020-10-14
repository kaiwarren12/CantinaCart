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