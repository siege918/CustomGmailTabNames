
function addEmail() {
    if (localStorage.getItem("emails") === null || localStorage.getItem("emails").toString() === "") {
        localStorage.setItem("emails", JSON.stringify(new Array()));
    }
    if (localStorage.getItem("nameReplacements") === null || localStorage.getItem("nameReplacements").toString() === "") {
        localStorage.setItem("nameReplacements", JSON.stringify(new Array()));
    }
    if (localStorage.getItem("tooltipReplacements") === null || localStorage.getItem("tooltipReplacements").toString() === "") {
        localStorage.setItem("tooltipReplacements", JSON.stringify(new Array()));
    }
    var emails = JSON.parse(localStorage["emails"]);
    var nameReplacements = JSON.parse(localStorage["nameReplacements"]);
    var tooltipReplacements = JSON.parse(localStorage["tooltipReplacements"]);

    var email = getValueByName("addingEmail");
    if (email != null && email != "") {
        var index = emails.length;
        emails[index] = email;
        nameReplacements[index] = { primary: "", social: "", promotions: "", updates: "", forums: "" };
        tooltipReplacements[index] = { primary: "", social: "", promotions: "", updates: "", forums: "" };

        var emailMenuOption = document.createElement("option");
        emailMenuOption.setAttribute("value", index);
        emailMenuOption.innerHTML = email;

        var emailSelect = getElementByName("email");
        emailSelect.appendChild(emailMenuOption);

        localStorage.setItem("emails", JSON.stringify(emails));
        localStorage.setItem("nameReplacements", JSON.stringify(nameReplacements));
        localStorage.setItem("tooltipReplacements", JSON.stringify(tooltipReplacements));
        getElementByName("addingEmail").value = "";
        $("#accordion").accordion("option", "active", 1);
    }
}
function saveChanges() {
    var elt = getElementByName("email");
    var index = elt.options[elt.selectedIndex].value;

    var objects = JSON.parse(localStorage["nameReplacements"]);
    var ob = objects[index];
    ob.primary = getValueByName("primary");
    ob.social = getValueByName("social");
    ob.promotions = getValueByName("promotions");
    ob.updates = getValueByName("updates");
    ob.forums = getValueByName("forums");

    localStorage["nameReplacements"] = JSON.stringify(objects);
}

function saveTTChanges() {
    var elt = getElementByName("email");
    var index = elt.options[elt.selectedIndex].value;

    var objects = JSON.parse(localStorage["tooltipReplacements"]);
    var ob = objects[index];
    ob.primary = getValueByName("primary");
    ob.social = getValueByName("social");
    ob.promotions = getValueByName("promotions");
    ob.updates = getValueByName("updates");
    ob.forums = getValueByName("forums");

    localStorage["tooltipReplacements"] = JSON.stringify(objects);
}

function getElementByName(name) {
    var selector = "[name=";
    selector = selector.concat(name, "]");
    return document.querySelector(selector);
}

function getValueByName(name) {
    return getElementByName(name).value;
}

document.querySelector('#add').addEventListener('click', addEmail);
document.querySelector('#saveName').addEventListener('click', saveChanges);
document.querySelector('#saveTT').addEventListener('click', saveTTChanges);

var emails = JSON.parse(localStorage["emails"]);

Array.prototype.forEach.call(emails, function (el, i) {
    var emailMenuOption = document.createElement("option");
    emailMenuOption.setAttribute("value", i);
    emailMenuOption.innerHTML = el;

    var emailSelect = getElementByName("email");
    emailSelect.appendChild(emailMenuOption);
});

if (emails.length > 0) {

    var elt = getElementByName("email");
    var index = elt.options[elt.selectedIndex].value;

    var objects = JSON.parse(localStorage["nameReplacements"]);
    var ob = objects[index];
    getElementByName("primary").value = ob.primary;
    getElementByName("social").value = ob.social;
    getElementByName("promotions").value = ob.promotions;
    getElementByName("updates").value = ob.updates;
    getElementByName("forums").value = ob.forums;

    var objects = JSON.parse(localStorage["tooltipReplacements"]);
    var ob = objects[index];
    getElementByName("primary").value = ob.primary;
    getElementByName("social").value = ob.social;
    getElementByName("promotions").value = ob.promotions;
    getElementByName("updates").value = ob.updates;
    getElementByName("forums").value = ob.forums;
}

$(function () {
    $("#accordion").accordion({ heightStyle: "content" });
});