$(document).ready(function () {
  function invalidUrl() {
    $(".response").removeClass("d-none");
    $("#response").html("Your URL is invalid");

    if ($("#resLink").val() != "") {
      $("#resLink").val(" ");
    }
  }

  $("#btnCopyUrl").click(function () {
    const copyTarget = document.getElementById("resLink");

    copyTarget.select();
    copyTarget.setSelectionRange(0, 99999);
    document.execCommand("copy");

    $(this).html("Copied");
    setTimeout(function () {
      $("#btncopyUrl").html("Copy");
      document.getElementById("form").reset();
    }, 1000);
  });

  $("#btnOpenUrl").click(function () {
    const openTarget = $("#resLink").val();

    window.open(openTarget, "_blank");
  });

  $("#form").submit(function (e) {
    e.preventDefault();

    let url = $("#oriLink").val();
    const pattern = "https://drive.google.com/file/d/";

    if (url.substr(0, pattern.length) == pattern) {
      const urlinfo = new URL(url);
      const path = urlinfo.pathname.split("/");

      if (path.length == "5" && path[4] == "view") {
        const resLink = "https://drive.google.com/uc?export=download&id=" + path[3];

        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://tinyurl.com/api-create.php?url=${resLink}`, true);
        xhr.send();
        xhr.onreadystatechange = function () {
          if (xhr.status == 200) {
            var respon = xhr.response;

            $("#resLink").val(respon);
            if (!$(".response").hasClass("d-none")) {
              $(".response").addClass("d-none");
            }
          } else {
            $(".response").removeClass("d-none");
            $("#response").html("Unexpected error, try again later");
          }
        };
      } else {
        invalidUrl();
      }
    } else {
      invalidUrl();
    }
  });
});
