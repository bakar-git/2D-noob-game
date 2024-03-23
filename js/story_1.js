function type_effect() {
    var type_audio = $("<audio id=\"shot-audio\" src=\"../audio/type.mp3\">");
    $("body").append(type_audio);
    type_audio.get(0).play();
}
function skip(){
    window.open("part1.html","_self");
}
$(document).ready(function () {
    $(document).on("keypress", function(e){
        if(e.which == 32){
         skip();   
        }
    });
    $("#click").click(function () {
        $("#click").hide("fast");
        $("#bg").get(0).play();
        $(".image").css("width", window.innerWidth).css("height", window.innerHeight);
        $(".wrapper:nth(0)").show("fast");
        $(".pra").show(100);
        /////type effect
        var i = 0;
        var txt1 = "We were busy in routines& .It was a peaceful place $          People were enjoying beauty # .!!!!!"
        var speed = 100;

        function write1() {
            if (i < txt1.length) {
                if (txt1.charAt(i) == " ") {
                    document.getElementById("one-p").innerHTML += txt1.charAt(i);
                    i++;
                    setTimeout(write1, speed);
                } 
                else {
                    if (txt1.charAt(i) == "&") {
                        document.getElementById("one-p").innerHTML += "&#x1F612";
                    }
                    else if (txt1.charAt(i) == "$") {
                        document.getElementById("one-p").innerHTML += "&#x1F60D";
                    }
                    else if (txt1.charAt(i) == "#") {
                        document.getElementById("one-p").innerHTML += "&#x1F60E";
                    }
                    else document.getElementById("one-p").innerHTML += txt1.charAt(i);
                    i++;
                    type_effect();
                    setTimeout(write1, speed);
                }
            } else {
                $(".wrapper:nth(0)").hide("fast");
                $(".wrapper:nth(1)").show(10);
                i =0;
                write2();
            }
        }
        write1();
        var txt2 = "Every one is thus busy in such time & and           then some day a curse came from nowhere %.           At start it was a beautiful but than terror rose and stab this peace #.!!!!"

        function write2() {
            if (i < txt2.length) {
                if (txt2.charAt(i) == " ") {
                    document.getElementById("two-p").innerHTML += txt2.charAt(i);
                    i++;
                    setTimeout(write2, speed);
                } 
                else {
                   if (txt2.charAt(i) == "&") document.getElementById("two-p").innerHTML += "&#x1F61F";
                    else if(txt2.charAt(i) == "%") document.getElementById("two-p").innerHTML += "&#x1F615"; 
                    else if(txt2.charAt(i) == "#") document.getElementById("two-p").innerHTML += "&#x1F628"; 
                    else document.getElementById("two-p").innerHTML += txt2.charAt(i);
                    i++;
                    type_effect();
                    setTimeout(write2, speed);
                }
            } 
            else {
                $(".wrapper:nth(1)").hide("fast");
                $(".wrapper:nth(2)").show(10);
                i = 0;
                write3();
            }
        }
        var txt3 = "Some strange creatures came to land&.       They started to kill people and a war started%.        Many soldier lost lives#. !!!!!!"
        function write3() {
            if (i < txt3.length) {
                if (txt3.charAt(i) == " ") {
                    document.getElementById("three-p").innerHTML += txt3.charAt(i);
                    i++;
                    setTimeout(write3, speed);
                } 
                else {
                   if (txt3.charAt(i) == "&") document.getElementById("three-p").innerHTML += "&#x1F608";
                    else if(txt3.charAt(i) == "%") document.getElementById("three-p").innerHTML += "&#x1F61E"; 
                    else if(txt3.charAt(i) == "#") document.getElementById("three-p").innerHTML += "&#x1F622"; 
                    else document.getElementById("three-p").innerHTML += txt3.charAt(i);
                    i++;
                    type_effect();
                    setTimeout(write3, speed);
                }
            } 
            else {
                $(".wrapper:nth(2)").hide("fast");
                $(".wrapper:nth(3)").show(10);
                i = 0;
                write4();
            }
        }
        var txt4 = "There was death everywhere&.     Panic started among humans.      AKANDA city was empty, some of us ran away and some was killed.     Those things went to forest which is 40Km east from AKANDA% !!!!!!!!!!"
        function write4() {
            if (i < txt4.length) {
                if (txt4.charAt(i) == " ") {
                    document.getElementById("four-p").innerHTML += txt4.charAt(i);
                    i++;
                    setTimeout(write4, speed);
                } 
                else {
                   if (txt4.charAt(i) == "&") document.getElementById("four-p").innerHTML += "&#x1F60C";
                    else if(txt4.charAt(i) == "%") document.getElementById("four-p").innerHTML += "&#x1F613"; 
                    else if(txt4.charAt(i) == "#") document.getElementById("four-p").innerHTML += "&#x1F622"; 
                    else document.getElementById("four-p").innerHTML += txt4.charAt(i);
                    i++;
                    type_effect();
                    setTimeout(write4, speed);
                }
            } 
            else {
                $(".wrapper:nth(3)").hide("fast");
                $(".wrapper:nth(4)").show(10);
                i = 0;
                write5();
            }
        }
        var txt5 = "Government sent a group of highly trained persons&.     On their way, beast attacked them and killed them all.      Beast went to forest.     For people of AKANDA, last hope was lost% !!!!!!!!!!"
        function write5() {
            if (i < txt5.length) {
                if (txt5.charAt(i) == " ") {
                    document.getElementById("five-p").innerHTML += txt5.charAt(i);
                    i++;
                    setTimeout(write5, speed);
                } 
                else {
                   if (txt5.charAt(i) == "&") document.getElementById("five-p").innerHTML += "&#x1F620";
                    else if(txt5.charAt(i) == "%") document.getElementById("five-p").innerHTML += "&#x1F622	"; 
                    else document.getElementById("five-p").innerHTML += txt5.charAt(i);
                    i++;
                    type_effect();
                    setTimeout(write5, speed);
                }
            } 
            else {
                $(".wrapper:nth(4)").hide("fast");
                $(".wrapper:nth(5)").show(10);
                i = 0;
                write6();
            }
        }
        var txt6 = "Among the dead one highly trained police man survived& He went to forest alone and he is last hope for people of AKANDA  !!!!!!!!!!!!!!!!!!!!!!!!"
        function write6() {
            if (i < txt6.length) {
                if (txt6.charAt(i) == " ") {
                    document.getElementById("six-p").innerHTML += txt6.charAt(i);
                    i++;
                    setTimeout(write6, speed);
                } 
                else {
                   if (txt6.charAt(i) == "&") document.getElementById("six-p").innerHTML += "&#x1F607";
                    else if(txt6.charAt(i) == "%") document.getElementById("six-p").innerHTML += "&#x1F622	"; 
                    else document.getElementById("six-p").innerHTML += txt6.charAt(i);
                    i++;
                    type_effect();
                    setTimeout(write6, speed);
                }
            } 
            else {
                setTimeout(function(){
                    window.open("part1.html","_self");
                }, 300);
            }
        }
    });
});