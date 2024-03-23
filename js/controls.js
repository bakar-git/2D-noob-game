$(document).ready(function () {
    $("#clk").click(function () {
        $("#clk").hide("fast", function () {
            $("#whole").show("fast", function () {
                var im = localStorage.getItem("audiotime");
                $("#bg-audio").get(0).play();
                $("#bg-audio").get(0).currentTime = im;
                $("#back-text").on("mouseover", function () {
                    
                    $("#hover-aud").get(0).play();
                });
                $("#back-text").click(function () {
                    window.open("../game.html", "_self");
                });
            });
        });
    });

});