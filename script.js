$(function() {

    /* Nav Toggle */
    let nav = $("nav");
    let navToggle = $("#navToggle");
    let regeneration = $("#regeneration");

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
        regeneration.toggleClass("show");
    });

});