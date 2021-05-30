var n_img = 3;
var corrente = 1;

function succ() {
    corrente++;

    if (corrente > n_img) {
        corrente = 1;
    }
    for (var i = n_img; i > 0; i--) {
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

function prec() {
    corrente--;
    if (corrente == 0) {
        corrente = n_img;
    }
    for (var i = n_img; i > 0; i--) {
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";

}
setInterval(succ, 5000);

function pop_init(my_content) {

    var pop_height = "25%";
    var pop_html = "<div class="
    pop - bg "></div><div class="
    pop - wrap "><p class="
    pop - x ">X</p><div class="
    pop - content "></div></div>";

    $("body").prepend(pop_html);

    $(".pop-wrap").animate({ "height": pop_height }, 250).click(function(event) {
        event.stopPropagation();
    });

    $(".pop-bg, .pop-x").bind("click", function() {
        pop_close();
    });

    $(".pop-content").text(my_content);

}