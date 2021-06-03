$(document).ready(function(){
    $("#accordionExample").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-angle-down fa-angle-up");
});
});
