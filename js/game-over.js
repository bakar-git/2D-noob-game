function home() {
    window.open("../game.html", "_self");
}

function restarts() {
    window.open("part1.html", "_self");
}

function game_over() {
    $("#game-over").show(300);
    $("body").css("cursor", "pointer");
    var gover_audio = $("<audio id=\"shot-audio\" src=\"../audio/game-over.mp3\">");
    $("#game").append(gover_audio);
    gover_audio.get(0).play();
}