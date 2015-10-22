function toggleView(e) {
    var x = document.getElementById('main_news_letter');
    x.className = "news_letter hide_noti";
    var y = document.getElementById('hidden_div');
    y.className = "news_letter show_noti";
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
    // window.scrollTo(0,0);
    var element = document.getElementById('#personalize');
    element.scrollIntoView();
    console.log('click');
}
