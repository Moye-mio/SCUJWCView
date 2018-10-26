var xmlrequest;
function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        xmlrequest = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        try {
            xmlrequest = new ActiveXObject("Msxm12.XMLHTTP");
        }
        catch (e) {
            try {
                xmlrequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) { }
        }
    }
}

function login() {
    createXMLHttpRequest();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var url = "check.py?user=" + username + "&password=" + password;
    xmlrequest.open("POST", url, true);
    xmlrequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlrequest.onreadystatechange = function () {
        if (xmlrequest.readyState == 4) {
            if (xmlrequest.status == 200) {
                var msg = xmlrequest.responseText;
                if (msg == '1') {
                    alert('用户名或密码错误!');
                    user = "";
                    password = "";
                    return false;
                }
                else {
                    window.location.href = "table.html";
                }
            }
        }
    }
    xmlrequest.send("user=" + user + "&password=" + password);
}