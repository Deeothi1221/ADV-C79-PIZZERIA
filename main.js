menu_list_array = ["Chicken tandoori Pizza", "Veg supreme Pizza", "Panner Tikka Pizza", "Deluxe Veggie Pizza", "Veg Exortravaganza Pizza"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class = 'menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("diplay_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<div class="cards">' + '<img src="images/pizzaImg.png"/>' + menu_list_array[i]
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}