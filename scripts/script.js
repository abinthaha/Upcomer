function toggleView(e) {
    var x = document.getElementById('main_news_letter');
    x.style.display = "none";
    var y = document.getElementById('hidden_div');
    y.style.display = "block";
    y.style.position = "static";
    console.log(x);
}
function show_hidden_menu() {
    var hidden_menu = document.getElementById('hidden_header');
    if (hidden_menu.className == "hidden_header show") {
        hidden_menu.className = "hidden_header hide";
    }
    else {
        hidden_menu.className = "hidden_header show";
    }
}
function show_personalize() {
    var element = document.getElementById('#personalize');
    element.scrollIntoView();
}
