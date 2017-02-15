document.body.onload = init;
function init() {

    if (localStorage.getItem("token")) {
        var url = "http://localhost:8080/GitHubOAUTH/webresources/login?token=" + localStorage.getItem("token");
        $.get(url, function (data) {
            console.log(data);
            load(data);
        });
    } else if ($.url().param("code") !== undefined) {
        //hämtat code
        var url = "http://localhost:8080/GitHubOAUTH/webresources/token?code=" 
                + $.url().param("code");
        $.get(url, function (data) {
            console.log(data);
            localStorage.setItem("token", data);
        });
    }
}

function load(data) {
    document.getElementById("img").src = data.avatar_url;
    document.getElementById("loginName").innerHTML = "Welcome:" + data.login;
    document.getElementById("id").innerHTML = "your id:" + data.id;
}

var module = angular.module("metalApp", []);

