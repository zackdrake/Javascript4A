for (let i = 0; i < document.querySelectorAll("p").length; i++) {
    var x = document.querySelectorAll("p")[i].innerText.length;

    document.querySelectorAll("p")[i].textContent = x + document.querySelectorAll("p")[i].textContent;
}
