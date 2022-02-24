import $ from "jquery";

export default function about() {
  $(".option").on("click", function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
}
